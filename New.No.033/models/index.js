"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const NewTable = require("./table.js");
const db = { NewTable };
const UserTable = require("./user.js");
const userdb = { UserTable };
const ReplyTable = require("./replys.js");
const replydb = { ReplyTable };

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
// let sequelize1;
// if (config.use_env_variable) {
//   sequelize1 = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize1 = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

db.sequelize = sequelize;
db.Sequelize = Sequelize;
userdb.sequelize = sequelize;
userdb.Sequelize = Sequelize;
replydb.sequelize = sequelize;
replydb.Sequelize = Sequelize;

NewTable.init(sequelize);
NewTable.associate(db);

UserTable.init(sequelize);
UserTable.associate(userdb);

ReplyTable.init(sequelize);
ReplyTable.associate(replydb);

exports.db = db;
exports.userdb = userdb;
exports.replydb = replydb;
