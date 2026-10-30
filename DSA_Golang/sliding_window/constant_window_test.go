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

func Test2841(t *testing.T) {
	input := [][]int{
		{2, 6, 7, 3, 1, 7},
		{5, 9, 9, 2, 4, 5, 4},
		{1, 2, 1, 2, 1, 2, 1},
	}

	m := []int{3, 1, 3}

	k := []int{4, 3, 3}

	output := []int{18, 23, 0}

	for i := range input {
		got := MaxSum1(input[i], m[i], k[i])

		if got != output[i] {
			t.Errorf("expected %d, got %d", output[i], got)
		}
	}
}

func Test2269(t *testing.T) {
	input := []int{240, 430043, 30003}
	k := []int{2, 2, 3}
	output := []int{2, 2, 1}

	for i := range input {
		got := DivisorSubstrings1(input[i], k[i])

		if got != output[i] {
			t.Errorf("expected %d, got %d", output[i], got)
		}
	}
}

func Test1876(t *testing.T) {
	input := []string{
		"xyzzaz",
		"abcabc",
		"aababc",
		"aaaaaa",
		"abcdef",
		"ab",
		"abc",
		"aaa",
		"aba",
		"abca",
		"dvdf",
		"pqrpq",
		"abcdde",
		"abcdefg",
		"abacaba",
	}

	expected := []int{
		1,
		4,
		1,
		0,
		4,
		0,
		1,
		0,
		0,
		2,
		1,
		3,
		2,
		5,
		2,
	}

	for i := range input {
		output := countGoodSubstrings1(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %q\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test1984(t *testing.T) {
	input := [][]int{
		{9, 4, 1, 7},
		{1, 2, 3, 4, 5},
		{1, 3, 6, 10, 15},
		{90},
		{1, 100, 200, 300, 400},
		{7, 7, 7, 7},
		{3, 4, 5, 6, 7, 8},
		{10, 1, 2, 3, 4, 5},
		{1, 5, 9, 13, 17, 21},
		{4, 2, 1, 3},
		{100, 200, 300, 400, 500, 600},
		{1, 10, 100, 1000, 10000},
		{5, 1, 9, 3, 7, 2},
		{8, 8, 8, 8, 8, 8},
		{1, 2, 3, 4, 5, 6, 7},
	}

	k := []int{
		2, 3, 2, 1, 2,
		3, 3, 3, 4, 2,
		4, 2, 3, 5, 5,
	}

	expected := []int{
		2,
		2,
		2,
		0,
		99,
		0,
		2,
		2,
		12,
		1,
		300,
		9,
		2,
		0,
		4,
	}

	for i := range input {
		output := minimumDifference(input[i], k[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v, k: %d\nExpected: %d\nOutput: %d",
				input[i], k[i], expected[i], output,
			)
		}
	}
}
