class Treenode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    addNode(value) {
        let newNode = new Treenode(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        let queue = [this.root]
        while (queue.length) {
            let curr = queue.shift()
            if(!curr.left){
                curr.left = newNode
                return
            } else {
                queue.push(curr.left)
            }

            if(!curr.right){
                curr.right = newNode
                return
            } else {
                queue.push(curr.right)
            }
        }
    }
}