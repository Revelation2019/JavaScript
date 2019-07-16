/**
 * @description bind函数的实现与call、apply函数的实现有所不同，bind函数返回的是一个函数，一个将指针指向上下文对象的的函数
 * 当执行这个返回函数时，就会执行事先调用mybind的函数对象，返回计算结果。
 * @param context
 */
Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw new Error(this.toString() + "不是一个方法");
    }
    let self = this;
    let params = [...arguments].slice(1)
    return function () {
        return self.apply(context, params.concat(...arguments));
    }
}

function f(...args) {
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    return res;
}

console.log(f.myBind("", 1, 2, 3)(4, 5, 6))