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
// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')
// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('B', 'C')

// g.printGraph()
// console.log(g.adjacenecyList)



class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, '->', this.adjacencyList[vertex]);
        }
    }
}

// Usage
const dg = new DirectedGraph();
// dg.addVertex('A');
// dg.addVertex('B');
// dg.addVertex('C');
// dg.addEdge('A', 'B');
// dg.addEdge('B', 'C');

// dg.printGraph();


function isBipartite(graph) {
    const color = {};

    for (let node in graph) {
        if (!(node in color)) {
            const queue = [node];
            color[node] = 1;

            while (queue.length) {
                const cur = queue.shift();

                for (let neighbor of graph[cur]) {
                    if (!(neighbor in color)) {
                        color[neighbor] = -color[cur];
                        queue.push(neighbor);
                    } else if (color[neighbor] === color[cur]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

const graph = {
    A: ["X"], X: ["A", "B"],
    B: ["Y"], Y: ["B", "C"],
    C: ["Z"], Z: ["C"]
};
// console.log(isBipartite(graph)); 

class Graph1 {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    dfs(start, visited = new Set()) {
        console.log('Visiting:',start)
        visited.add(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor, visited)
            }
        }
    }

    bfs(start){
        let queue = [start]
        let visited = new Set()
        visited.add(start)

        while(queue.length > 0){
            let vertex = queue.shift()
            console.log('visiting: ', vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }

    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, ' -> ', this.adjacencyList[vertex])
        }
    }
}

const g1 = new Graph1()

g1.addVertex('A')
g1.printGraph()
g1.addVertex('B')
g1.addVertex('C')
g1.addEdge('A', 'B')
g1.addEdge('A', 'C')
g1.addEdge('B', 'C')
g1.printGraph()
console.log(g1.adjacencyList)
g1.dfs('A')
g1.bfs('A')