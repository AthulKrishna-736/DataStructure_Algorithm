package slidingwindow

import "fmt"

func VariableWindow(nums []int, k int) {
	maxLength := 0

	for i := 0; i < len(nums); i++ {
		sum := 0
		for j := i; j < len(nums); j++ {
			sum += nums[j]

			if sum <= k {
				maxLength = max(maxLength, j-i+1)
				fmt.Println("less sub array: ", nums[i:j+1], ", maxlength : ", maxLength)
			} else if sum > k {
				fmt.Println("sub array: ", nums[i:j+1], ", maxlength : ", maxLength)
				break
			}
		}
	}
}
