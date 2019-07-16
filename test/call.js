/**
 * @description 实现call方法的思想：call方法的本质是改变执行函数的this指针，转换一下思路不难想到，
 * 重写call方法可以让调用call方法的函数对象成为上下文对象的一个属性，这样就实现了this指针的修改。
 * @param context
 */

Function.prototype.myCall = function (context) {
    context = context || global;
    context.fn = this;
    let param = [...arguments].slice(1);
    console.log(param);
    let result = fn(...param);
    delete context.fn;
    return result;

}


function fn(a, b) {
    console.log(a + b);
}

fn.myCall("", 1, 2);