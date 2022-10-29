// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const path = require("path");
const app = express();
var bodypaser = require("body-parser");
// write your code here...
// 导入 cors 中间件
const cors = require("cors");
// 将 cors 注册为全局中间件
var jsonparser = bodypaser.json();
var urlencodedparser = bodypaser.urlencoded({ extended: false });
app.use(bodypaser.urlencoded({ extended: false }));
app.use(bodypaser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.wxml");
});
app.use(express.urlencoded({ extended: false }));
// 导入并注册用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(5000, function() {
    console.log("api server running at https://127.0.0.1:5000");
});