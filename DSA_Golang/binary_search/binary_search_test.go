package binarysearch

import (
	"fmt"
	"testing"
)

func TestBinarySearch(t *testing.T) {
	input := []int{10, 20, 30, 40, 50, 60, 70}
	target := []int{20, 60, 100}

	expected := []bool{true, true, false}

	for i := range target {
		output := BinarySearch(input, target[i])

		if output != expected[i] {
			t.Errorf("\nExpected: %t\nOutput: %t", expected[i], output)
		}
	}
}

func Test35(t *testing.T) {
	input := [][]int{
		{1, 3, 5, 6},
		{1, 3, 5, 6},
		{1, 3, 5, 6},
	}
	target := []int{5, 2, 7}
	expected := []int{2, 1, 4}

	for i := range target {
		output := searchInsert(input[i], target[i])

		if output != expected[i] {
			t.Errorf("\nExpected: %d\nOutput: %d", expected[i], output)
		}
	}

}

func Test34(t *testing.T) {
	input := [][]int{
		{5, 7, 7, 8, 8, 10},
		{5, 7, 7, 8, 8, 10},
		{},
	}
	target := []int{8, 6, 0}
	expected := [][]int{
		{3, 4},
		{-1, -1},
		{-1, -1},
	}

	for i := range target {
		output := searchRange(input[i], target[i])

		if output[0] != expected[i][0] || output[1] != expected[i][1] {
			t.Errorf("\nExpected: %v\nOutput: %v", expected[i], output)
		}
	}
}

func Test33(t *testing.T) {
	input := [][]int{
		{4, 5, 6, 7, 0, 1, 2},
		{4, 5, 6, 7, 0, 1, 2},
		{1},
		{3, 1},
		{1, 3},
		{},
	}
	target := []int{0, 3, 1, 1, 3, 0}
	expected := []int{4, -1, 0, 1, 1, -1}

	for i := range target {
		output := search(input[i], target[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nTarget: %d\nExpected: %d\nOutput: %d",
				input[i], target[i], expected[i], output,
			)
		}
	}
}

func Test81(t *testing.T) {
	input := [][]int{
		{2, 5, 6, 0, 0, 1, 2},
		{2, 5, 6, 0, 0, 1, 2},
		{1, 0, 1, 1, 1},
		{1, 1, 1, 1, 1},
		{},
	}
	target := []int{0, 3, 0, 1, 0}
	expected := []bool{true, false, true, true, false}

	for i := range target {
		output := searchRotated(input[i], target[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nTarget: %d\nExpected: %v\nOutput: %v",
				input[i], target[i], expected[i], output,
			)
		}
	}
}

func Test153(t *testing.T) {
	input := [][]int{
		{3, 4, 5, 1, 2},
		{4, 5, 6, 7, 0, 1, 2},
		{11, 13, 15, 17},
		{2, 1},
		{1},
		{5, 1, 2, 3, 4},
		{3, 1, 2},
	}

	expected := []int{
		1,
		0,
		11,
		1,
		1,
		1,
		1,
	}

	for i := range input {
		output := findMin(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test154(t *testing.T) {
	input := [][]int{
		// Duplicate-heavy arrays
		{2, 2, 2, 2, 0, 1, 2},
		{3, 3, 3, 1, 3, 3},
		{1, 1, 2, 1},
		{10, 10, 10, 5, 10},
		{4, 4, 4, 4, 1, 4, 4},

		// Different rotation positions
		{2, 3, 4, 5, 1},
		{6, 7, 1, 2, 3, 4, 5},
		{5, 1, 2, 3, 4},
		{2, 3, 1},
		{3, 1, 2},

		// Minimum occurs multiple times
		{1, 1, 1, 2, 1},
		{0, 0, 1, 0, 0},
		{2, 2, 3, 1, 1, 2},
		{5, 5, 1, 1, 2, 5},

		// Already sorted, with duplicates
		{1, 1, 2, 2, 3, 3},
		{0, 0, 0, 1, 2, 2},
		{1, 2, 2, 2, 3, 3},

		// Larger arrays with many duplicates
		{4, 4, 4, 4, 4, 1, 2, 3, 4},
		{3, 3, 3, 3, 3, 1, 2, 3},
		{2, 2, 2, 2, 2, 2, 1, 2},
	}

	expected := []int{
		0,
		1,
		1,
		5,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
	}

	for i := range input {
		output := findMin1(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func TestCountRotations(t *testing.T) {
	input := [][]int{
		{15, 18, 2, 3, 6, 12},
		{7, 9, 11, 12, 5},
		{1, 2, 3, 4, 5},
		{2, 3, 4, 5, 1},
		{4, 5, 1, 2, 3},
		{10},
		{3, 1, 2},
		{2, 1},
		{},
	}

	expected := []int{
		2,
		4,
		0,
		4,
		2,
		0,
		1,
		1,
		0,
	}

	for i := range input {
		output := countRotations(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test540(t *testing.T) {
	input := [][]int{
		{1, 1, 2, 3, 3, 4, 4, 8, 8},
		{0, 1, 1, 2, 2, 3, 3},
		{1, 1, 2, 2, 3, 3, 4},
		{7},
		{1, 2, 2, 3, 3, 4, 4},
		{1, 1, 2, 2, 3, 4, 4},
		{-9, -9, -5, -5, -2, 0, 0},
		{1, 1, 3, 3, 5, 5, 7, 8, 8, 9, 9},
	}

	expected := []int{2, 0, 4, 7, 1, 3, -2, 7}

	for i := range input {
		output := singleNonDuplicate(input[i])
		if output != expected[i] {
			t.Errorf("\nInput: %v\nExpected: %d\nOutput: %d",
				input[i], expected[i], output)
		}
	}
}

func Test162(t *testing.T) {
	input := [][]int{
		{1, 2, 3, 1},
		{1, 2, 1, 3, 5, 6, 4},
		{1},
		{1, 2},
		{2, 1},
		{1, 2, 3, 4, 5},
		{5, 4, 3, 2, 1},
		{1, 3, 2, 4, 1},
		{2, 1, 2, 1, 2},
		{10, 20, 15, 2, 23, 90, 67},
		{1, 3, 5, 7, 6, 4, 2},
		{9, 7, 5, 3, 4, 6, 8},
	}

	expected := [][]int{
		{2},
		{1, 5},
		{0},
		{1},
		{0},
		{4},
		{0},
		{1, 3},
		{0, 2, 4},
		{1, 5},
		{3},
		{0, 6},
	}

	for i := 0; i < len(input); i++ {
		result := findPeakElement(input[i])

		valid := false
		for _, peak := range expected[i] {
			if result == peak {
				valid = true
				break
			}
		}

		if !valid {
			t.Errorf("Test Failed | Input: %v | Output: %d | Expected Peaks: %v",
				input[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Input:", input[i], "| Output:", result)
		}
	}
}

func Test69(t *testing.T) {
	input := []int{
		4,
		8,
		0,
		1,
		2,
		9,
		16,
		25,
		36,
		100,
		2147395600,
		2147483647,
	}

	expected := []int{
		2,
		2,
		0,
		1,
		1,
		3,
		4,
		5,
		6,
		10,
		46340,
		46340,
	}

	for i := 0; i < len(input); i++ {
		result := mySqrt(input[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Input: %d | Output: %d | Expected: %d",
				input[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Input:", input[i], "| Output:", result)
		}
	}
}

func TestFindRoot(t *testing.T) {
	input := []int{4, 8, 69}
	n := []int{2, 3, 4}
	expected := []int{2, 2, -1}

	for i := 0; i < len(input); i++ {
		result := findNthRoot(input[i], n[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Input: %d | N: %d | Output: %d | Expected: %d",
				input[i], n[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Input:", input[i], "| N:", n[i], "| Output:", result)
		}
	}
}

func Test875(t *testing.T) {
	input := [][]int{
		{3, 6, 7, 11},
		{30, 11, 23, 4, 20},
		{30, 11, 23, 4, 20},
		{312884470},
		{805306368, 805306368, 805306368},
		{2, 2},
		{5, 10, 15, 20},
		{100, 200, 300, 400},
		{1, 1000000000},
		{312884470},
	}

	h := []int{
		8,
		5,
		6,
		312884469,
		1000000000,
		2,
		7,
		10,
		3,
		968709470,
	}

	expected := []int{
		4,
		30,
		23,
		2,
		3,
		2,
		10,
		100,
		500000000,
		1,
	}

	for i := 0; i < len(input); i++ {
		result := minEatingSpeed(input[i], h[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Input: %v | Hours: %d | Output: %d | Expected: %d",
				input[i], h[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Input:", input[i], "| Hours:", h[i], "| Output:", result)
		}
	}
}

func Test1482(t *testing.T) {
	bloomDay := [][]int{
		{1, 10, 3, 10, 2},
		{1, 10, 3, 10, 2},
		{7, 7, 7, 7, 12, 7, 7},
	}

	m := []int{3, 3, 2}
	k := []int{1, 2, 3}
	expected := []int{3, -1, 12}

	for i := 0; i < len(bloomDay); i++ {
		result := minDays(bloomDay[i], m[i], k[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Bloom Day: %v | Bouquets: %d | Flowers: %d | Output: %d | Expected: %d",
				bloomDay[i], m[i], k[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Bloom Day:", bloomDay[i],
				"| Bouquets:", m[i], "| Flowers:", k[i], "| Output:", result)
		}
	}
}

func Test1283(t *testing.T) {
	nums := [][]int{
		{1, 2, 5, 9},
		{44, 22, 33, 11, 1},
		{21212, 10101, 12121},
		{2, 3, 5, 7, 11},
		{19},
		{1, 1, 1, 1},
		{1000000, 1000000, 1000000},
		{5, 8, 10, 13},
	}

	threshold := []int{
		6,
		5,
		1000000,
		11,
		1,
		4,
		3,
		10,
	}

	expected := []int{
		5,
		44,
		1,
		3,
		19,
		1,
		1000000,
		5,
	}

	for i := 0; i < len(nums); i++ {
		result := smallestDivisor(nums[i], threshold[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Nums: %v | Threshold: %d | Output: %d | Expected: %d",
				nums[i], threshold[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Nums:", nums[i],
				"| Threshold:", threshold[i], "| Output:", result)
		}
	}
}

func Test1011(t *testing.T) {
	weights := [][]int{
		{1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
		{3, 2, 2, 4, 1, 4},
		{1, 2, 3, 1, 1},
		{5, 5, 5, 5, 5},
		{10, 20, 30, 40, 50, 60},
		{7, 2, 5, 10, 8},
		{1},
		{100, 200, 300, 400},
		{1, 1, 1, 1, 1, 1, 1},
		{50, 50, 50, 50},
	}

	days := []int{
		5, 3, 4, 5, 2, 5, 1, 2, 3, 2,
	}

	expected := []int{
		15, 6, 3, 5, 110, 10, 1, 600, 3, 100,
	}

	for i := 0; i < len(weights); i++ {
		result := shipWithinDays(weights[i], days[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Weights: %v | Days: %d | Output: %d | Expected: %d",
				weights[i], days[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Weights:", weights[i],
				"| Days:", days[i], "| Output:", result)
		}
	}
}

func Test1539(t *testing.T) {
	arrays := [][]int{
		{2, 3, 4, 7, 11},
		{1, 2, 3, 4},
		{2, 3, 4, 5, 6, 7},
		{5, 6, 7, 8, 9},
		{1, 3, 5, 7, 9},
		{10, 20, 30, 40, 50},
		{1},
		{2},
		{100, 200, 300, 400},
		{1, 2, 4, 5, 6},
	}

	k := []int{
		5, 2, 3, 1, 5, 10, 1, 1, 50, 3,
	}

	expected := []int{
		9, 6, 9, 1, 10, 11, 2, 1, 50, 8,
	}

	for i := 0; i < len(arrays); i++ {
		result := findKthPositive(arrays[i], k[i])

		if result != expected[i] {
			t.Errorf("Test Failed | Array: %v | K: %d | Output: %d | Expected: %d",
				arrays[i], k[i], result, expected[i])
		} else {
			fmt.Println("Test Passed | Array:", arrays[i],
				"| K:", k[i], "| Output:", result)
		}
	}
}
