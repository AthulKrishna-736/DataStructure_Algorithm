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
