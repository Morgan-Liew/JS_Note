# jQuery 笔记

### 简介
    是一个JavaScript函数库，极大简化JavaScript编程

    字面意思即JavaScript和查询Query，即用于辅助开发JavaScript的库。

    “写的少，做的多”  -- jQuery


包含以下功能：
+ HTML 元素选取
+ HTML 元素操作
+ CSS操作
+ HTML 事件函数
+ JavaScript 特效和动画
+ HTML DOM 遍历和修改
+ Ajax
+ Utilities
除以上外，jQuery还提供大量的插件

### jQuery 语法
    通过选取HTML元素，并对选取的元素执行某些操作

#### 基础语法 
$(selector).action()
+ $ 定义jQuery
+ selector 选择符 => 查询和查找元素
+ jQuery的action()执行对元素的操作

jQuery核心函数  => jQuery / $

函数用：$(param)
    
    1).参数为函数：当DOM加载完后，执行此回调函数
    2).参数为选择器字符串：查找所有匹配的标签，将它们封装为jQuery对象
    3).参数为DOM对象：将DOM对象封装为jQuery对象
    4).参数为html标签字符串：创建标签对象并封装成jQuery对象

对象用：$.xxx()

jQuery核心对象

执行jQuery函数返回的就是jQuery对象
使用：$obj.xxx()

### jQuery 选择器
    record => jQuery/jquery_Demo_03.html
### jQuery 工具
    record => jQuery/jquery_Demo_04.html

### 属性
    record => jQuery/jquery_Demo_05.html