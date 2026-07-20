package array

import "fmt"

func LearnArrays() {
	// basicArrays()
	// totalSum()
	// findMax()
	// findMin()
	// countEvenOdd()
	// findElements()
	insetElemnentAtPos()
}

func basicArrays() {
	arr := []int{1, 2, 3, 4, 5}
	fmt.Printf("Arrays elements: %v\n", arr)

	// Accessing elements -- O(1)
	fmt.Printf("Elements at index 2: %d\n", arr[2])

	// Modifying elements -- O(1)
	arr[2] = 10
	fmt.Printf("Modified element at index 2: %v\n", arr)

	// Insert elements -- O(n)
	index := 2
	value := 7

	arr = append(arr[:index], append([]int{value}, arr[index:]...)...)
	fmt.Printf("After inserting: %v\n", arr)

	// Delete elements -- O(n)
	index = 2
	arr = append(arr[:index], arr[index+1:]...)
	fmt.Printf("After Delete: %v\n", arr)
}

func totalSum() {
	arr := []int{1, 2, 3, 4, 5}
	sum := 0

	for i := 0; i < len(arr); i++ {
		sum += arr[i]
	}

	fmt.Printf("Total Sum Normal For loop: %d\n", sum)

	for _, val := range arr {
		sum += val
	}

	fmt.Printf("Total sum with range for loop: %d\n", sum)
}

func findMax() {
	arr := []int{-3, -50, -4, 0}

	if len(arr) == 0 {
		fmt.Printf("Zero length array\n")
		return
	}

	max := arr[0]

	for _, val := range arr {
		if val > max {
			max = val
		}
	}

	fmt.Printf("Max Element in array: %d, arr:= %v", max, arr)
}

func findMin() {
	arr := []int{-3, 1, 0, 40, 2, -1}

	if len(arr) == 0 {
		fmt.Printf("Empty array\n")
		return
	}

	min := arr[0]

	for _, val := range arr {
		if val < min {
			min = val
		}
	}

	fmt.Printf("Minimum Value: %d, arr=%v", min, arr)
}

func countEvenOdd() {
	arr := []int{1, 2, 3, 4, 5, 6}

	oddCount := 0
	evenCount := 0

	for _, val := range arr {
		if val%2 == 0 {
			evenCount++
		} else {
			oddCount++
		}
	}

	fmt.Printf("Odd Count: %d\nEven Count: %d\n", oddCount, evenCount)
}

func findElements() {
	arr := []int{10, 20, 30, 40, 50}
	target := 30

	for i, val := range arr {
		if val == target {
			fmt.Printf("Element found: %d", i)
			return
		}
	}

	fmt.Printf("Element not found")
}

func insetElemnentAtPos() {
	arr := []int{1, 2, 3, 4, 5, 6}
	pos := 3
	val := 10

	if pos >= len(arr) {
		arr = append(arr, val)
	} else {
		arr = append(arr, 0)
	}

	for i := len(arr) - 1; i >= 0; i-- {
		if pos == i {
			arr[i+1] = arr[i]
			arr[i] = val
		} else if pos <= i {
			arr[i+1] = arr[i]
		}
	}

	fmt.Printf("After inserting Element: %v", arr)
}
