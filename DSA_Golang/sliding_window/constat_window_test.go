package slidingwindow

import "testing"

func Test1343(t *testing.T) {
	array := [][]int{
		{2, 2, 2, 2, 5, 5, 5, 8},
		{11, 13, 17, 23, 29, 31, 7, 5, 2, 3},
	}

	window := []int{3, 3}
	threshold := []int{4, 5}

	expected := []int{3, 6}

	for i := range array {
		got := NumOfSubarrays1(array[i], window[i], threshold[i])

		if got != expected[i] {
			t.Errorf("expected %d, got %d", expected[i], got)
		}
	}
}

func Test1456(t *testing.T) {
	stringArray := []string{
		"abciiidef",
		"aeiou",
		"leetcode",
	}

	window := []int{3, 2, 3}
	expected := []int{3, 2, 2}

	for i := range stringArray {
		got := MaxVowels1(stringArray[i], window[i])

		if got != expected[i] {
			t.Errorf("expected %d, got %d", expected[i], got)
		}
	}
}
