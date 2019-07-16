/**
 * @description async使用
 * @returns {Promise<number>}
 */
async function f() {
    return 1;
}

console.log(f());//Promise { 1 }，promise此时状态是resolved，其中1是resolve函数传递给回调函数的参数


console.log(f().then(function (res) {
    console.log(res);
}))//Promise { <pending> }，返回一个全新的promise对象，状态是pending

f().then(function (res) {
    console.log(res);
}, function (error) {
    console.log(error);
});

/**
 * @description await使用
 * 1、await只能在async函数中使用
 * 2、await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
 * 若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。
 * 若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。
 * 另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。
 */

//同步
// async function asyncAwaitFn(str) {
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(str)
//         }, 1000);
//     })
// }
//
// const serialFn = async () => { //串行执行
//
//     console.time('serialFn')
//     console.log(await asyncAwaitFn('string 1'));
//     console.log(await asyncAwaitFn('string 2'));
//     console.timeEnd('serialFn')
// }
//
// serialFn();


//异步
async function asyncAwaitFn(str) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str)
        }, 1000);
    })
}

const serialFn = async () => { //串行执行

    console.time('parallel')
    const parallelOne = asyncAwaitFn('string 1');
    const parallelTwo = asyncAwaitFn('string 2')

    //直接打印
    console.log(await parallelOne)
    console.log(await parallelTwo)
    console.timeEnd('parallel')
}

serialFn();
