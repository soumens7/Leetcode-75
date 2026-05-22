/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const map_s_to_t = new Map();
    const map_t_to_s = new Map();

    for (let i = 0; i < s.length; i++) {

        // Check s -> t mapping
        if (map_s_to_t.has(s[i])) {
            if (map_s_to_t.get(s[i]) !== t[i]) return false;
        } else {
            map_s_to_t.set(s[i], t[i]);
        }

        // Check t -> s mapping
        if (map_t_to_s.has(t[i])) {
            if (map_t_to_s.get(t[i]) !== s[i]) return false;
        } else {
            map_t_to_s.set(t[i], s[i]);
        }
    }
    return true;
};