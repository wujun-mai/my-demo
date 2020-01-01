//循环次数
let header_num = document.getElementsByClassName('banner_item').length
// 图片长度dom
let move_long = document.getElementsByClassName('banner')[0]

//屏幕宽度
let width = document.documentElement.clientWidth

// 循环参数
let looper_number = 0

// 循环计时器
let time_looper = setInterval(() => {
    header_banner()
}, 2000);

//轮播原点
let circle = $('.banner_choose_item')
//给 原点赋予初始值
circle.eq(0).addClass("li_color")

//图片轮播位置变换
function header_banner() {
    looper_number++
    let miux = looper_number * width
    move_long.style.left = `-${miux}px`

    if (looper_number > header_num - 2) {
        looper_number = 0
        //给原点赋予动态值
        circle.eq(looper_number).addClass("li_color")
        circle.eq(looper_number).siblings().removeClass("li_color")

    } else {
        circle.eq(looper_number).addClass("li_color")
        circle.eq(looper_number).siblings().removeClass("li_color")
    }
}

// 使用原生js找到li dom节点
let dom_circle = document.getElementsByClassName("banner_choose_item")

// 对点击的 li 小点进行监听
circle.on('click', function (e) {
    // 点击停止以前的定时器 以免混乱
    clearInterval(time_looper)
    // 对点击的小点进行遍历查找 调出他的 index位置
    for (let i = 0; i < dom_circle.length; i++) {
        // 判断找到的小点
        if (e.target == dom_circle[i]) {
            //对点击小点 和其兄弟元素进行背景切换
            circle.eq(i).addClass("li_color")
            circle.eq(i).siblings().removeClass("li_color")
            //使循环参数变为当前小点的index 
            looper_number = i
            // 使点击后轮播背景图定位到相应位置
            let miux = looper_number * width
            move_long.style.left = `-${miux}px`
            //点击完毕后重新启用定时器 不用let再次定义time_looper了 否则会有两个定时器
            time_looper = setInterval(() => {
                header_banner()
            }, 2000);
        }
    }
})




// 页面跳转
function jump() {
    window.location = 'www.baidu.com'
}
let height = $('.art_o').height()
$('.position_bottom').height(height)

let height_1 = $('.tabber').height()
$(".position").css({
    "margin-bottom": `${height_1}px`
})