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
})