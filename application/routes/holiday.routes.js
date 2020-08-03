module.exports = app => {
  const holidays = require("../controllers/holiday.controllers");
  const regions = require("../controllers/region.controllers");

  const router = require("express").Router();

  // Create a new Holiday
  router.post("/holidays/", holidays.create);

  // Retrieve all Holidays
  router.get("/holidays/", holidays.findAll);

  // Retrieve all published Holidays
  router.get("/holidays/published", holidays.findAllPublished);

  // Retrieve a single Holiday with id
  router.get("/holidays/:id", holidays.findOne);

  // Update a Holiday with id
  router.put("/holidays/:id", holidays.update);

  // Delete a Holiday with id
  router.delete("/holidays/:id", holidays.delete);

  // Create a new Holiday
  router.delete("/holidays/", holidays.deleteAll);

  //
  router.get("/holidays/:start/:end", holidays.getEasterByYear);  

  //
  router.get("/regions", regions.findAll);

  //
  router.get("/regions/:code", regions.findOne);

  app.use('/api', router);
};
