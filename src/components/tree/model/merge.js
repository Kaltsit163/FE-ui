/**
 * @Author: liuyejunnan
 * @Date:   2017-05-13 14:09:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-05-14 15:09:33
 */

export default function(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }

    return target;
};