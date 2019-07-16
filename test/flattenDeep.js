/**
 * @description 多维数组降维
 * @param array
 * @returns {*[]}
 */
//一、采用reduce来递归实现多维数据降维
const flattenDeep = (array) => Array.isArray(array) ? array.reduce((init, item) => [...init, ...flattenDeep(item)], []) : [array];

console.log(flattenDeep([1, 2, 3, [4, [5, 6, [7, 8], 9], 10]]));


//二、采用generator生成器实现
function* flattenDeep1(array) {
    for (let value of array) {
        if (Array.isArray(value)) {
            yield* flattenDeep1(value);
        } else {
            yield value;
        }
    }
}

for (let value of flattenDeep1([1, 2, 3, [4, [5, 6, [7, 8], 9], 10]])) {
    console.log(value);
}
