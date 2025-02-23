class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }

    addNode(parentNode, childValue) {

        const childNode = new TreeNode(childValue)
        parentNode.children.push(childNode)
        return childNode
    }

    printTree(node = this.root, depth = 0) {
        console.log('  '.repeat(depth) + '- ' + node.value)
        for (let child of node.children) {
            this.printTree(child, depth + 1)
        }
    }
}

const tree = new Tree(1)
const child1 = tree.addNode(tree.root, 2);
const child2 = tree.addNode(tree.root, 3);

const child4 = tree.addNode(child1, 4);
const child5 = tree.addNode(child1, 5);
const child6 = tree.addNode(child2, 6);
const child7 = tree.addNode(child2, 7);

const child8 = tree.addNode(child4, 8);
const child9 = tree.addNode(child4, 9);
const child10 = tree.addNode(child5, 10);
const child11 = tree.addNode(child5, 11);

const child12 = tree.addNode(child10, 12);
tree.addNode(child12, 13);
tree.addNode(child12, 14);

// tree.printTree();
// console.dir(tree, { depth: null })
// console.log(JSON.stringify(tree, null, 2));

class TreeNode1 {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class Tree1 {
    constructor(value) {
        this.root = new TreeNode1(value)
    }

    findParent(value, node = this.root) {
        if (node.value == value) {
            return node
        }

        for (const child of node.children) {
            const findNode = this.findParent(value, child)
            if (findNode) {
                return findNode
            }
        }
        return null
    }

    addChild(parentNode, value) {
        const parent = this.findParent(parentNode)
        if (parent) {
            const childNode = new TreeNode1(value)
            parent.children.push(childNode)
            return childNode
        }
        return console.log('no parent found in the tree');
    }

    bfs() {
        if (!this.root) {
            return
        }

        const queue = [this.root]
        while (queue.length > 0) {
            const currNode = queue.shift()
            console.log(currNode.value)

            for (const child of currNode.children) {
                queue.push(child)
            }
        }
    }

    dfsPreorder(node = this.root) {
        if (!node) return
        console.log(node.value)

        for (const child of node.children) {
            this.dfsPreorder(child)
        }
    }

    dfsPostorder(node = this.root) {
        if(!node) return

        for(const child of node.children){
            this.dfsPostorder(child)
        }

        console.log(node.value)
    }
}


const tree1 = new Tree1(1)

tree1.addChild(1, 2)
tree1.addChild(1, 3)
tree1.addChild(1, 4)
tree1.addChild(2, 5)
tree1.addChild(5, 6)

// console.log(JSON.stringify(tree1, null, 2))

console.log('bfs traversal')
tree1.bfs()
console.log('dfs preorder: ')
tree1.dfsPreorder()
console.log('dfs postorder: ')
tree1.dfsPostorder()