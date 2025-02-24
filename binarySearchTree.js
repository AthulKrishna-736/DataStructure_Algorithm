class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 51))
// console.log(bst.search(bst.root, 15))


class Node1 {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node1(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else if (root.value === value) {
            return true
        } else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }
    dfsPreOrder(root) {
        if (root) {
            console.log(root.value)
            this.dfsPreOrder(root.left)
            this.dfsPreOrder(root.right)
        }

    }

    dfsInOrder(root) {
        if(root){
            this.dfsInOrder(root.left)
            console.log(root.value)
            this.dfsInOrder(root.right)

        }
    }

    dfsPostOrder(root){
        if(root){
            this.dfsPostOrder(root.left)
            this.dfsPostOrder(root.right)
            console.log(root.value)
        }
    }
}

const bst1 = new Bst()

bst1.insert(10)
bst1.insert(20)
bst1.insert(4)
bst1.insert(9)
bst1.insert(12)
console.log(bst1.search(bst1.root, 10))
console.log(bst1.search(bst1.root, 110))
console.log(bst1.search(bst1.root, 4))
console.log('pre order: ')
bst1.dfsPreOrder(bst1.root)
console.log('in order: ')
bst1.dfsInOrder(bst1.root)
console.log('post order: ')
bst1.dfsPostOrder(bst1.root)