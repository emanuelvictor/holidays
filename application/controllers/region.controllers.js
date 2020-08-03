const db = require("../../domain/entities");
const Region = db.regions;
const Op = db.Sequelize.Op;


// Retrieve all Holidays from the database.
exports.findAll = (req, res) => {
  Region.findAll()
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
  const id = req.params.code;

  Region.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Holiday with id=" + id
      });
    });
};
