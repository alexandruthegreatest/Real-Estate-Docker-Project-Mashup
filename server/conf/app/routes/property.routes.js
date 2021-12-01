const Tenant = require("../models/tenant.model.js");

module.exports = app => {
    const properties = require("../controllers/property.controller.js");
    const tenant = require("../controllers/tenant.controller.js");

    // Create a new Property
    app.post("/properties", properties.create);
  
    app.get("/properties", properties.findAll);
    
    app.get("/property/:owner", properties.findCustom);

    app.get("/property-name/:property_name", properties.findPropName);


    app.get("/properties/:propertyId", properties.findOne);

    // Update a Property with propertyId
    app.put("/properties/:propertyId", properties.update);
  
    // Delete a Property with propertyId
    app.delete("/properties/:propertyId", properties.delete);
  
    // app.delete("/properties", properties.deleteAll);


    // Tenants

    app.post("/tenant", tenant.create);
  
    app.get("/tenants", tenant.findAll);

    app.get("/tenants/:tenantId", tenant.findOne);
  };