const dbConfig = require("../../application/db/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.getEnv().DB, dbConfig.getEnv().USER, dbConfig.getEnv().PASSWORD, {
  host: dbConfig.getEnv().HOST,
  dialect: dbConfig.getEnv().dialect,
  operatorsAliases: 1,

  pool: {
    max: dbConfig.getEnv().pool.max,
    min: dbConfig.getEnv().pool.min,
    acquire: dbConfig.getEnv().pool.acquire,
    idle: dbConfig.getEnv().pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(sequelize, Sequelize);
db.regions = require("./region.model")(sequelize, Sequelize);
db.holidays = require("./holiday.model")(sequelize, Sequelize);

module.exports = db;
