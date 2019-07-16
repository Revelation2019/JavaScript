/**
 * @description proxy实现双重数据绑定和监控
 * @param obj
 * @param setBind
 * @param getLogger
 * @returns {*}
 */
let onWatch = function (obj, setBind, getLogger) {
    let handler = {
        set(target, property, value, receiver) {
            setBind(value);
            Reflect.set(target, property, value, receiver);
        },
        get(target, property, receiver) {
            getLogger(target, property);
            Reflect.get(target, property, receiver);
        }
    }
    return new Proxy(obj, handler);
}

let obj = {
    a: 1
};
let value;
let p = onWatch(obj, v => {
    value = v
}, (target, property) => {
    console.log(`Get ${property} = ${target[property]}`);
});
p.a = 2;
console.log(value);
p.a