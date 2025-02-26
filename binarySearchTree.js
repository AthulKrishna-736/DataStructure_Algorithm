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

    dfsInOrder(root, values = []) {
        if (root) {
            this.dfsInOrder(root.left)
            console.log(root.value)
            values.push(root.value)
            this.dfsInOrder(root.right, values)
        }
        return values
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


    isValidBSt(root) {
        const values = this.dfsInOrder(root)
        for (let i = 1; i < values.length; i++) {
            if (values[i] <= values[i - 1]) return false
        }
        return true
    }
}

const bst2 = new Bst1()

bst2.insert(10)
bst2.insert(20)
bst2.insert(15)
bst2.insert(5)
bst2.insert(7)
bst2.insert(34)

// console.dir(bst2.root, { depth: null })
// console.log(bst2.min(bst2.root))
// console.log(bst2.max(bst2.root))
// console.log(bst2.search(bst2.root, 70))
// bst2.bfs()
// console.log('bst preorder : ')
// bst2.dfsPostOrder(bst2.root)
// bst2.delete(10)
// console.log(bst2.root)
// console.log(bst2.isValidBSt(bst2.root))


class Node3 {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst2 {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node3(value)
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

    search(root, value) {
        if (!root) {
            console.log('no such values on this bst')
            return false
        }

        if (root.value === value) {
            return true
        } else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    bfs(root) {
        if (!root) {
            console.log('no root in this tree')
            return null
        }
        let queue = [this.root]
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
    }

    deleteNode(root, value) {
        if (!root) {
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

    isValidBSt() {
        const values = []

        function inOrder(node) {
            if (!node) return
            inOrder(node.left)
            values.push(node.value)
            inOrder(node.right)
        }
        inOrder(this.root)

        for (let i = 1; i < values.length; i++) {
            if (values[i] <= values[i - 1]) {
                return false
            }
        }
        return true
    }

    treeheight(root) {
        if(!root) return -1
        return 1 + Math.max(this.treeheight(root.left), this.treeheight(root.right))
    }
}


const bst3 = new Bst2()

bst3.insert(20)
bst3.insert(7)
bst3.insert(34)
bst3.insert(17)
bst3.insert(22)
bst3.insert(30)

console.log(bst3.search(bst3.root, 20))
bst3.bfs(bst3.root)
console.log('find max: ')
console.log(bst3.min(bst3.root))
bst3.delete(17)
console.dir(bst3.root, { depth: null })
console.log(bst3.isValidBSt())
console.log(bst3.treeheight(bst3.root))