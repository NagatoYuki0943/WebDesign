$(function() {
    //1.全选 全不选功能
    //就是把全选按钮(checkall)赋值给三个小的按钮(j-checkbox)就可以了
    //事件使用change()
    $(".checkall").change(function() {
        //1.获取全选按钮状态
        let checked = $(this).prop('checked');
        //console.log(checked);   //true false

        //2.将全选按钮的状态给小按钮和另一个全选按钮
        $(".j-checkbox,.checkall").prop('checked', checked);
    });


    //2.子选择全选的话,全选按钮也要选中
    $('.j-checkbox').change(function() {
        // .length获取长度
        // :checked 单选获取选中的部分
        if ($('.j-checkbox').length == $('.j-checkbox:checked').length) {
            //全选按钮选中
            $(".checkall").prop('checked', true);
        } else {
            //全选按钮不选中
            $(".checkall").prop('checked', false);
        }
    })


    //商品增加
    $('.increment').click(function() {
        //1.得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        n++;
        //2.将值返回过去
        $(this).siblings('.itxt').val(n);

        //3.商品获取单价
        //var price = $(this).parent().parent().siblings('.p-price').text();
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        //console.log(price);   //￥24.80
        //4.去除 ￥ 符号
        p = p.substr(1);
        //console.log(price); //24.80

        //5.得到总价,保留两位小数
        var price = (p * n).toFixed(2);

        //6.返回商品总价
        $(this).parent().parent().siblings('.p-sum').text("￥" + price);
    });


    //商品减少
    $('.decrement').click(function() {

        //1.得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        //最小是1
        if (n == 1) {
            return false;
        }
        n--;
        //2.将值返回过去
        $(this).siblings('.itxt').val(n);
        //console.log(n);

        //3.商品获取单价
        //var price = $(this).parent().parent().siblings('.p-price').text();
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        //console.log(price);   //￥24.80
        //4.去除 ￥ 符号
        p = p.substr(1);
        //console.log(price); //24.80

        //5.得到总价,保留两位小数
        var price = (p * n).toFixed(2);

        //6.返回商品总价
        $(this).parent().parent().siblings('.p-sum').text("￥" + price);
    });



    //表单text变化就修改
    $('.itxt').change(function() {
        //1.得到文本框中的值
        var n = $(this).val();

        //2.商品获取单价
        var p = $(this).parents('.p-num').siblings('.p-price').text();
        //4.去除 ￥ 符号
        p = p.substr(1);

        //5.得到总价,保留两位小数
        var price = (p * n).toFixed(2);

        //6.返回商品总价
        $(this).parent().parent().siblings('.p-sum').text("￥" + price);

    })
})