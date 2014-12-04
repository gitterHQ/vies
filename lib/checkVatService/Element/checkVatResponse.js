var Modeler = require("../Modeler.js");
var className = 'ElementcheckVatResponse';

var ElementcheckVatResponse = function(json, parentObj) {
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
    },
    requestDate: {
      type: "Typedate",
      wsdlDefinition: {
        name: "requestDate",
        type: "xsd:date"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    valid: {
      type: "boolean",
      wsdlDefinition: {
        name: "valid",
        type: "xsd:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "name",
        nillable: true,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    address: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "address",
        nillable: true,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementcheckVatResponse;
Modeler.register(ElementcheckVatResponse, "ElementcheckVatResponse");
