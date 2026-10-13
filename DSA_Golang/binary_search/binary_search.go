package binarysearch

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
