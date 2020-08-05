const regionService = require("../../domain/services/region.service");

exports.findAll = async (req, res) => {
  res.send(await regionService.findAll())
};

exports.findOne = async (req, res) => {
  res.send(await regionService.findOne(req.params.code))
};
