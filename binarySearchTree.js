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
        if (root) {
            this.dfsInOrder(root.left)
            console.log(root.value)
            this.dfsInOrder(root.right)

        }
    }

    dfsPostOrder(root) {
        if (root) {
            this.dfsPostOrder(root.left)
            this.dfsPostOrder(root.right)
            console.log(root.value)
        }
    }

    bfs() {
        const queue = []
        queue.push(this.root)

        while (queue.length > 0) {
            let curr = queue.shift()
            console.log(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
        return this.root
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
            return root
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
            return root
        } else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
            return root
        }
    }
}

const bst1 = new Bst()

bst1.insert(10)
bst1.insert(20)
bst1.insert(4)
bst1.insert(9)
bst1.insert(12)
bst1.insert(37)
bst1.insert(11)
bst1.insert(13)
// console.log(bst1.search(bst1.root, 10))
// console.log(bst1.search(bst1.root, 110))
// console.log(bst1.search(bst1.root, 4))
// console.log('pre order: ')
// bst1.dfsPreOrder(bst1.root)
// console.log('in order: ')
// bst1.dfsInOrder(bst1.root)
// console.log('post order: ')
// bst1.dfsPostOrder(bst1.root)
// console.log('bfs order: ')
// bst1.bfs()
// console.log('min val: ', bst1.min(bst1.root))
// console.log('max val: ', bst1.max(bst1.root))

// console.dir(bst1.delete(12), {depth : null})



class Node2 {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst1 {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node2(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else if (root.value == value) {
            return true
        } else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    bfs() {
        if (this.isEmpty()) {
            console.log('no nodes to search')
            return null
        }

        let queue = [this.root];

        while (queue.length > 0) {
            let currNode = queue.shift()
            console.log(currNode.value)

            if (currNode.left) {
                queue.push(currNode.left)
            }
            if (currNode.right) {
                queue.push(currNode.right)
            }
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
        if (root) {
            this.dfsInOrder(root.left)
            console.log(root.value)
            this.dfsInOrder(root.right)
        }
    }

    dfsPostOrder(root) {
        if (root) {
            this.dfsPostOrder(root.left)
            this.dfsPostOrder(root.right)
            console.log(root.value)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return null
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

const bst2 = new Bst1()

bst2.insert(10)
bst2.insert(20)
bst2.insert(15)
bst2.insert(5)
bst2.insert(7)
bst2.insert(34)

console.dir(bst2.root, { depth: null })
// console.log(bst2.min(bst2.root))
// console.log(bst2.max(bst2.root))
console.log(bst2.search(bst2.root, 70))
bst2.bfs()
console.log('bst preorder : ')
bst2.dfsPostOrder(bst2.root)
bst2.delete(10)
console.log(bst2.root)