$(function() {

    //1.全选 全不选功能
    //就是把全选按钮(checkall)赋值给三个小的按钮(j-checkbox)就可以了
    //事件使用change()
    $(".checkall").change(function() {
        //1.获取全选按钮状态 prop获取固有属性
        let checked = $(this).prop('checked');
        //console.log(checked);   //true false

        //2.将全选按钮的状态给小按钮和另一个全选按钮
        $(".j-checkbox,.checkall").prop('checked', checked);


        //3.全部选中添加背景颜色类
        if ($(this).prop('checked')) {
            //让所有商品添加 check-cart-item 类名
            $('.cart-item').addClass('check-cart-item');
        } else {
            //移除check-cart-item 类名
            $('.cart-item').removeClass('check-cart-item');
        }
    });


    //2.子选择全选的话,全选按钮也要选中
    $('.j-checkbox').change(function() {
        // .length获取长度
        // :checked 单选获取选中的部分
        //1.判断是否将全选按钮勾选
        if ($('.j-checkbox').length == $('.j-checkbox:checked').length) {
            //全选按钮选中
            $(".checkall").prop('checked', true);

        } else {
            //全选按钮不选中
            $(".checkall").prop('checked', false);
        }

        //2.勾选就添加背景颜色
        if ($(this).prop('checked')) {
            //让当前商品添加 check-cart-item 类名
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            //移除check-cart-item 类名
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    });
    //开始调用一次,为的是后面的背景颜色被选上
    $('.j-checkbox').change();


    //商品增加
    $('.increment').click(function() {
        //1.得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        n++;
        //2.将值返回过去
        $(this).siblings('.itxt').val(n);

        //3.单个商品总额
        sum(this, n);

        //4.商品总数和总金额
        getSum();
    });


    //商品减少
    $('.decrement').click(function() {

        //1.得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        //最小是1
        if (n <= 1) {
            return false;
        }
        n--;
        //2.将值返回过去
        $(this).siblings('.itxt').val(n);
        //console.log(n);

        //3.单个商品总额
        sum(this, n);

        //4.商品总数和总金额
        getSum();
    });


    //表单text变化就修改
    $('.itxt').change(function() {
        //1.得到文本框中的值
        var n = $(this).val();

        //2.单个商品总额
        sum(this, n);

        //3.商品总数和总金额
        getSum();
    });
    //刷新页面就调用一次,得出正确的单个商品总额
    $('.itxt').change();
    //$('.itxt').trigger('change');


    //单个商品总额
    function sum(_this, n) {
        //1.商品获取单价
        var p = $(_this).parents('.p-num').siblings('.p-price').text();

        //2.去除 ￥ 符号
        p = p.substr(1);

        //3.得到总价,保留两位小数
        var price = (p * n).toFixed(2);

        //4.返回商品总价
        $(_this).parents('.p-num').siblings('.p-sum').text("￥" + price);
    }


    //总计商品函数
    function getSum() {
        var count = 0;
        var money = 0;
        //2直接找到相应的标签即可,不需要从父亲直接找
        $('.itxt').each(function(i, ele) {
            //累加个数
            //下面四个方法两两作用相同
            //Number.parseInt() parseInt()
            //Number.parseFloat() parseFloat()
            count += parseInt($(ele).val());
        });

        //3.修改商品总数
        $('.amount-sum em').text(count);

        //4.计算总金额
        $('.p-sum').each(function(i, ele) {
            //1.去除 ￥ 符号  2.转换为浮点型  

            //下面四个方法两两作用相同
            //Number.parseInt() parseInt()
            //Number.parseFloat() parseFloat()
            money += parseFloat($(ele).text().substr(1));
        });

        //5.保留两位小数
        money = money.toFixed(2);

        //6.修改总金额
        $('.price-sum em').text("￥" + money);
    }
    //打开页面调用一次
    getSum();


    //删除商品模块
    //删除当前商品
    $('.p-action a').click(function() {
        //1.删除当前商品
        $(this).parents('.cart-item').remove();
        //2.重新计算总价
        getSum();
    });


    //删除选中按钮对应的多个商品
    $('.remove-batch').click(function() {
        //1.删除所选的商品 找到对勾的父亲元素
        $(".j-checkbox:checked").parents('.cart-item').remove();
        //2.重新计算总价
        getSum();
    });


    //清理购物车
    $('.clear-all').click(function() {
        //清理所有cart-item商品
        $('.cart-item').remove();
        //2.重新计算总价
        getSum();
    });

})