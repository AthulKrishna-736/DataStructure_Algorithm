package array

import "fmt"

func LearnArrays() {
	basicArrays()
	totalSum()
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
