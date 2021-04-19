$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁 ,点击左侧导航的时候,页面会滚动,会触发页面滚动事件,让导航栏的背景依次变化,使用互斥锁解决问题
    var flag = true;


    // 1.显示隐藏电梯导航
    //获取今日推荐上面的位置
    var toolTip = $('.recommend').offset().top;
    //console.log(toolTip); //658

    //显示左侧导航方法
    function toggleTool() {
        if ($(document).scrollTop() >= toolTip) {
            //显示侧边栏
            $(".fixedtool").fadeIn();
        } else {
            //隐藏侧边栏
            $(".fixedtool").fadeOut();
        }
    }
    //默认调用一次,防止页面刷新导航消失
    toggleTool();



    //页面滚动事件
    $(window).scroll(function() {
        //调用左侧导航
        toggleTool();

        //右侧自己滚动到相应位置,左侧导航跟着变,按照滚动顺序依次改变
        if (flag) {
            $('.floor .w').each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    //修改左侧的导航
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
                }
            });
        }
    });


    //点击左侧导航就到那里
    $('.fixedtool li').click(function() {

        //锁上,页面滚动触发事件不生效. 点击左侧导航的时候,页面会滚动,会触发页面滚动事件,让导航栏的背景依次变化,使用互斥锁解决问题
        flag = false;

        console.log($(this).index()); //0 1 2 3
        //1.当我们每次点击li,就需要计算出页面要去往的位置
        let current = $('.floor .w').eq($(this).index()).offset().top;

        //2.页面动画效果
        $('body,html').stop().animate({ scrollTop: current }, function() {
            //滚动完之后解锁,让滚动事件生效
            flag = true;
        });

        //3.点击之后,让当前li添加 current 类名,兄弟li移除这个类名
        $(this).addClass('current').siblings('li').removeClass('current');
    });
})