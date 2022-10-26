const { Router } = require("express");
const fs = require("fs");

const users = [];

fs.readFile("./data/user.json", "utf-8", (err, data) => {
  if (err) console.error(err);
  else {
    if (data) {
      data = JSON.parse(data);
      data.forEach((item) => {
        users.push(item);
      });
    }
  }
});

const router = Router();
// "/api/user"
router
  .route("/")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    users.push({ id: req.body.id, password: req.body.password });
    fs.writeFileSync("./data/user.json", `${JSON.stringify([...users])}`);
    res.end();
  });

module.exports = router;
