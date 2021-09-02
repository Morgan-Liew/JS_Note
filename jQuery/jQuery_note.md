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
> [record => jQuery/jquery_Demo_03.html](jquery_Demo_03.html)  
   含：     
>         基本选择器   
          层级选择器   
          过滤选择器   
          内容选择器      
          可见性选择   
          属性选择器   
          子元素选择器   
          表单选择器  
          表单对象属性

### jQuery 工具
> [record => jQuery/jquery_Demo_04.html](jquery_Demo_04.html)   
> 含：  
>    浏览器及特性检测   
>    数组和对象操作  
>    测试操作   
>    字符串和函数操作  
>    URL和插件编写

### jQuery 属性
> [record => jQuery/jquery_Demo_05.html](jquery_Demo_05.html)  
    含：属性、CSS类和HTML 代码/文本/值

### jQuery CSS 
> [record => jQuery/jquery_Demo_06.html](jquery_Demo_06.html)  
    含：CSS、位置和尺寸

### jQuery 效果
> [record => jQuery/jquery_Demo_07.html](jquery_Demo_07.html)   
    含：基本、滑动、淡入淡出、自定义和设置

### jQuery 文档处理
> [record => jQuery/jquery_Demo_08.html](jquery_Demo_08.html)  
含：内部插入、外部插入、包裹、替换和复制

### jQuery 事件对象
> [record => jQuery/jquery_Demo_09.html](jquery_Demo_09.html)  
> 含：event.data、event.target ...

### jQuery 回调函数
> [record => jQuery/jquery_Demo_10.html](jquery_Demo_10.html)  
> 含：callbacks.add、callbacks.remove ...