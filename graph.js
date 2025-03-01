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


class Graph {
    constructor() {
        this.adjacencyList = {}; // Fixed typo from 'adjacenecyList'
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Since it's undirected
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, '->', this.adjacencyList[vertex]);
        }
    }
}

// Usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'C');

g.printGraph();




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
        this.adjacencyList[vertex1].push(vertex2); // Only one direction
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, '->', this.adjacencyList[vertex]);
        }
    }
}

// Usage
const dg = new DirectedGraph();
dg.addVertex('A');
dg.addVertex('B');
dg.addVertex('C');
dg.addEdge('A', 'B');
dg.addEdge('B', 'C');

dg.printGraph();



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

// Usage
const wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addEdge('A', 'B', 5);
wg.addEdge('B', 'C', 2);
wg.addEdge('A', 'C', 10);

wg.printGraph();




class CyclicGraph extends Graph {
    hasCycleUtil(vertex, visited, parent) {
        visited[vertex] = true;
        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                if (this.hasCycleUtil(neighbor, visited, vertex)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }

    hasCycle() {
        const visited = {};
        for (let vertex in this.adjacencyList) {
            if (!visited[vertex] && this.hasCycleUtil(vertex, visited, null)) {
                return true;
            }
        }
        return false;
    }
}

// Usage
const cg = new CyclicGraph();
cg.addVertex('A');
cg.addVertex('B');
cg.addVertex('C');
cg.addEdge('A', 'B');
cg.addEdge('B', 'C');
cg.addEdge('C', 'A'); // Cycle

console.log(cg.hasCycle()); // Output: true




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

// Usage
const graph = {
    A: ["X"], X: ["A", "B"], 
    B: ["Y"], Y: ["B", "C"], 
    C: ["Z"], Z: ["C"]
};
console.log(isBipartite(graph)); // Output: true

