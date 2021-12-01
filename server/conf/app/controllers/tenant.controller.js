const Tenant = require("../models/tenant.model.js");

// Create and Save a new Tenant
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Sorry the tenant body not be empty!"
      });
    }
    console.log(req);
    // Create a Tenant
    const tenant = new Tenant({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        unit_number:req.body.unit_number,
        phone: req.body.phone,
        email: req.body.email,
        resident_center_status: req.body.resident_center_status,
        text_message_status: req.body.text_message_status
     });
  
    // Save Tenant in the database
    Tenant.create(tenant, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tenant."
        });
      else res.send(data);
    });
  };

exports.findAll = (req, res) => {

    Tenant.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving properties."
        });
      else res.send(data);
    });

  };


// Find a single Tenant with a tenantId
exports.findOne = (req, res) => {
    Tenant.findById(req.params.tenantId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tenant with id ${req.params.tenantId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tenant with id " + req.params.tenantId
          });
        }
      } else res.send(data);
    });
  };

  exports.findCustom = (req, res) => {

    Tenant.findByCenterStatus(req.params.resident_center_status, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tenant with resident_center_status ${req.params.resident_center_status}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tenant with resident_center_status " + req.params.resident_center_status
          });
        }
      } else res.send(data);
    });
  };

  exports.findPropName = (req, res) => {

    Tenant.findbyFirstName(req.params.first_name, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tenant with name ${req.params.first_name}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tenant with name " + req.params.first_name
          });
        }
      } else res.send(data);
    });
  };


// Update a Tenant identified by the tenantId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Tenant.updateById(
      req.params.tenantId,
      new Tenant(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tenant with id ${req.params.tenantId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Tenant with id " + req.params.tenantId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Tenant with the specified tenantId in the request
exports.delete = (req, res) => {
    Tenant.remove(req.params.tenantId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tenant with id ${req.params.tenantId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Tenant with id " + req.params.tenantId
          });
        }
      } else res.send({ message: `Tenant was deleted successfully!` });
    });
  };

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Tenant.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all properties."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };