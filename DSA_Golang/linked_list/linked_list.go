package main

import "fmt"

type Node struct {
	data int
	next *Node
}

type LinkedList struct {
	head *Node
}

func (l *LinkedList) insertAtBegin(value int) {
	newNode := &Node{data: value, next: nil}

	newNode.next = l.head
	l.head = newNode
}

func (l *LinkedList) insertAtEnd(value int) {
	newNode := &Node{data: value, next: nil}

	if l.head == nil {
		l.head = newNode
		return
	}

	current := l.head

	for current.next != nil {
		current = current.next
	}

	current.next = newNode

}

func (l *LinkedList) display() {
	if l.head == nil {
		fmt.Println("empty linked list")
		return
	}

	current := l.head

	for current != nil {
		fmt.Print(current.data, " -> ")
		current = current.next
	}

	fmt.Print("nil")
	fmt.Println()
}

func (l *LinkedList) insertAtPos(value int, pos int) {
	if pos < 1 {
		fmt.Println("invalid position")
		return
	}

	newNode := &Node{data: value, next: nil}

	if pos == 1 {
		newNode.next = l.head
		l.head = newNode
		return
	}

	curr := l.head

	for i := 1; i < pos-1 && curr != nil; i++ {
		curr = curr.next
	}

	if curr == nil {
		fmt.Println("pos exceeded node limit")
		return
	}

	newNode.next = curr.next
	curr.next = newNode
}

func main() {
	list := LinkedList{nil}
	list.display()
	list.insertAtBegin(10)
	list.display()
	list.insertAtBegin(20)
	list.insertAtEnd(30)
	list.insertAtEnd(40)
	list.insertAtEnd(50)
	list.display()
	list.insertAtPos(121, 3)
	list.display()
	list.insertAtPos(122, 10)
	list.insertAtPos(123, 0)
	list.insertAtPos(124, 7)
	list.display()
}
