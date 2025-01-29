/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = {}; // HashMap to represent the adjacency list
    const visited = {}; // HashSet to track visited cities
    let changes = 0; // Count of edges to reverse

    // Build the graph
    for (const [a, b] of connections) {
        if (!graph[a]) graph[a] = []; // Initialize adjacency list for city a
        if (!graph[b]) graph[b] = []; // Initialize adjacency list for city b
        graph[a].push([b, 1]); // Outgoing edge from a to b
        graph[b].push([a, 0]); // Incoming edge to b from a
    }

    // DFS function (DFS performed on graph(adjacency list) to find changes)
    const dfs = (city) => {
        visited[city] = true; // Mark the city as visited
        for (const [neighbor, isOutgoing] of graph[city]) {
            if (!visited[neighbor]) {
                changes += isOutgoing; // Increment if the edge is outgoing
                dfs(neighbor); // Recursively performs DFS for the unvisited neighbor city.
            }
        }
    };

    // Start DFS from city 0
    dfs(0);

    return changes;
};