/**
 * @Author: liuyejunnan
 * @Date:   2017-05-12 14:09:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-05-14 14:09:33
 */



export const NODE_KEY = '$treeNodeId';

export const markNodeData = function(node, data) {
    if (data[NODE_KEY]) return;
    Object.defineProperty(data, NODE_KEY, {
        value: node.id,
        enumerable: false,
        configurable: false,
        writable: false
    });
};

export const getNodeKey = function(key, data) {
    if (!key) return data[NODE_KEY];
    return data[key];
};