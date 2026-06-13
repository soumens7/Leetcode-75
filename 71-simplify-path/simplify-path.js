/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const components = path.split("/");
   const stack = [];
    
    for (let c of components){
        if(c === "" || c === "."){
            continue;
        }
        if(c === ".."){
            if(stack.length){
                stack.pop();
            }
        }else {
            stack.push(c);
        }
    }
    return "/" + stack.join("/");
    
};