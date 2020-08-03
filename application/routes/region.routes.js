module.exports = app => {
  const regions = require("../controllers/region.controllers");

  const router = require("express").Router();

  //
  router.get("/regions", regions.findAll);

  //
  router.get("/regions/:code", regions.findOne);

  app.use(router);
};
