//1. 引入express
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

app.get("/server", (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  res.send("Hello Ajax");
});

app.post("/server", (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应体
    res.send("Hello Ajax post");
});

app.all("/json-server", (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    const data = {
        name:'morgan',
        email:'1933942843@qq.com',
        editor:'webStorm'
    }
    let str = JSON.stringify(data);

    // 设置响应体
    // setTimeout(() => {
    //    设置响应体
        res.send(str);
    // },3000)

});

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务启动，8000 端口监听中...");
});
