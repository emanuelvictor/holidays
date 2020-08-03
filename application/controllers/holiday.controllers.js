const db = require("../../domain/entities");
const Holiday = db.holidays;
const Op = db.Sequelize.Op;

// Create and Save a new Holiday
exports.create = (req, res) => {
  // Validate request
  if (!req.body.year || !req.body.month || !req.body.regionCode) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Holiday
  const holiday = {
    month: req.body.name,
    year: req.body.year,
    regionCode: req.body.regionCode
  };

  // Save Holiday in the database
  Holiday.create(holiday)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Holiday."
      });
    });
};

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
exports.update = (req, res) => {
  const id = req.params.id;

  Holiday.update(req.body, {
    where: {id: id}
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "Holiday was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Holiday with id=${id}. Maybe Holiday was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Holiday with id=" + id
      });
    });
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
