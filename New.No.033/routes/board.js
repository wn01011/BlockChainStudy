const { Router } = require("express");
const router = Router();
router
  .route("/")
  .get((req, res) => {
    res.send(req.query);
  })
  .post((req, res) => {
    res.end();
  });

router.route("/upload").get((req, res) => {
  res.send({ value: req.query.value });
});
module.exports = router;
