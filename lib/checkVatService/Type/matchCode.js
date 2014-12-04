var Modeler = require("../Modeler.js");
var className = 'TypematchCode';

var TypematchCode = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  matchCode: {
      type: "string",
      wsdlDefinition: {
        name: "matchCode",
        "xsd:restriction": {
          base: "xsd:string",
          "xsd:enumeration": [
            {
              value: 1,
              "xsd:annotation": {
                "xsd:documentation": "VALID"
              }
            },
            {
              value: 2,
              "xsd:annotation": {
                "xsd:documentation": "INVALID"
              }
            },
            {
              value: 3,
              "xsd:annotation": {
                "xsd:documentation": "NOT_PROCESSED"
              }
            }
          ]
        },
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypematchCode;
Modeler.register(TypematchCode, "TypematchCode");
