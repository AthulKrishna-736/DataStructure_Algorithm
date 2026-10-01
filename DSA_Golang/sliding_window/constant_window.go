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
