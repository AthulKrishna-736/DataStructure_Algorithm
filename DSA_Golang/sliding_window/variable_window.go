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

// 424. Longest Repeating Character Replacement
func characterReplacement(s string, k int) int {
	maxLength := 0

	for i := 0; i < len(s); i++ {
		hashArr := [26]int{}
		maxFreq := 0

		for j := i; j < len(s); j++ {
			hashArr[s[j]-'A']++

			maxFreq = max(maxFreq, hashArr[s[j]-'A'])

			changes := (j - i + 1) - maxFreq

			if changes <= k {
				maxLength = max(maxLength, j-i+1)
			} else {
				break
			}
		}
	}

	return maxLength
}

// 424 better solution
func characterReplacement1(s string, k int) int {
	maxLength := 0
	hashArr := [26]int{}
	maxFreq := 0

	l := 0
	r := 0

	for r < len(s) {
		hashArr[s[r]-'A']++

		maxFreq = max(maxFreq, hashArr[s[r]-'A'])

		for (r-l+1)-maxFreq > k {
			hashArr[s[l]-'A']--
			l++
		}

		if (r-l+1)-maxFreq <= k {
			maxLength = max(maxLength, r-l+1)
		}
		r++
	}

	return maxLength
}

// 1358. Number of Substrings Containing All Three Characters
func numberOfSubstrings(s string) int {
	count := 0

	s1 := [3]byte{'a', 'b', 'c'}

	for i := 0; i < len(s); i++ {
		s2 := [3]byte{}

		for j := i; j < len(s); j++ {
			s2[s[j]-'a'] = s[j]

			if s1 == s2 {
				count++
			}
		}
	}

	return count
}

// 1358 - better solution
func numberOfSubstrings1(s string) int {
	count := 0
	str1 := [3]int{}
	l := 0
	r := 0

	for r < len(s) {
		str1[s[r]-'a']++

		for str1[0] > 0 && str1[1] > 0 && str1[2] > 0 {
			count += len(s) - r

			str1[s[l]-'a']--
			l++
		}

		r++
	}

	return count
}

// 930. Binary Subarrays With Sum - brute force
func numSubarraysWithSum(nums []int, goal int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		sum := 0
		for j := i; j < len(nums); j++ {
			sum += nums[j]

			if sum > goal {
				break
			}

			if sum == goal {
				count++
			}
		}
	}

	return count
}

func helper930(nums []int, goal int) int {
	if goal < 0 {
		return 0
	}

	count := 0
	sum := 0
	l := 0
	r := 0

	for r < len(nums) {
		sum += nums[r]

		for sum > goal {
			sum -= nums[l]
			l++
		}

		count += r - l + 1

		r++
	}

	return count
}

// 930 - better solution
func numSubarraysWithSum1(nums []int, goal int) int {
	return helper930(nums, goal) - helper930(nums, goal-1)
}

// 1248. Count Number of Nice Subarrays - brute force
func numberOfSubarrays(nums []int, k int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		oddCount := 0
		for j := i; j < len(nums); j++ {
			if nums[j]%2 != 0 {
				oddCount++
			}

			if oddCount > k {
				break
			}

			if oddCount == k {
				count++
			}
		}
	}

	return count
}

func helper1248(nums []int, k int) int {
	if k < 0 {
		return 0
	}

	count := 0
	oddCount := 0

	l := 0
	r := 0

	for r < len(nums) {
		if nums[r]%2 != 0 {
			oddCount++
		}

		for oddCount > k {
			if nums[l]%2 != 0 {
				oddCount--
			}
			l++
		}

		count += r - l + 1
		r++
	}

	return count
}

// 1248 - better solution
func numberOfSubarrays1(nums []int, k int) int {
	return helper1248(nums, k) - helper1248(nums, k-1)
}

// 992. Subarrays with K Different Integers - brute force
func subarraysWithKDistinct(nums []int, k int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		hashMap := make(map[int]int)
		for j := i; j < len(nums); j++ {
			hashMap[nums[j]]++

			if len(hashMap) > k {
				break
			}

			if len(hashMap) == k {
				count++
			}
		}
	}

	return count
}

func helper992(nums []int, k int) int {
	count := 0
	hashMap := make(map[int]int)

	l := 0
	r := 0

	for r < len(nums) {
		hashMap[nums[r]]++

		for len(hashMap) > k {
			hashMap[nums[l]]--

			if val := hashMap[nums[l]]; val == 0 {
				delete(hashMap, nums[l])
			}

			l++
		}

		count += r - l + 1
		r++
	}

	return count
}

// 992 - better solution
func subarraysWithKDistinct1(nums []int, k int) int {
	return helper992(nums, k) - helper992(nums, k-1)
}

// 76. Minimum Window Substring
func minWindow(s string, t string) string {
	hashMap := make(map[byte]int, 52)
	l := 0
	r := 0
	minLength := len(s) + 1
	sIndex := -1
	count := 0

	for i := 0; i < len(t); i++ {
		hashMap[t[i]]++
	}

	for r < len(s) {
		if val := hashMap[s[r]]; val > 0 {
			count++
		}
		hashMap[s[r]]--

		for count == len(t) {
			if r-l+1 < minLength {
				minLength = r - l + 1
				sIndex = l
			}

			hashMap[s[l]]++
			if hashMap[s[l]] > 0 {
				count--
			}
			l++
		}
		r++
	}

	if sIndex == -1 {
		return ""
	}

	return s[sIndex : sIndex+minLength]
}

// 1763. Longest Nice Substring
func helper1763(set map[byte]struct{}) bool {
	for char := range set {
		if char >= 'a' && char <= 'z' {
			if _, ok := set[char-'a'+'A']; !ok {
				return false
			}
		} else if char >= 'A' && char <= 'Z' {
			if _, ok := set[char-'A'+'a']; !ok {
				return false
			}
		}
	}

	return true
}

func longestNiceSubstring(s string) string {
	sIndex := -1
	maxLength := 0

	for i := 0; i < len(s); i++ {
		hashSet := make(map[byte]struct{}, 52)
		for j := i; j < len(s); j++ {
			hashSet[s[j]] = struct{}{}

			if helper1763(hashSet) {
				if j-i+1 > maxLength {
					maxLength = max(maxLength, j-i+1)
					sIndex = i
				}
			}
		}
	}

	if maxLength == 0 {
		return ""
	}

	return s[sIndex : sIndex+maxLength]
}

// 2379. Minimum Recolors to Get K Consecutive Black Blocks
func minimumRecolors(blocks string, k int) int {
	minCount := k + 1

	for i := 0; i < len(blocks); i++ {
		count := 0
		for j := i; j < len(blocks); j++ {
			if blocks[j] == 'W' {
				count++
			}

			if j-i+1 > k {
				break
			}

			if j-i+1 == k {
				minCount = min(minCount, count)
			}
		}
	}

	return minCount
}

// 2379 better solution
func minimumRecolors1(blocks string, k int) int {
	minCount := k + 1
	count := 0

	l := 0
	r := 0

	for r < len(blocks) {
		if blocks[r] == 'W' {
			count++
		}

		for r-l+1 > k {
			if blocks[l] == 'W' {
				count--
			}

			l++
		}

		if r-l+1 == k {
			minCount = min(minCount, count)
		}

		r++
	}

	return minCount
}
