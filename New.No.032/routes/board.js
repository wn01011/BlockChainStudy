const router = require("express").Router();

router.get("/", (req, res) => {
  // 응답을 보내는 메서드 : 목록과 페이징
  // axios.get("/api/board")
  res.send(req.route.path + "get으로 받았다.");
});

router.post("/add", (req, res) => {
  // 추가하는 메서드
  //   axios.get("api/board/add")
  res.send(req.route.path + "post로 받았다.");
});
module.exports = router;
