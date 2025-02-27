class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEnd
    }

    delete(word) {
        const deleteHelper = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEnd) return false
                node.isEnd = false
                return Object.keys(node.children).length === 0
            }

            let char = word[index]
            if (!node.children[char]) return false
            let shouldDelete = deleteHelper(node.children[char], word, index + 1)
            if (shouldDelete) {
                delete node.children[char]
                return Object.keys(node.children).length === 0 && !node.isEnd
            }
            return false
        }
        deleteHelper(this.root, word, 0)
    }
}

const trie = new Trie()
// trie.insert('apple')
// trie.insert('app')
// console.log(trie.search('apple'))
// console.log(trie.search('app'))
// console.log(trie.search('appl'))

// console.log(trie.delete('apple'))
// console.log(trie.search('apple'))
// console.log(trie.search('app'))

class TrieNode1 {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie1 {
    constructor() {
        this.root = new TrieNode1()
    }

    insert(word) {
        let node = this.root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode1()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEnd
    }

    delete(word) {
        const deleteHelper = (node, word, index) => {
            if (index == word.length) {
                if (!node.isEnd) return false
                node.isEnd = false
                return Object.keys(node.children).length === 0
            }

            let char = word[index]
            if (!node.children[char]) return false

            let shouldDelete = deleteHelper(node.children[char], word, index + 1)

            if (shouldDelete) {
                delete node.children[char]
                return Object.keys(node.children).length === 0 && !node.isEnd
            }
            return false
        }
        deleteHelper(this.root, word, 0)
    }

    autocomplete(prefix) {
        let node = this.root

        for (let char of prefix) {
            if (!node.children[char]) return []
            node = node.children[char]
        }

        let result = []
        const dfs = (currNode, currPrefix) => {
            if (currNode.isEnd) result.push(currPrefix)

            for (let child in currNode.children) {
                dfs(currNode.children[child], currPrefix + child)
            }
        }
    }
}

const trie1 = new Trie1()

trie1.insert('ban')
trie1.insert('bat')
trie1.insert('apply')
console.dir(trie1.root, { depth: null })
console.log(trie1.search('ban'))
console.log(trie1.search('banned'))