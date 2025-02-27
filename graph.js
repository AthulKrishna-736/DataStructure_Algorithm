class Graph {
    constructor() {
        this.adjacenecyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacenecyList[vertex]) {
            this.adjacenecyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacenecyList[vertex1].push(vertex2)
        this.adjacenecyList[vertex2].push(vertex1)
    }

    printGraph() {
        for (let vertex in this.adjacenecyList) {
            console.log(vertex, '->', this.adjacenecyList[vertex])
        }
    }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'C')

g.printGraph()
console.log(g.adjacenecyList)