package slidingwindow

import "fmt"

func VariableWindowBruteForce(nums []int, k int) {
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

func VariableWindowBetterSolution(nums []int, k int) {
	l := 0
	r := 0
	sum := 0
	maxLength := 0

	for r < len(nums) {
		sum += nums[r]

		for sum > k {
			sum -= nums[l]
			l++
		}

		if sum <= k {
			maxLength = max(maxLength, r-l+1)
			r++
		}
	}
	fmt.Println("max length: ", maxLength)
}

// 3. Longest Substring Without Repeating Characters
func lengthOfLongestSubstring(s string) int {
	maxLength := 0

	for i := 0; i < len(s); i++ {
		hashSet := make(map[byte]struct{})
		for j := i; j < len(s); j++ {
			if _, ok := hashSet[s[j]]; ok {
				break
			}

			hashSet[s[j]] = struct{}{}
			maxLength = max(maxLength, j-i+1)
		}
	}

	return maxLength
}

// 3. better solution
func lengthOfLongestSubstring1(s string) int {
	maxLength := 0
	hashSet := make(map[byte]struct{})

	l := 0
	r := 0

	for r < len(s) {
		for {
			if _, exist := hashSet[s[r]]; !exist {
				break
			}

			delete(hashSet, s[l])
			l++
		}

		hashSet[s[r]] = struct{}{}
		maxLength = max(maxLength, r-l+1)
		r++
	}

	return maxLength
}
