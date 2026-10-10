package slidingwindow

import (
	"reflect"
	"testing"
)

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

func Test1052(t *testing.T) {
	customers := [][]int{
		{1, 0, 1, 2, 1, 1, 7, 5},
		{1},
	}

	grumpy := [][]int{
		{0, 1, 0, 1, 0, 1, 0, 1},
		{0},
	}

	minutes := []int{3, 1}

	expected := []int{16, 1}

	for i := range customers {
		got := MaxSatisfied1(customers[i], grumpy[i], minutes[i])

		if got != expected[i] {
			t.Errorf("expected %d, got %d", expected[i], got)
		}
	}
}

func Test1423(t *testing.T) {
	cardPoints := [][]int{
		{1, 2, 3, 4, 5, 6, 1},
		{2, 2, 2},
		{9, 7, 7, 9, 7, 7, 9},
		{100, 40, 17, 9, 73, 75},
	}

	k := []int{3, 2, 7, 3}

	expected := []int{12, 4, 55, 248}

	for i := range cardPoints {
		got := MaxScore(cardPoints[i], k[i])

		if got != expected[i] {
			t.Errorf("expected %d, got %d", expected[i], got)
		}
	}
}

func Test438(t *testing.T) {
	words := []string{
		"cbaebabacd",
		"abab",
		"aaaaaaaaaa",
	}

	subword := []string{
		"abc",
		"ab",
		"aaaaaaaaaaaaa",
	}

	expected := [][]int{
		{0, 6},
		{0, 1, 2},
		{},
	}

	for i := range words {
		got := FindAnagrams1(words[i], subword[i])

		if !reflect.DeepEqual(got, expected[i]) {
			t.Errorf("test case %d: expected %v, got %v", i+1, expected[i], got)
		}
	}
}

func Test568(t *testing.T) {
	inputS1 := []string{"ab", "ab"}
	inputS2 := []string{"eidbaooo", "eidboaoo"}

	output := []bool{true, false}

	for i := range inputS1 {
		got := CheckInclusion1(inputS1[i], inputS2[i])
		if got != output[i] {
			t.Errorf("expected %t, got %t", output[i], got)
		}
	}
}

func Test2461(t *testing.T) {
	input := [][]int{
		{1, 5, 4, 2, 9, 9, 9},
		{4, 4, 4},
		{9, 9, 9, 1, 2, 3},
	}

	k := []int{3, 3, 3}

	output := []int{15, 0, 12}

	for i := range input {
		got := MaximumSubarraySum1(input[i], k[i])

		if got != output[i] {
			t.Errorf("expected %d, got %d", output[i], got)
		}
	}
}
