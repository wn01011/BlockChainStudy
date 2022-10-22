const fs = require("fs");

fs.mkdir("out-fs", (err) => {
  if (err) console.log(err);
});
