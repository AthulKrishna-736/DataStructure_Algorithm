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

// 209. Minimum Size Subarray Sum
func minSubArrayLen(target int, nums []int) int {
	minLength := len(nums)

	for i := 0; i < len(nums); i++ {
		sum := 0
		for j := i; j < len(nums); j++ {
			sum += nums[j]

			if sum >= target {
				minLength = min(minLength, j-i+1)
				break
			}

			if i == 0 && j == len(nums)-1 && sum < target {
				return 0
			}
		}
	}

	return minLength
}

// 209 better solution
func minSubArrayLen1(target int, nums []int) int {
	minLength := len(nums) + 1
	sum := 0
	l := 0
	r := 0

	for r < len(nums) {
		sum += nums[r]

		if sum >= target {
			minLength = min(minLength, r-l+1)

			for {
				if sum < target {
					break
				}

				sum -= nums[l]
				l++

				if sum >= target {
					minLength = min(minLength, r-l+1)
				}
			}
		}

		r++
	}

	if minLength > len(nums) {
		return 0
	}

	return minLength
}

// 1004. Max Consecutive Ones III
func longestOnes(nums []int, k int) int {
	maxLength := 0

	for i := 0; i < len(nums); i++ {
		count := 0
		for j := i; j < len(nums); j++ {
			if nums[j] == 0 {
				count++
			}

			if count <= k {
				maxLength = max(maxLength, j-i+1)
			} else {
				break
			}
		}
	}

	return maxLength
}

// 1004 better solution
func longestOnes1(nums []int, k int) int {
	maxLength := 0
	count := 0
	l := 0
	r := 0

	for r < len(nums) {
		if nums[r] == 0 {
			count++
		}

		if count <= k {
			maxLength = max(maxLength, r-l+1)
		} else {
			for {
				if count <= k {
					break
				}

				if nums[l] == 0 {
					count--
				}
				l++
			}
		}

		r++
	}

	return maxLength
}

// 904. Fruit Into Baskets
func totalFruit(fruits []int) int {
	maxLength := 0
	hashMap := make(map[int]int)

	l := 0
	r := 0

	for r < len(fruits) {
		hashMap[fruits[r]]++

		if len(hashMap) > 2 {
			for {
				if len(hashMap) <= 2 {
					break
				}

				hashMap[fruits[l]]--
				if val := hashMap[fruits[l]]; val == 0 {
					delete(hashMap, fruits[l])
				}

				l++
			}
		}

		maxLength = max(maxLength, r-l+1)
		r++
	}

	return maxLength
}

// 713. Subarray Product Less Than K - brute force
func numSubarrayProductLessThanK(nums []int, k int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		product := 1
		for j := i; j < len(nums); j++ {
			product *= nums[j]

			if product >= k {
				break
			}

			count++
		}
	}

	return count
}

func numSubarrayProductLessThanK1(nums []int, k int) int {
	if k <= 1 {
		return 0
	}

	count := 0
	product := 1

	l := 0
	r := 0

	for r < len(nums) {
		product *= nums[r]

		for product >= k {
			product /= nums[l]
			l++
		}

		count += r - l + 1
		r++
	}

	return count
}
