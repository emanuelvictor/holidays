const db = require("../../domain/entities");
const Holiday = db.holidays;
const Op = db.Sequelize.Op;

// Retrieve all Holidays from the database.
exports.findAll = (req, res) => {
  Holiday.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving holidays."
      });
    });
};

// Find a single Holiday with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Holiday.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Holiday with id=" + id
      });
    });
};

// Update a Holiday by the id in the request
exports.update = async (req, res) => {

  const holidayName = req.body.name;
  if (!holidayName)
    res.status(400).send("The holiday name must be informed")

  const code = req.params.code;
  const date = req.params.date;

  const month = date.substring(0, 2)
  const day = date.substring(3, 5)

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

  // Holiday.update(req.body, {
  //   where: {id: id}
  // })
  //   .then(num => {
  //     if (num === 1) {
  //       res.send({
  //         message: "Holiday was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Holiday with id=${id}. Maybe Holiday was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Holiday with id=" + id
  //     });
  //   });
};

// Delete a Holiday with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Holiday.destroy({
    where: {id: id}
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "Holiday was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Holiday with id=${id}. Maybe Holiday was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Holiday with id=" + id
      });
    });
};

// Delete all Holidays from the database.
exports.deleteAll = (req, res) => {
  Holiday.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({message: `${nums} Holidays were deleted successfully!`});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all holidays."
      });
    });
};

// Find all published Holidays
exports.findAllPublished = (req, res) => {
  Holiday.findAll({where: {published: true}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving holidays."
      });
    });
};

// Must be in sequelize orm
exports.getEasterByYear = async (request, response) => {

  const start = request.params.start;

  const end = request.params.end;

  const {QueryTypes} = require('sequelize');

  let result = await db.sequelize.query(
    'SELECT\n' +
    '    year,\n' +
    '    get_easter_by_year( year ) as easter\n' +
    'FROM\n' +
    '    generate_series( ' + start + ', ' + end + ') AS year\n' +
    'ORDER BY\n' +
    '    year;',
    {
      type: QueryTypes.SELECT
    }
  );

  response.status(200).json(result)
}
