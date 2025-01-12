/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visited = new Set(); // Set to keep a track of rooms visited

    function dfs(room) {
        if (visited.has(room)) return; // skip if already visited
        visited.add(room);           // Mark room as visited (adding in visited)

        for (const key of rooms[room]) {
            dfs(key);   // recursively visit other rooms
        }
    }
    dfs(0); // start dfs with room 0

    return visited.size === rooms.length; // check if all rooms visited
};
