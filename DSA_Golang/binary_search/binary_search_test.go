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
