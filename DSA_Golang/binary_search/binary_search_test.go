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
