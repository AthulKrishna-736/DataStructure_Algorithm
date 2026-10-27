package binarysearch

import "testing"

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
