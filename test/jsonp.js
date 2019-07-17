/**
 * 利用script标签实现跨域请求，每次请求时动态创建script标签来实现jsonp方法
 * @param url 请求地址，请求为get类型
 * @param callBack 回调函数的名称
 * @param success 处理返回数据函数
 */


const jsonp = function (url,callBack,success) {
    let scriptNode = document.createElement("script");
    scriptNode.url = url;
    scriptNode.async = true;//设置为异步
    scriptNode.type = "text/javascript";
    window[callBack]=function (data) {
        success && success(data);
    };
    document.body.appendChild(scriptNode);//最后要将script脚本节点插入到文档流中
};

// jsonp("http://localhost:8888/api?param1=a&param2=b","callBack",function (data) {
//     console.log(data);
// });

export default jsonp;
