package array

import "fmt"

func LearnArrays() {
	// basicArrays()
	// totalSum()
	// findMax()
	// findMin()
	// countEvenOdd()
	// findElements()
	// insertElemnentAtPos()
	// deleteElementAtPos()
	// reverseArray()
	// reverseArray1()
	// copyArray()
	// countOccurrences()
	// frequencyOfElements()
	// firstRepeatingElement()
	firstNonRepeatingElement()
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

func insertElemnentAtPos() {
	arr := []int{1, 2, 3, 4, 5, 6}
	pos := 3
	val := 10

	if pos < 0 || pos > len(arr) {
		fmt.Print("Invalid index pos")
		return
	}

	if pos == len(arr) {
		arr = append(arr, val)
		return
	}

	arr = append(arr, 0)

	for i := len(arr) - 1; i > pos; i-- {
		arr[i] = arr[i-1]
	}

	arr[pos] = val

	fmt.Printf("After inserting Element: %v", arr)
}

func deleteElementAtPos() {
	arr := []int{1, 2, 3, 4, 5, 6}
	pos := 3

	if pos < 0 || pos >= len(arr) {
		fmt.Print("Invalid index pos")
		return
	}

	for i := pos; i < len(arr)-1; i++ {
		arr[i] = arr[i+1]
	}

	arr = arr[:len(arr)-1]

	fmt.Println("After delete: ", arr)
}

// in place
func reverseArray() {
	arr := []int{1, 2, 3, 4, 5, 6}

	if len(arr) == 0 {
		fmt.Print("Empty array")
		return
	}

	n := len(arr)

	for i := 0; i <= (n-1)/2; i++ {
		temp := arr[i]
		arr[i] = arr[n-1-i]
		arr[n-1-i] = temp
	}

	fmt.Println("Reversed arr: ", arr)
}

// two pointer
func reverseArray1() {
	arr := []int{1, 2, 3, 4, 5, 6}

	if len(arr) == 0 {
		fmt.Print("Empty array")
		return
	}

	left := 0
	right := len(arr) - 1

	for left < right {
		arr[left], arr[right] = arr[right], arr[left]
		left++
		right--
	}

	fmt.Println("Reversed Arr: ", arr)
}

func copyArray() {
	arr := []int{1, 2, 3, 4, 5, 6}

	if len(arr) == 0 {
		fmt.Print("Empty array")
		return
	}

	arr1 := make([]int, len(arr))

	for i := 0; i < len(arr); i++ {
		arr1[i] = arr[i]
	}

	fmt.Println("Copied Arr: ", arr1)
}

func countOccurrences() {
	arr := []int{1, 2, 3, 2, 4, 2, 5}
	target := 2

	count := 0

	for i := 0; i < len(arr); i++ {
		if arr[i] == target {
			count++
		}
	}

	fmt.Println("Total Occurrences: ", count)
}

func frequencyOfElements() {
	arr := []int{1, 2, 3, 2, 4, 2, 5}

	if len(arr) == 0 {
		fmt.Println("Empty array")
		return
	}

	frequency := map[int]int{}

	for i := 0; i < len(arr); i++ {
		if _, ok := frequency[arr[i]]; !ok {
			frequency[arr[i]] = 1
		} else {
			frequency[arr[i]]++
		}
	}

	fmt.Println("Frequency: ", frequency)
}

func firstRepeatingElement() {
	arr := []int{10, 5, 3, 4, 3, 5, 6}

	if len(arr) == 0 {
		fmt.Print("Empty array")
		return
	}

	elementsMap := make(map[int]bool)

	for i := 0; i < len(arr); i++ {
		if _, ok := elementsMap[arr[i]]; !ok {
			elementsMap[arr[i]] = true
		} else {
			fmt.Println("First repeating element: ", arr[i])
			return
		}
	}

	fmt.Println("No repeating elements")
}

func firstNonRepeatingElement() {
	arr := []int{10, 5, 3, 4, 3, 5, 6}

	if len(arr) == 0 {
		fmt.Print("empty array")
		return
	}

	elementsMap := make(map[int]bool)

	for i := 0; i < len(arr); i++ {
		if _, ok := elementsMap[arr[i]]; !ok {
			elementsMap[arr[i]] = false
		} else {
			elementsMap[arr[i]] = true
		}
	}

	for i := 0; i < len(arr); i++ {
		if elementsMap[arr[i]] == false {
			fmt.Println("First Non Repeating Element: ", arr[i])
			return
		}
	}

	fmt.Print("No Non repeating elements")
}
