$(function() {

    //打开页面就加载数据
    load();

    //按下回车 把完整数据存储到本地存储中
    //存储的数据格式  var todolist = [{title:"xxx",done:false},{}]
    $('#title').on('keydown', function(event) {
        //13代表回车,就存储数据
        if (event.keyCode === 13) {

            //1.数据为空就返回,不保存
            if ($(this).val() === '') {
                alert('请输入笔记');
                return false;
            }

            //1.读取本地存储原有数据
            var local = getData();
            //console.log(local);

            //2.添加新数据,把新数据追加进local数组
            var data = $(this).val();
            local.push({ title: data, done: false });

            //3.重新存储到本地
            setData(local);

            //4.将todolist本地存储数据渲染加载到界面
            load();

            //5.清空title
            $(this).val('');
        }
    })



    //读取本地存储数据
    function getData() {
        //获取本地数据
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            //有数据
            //转换为json数组
            return JSON.parse(data);
        } else {
            //没有数据就返回空数组
            return [];
        }
    }


    //本地存储数据
    function setData(data) {
        //存储数据,要转换为字符串格式
        localStorage.setItem('todolist', JSON.stringify(data));
    }


    //渲染加载数据
    function load() {
        //正在进行的个数
        var todoCount = 0;
        //已经完成的个数
        var doneCount = 0;

        //1.读取数据
        var data = getData();

        //2.遍历之前先清空里面的数据,不然每次都会多出很多数据
        $('ol').empty(); //empty() 和 html('') 作用相同
        $('ul').empty();

        //3.遍历数据         i:下标  n:数据
        $.each(data, function(i, n) {
            //console.log(n);
            //Object { title: "aaa", done: false }  n个信息  
            //done=true 说明已完成,就放到下面去
            if (n.done) {
                $('ul').prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + " >D</a></li>");
                doneCount++;
            } else {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + " >D</a></li>");
                todoCount++;
            }
        })


        //4.将计数放入前面
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }


    //totolist删除操作  事件委托,为不存在的元素添加事件
    $("ol,ul").on('click', 'a', function() {
        //1.获取本地存储
        var data = getData();

        //2.修改数据
        var index = $(this).attr('id');
        //console.log(index);    //1 2 3 4 5 是索引号
        //splice() 参数1:从哪里删除; 参数2:删除个数; 参数3:要插入的数据
        data.splice(index, 1);

        //3.保存到本地存储
        setData(data);

        //4.重新渲染页面
        load();
    });


    //正在进行和已经完成操作   事件委托,input是checkbox
    $("ol,ul").on('click', 'input', function() {
        //1.获取本地存储数据
        var data = getData();

        //2.修改数据
        //通过找到当前复选框的兄弟的a中的id
        var index = $(this).siblings('a').attr('id');
        //alert(index);   //0 1 2

        data[index].done = $(this).prop('checked');

        //3.保存到本地存储
        setData(data);

        //4.重新加载
        load();
    });

})