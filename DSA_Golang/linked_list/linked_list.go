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

func (l *LinkedList) deleteAtBegin() {
	if l.head == nil {
		fmt.Println("list is empty to delete")
		return
	}

	l.head = l.head.next
}

func (l *LinkedList) deleteAtEnd() {
	if l.head == nil {
		fmt.Println("list is empty to delete")
		return
	}

	if l.head.next == nil {
		l.head = nil
		return
	}

	current := l.head
	for current.next.next != nil {
		current = current.next
	}

	current.next = nil
}

func (l *LinkedList) deleteAtPos(pos int) {
	if pos < 1 {
		fmt.Println("invalid position to delete")
		return
	}

	if pos == 1 {
		l.head = l.head.next
		return
	}

	current := l.head
	for i := 2; i < pos && current != nil; i++ {
		current = current.next
	}

	if current == nil || current.next == nil {
		fmt.Println("invalid position node does not exits")
		return
	}

	current.next = current.next.next
}

func (l *LinkedList) SearchNode(key int) *Node {
	if l.head == nil {
		return nil
	}

	if l.head.data == key {
		return l.head
	}

	curr := l.head

	for curr.next != nil {
		if curr.data == key {
			return curr
		}

		curr = curr.next
	}

	return nil
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
	list.deleteAtBegin()
	list.display()
	list.deleteAtEnd()
	list.display()
	list.deleteAtPos(3)
	list.deleteAtPos(10)
	list.deleteAtPos(-1)
	list.display()
	list.SearchNode(10)
	list.SearchNode(50)
	list.SearchNode(45)
}
