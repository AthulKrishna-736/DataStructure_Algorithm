package binarysearch

import "math"

func BinarySearch(nums []int, target int) bool {
	left := 0
	right := len(nums) - 1

	for left < right {
		mid := left + (right-left)/2

		if nums[mid] == target {
			return true
		} else if target > nums[mid] {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return false
}

// 35 search insert
func searchInsert(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := left + (right-left)/2

		if target == nums[mid] {
			return mid
		} else if target > nums[mid] {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return left
}

// 34. Find First and Last Position of Element in Sorted Array
func searchRange(nums []int, target int) []int {
	first := -1
	last := -1

	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := left + (right-left)/2

		if nums[mid] == target {
			first = mid
			right = mid - 1
		} else if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	if first == -1 {
		return []int{-1, -1}
	}

	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		if nums[mid] == target {
			last = mid
			low = mid + 1
		} else if nums[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return []int{first, last}
}

// 33. Search in Rotated Sorted Array
func search(nums []int, target int) int {
	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		if nums[mid] == target {
			return mid
		}

		if nums[low] <= nums[mid] {
			if nums[low] <= target && target <= nums[mid] {
				high = mid - 1
			} else {
				low = mid + 1
			}

		} else {
			if nums[mid] <= target && target <= nums[high] {
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
	}

	return -1
}

// 81. Search in Rotated Sorted Array 2
func searchRotated(nums []int, target int) bool {
	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		if nums[mid] == target {
			return true
		}

		if nums[low] == nums[mid] && nums[mid] == nums[high] {
			low++
			high--

			continue
		}

		if nums[low] <= nums[mid] {
			if nums[low] <= target && target <= nums[mid] {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else {
			if nums[mid] <= target && target <= nums[high] {
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
	}

	return false
}

// 153. Find Minimum in Rotated Sorted Array
func findMin(nums []int) int {
	minVal := math.MaxInt

	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		if nums[low] <= nums[mid] {
			minVal = min(minVal, nums[low])
			low = mid + 1
		} else {
			high = mid - 1
			minVal = min(minVal, nums[mid])
		}
	}

	return minVal
}

// 154. Find Minimum in Rotated Sorted Array II
func findMin1(nums []int) int {
	minVal := math.MaxInt

	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		if nums[low] == nums[mid] && nums[mid] == nums[high] {
			minVal = min(minVal, nums[mid])
			low++
			high--
			continue
		}

		if nums[low] <= nums[mid] {
			minVal = min(minVal, nums[low])
			low = mid + 1
		} else {
			minVal = min(minVal, nums[mid])
			high = mid - 1
		}
	}

	return minVal
}

func countRotations(nums []int) int {
	count := 0
	min := math.MaxInt

	low := 0
	high := len(nums) - 1

	for low <= high {
		mid := low + (high-low)/2

		// if fully sorted array check
		if nums[low] <= nums[high] {
			if nums[low] < min {
				min = nums[low]
				count = low
			}
			break
		}

		if nums[low] <= nums[mid] {
			if nums[low] < min {
				min = nums[low]
				count = low
			}

			low = mid + 1
		} else {
			if nums[mid] < min {
				min = nums[mid]
				count = mid
			}

			high = mid - 1
		}
	}

	return count
}

func singleNonDuplicate(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}

	if nums[0] != nums[1] {
		return nums[0]
	}

	if nums[n-1] != nums[n-2] {
		return nums[n-1]
	}

	low := 1
	high := n - 2

	for low <= high {
		mid := low + (high-low)/2

		if nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1] {
			return nums[mid]
		}

		if mid%2 == 1 && nums[mid] == nums[mid-1] || mid%2 == 0 && nums[mid] == nums[mid+1] {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

// 162. Find Peak Element
func findPeakElement(nums []int) int {
	n := len(nums)

	if n == 1 {
		return 0
	}

	if nums[0] > nums[1] {
		return 0
	}

	if nums[n-1] > nums[n-2] {
		return n - 1
	}

	low := 1
	high := n - 2

	for low <= high {
		mid := low + (high-low)/2

		if nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1] {
			return mid
		}

		if nums[mid] > nums[mid-1] {
			low = mid + 1
		} else if nums[mid] > nums[mid+1] {
			high = mid - 1
		} else {
			high = mid - 1 // either go left or right
		}
	}

	return -1
}

// 69. Sqrt(x)
func mySqrt(x int) int {
	low := 0
	high := x

	for low <= high {
		mid := low + (high-low)/2

		if mid*mid <= x {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return high
}

func helperRoot(mid int, n int) int {
	totalRoot := 1
	for i := 1; i <= n; i++ {
		totalRoot *= mid
	}

	return totalRoot
}

// find N-th root of integer
func findNthRoot(m int, n int) int {
	low := 1
	high := m

	for low <= high {
		mid := low + (high-low)/2

		res := helperRoot(mid, n)
		if res == m {
			return mid
		}

		if res < m {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

func helper875_1(arr []int) int {
	maxVal := math.MinInt

	for i := 0; i < len(arr); i++ {
		maxVal = max(maxVal, arr[i])
	}

	return maxVal
}

func helper875_2(piles []int, bannana int) int {
	totalHrs := 0

	for i := 0; i < len(piles); i++ {
		totalHrs += int(math.Ceil(float64(piles[i]) / float64(bannana)))
	}

	return totalHrs
}

// 875. Koko Eating Bananas
func minEatingSpeed(piles []int, h int) int {
	low := 1
	high := helper875_1(piles)

	for low <= high {
		mid := low + (high-low)/2

		res := helper875_2(piles, mid)

		if res <= h {
			high = mid - 1
		} else {
			low = mid + 1
		}

	}

	return low
}

func helper1482_1(bloomDay []int) (int, int) {
	maxDays := bloomDay[0]
	minDays := bloomDay[0]

	for i := 0; i < len(bloomDay); i++ {
		maxDays = max(maxDays, bloomDay[i])
		minDays = min(minDays, bloomDay[i])
	}

	return minDays, maxDays
}

func helper1482_2(bloomDay []int, day int, m int, k int) bool {
	totalBouquets := 0
	count := 0

	for i := 0; i < len(bloomDay); i++ {
		if bloomDay[i] <= day {
			count++
		} else {
			totalBouquets += count / k
			count = 0
		}
	}

	totalBouquets += count / k

	if totalBouquets >= m {
		return true
	}

	return false
}

// 1482. Minimum Number of Days to Make m Bouquets
func minDays(bloomDay []int, m int, k int) int {
	low, high := helper1482_1(bloomDay)

	if m*k > len(bloomDay) {
		return -1
	}

	for low <= high {
		mid := low + (high-low)/2

		if helper1482_2(bloomDay, mid, m, k) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return low
}
