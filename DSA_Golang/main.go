package main

import (
	"DSA_Golang/array"
	slidingwindow "DSA_Golang/sliding_window"
)

func main() {
	array.LearnArrays()
	slidingwindow.ConstantWindow([]int{-1, 2, 3, 3, 4, 5, -1}, 4)
	slidingwindow.VariableWindowBruteForce([]int{2, 5, 1, 7, 10}, 14)
	slidingwindow.VariableWindowBetterSolution([]int{2, 5, 1, 7, 10}, 14)
	slidingwindow.FindMaxAverage([]int{1, 12, -5, -6, 50, 3}, 4)
}
