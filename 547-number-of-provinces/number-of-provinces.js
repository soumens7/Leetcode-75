/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length; // Number of Cities
    const visited = new Set(); // track vistied cities
    let province = 0;         // Count no. of province

    // Recursively visits all cities directly ot indirectly connected to city
    const dfs = (city) => {
        visited.add(city); // Mark current city as visited
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] == 1 && !visited.has(neighbor)) {
                dfs(neighbor); // visit connected city
            }
        }
    }
    // Iterate over each city
    for (let city = 0; city < n; city++) {
        if (!visited.has(city)) {
            province++; // Start a new province
            dfs(city); // Explore all connected city
        }
    }
    return province; // Return the total number of provinces
};