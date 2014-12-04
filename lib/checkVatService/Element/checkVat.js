var Modeler = require("../Modeler.js");
var className = 'ElementcheckVat';

var ElementcheckVat = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  countryCode: {
      type: "string",
      wsdlDefinition: {
        name: "countryCode",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vatNumber: {
      type: "string",
      wsdlDefinition: {
        name: "vatNumber",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementcheckVat;
Modeler.register(ElementcheckVat, "ElementcheckVat");
