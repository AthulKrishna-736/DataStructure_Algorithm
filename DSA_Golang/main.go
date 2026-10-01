package main

import (
	"DSA_Golang/array"
	slidingwindow "DSA_Golang/sliding_window"
)

func main() {
	array.LearnArrays()
	slidingwindow.ConstantWindow([]int{-1, 2, 3, 3, 4, 5, -1}, 4)
}
