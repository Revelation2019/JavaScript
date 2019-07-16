/**
 * @description 实现apply方法的思路：跟实现call方法的思路一样，只是参数的类型不一样。
 * 同样使调用call函数的函数对象成为上下文对象的一个属性
 *
 */
Function.prototype.myApply = function (context) {
    context = context || global;
    context.fn = this;
    let params = arguments[1];
    let result = context.fn(params);
    delete context.fn;
    return result;
}

function f(args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(f.myApply("", [1, 2, 3]));