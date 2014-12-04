var Modeler = require("../Modeler.js");
var className = 'TypecompanyTypeCode';

var TypecompanyTypeCode = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  companyTypeCode: {
      type: "string",
      wsdlDefinition: {
        name: "companyTypeCode",
        "xsd:restriction": {
          base: "xsd:string",
          "xsd:pattern": {
            value: "[A-Z]{2}\\-[1-9][0-9]?"
          }
        },
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypecompanyTypeCode;
Modeler.register(TypecompanyTypeCode, "TypecompanyTypeCode");
