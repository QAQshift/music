##  **关键代码**

```js
    //获取索引
    index = $(this).index();


    //当索引小于0，直接变为索引最大值
    if (0 > index) {
        index = li.length - 1;
    }

    //当索引大于索引最大值，索引变为最小值0
    if (index > li.length - 1) {
        index = 0;
    }

    //事件改变样式
    $(this).removeClass("class1");
    $(this).addClass("class2");


    //改变元素样式
    $("元素名").css({});

    //设置元素的值
    $("元素名").attr("属性", "值");

    //根据索引找到元素
    li.eq(index)

    //根据索引获取元素属性的值  li 标签的 index
    li.eq(index).attr("属性")

    //音乐播放
    媒体元素.get(0).play();

    //音乐暂停
    mp3.get(0).pause();

    //获取音量当前的位置
    let x = event.offsetX; 

    //改变声音的大小
    媒体元素.volume = x / 100;
```