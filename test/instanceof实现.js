/**
 * @description 判断函数对象的原型对象是否在某个对象的原型链上
 * @param left
 * @param right
 * @returns {boolean}
 */
function instanceof1(left, right) {
    //获取right的原型对象
    let prototype = right.prototype;
    //判断right的原型对象是否存在于left的原型链上
    left = Reflect.getPrototypeOf(left);
    while (true) {
        if (left === null) {
            return false;
        } else if (left === prototype) {
            return true;
        }
    }
}

console.info(instanceof1([], Array));