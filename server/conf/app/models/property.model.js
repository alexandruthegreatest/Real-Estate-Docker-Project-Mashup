const sql = require("../db.js");

// constructor
const Property = function(property) {
  this.property_type = property.property_type;
  this.property_name = property.property_name;
  this.owner = property.owner;
  this.operating_account = property.operating_account;
  this.street_address = property.street_address;
  this.postal_code = property.postal_code;
  this.country = property.country;
  this.property_reserve = property.property_reserve;
  this.manager = property.manager;
  this.unit_number = property.unit_number;
  this.soft = property.soft;
};

Property.create = (newProperty, result) => {
  sql.query("INSERT INTO new_property SET ?", newProperty, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new_property: ", { id: res.insertId, ...newProperty });
    result(null, { id: res.insertId, ...newProperty });
  });
};

Property.findById = (propertyId, result) => {
  sql.query(`SELECT * FROM new_property WHERE id = ${propertyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found property: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Property with the id
    result({ kind: "not_found" }, null);
  });
};
Property.findByOwner = (owner, result) => {
  sql.query(`SELECT * FROM new_property WHERE owner LIKE '${owner}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found property: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Property with the id
    result({ kind: "not_found" }, null);
  });
};
Property.findByPropertyName = (p_name, result) => {
  sql.query(`SELECT * FROM new_property WHERE property_name LIKE '${p_name}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found property: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Property with the id
    result({ kind: "not_found" }, null);
  });
};

Property.getAll = result => {
  sql.query("SELECT * FROM new_property", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("properties: ", res);
    result(null, res);
  });
};


Property.updateById = (id, property, result) => {
  sql.query(
    "UPDATE new_property SET property_type = ?, owner = ?, operating_account = ? WHERE id = ?",
    [property.property_type, property.owner, property.operating_account, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Property with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated property: ", { id: id, ...property });
      result(null, { id: id, ...property });
    }
  );
};

Property.remove = (id, result) => {
  sql.query("DELETE FROM new_property WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Property with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted property with id: ", id);
    result(null, res);
  });
};

Property.removeAll = result => {
  sql.query("DELETE FROM new_property", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} properties`);
    result(null, res);
  });
};

module.exports = Property;