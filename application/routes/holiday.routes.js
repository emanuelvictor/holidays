module.exports = app => {
  const holidays = require("../controllers/holiday.controllers");

  const router = require("express").Router();

  // Retrieve all Holidays
  router.get("/holidays/", holidays.findAll);

  // Retrieve a holiday
  router.get("/feriados/:code/:date", holidays.find);

  // Update a Holiday with id
  router.put("/feriados/:code/:date", holidays.update);

  // Delete a Holiday with id
  router.delete("/feriados/:code/:date", holidays.delete);

  //
  router.get("/holidays/:start/:end", holidays.getEasterByYear);

  app.use(router);
};
