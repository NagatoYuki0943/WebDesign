//匿名函数自调用,防止变量重复
(function() {
    //通过id获取元素
    //使用this.不能使用var,不然访问不到
    var $ = function(id) {
        return document.getElementById(id);
    }

    //初始化
    $.init = function() {
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

    //封装ajax get方法,将$当做对象,添加gets属性,第二个参数是回调函数名(可以是匿名函数),第三个参数是使用字符串,json还是xml
    $.get = function(url, callback, datatype = null) {
        var xhr = $.init();
        xhr.onreadystatechange = function() {

            if (xhr.readyState == 4) {
                //不能使用return,因为这个方法是浏览器调用的,返回给浏览器没作用
                //return xhr.responseText;
                //没有第三个参数
                if (datatype == null) {
                    //使用回调函数
                    callback(xhr.responseText);
                } else if (datatype == 'json') {
                    //将json转换成对象或数组
                    var d = JSON.parse(xhr.responseText);
                    callback(d);
                } else if (datatype == 'xml') {
                    //接收xml是一个dom对象,直接返回就能用了
                    callback(xhr.responseXML);
                }

            }
        }
        xhr.open('get', url);
        xhr.send();
    }

    //封装ajax post方法,将$当做对象,添加post属性,第二个参数是页数,第三个参数是回调函数名(可以是匿名函数),第四个参数是使用字符串,json还是xml
    $.post = function(url, p, callback, datatype = null) {
            var xhr = $.init();
            xhr.onreadystatechange = function() {

                if (xhr.readyState == 4) {
                    //不能使用return,因为这个方法是浏览器调用的,返回给浏览器没作用
                    //return xhr.responseText;
                    //没有第三个参数
                    if (datatype == null) {
                        //使用回调函数
                        callback(xhr.responseText);
                    } else if (datatype == 'json') {
                        //将json转换成对象或数组
                        var d = JSON.parse(xhr.responseText);
                        callback(d);
                    } else if (datatype == 'xml') {
                        //接收xml是一个dom对象,直接返回就能用了
                        callback(xhr.responseXML);
                    }

                }
            }
            xhr.open('get', url);
            //设置请求头
            xhr.setRequestHeader('Content-type', 'x-www-form-urlencoded');
            xhr.send('page=' + p); //设置post参数
        }
        //或者将局部变量赋值为全局变量

    window.$ = $;
})();