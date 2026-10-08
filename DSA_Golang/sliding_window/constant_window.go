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

// 1456 brute force
func MaxVowels(s string, k int) int {
	maxVowels := 0

	for i := 0; i <= len(s)-k; i++ {
		count := 0
		for j := i; j < k+i; j++ {
			if s[j] == 'a' || s[j] == 'e' || s[j] == 'i' || s[j] == 'o' || s[j] == 'u' {
				count++
			}
		}

		maxVowels = max(maxVowels, count)
	}

	return maxVowels
}

// 1456 better solution also optimal solution
func MaxVowels1(s string, k int) int {
	maxVowels := 0
	count := 0
	l := 0
	r := k - 1

	/*
	   Extract repeated vowel-checking logic into a helper function
	   to improve code readability and maintainability.
	*/

	for i := 0; i <= r; i++ {
		if s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' {
			count++
		}
	}

	maxVowels = count

	for r < len(s)-1 {
		if s[l] == 'a' || s[l] == 'e' || s[l] == 'i' || s[l] == 'o' || s[l] == 'u' {
			count--
		}

		l++
		r++

		if s[r] == 'a' || s[r] == 'e' || s[r] == 'i' || s[r] == 'o' || s[r] == 'u' {
			count++
		}

		maxVowels = max(maxVowels, count)
	}

	return maxVowels
}

// 1052. Grumpy Bookstore Owner - brute force
func MaxSatisfied(customers []int, grumpy []int, minutes int) int {
	maxSum := 0
	satisfied := 0
	for i := 0; i < len(customers); i++ {
		sum := 0

		if grumpy[i] == 0 {
			satisfied += customers[i]
		}

		for j := i; j < minutes+i && j < len(customers); j++ {
			if grumpy[j] == 1 {
				sum += customers[j]
			}
		}

		maxSum = max(maxSum, sum)
	}

	return maxSum + satisfied
}

// 1052 better solution
func MaxSatisfied1(customers []int, grumpy []int, minutes int) int {
	maxSum := 0
	sum := 0
	satisfied := 0

	l := 0
	r := minutes - 1

	for i := 0; i <= r; i++ {
		if grumpy[i] == 1 {
			sum += customers[i]
		} else {
			satisfied += customers[i]
		}
	}

	maxSum = sum

	for r < len(customers)-1 {
		if grumpy[l] == 1 {
			sum -= customers[l]
		}

		l++
		r++

		if grumpy[r] == 1 {
			sum += customers[r]
		} else {
			satisfied += customers[r]
		}

		maxSum = max(maxSum, sum)
	}

	return satisfied + maxSum
}

// 1423. Maximum Points You Can Obtain from Cards
func MaxScore(cardPoints []int, k int) int {
	maxScore := 0

	lSum := 0
	rSum := 0
	for i := 0; i < k; i++ {
		lSum += cardPoints[i]
	}

	maxScore = lSum

	rIndex := len(cardPoints) - 1
	for j := k - 1; j >= 0; j-- {
		lSum -= cardPoints[j]
		rSum += cardPoints[rIndex]
		rIndex--

		maxScore = max(maxScore, lSum+rSum)
	}

	return maxScore
}
