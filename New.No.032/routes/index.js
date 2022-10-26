const router = require("express").Router();
const user = require("./user.js");

router.use("/", (req, res, next) => {
  console.log("routes/index.js : " + req.url);
  next();
});

// router.use("/board", board);
router.use("/user", user);

module.exports = router;

// import / export
// require / module.export
