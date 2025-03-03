class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight }); // If undirected
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, '->', this.adjacencyList[vertex].map(e => `${e.node}(${e.weight})`).join(', '));
        }
    }
}

const wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addEdge('A', 'B', 5);
wg.addEdge('B', 'C', 2);
wg.addEdge('A', 'C', 10);

wg.printGraph();
console.log(wg.adjacencyList)