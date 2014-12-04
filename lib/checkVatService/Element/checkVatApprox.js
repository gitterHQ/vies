var Modeler = require("../Modeler.js");
var className = 'ElementcheckVatApprox';

var ElementcheckVatApprox = function(json, parentObj) {
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
    traderName: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderName",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderCompanyType: {
      type: "TypecompanyTypeCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderCompanyType",
        type: "tns1:companyTypeCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderStreet: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderStreet",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderPostcode: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderPostcode",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderCity: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderCity",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    requesterCountryCode: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "requesterCountryCode",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    requesterVatNumber: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "requesterVatNumber",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementcheckVatApprox;
Modeler.register(ElementcheckVatApprox, "ElementcheckVatApprox");
