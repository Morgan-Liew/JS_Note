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

## 原生Ajax => 01_A::
jax_native