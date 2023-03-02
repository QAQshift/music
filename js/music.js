/**
 * 分析：
 * 1. 获取li的index()
 * 2. 更换背景
 * 3. 更换播放器图片和文本
 * 4. 更换播放按钮为暂停及title为暂停
 * 5. 图片旋转
 * 6. 播放歌曲
 * 
 * 
 * 其他：
 * 1. 暂停，播放
 * 2. 上一首，下一首
 * 3. 播放器可以显示和隐藏
 * */

//  准备工作  收集数据
let index = 0; //初始索引
let li = $(".banner ul li"); //  获取所有li元素
let img = $(".music .m_img img"); //  获取播放器img的元素
let text = $(".music .m_txt"); //  获取播放器text元素
let pre = $(".music .m_btn .m_pre"); //  获取上一首按钮
let play = $(".music .m_btn .m_play"); //  获取播放按钮
let next = $(".music .m_btn .m_next"); //  获取上一首按钮
let mp3 = $(".music .m_mp3"); //  获取媒体元素
let flag = false; //  判断歌曲是否播放  false为暂停 true为播放
let close = true; //  判断播放器是否显示  true为显示  false为隐藏
let voltext = document.getElementById("text");
let volJd = document.getElementById("volJd");
let mp3v = document.getElementById("mp3");
let nowTime;


/////////////////////////////////////////运用方法

// 获取点击的li索引，进行背景切换
li.click(function() {
    // console.log($(this).index());  可以拿到索引
    index = $(this).index();
    //  播放歌曲
    show();
    //  更换播放器暂停
    change_play();
});


//  点击播放按钮
play.click(function() {
    if (flag === false) {
        //  更换播放器暂停
        change_play();
        //  播放歌曲
        paly_mp3(index);
        //  图片旋转
        rotate_img(index);
        change_bg(index + 1);
    } else {
        //  更换播放器播放
        change_pause();
        //  停止播放歌曲
        stop_mp3(index);
        //  图片停止旋转
        stop_rotate()
    }

});

//  点击上一首
pre.click(function() {
    index--;
    if (0 > index) {
        index = li.length - 1;
    }
    show();
    //按钮改为暂停
    change_play();
});

//  点击下一首
next.click(function() {
    index++;
    if (index > li.length - 1) {
        index = 0;
    }
    show();
    //按钮改为暂停
    change_play();
});


//伸缩音乐播放器
$("#m_close").click(function() {
    if (close) {
        //当最右端为push图标
        $(this).removeClass("m_close");
        $(this).addClass("m_open");
        $(".music").animate({ "left": "-672px" }, 1000);
        close = false;
    } else {
        //当最右端为pull图标
        $(this).addClass("m_close");
        $(this).removeClass("m_open");
        $(".music").animate({ "left": "0px" }, 1000);
        close = true;
    }
});

//封装一个函数，方便上一首下一首调用
function show() {
    // 更换背景图片
    change_bg(index + 1);
    //  更换播放器图片
    change_img(index + 1);
    //  更换播放器文本
    change_text(index);
    //  图片旋转
    rotate_img(index);
    //  播放歌曲
    paly_mp3(index);


}



//////////////////////////////////////////////////封装的方法

//更换背景图片  播放器图片 文本
function change_bg(idx) {
    switch (idx) {
        case 1:
            //更换背景
            $("body").css({
                "background": "url(img/gem2.jpg) no-repeat",
                "background-size": "cover",
            });


            break
        case 2:
            $("body").css({
                "background": "url(img/lqz2.jpg) no-repeat",
                "background-size": "cover",
            });


            break
        case 3:
            $("body").css({
                "background": "url(img/cy3.jpg) no-repeat",
                "background-size": "cover",
            });


            break
        case 4:
            $("body").css({
                "background": "url(img/ss2.jpg) no-repeat",
                "background-size": "cover",
            });


            break
        case 5:
            $("body").css({
                "background": "url(img/mj2.jpg) no-repeat",
                "background-size": "cover",
            });


            break
        case 6:
            $("body").css({
                "background": "url(img/cx2.jpg) no-repeat",
                "background-size": "cover",
            });


            break
    }
}

//更换播放器文本
function change_img(idx) {
    //attr  一个参数为获取  两个参数为设置
    switch (idx) {
        case 1:
            //更换播放器图片
            img.attr("src", "img/gem1.jpg");
            break
        case 2:
            img.attr("src", "img/lqz1.jpg");

            break
        case 3:
            img.attr("src", "img/cy1.jpg");
            break
        case 4:
            img.attr("src", "img/ss1.jpg");
            break
        case 5:
            img.attr("src", "img/mj1.jpg");
            break
        case 6:
            img.attr("src", "img/cx1.jpg");
            break
    }

}

//更换播放器文本
function change_text(index) {
    //更换文本
    //li.eq(index)  根据索引去查找li  atrr()获取属性的值
    text.html(li.eq(index).attr("title"));
}

//更换播放器按钮为title暂停
function change_play() {
    flag = true;
    //移除原来的样式
    play.removeClass("m_play");
    //增加新的样式
    play.addClass("m_pause");
    play.attr("title", "暂停");

}

//更换播放器按钮为title播放
function change_pause() {
    flag = false;
    //移除原来的样式
    play.removeClass("m_pause");
    //增加新的样式
    play.addClass("m_play");
    play.attr("title", "播放");
}

//图片旋转
function rotate_img(index) {
    // 删除所有li的rotate_img这个class 
    li.children().removeClass("rotate_img");
    //  再给点击的li添加这个class
    li.eq(index).children().addClass("rotate_img");
}

//图片停止旋转
function stop_rotate() {
    li.children().removeClass("rotate_img");
}

//播放歌曲
function paly_mp3() {
    //  获取选中的li中的datasrc属性
    mp3.attr("src", li.eq(index).attr("datasrc"));
    //实现歌曲播放
    mp3.get(0).play();
    //修改歌曲是否播放标记  true播放  false暂停
    flag = true;
}

//停止播放歌曲
function stop_mp3() {
    //实现歌曲播放
    mp3.get(0).pause();
    //修改歌曲是否播放标记  true播放  false暂停
    flag = false;
}

//时间
window.onload = () => {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours() + '';
        let minute = date.getMinutes() + '';
        let seconds = date.getSeconds() + '';
        nowTime = `${hour.padStart(2,'0')}:${minute.padStart(2,'0')}:${seconds.padStart(2,'0')}`;
        $("#time").html(nowTime);
    }, 500);
};








//音量控制拖动
let setVol = function(event) {
    let x = event.offsetX; //获取音量当前的位置
    let bfb = x / 100 * 100;
    volColor.style.width = bfb + "%";
    volBlok.style.left = bfb - 10 + "%";
    voltext.innerHTML = Math.ceil(bfb) + "%";
    mp3v.volume = bfb / 100;
};
volJd.addEventListener("click", function(event) {
    setVol(event);
});
volJd.addEventListener("mousedown", function(event) {
    volJd.addEventListener("mousemove", setVol(event));
});
volJd.addEventListener("mouseup", function(event) {
    volJd.removeEventListener("mousemove", setVol(event));
});