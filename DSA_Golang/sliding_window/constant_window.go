package slidingwindow

import "fmt"

func ConstantWindow(nums []int, k int) {
	l := 0
	r := k - 1

	maxSum := 0
	sum := 0
	for i := 0; i <= r; i++ {
		sum += nums[i]
	}

	maxSum = sum

	fmt.Println("first window sum: ", maxSum)

	for r < len(nums)-1 {
		sum -= nums[l]
		l++
		r++
		sum += nums[r]

		if sum > maxSum {
			maxSum = sum
		}
	}

	fmt.Println("highest sum: ", maxSum)
}

// brute force approach
func FindMaxAverage(nums []int, k int) {
	maxAvg := 0.0
	for i := 0; i <= len(nums)-k; i++ {
		sum := 0
		for j := i; j < k+i; j++ {
			sum += nums[j]
		}

		maxAvg = max(maxAvg, float64(sum)/float64(k))
	}

	fmt.Println("max avg: ", maxAvg)
}

// better solution (pattern wise approach)
func FindMaxAverage1(nums []int, k int) {
	maxAvg := 0.0
	sum := 0
	l := 0
	r := k - 1

	for i := 0; i <= r; i++ {
		sum += nums[i]
	}

	maxAvg = max(maxAvg, float64(sum)/float64(k))

	for r < len(nums)-1 {
		sum -= nums[l]
		l++
		r++
		sum += nums[r]

		maxAvg = max(maxAvg, float64(sum)/float64(k))
	}

	fmt.Println("max avg: ", maxAvg)
}

// slightly optimised
func FindMaxAverage2(nums []int, k int) {
	maxSum := 0
	sum := 0
	l := 0
	r := k - 1

	for i := 0; i <= r; i++ {
		sum += nums[i]
	}

	maxSum = max(maxSum, sum)

	for r < len(nums)-1 {
		sum -= nums[l]
		l++
		r++
		sum += nums[r]

		maxSum = max(maxSum, sum)
	}

	fmt.Println("max avg: ", float64(maxSum)/float64(k))
}

// 1343 bruteforce
func NumOfSubarrays(arr []int, k int, threshold int) int {
	count := 0

	for i := 0; i <= len(arr)-k; i++ {
		sum := 0
		for j := i; j < k+i; j++ {
			sum += arr[j]
		}

		if float64(sum)/float64(k) >= float64(threshold) {
			count++
		}
	}

	return count
}

// 1343 better solution
func NumOfSubarrays1(arr []int, k int, threshold int) int {
	count := 0
	sum := 0
	l := 0
	r := k - 1

	for i := 0; i <= r; i++ {
		sum += arr[i]
	}

	if float64(sum)/float64(k) >= float64(threshold) {
		count++
	}

	// optimal approach
	/*
		Math concept: Multiplication Property of Inequality
		sum/k >= threshold
		Since k > 0, multiply both sides by k:
		(sum/k)*k >= threshold*k
		sum >= k*threshold

		if sum >= k*threshold {
			count++
		}
	*/

	for r < len(arr)-1 {
		sum -= arr[l]
		l++
		r++
		sum += arr[r]

		if float64(sum)/float64(k) >= float64(threshold) {
			count++
		}
	}

	return count
}
