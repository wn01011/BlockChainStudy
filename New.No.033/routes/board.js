const { Router } = require("express");
const router = Router();
const fs = require("fs");
const boards = [];
let replys = [];

const db = require("../models/index.js");

db.db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`db connected`);
  })
  .catch((err) => {
    console.error(err);
  });

fs.readFile("./data/boards.json", "utf-8", (err, data) => {
  if (err) console.error(err);
  else {
    if (data) {
      data = JSON.parse(data);
      data.forEach((item) => {
        boards.push(item);
      });
      boards.forEach((item) => {
        db.db.NewTable.create({
          textId: `${item.textId}`,
          id: `${item.id}`,
          value: `${item.value}`,
        });
      });
    }
  }
});
fs.readFile("./data/replys.json", "utf-8", (err, data) => {
  if (err) console.error(err);
  else {
    if (data) {
      data = JSON.parse(data);
      data.forEach((item) => {
        replys.push(item);
      });
      replys.forEach((item) => {
        db.replydb.ReplyTable.create({
          textId: `${item.textId}`,
          id: `${item.id}`,
          value: `${item.value}`,
        });
      });
    }
  }
});

router
  .route("/")
  .get((req, res) => {
    res.send(req.query);
  })
  .post((req, res) => {
    res.end();
  });

router.route("/upload").get((req, res) => {
  boards.push({
    textId: req.query.textId,
    id: req.query.id,
    value: req.query.value,
  });
  fs.writeFileSync("data/boards.json", `${JSON.stringify(boards)}`);
  res.send({ value: req.query.value });
});

router.route("/reply").get((req, res) => {
  replys.push({
    textId: req.query.textId,
    id: req.query.id,
    value: req.query.value,
  });
  fs.writeFileSync("data/replys.json", `${JSON.stringify(replys)}`);
  res.end();
});

router.route("/correction").get((req, res) => {
  boards.forEach((item) => {
    if (item.textId == req.query.textId && item.id == req.query.id) {
      item.value = req.query.value;
    }
  });

  fs.writeFileSync("data/boards.json", `${JSON.stringify(boards)}`);
  res.send();
});

router.route("/getBoard").get((req, res) => {
  res.send(boards);
});
router.route("/getReply").get((req, res) => {
  res.send(replys);
});

router.route("/delete").get((req, res) => {
  for (let i = 0; i < boards.length; ++i) {
    if (boards[i].textId == req.query.textId) {
      boards.splice(i, 1);
      break;
    }
  }
  replys = replys.filter((item) => item.textId != req.query.textId);
  fs.writeFileSync("data/boards.json", `${JSON.stringify(boards)}`);
  fs.writeFileSync("data/replys.json", `${JSON.stringify(replys)}`);
  res.send(req.query);
});

module.exports = router;
