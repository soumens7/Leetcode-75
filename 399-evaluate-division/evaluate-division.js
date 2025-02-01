/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const graph = new Map(); // Adjacency list representation

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        let [A, B] = equations[i];
        let value = values[i];

        // Adding new entries to graph(Ex- "a": new Map, "b": new Map..)
        if (!graph.has(A)) {
            graph.set(A, new Map);
        }
        if (!graph.has(B)) {
            graph.set(B, new Map);
        }

        graph.get(A).set(B, value); // A -> B with weight 'value'
        graph.get(B).set(A, 1/value); // B -> A with weight `1/value`
    }

    // DFS function to find path from start to target
    const dfs = (start, target, visited) => {
        if (!graph.has(start) || !graph.has(target)) return -1.0;
        if (start === target) return 1.0; // A/A = 1.0

        visited.add(start);
        for (let [neighbor, weight] of graph.get(start)) {
            if (!visited.has(neighbor)) {
                let result = dfs(neighbor, target, visited);
                if (result !== -1.0) {
                    return weight * result; // Multiply weights along the path
                }
            }
        }
        return -1.0; // If no valid path is found
    };
    // Process each query
    let results = [];
    for (let [C, D] of queries) {
        results.push(dfs(C, D, new Set()));
    }

    return results;

};