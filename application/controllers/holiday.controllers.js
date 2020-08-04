const db = require("../../domain/entities");
const Holiday = db.holidays;
const Region = db.regions;
const Op = db.Sequelize.Op;

isEaster = async (date) => {
  const year = date.substring(0, 4);
  date = new Date(date.split("-"));

  let easterString = await getEasterByYear(year);

  const dateString = new Date(date).toLocaleDateString()
  easterString = new Date(easterString.split("-")).toLocaleDateString();

  return dateString === easterString
};

isGoodFriday = async (date) => {
  const year = date.substring(0, 4);
  date = new Date(date.split("-"));

  let easterString = await getEasterByYear(year);

  const dateString = new Date(date).toLocaleDateString()
  const goodFridayString = new Date((await getGoodFridayStringFromEasterString(easterString)).split("-")).toLocaleDateString();

  return dateString === goodFridayString
};

getGoodFridayStringFromEasterString = async (easterString) => {

  const goodFriday = new Date(easterString.split("-"));

  goodFriday.setDate(goodFriday.getDate() - 2);

  return goodFriday.toLocaleDateString().substring(0, 10); //.replace(/\//g, '-');
};

isCorpusChristi = async function (code, date) {
  const year = date.substring(0, 4);
  date = new Date(date.split("-"));

  let easterString = await getEasterByYear(year);

  const dateString = new Date(date).toLocaleDateString()
  const corpusChristiString = new Date((await getCorpusChristiStringFromEasterString(easterString)).split("-")).toLocaleDateString();

  const region = (await Region.findByPk(code));

  if (!region) {
    return 'Region not found';
  }

  return region && region.corpusChristi && dateString === corpusChristiString
};

getCorpusChristiStringFromEasterString = async (easterString) => {

  const corpusChristi = new Date(easterString.split("-"));

  corpusChristi.setDate(corpusChristi.getDate() + 60);

  return corpusChristi.toLocaleDateString().substring(0, 10); //.replace(/\//g, '-');
};


isCarnival = async function (code, date) {
  const year = date.substring(0, 4);
  date = new Date(date.split("-"));

  let easterString = await getEasterByYear(year);

  const dateString = new Date(date).toLocaleDateString()
  const carnivalString = new Date((await getCarnivalStringFromEasterString(easterString)).split("-")).toLocaleDateString();

  const region = (await Region.findByPk(code));

  if (!region) {
    return 'Region not found';
  }

  return region && region.carnival && dateString === carnivalString
};

getCarnivalStringFromEasterString = async (easterString) => {

  const carnival = new Date(easterString.split("-"));

  carnival.setDate(carnival.getDate() - 47);

  return carnival.toLocaleDateString().substring(0, 10); //.replace(/\//g, '-');
};

getEasterByYear = async (year) => {
  const {QueryTypes} = require('sequelize');

  const resulted = await db.sequelize.query(
    'select easter from get_easter_by_year( ' + year + ' ) as easter',
    {
      type: QueryTypes.SELECT
    }
  )

  return resulted[0].easter
};

createCorpusChristi = async (req, res) => {

  const region = await Region.findByPk(req.params.code);

  if (region) {
    await region.update({corpusChristi: true});
    res.status(200).send(region);
  } else {
    res.status(404).send()
  }

};

createCarnival = async (req, res) => {

  const region = await Region.findByPk(req.params.code);

  if (region) {
    await region.update({carnival: true});
    res.status(200).send(region);
  } else {
    res.status(404).send()
  }

};

// Find a single Holiday with an id
exports.find = async (req, res) => {
  let code = (' ' + req.params.code).slice(1); // Copy without reference
  const date = (' ' + req.params.date).slice(1);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  const [holiday] = await Holiday.findAll({
    where: {regionCode: code, month: month, day: day}
  });

  // If found holiday with this regionCode
  if (holiday) {
    res.status(200).send(holiday);
    return
  }

  // If holiday was not found and regionCode it's a code of city
  if (code.length > 2) {
    // So find the holiday in states
    const stateRegionCode = code.substring(0, 2);
    const [stateHoliday] = await Holiday.findAll({
      where: {regionCode: stateRegionCode, month: month, day: day}
    });

    // If exists state holiday, so must return a 403 http code. It is not possible to remove a state holiday from the city.
    if (stateHoliday) {
      res.status(200).send(stateHoliday);
      return
    } else
      code = stateRegionCode
  }

  // If holiday was not found and regionCode it's a code of state
  if (code.length === 2) {
    // So find the holiday in states
    const nationalRegionCode = 1;
    const [nationalHoliday] = await Holiday.findAll({
      where: {regionCode: nationalRegionCode, month: month, day: day}
    });

    // If exists a national holiday, so must return a 403 http code. It is not possible to remove a national holiday from the state.
    if (nationalHoliday) {
      res.status(200).send(nationalHoliday);
      return
    }
  }

  // Verify easter
  if (await isEaster(date)) {
    res.status(200).json({name: "Páscoa"});
    return
  }

  // Verify good friday
  if (await isGoodFriday(date)) {
    res.status(200).json({name: "Sexta-Feira Santa"});
    return
  }

  // Verify corpus christi
  if ((await isCorpusChristi(req.params.code, date)) === true) {
    res.status(200).json({name: "Corpus Christi"});
    return
  } else if ((await isCorpusChristi(req.params.code, date)) === 'Region not found') {
    res.status(400).json('Region not found');
    return
  }

  // Verify corpus carnival
  if ((await isCarnival(req.params.code, date)) === true) {
    res.status(200).json({name: "Carnaval"});
    return
  } else if ((await isCarnival(req.params.code, date)) === 'Region not found') {
    res.status(400).json('Region not found');
    return
  }

  res.status(404).json('Holiday not found');
};

// Update a Holiday by the id in the request
exports.update = async (req, res) => {

  // Validate if has date param
  const date = req.params.date;
  if (!date) {
    res.status(400).send("The holiday date must be informed");
    return
  }

  // If the date is equals to 'corpus-christi' OR 'carnival', switch the algorithm
  if (date.trim() === 'corpus-christi') {
    createCorpusChristi(req, res);
    return
  }
  if(date.trim() === 'carnival'){
    createCarnival(req, res);
    return
  }

  // else
  const month = date.substring(0, 2)
  const day = date.substring(3, 5)

  // Validate region code
  const code = req.params.code;

  const holidayName = req.body.name;
  if (!holidayName) {
    res.status(400).send("The holiday name must be informed");
    return;
  }

  // Find holiday, if it not found, create them.
  const [holiday, created] = await Holiday.findOrCreate({
    where: {regionCode: code, month: month, day: day},
    defaults: {
      name: holidayName
    }
  })

  // If holiday has been created.
  if (created)
    res.status(201).send(holiday);

  // If holiday has been found and not created, it must be updated.
  else {
    await Holiday.update(req.body, {
      where: {regionCode: code, month: month, day: day}
    })
    holiday.name = holidayName;
    res.status(200).send(holiday);
  }

};

// Delete a Holiday with the specified id in the request
exports.delete = async (req, res) => {

  let code = req.params.code;
  const date = req.params.date;
  const month = date.substring(0, 2);
  const day = date.substring(3, 5);

  const [holiday] = await Holiday.findAll({
    where: {regionCode: code, month: month, day: day}
  });

  // If found holiday with this regionCode
  if (holiday) {
    await Holiday.destroy({
      where: {id: holiday.id}
    });
    res.status(204).send();
    return
  }

  // If holiday was not found and regionCode it's a code of city
  if (code.length > 2) {
    // So find the holiday in states
    const stateRegionCode = code.substring(0, 2);
    const [stateHoliday] = await Holiday.findAll({
      where: {regionCode: stateRegionCode, month: month, day: day}
    });

    // If exists state holiday, so must return a 403 http code. It is not possible to remove a state holiday from the city.
    if (stateHoliday) {
      res.status(403).send();
      return
    } else
      code = stateRegionCode
  }

  // If holiday was not found and regionCode it's a code of state
  if (code.length === 2) {
    // So find the holiday in states
    const nationalRegionCode = 1;
    const [nationalHoliday] = await Holiday.findAll({
      where: {regionCode: nationalRegionCode, month: month, day: day}
    });

    // If exists a national holiday, so must return a 403 http code. It is not possible to remove a national holiday from the state.
    if (nationalHoliday) {
      res.status(403).send();
      return
    }
  }

  res.status(404).send()
};
