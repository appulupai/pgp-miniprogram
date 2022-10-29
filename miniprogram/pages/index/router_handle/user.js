/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
const db = require("../db/index");
const sqlcha = "select * from user ";
const sqlzeng="insert into user (name) values(?)"
const sqlshan="delete from user where id=?"
exports.cha=(req,res) =>{
  db.query(sqlcha, function(err, results) {
    // 执行 SQL 语句失败
    if (err) {
        return res.send({ status: 1, message: err.message });
    }
    res.json({ data: results });
});
}
exports.zeng=(req,res) =>{
  let name=req.query.name
  db.query(sqlzeng, name,function(err, results) {
    // 执行 SQL 语句失败
    if (err) {
        return res.send({ status: 1, message: err.message });
    }
    res.json({ data: results });

});

}
exports.shan = (req, res) => {
  // let userid = req.query.id;

  // db.query(sqlshan, id, function(err) {
  //     // 执行 SQL 语句失败
  //     if (err) {

  //         return res.send({ status: 1, message: err.message });
  //     }
  //     res.json({ data:results });
  // });
  res.json({ data:"1" });
};