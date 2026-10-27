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
