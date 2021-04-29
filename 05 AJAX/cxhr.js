//生成xhr
function cXHR() {
    //使用try解决浏览器兼容性问题
    try {
        //1 w3c标准方式 (ie6及以下不支持)
        var xhr = new XMLHttpRequest();
    } catch (e) {}

    try {
        //2 IE浏览器方式 (其他浏览器不认识)
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}

    return xhr;
}

//返回要查找的对象
function getid(id) {
    return document.querySelector(id);
}