
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

