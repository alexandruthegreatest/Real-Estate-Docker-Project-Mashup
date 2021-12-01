const sql = require("../db.js");

// constructor
const Tenant = function(tenant) {

  this.first_name = tenant.first_name;
  this.last_name = tenant.last_name;
  this.unit_number = tenant.unit_number;
  this.phone = tenant.phone;
  this.email = tenant.email;
  this.resident_center_status = tenant.resident_center_status;
  this.text_message_status = tenant.text_message_status;

};

Tenant.create = (newtenant, result) => {
  sql.query("INSERT INTO new_tenant SET ?", newtenant, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new_tenant: ", { id: res.insertId, ...newtenant });
    result(null, { id: res.insertId, ...newtenant });
  });
};

Tenant.findById = (leaseId, result) => {
  sql.query(`SELECT * FROM new_tenant WHERE id = ${leaseId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tenant: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tenant with the id
    result({ kind: "not_found" }, null);
  });
};

Tenant.findByCenterStatus = (resident_center_status, result) => {
    sql.query(`SELECT * FROM new_tenant WHERE resident_center_status LIKE '${resident_center_status}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found tenant: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found with the id
      result({ kind: "not_found" }, null);
    });
  };

Tenant.findbyFirstName = (first_name, result) => {
  sql.query(`SELECT * FROM new_tenant WHERE first_name LIKE '${first_name}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tenant: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tenant with the id
    result({ kind: "not_found" }, null);
  });
};
Tenant.getAll = result => {
  sql.query("SELECT * FROM new_tenant", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tenant: ", res);
    result(null, res);
  });
};


Tenant.updateById = (id, tenant, result) => {
  sql.query(
    "UPDATE new_tenant SET first_name = ?, first_name = ?, operating_account = ? WHERE id = ?",
    [tenant.property_type, tenant.first_name, tenant.operating_account, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tenant with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tenant: ", { id: id, ...tenant });
      result(null, { id: id, ...tenant });
    }
  );
};

Tenant.remove = (id, result) => {
  sql.query("DELETE FROM new_tenant WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tenant with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tenant with id: ", id);
    result(null, res);
  });
};

Tenant.removeAll = result => {
  sql.query("DELETE FROM new_tenant", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} properties`);
    result(null, res);
  });
};

module.exports = Tenant;