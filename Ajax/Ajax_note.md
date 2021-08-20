# Ajax 笔记

## 简介
    Ajax => Asynchronous JavaScript + XML (异步 JavaScript 和 XML)
    
    最大优势，无刷新获取数据，通过Ajax可以在浏览器中向服务器发送异步请求

## XML 简介
    XML 可扩展标记语言
    用来传输和存储数据
    与HTML类似，区别在于：HTML中的都是预定义标签，XML中没有，全都是自定义标签，用来表示一些数据

## Ajax的特点

### Ajax优点
1) 可以无需刷新页面而与服务器端进行通信
2) 允许根据用户事件来更新部分页面内容

### Ajax缺点
1) 没有浏览历史，不能回退
2) 存在跨域问题(同源)
3) SEO 不友好

## HTTP 协议
   HTTP (hypertext transport protocol) 协议 『超文本传输协议』，
   协议规定浏览器和万维网服务器之间互相通信的规则

### 请求报文
**重点是格式与参数**
```
行头  POST /s?ie=utf-8 HTTP/1.1 
      Host :
      Cookie:
      Content-Type:application/x-www-form-urlencoded
      User-Agent:
      
空行体  username=admin&password=admin 
```
### 响应报文
    行  HTTP/1.1 200 OK 
    头  Content-Type: text/html;charset=utf-8 
        Content-Length:2048 
        Content-encoding:gzip

    空行
    体
         <html>
            <head>
            </head>
            <body>
                <h1>Demo...</h1>
            </body>
         </html>

## 原生Ajax => 01_Ajax_native

## Ajax-jQuery => 02_Ajax_jQuery

### jQuery中的Ajax
    1.get请求
      $.get(url,[data],[callback],[type])
         url:请求的URL地址
         data:请求携带的参数 
         callback:载入成功时回调函数
         type:设置返回内容格式，xml，html，script，json,text,_default
    
    2.post请求
      $.post(url,[data],[callback],[type])
         url:请求的URL地址
         data:请求携带的参数
         callback:载入成功时的回调函数
         type:设置返回内容格式，xml，html，script，json,text,_default
    
    3.通用Ajax
      $.ajax({
        //    :url
            url:'http://127.0.0.1:8000/jquery-server',
        //    参数
            data:{author:"morgan",editor:'webStorm'},
        //    请求类型
            type:'GET',
        //    响应体结果
            dataType:'json',
        //    成功的回调
            success:function(data){
                console.log(data);
            }
        //    超时时间
            timeout:2000,
        //    失败的回调
            error:function(){
                console.log('error');
            }
      })

## Ajax-axios => 03_Ajax_axios

## Ajax-fetch => 04_Ajax_fetch

## 跨域
   
### 同源策略 (same - origin policy)
    是浏览器的一种安全策略，最早由Netscape公司提出

    同源：协议、域名、端口号 必须完全相同
    违背同源策略就是跨域

解决跨域

      1.JSONP 
         (JSON with Padding)，是一个非官方的跨域解决方案，只支持get请求
      2.JSONP如何工作
         在网页有一些标签天生具有跨域能力
         JSONP就是利用script标签的跨域能力来发送请求
      3.JSONP使用
         1.动态的创建一个script标签
         2.设置script的src，设置回调函数
