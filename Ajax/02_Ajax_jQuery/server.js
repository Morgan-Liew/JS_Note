//1. 引入express
const express = require("express");

//2.创建应用对象
const app = express();

//jQuery 服务
app.all('/jquery-server', (req, res) => {

    const data = {
        "success": true,
        "code": "0",
        "data": null,
        "errorMessage": null,
        "currentTime": 1629427956906
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data));
    // res.send('This is a server to practise jquery-ajax :' + '<br/>' + 'data:' + JSON.stringify(data));
});

// 监听端口启动服务
app.listen(8000, () => {
    console.log("服务启动，8000 端口监听中...");
});

