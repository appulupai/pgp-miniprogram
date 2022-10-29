const express = require("express");
// 创建路由对象
const router = express.Router();
const userHandler = require("../router_handle/user.js");
// 注册新用户
// router.post("/reguser", userHandler.regUser);

// // 登录
// router.post("/login", userHandler.login);
router.get("/zeng", userHandler.zeng);
router.get("/shan", userHandler.shan);
// router.get("/gai", userHandler.gai);
router.get("/cha", userHandler.cha);

// 将路由对象共享出去
module.exports = router;