package slidingwindow

import "testing"

func TestLengthOfLongestSubstring(t *testing.T) {
	input := []string{
		"abcabcbb",
		"bbbbb",
		"pwwkew",
		"",
		"abcdef",
		" ",
		"au",
		"aab",
		"dvdf",
		"abba",
	}

	expected := []int{
		3, // "abc"
		1, // "b"
		3, // "wke"
		0, // empty string
		6, // "abcdef"
		1, // single space
		2, // "au"
		2, // "ab"
		3, // "vdf"
		2, // "ab" or "ba"
	}

	for i := range input {
		output := lengthOfLongestSubstring1(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %q\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test209(t *testing.T) {
	// Additional edge cases for LeetCode 209
	input := [][]int{
		{1},             // Single element, valid
		{1},             // Single element, invalid
		{1, 2, 3, 4},    // Entire array is the minimum subarray
		{1, 2, 3, 4},    // Minimum subarray at the end
		{4, 3, 2, 1},    // Minimum subarray at the beginning
		{2, 2, 2, 2},    // No valid subarray
		{1, 1, 1, 10},   // Large element at the end
		{10, 1, 1, 1},   // Large element at the beginning
		{1, 2, 1, 2, 1}, // Multiple candidate subarrays
		{5, 1, 1, 1, 5}, // Equal minimum-length candidates
		{1, 1, 1, 1, 1}, // Sum exactly equals target
		{},              // Empty array
	}

	target := []int{
		1, 2, 10, 7, 7, 9,
		10, 10, 4, 6, 5, 1,
	}

	expected := []int{
		1, 0, 4, 2, 2, 0,
		1, 1, 3, 2, 5, 0,
	}

	for i := range input {
		output := minSubArrayLen1(target[i], input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nTarget: %d\nExpected: %d\nOutput: %d",
				input[i], target[i], expected[i], output,
			)
		}
	}
}

func Test1004(t *testing.T) {
	input := [][]int{
		// {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0},
		// {0, 0, 1, 1, 1, 0, 0},
		// {1, 1, 1, 1},
		// {0, 0, 0, 0},
		// {1, 0, 1, 0, 1},
		// {0, 0, 0, 1},
		// {1, 0, 0, 1, 1, 1, 0, 1},
		{0, 1, 1, 0, 1, 1, 1, 0, 1},
		{1},
		{0},
		{1, 1, 0, 1, 1},
		{0, 0, 1, 1},
		{1, 0, 1, 1, 0, 1, 1, 1},
		{0, 1, 0, 1, 0, 1, 0},
	}

	kValues := []int{
		// 2, 0, 0, 2, 1, 1,2,
		2, 0, 1, 1, 2, 1, 3,
	}

	expected := []int{
		// 6, 3, 4, 2, 3, 2,6,
		8, 1, 1, 5, 4, 6, 6,
	}

	for i := range input {
		output := longestOnes1(input[i], kValues[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nk: %d\nExpected: %d\nOutput: %d",
				input[i], kValues[i], expected[i], output,
			)
		}
	}
}

func Test904(t *testing.T) {
	input := [][]int{
		{1, 2, 1},
		{0, 1, 2, 2},
		{1, 2, 3, 2, 2},
		{3, 3, 3, 3},
		{1},
		{1, 2},
	}

	expected := []int{
		3,
		3,
		4,
		4,
		1,
		2,
	}

	for i := range input {
		output := totalFruit(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test713(t *testing.T) {
	input := [][]int{
		{10, 5, 2, 6},
		{1},
		{5},
		{1, 1, 1, 1},
		{2, 3},
		{2, 2, 2},
		{1, 2, 1, 2},
		{10, 1, 1, 1, 10},
		{2, 1, 3, 1},
		{1, 2, 3},
		{5, 6, 7},
		{1, 1, 1, 1, 1, 1},
		{2, 5, 3, 10},
		{1, 2, 1, 3, 1, 2},
		{100, 1, 1, 1, 1},
	}

	kValues := []int{
		100,
		2,
		5,
		2,
		6,
		4,
		3,
		10,
		4,
		1,
		5,
		7,
		20,
		4,
		100,
	}

	expected := []int{
		8,
		1,
		0,
		10,
		2,
		3,
		8,
		6,
		8,
		0,
		0,
		21,
		6,
		13,
		10,
	}

	for i := range input {
		output := numSubarrayProductLessThanK1(input[i], kValues[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nk: %d\nExpected: %d\nOutput: %d",
				input[i], kValues[i], expected[i], output,
			)
		}
	}
}

func Test424(t *testing.T) {
	input := []string{
		"ABAB",
		"AABABBA",
		"AAAA",
		"ABCDE",
		"A",
		"ABBB",
		"BAAA",
		"ABABAB",
		"ABC",
		"AAAB",
		"ABAA",
		"BAAAB",
		"ABBBAC",
		"AABBBBAAA",
		"ABABBA",
	}

	kValues := []int{
		2,
		1,
		2,
		0,
		0,
		2,
		0,
		3,
		5,
		0,
		1,
		2,
		2,
		2,
		1,
	}

	expected := []int{
		4,
		4,
		4,
		1,
		1,
		4,
		3,
		6,
		3,
		3,
		4,
		5,
		5,
		6,
		4,
	}

	for i := range input {
		output := characterReplacement1(input[i], kValues[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %q\nk: %d\nExpected: %d\nOutput: %d",
				input[i], kValues[i], expected[i], output,
			)
		}
	}
}

func Test1358(t *testing.T) {
	input := []string{
		"abcabc",
		"aaacb",
		"abc",
		"aaaa",
		"b",
		"c",
		"ab",
		"ac",
		"bc",
		"aabcbc",
		"aaabbc",
		"abcabcabc",
		"ababcc",
		"abbc",
		"ccba",
	}

	expected := []int{
		10,
		3,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		6,
		3,
		28,
		6,
		1,
		2,
	}

	for i := range input {
		output := numberOfSubstrings1(input[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %q\nExpected: %d\nOutput: %d",
				input[i], expected[i], output,
			)
		}
	}
}

func Test930(t *testing.T) {
	input := [][]int{
		{1, 0, 1, 0, 1},
		{0, 0, 0, 0, 0},
		{1, 1, 1, 1},
		{1, 1, 1, 1},
		{1, 0, 0, 1, 0, 1},
		{0},
		{1},
		{1},
		{1, 0, 0, 0, 1},
		{1, 0, 1},
		{1, 1, 0, 1},
		{0, 1, 0, 1, 0},
		{1, 0, 1, 0, 1},
		{1, 1, 1},
		{0, 0, 1, 0, 0},
	}

	goal := []int{
		2, 0, 0, 4, 2,
		0, 1, 0, 1, 1,
		2, 1, 3, 2, 0,
	}

	expected := []int{
		4,
		15,
		0,
		1,
		5,
		1,
		1,
		0,
		8,
		4,
		3,
		8,
		1,
		2,
		6,
	}

	for i := range input {
		output := numSubarraysWithSum1(input[i], goal[i])

		if output != expected[i] {
			t.Errorf(
				"\nInput: %v\nGoal: %d\nExpected: %d\nOutput: %d",
				input[i], goal[i], expected[i], output,
			)
		}
	}
}
