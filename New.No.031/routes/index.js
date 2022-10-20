import { Router } from "express";
const router = Router();
const todoList = [];
router
  .route("/")
  // /api/list
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    if (!todoList[req.body.index])
      todoList.push({
        text: req.body["text"],
        status: req.body["status"],
        index: req.body["index"],
      });
    else {
      if (req.body["status"] == "삭제") todoList.splice(req.body["index"], 1);
      else todoList[req.body["index"]].status = req.body["status"];
    }
    // if (req.body["index"]) {
    //   todoList[+req.body["index"]].status = req.body["status"];
    // } else {
    //   todoList.push({ text: req.body["name"], status: req.body.status });
    // }
    todoList.forEach((item, index) => {
      item.index = index;
    });

    res.end();
  });

export default router;
// module.exports = router
