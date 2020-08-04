module.exports = app => {
  const holidays = require("../controllers/holiday.controllers");

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
  router.put("/feriados/:code/:date", holidays.update);

  // Delete a Holiday with id
  router.delete("/holidays/:id", holidays.delete);

  // Create a new Holiday
  router.delete("/holidays/", holidays.deleteAll);

  //
  router.get("/holidays/:start/:end", holidays.getEasterByYear);

  app.use(router);
};
