/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set(); // to track rooms visited

    function dfs(room) {
        if(visited.has(room)) return; // skip if already visited
        visited.add(room); // Mark the room as visited

        for(const key of rooms[room]){
            dfs(key); // recursively visit other room
        }
    }
    dfs(0); // start DFS with room 0

    // check if all room is visited
    return visited.size === rooms.length;

};