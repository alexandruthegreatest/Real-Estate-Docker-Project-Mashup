const Property = require("../models/property.model.js");

// Create and Save a new Property
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req);
    // Create a Property
    const property = new Property({
      property_type: req.body.property_type,
      owner: req.body.owner,
      property_name:req.body.property_name,
      operating_account: req.body.operating_account,
      street_address:req.body.street_address,
      postal_code:req.body.postal_code,
      country:req.body.country,
      property_reserve:req.body.property_reserve,
      manager:req.body.manager,
      unit_number:req.body.unit_number,
      soft:req.body.soft
    });
  
    // Save Property in the database
    Property.create(property, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Property."
        });
      else res.send(data);
    });
  };

exports.findAll = (req, res) => {

    Property.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving properties."
        });
      else res.send(data);
    });

  };


// Find a single Property with a propertyId
exports.findOne = (req, res) => {
    Property.findById(req.params.propertyId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Property with id ${req.params.propertyId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Property with id " + req.params.propertyId
          });
        }
      } else res.send(data);
    });
  };

  exports.findCustom = (req, res) => {

    Property.findByOwner(req.params.owner, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Property with owner ${req.params.owner}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Property with owner " + req.params.owner
          });
        }
      } else res.send(data);
    });
  };

  exports.findPropName = (req, res) => {

    Property.findByPropertyName(req.params.property_name, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Property with name ${req.params.property_name}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Property with name " + req.params.property_name
          });
        }
      } else res.send(data);
    });
  };


// Update a Property identified by the propertyId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Property.updateById(
      req.params.propertyId,
      new Property(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Property with id ${req.params.propertyId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Property with id " + req.params.propertyId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Property with the specified propertyId in the request
exports.delete = (req, res) => {
    Property.remove(req.params.propertyId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Property with id ${req.params.propertyId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Property with id " + req.params.propertyId
          });
        }
      } else res.send({ message: `Property was deleted successfully!` });
    });
  };

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Property.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all properties."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };