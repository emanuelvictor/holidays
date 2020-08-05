const db = require("../../domain/entities");
const Region = db.regions;

// Retrieve all Holidays from the database.
exports.findAll = async () => {
  return (await Region.findAll())
};

// Find a single Holiday with an id
exports.findOne = async (code) => {
  return await Region.findByPk(code)
};
