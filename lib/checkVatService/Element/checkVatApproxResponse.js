var Modeler = require("../Modeler.js");
var className = 'ElementcheckVatApproxResponse';

var ElementcheckVatApproxResponse = function(json, parentObj) {
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
    traderName: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderName",
        nillable: true,
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
        nillable: true,
        type: "tns1:companyTypeCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderAddress: {
      type: "string",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderAddress",
        type: "xsd:string"
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
    traderNameMatch: {
      type: "TypematchCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderNameMatch",
        type: "tns1:matchCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderCompanyTypeMatch: {
      type: "TypematchCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderCompanyTypeMatch",
        type: "tns1:matchCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderStreetMatch: {
      type: "TypematchCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderStreetMatch",
        type: "tns1:matchCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderPostcodeMatch: {
      type: "TypematchCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderPostcodeMatch",
        type: "tns1:matchCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    traderCityMatch: {
      type: "TypematchCode",
      wsdlDefinition: {
        maxOccurs: 1,
        minOccurs: 0,
        name: "traderCityMatch",
        type: "tns1:matchCode"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    requestIdentifier: {
      type: "string",
      wsdlDefinition: {
        name: "requestIdentifier",
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementcheckVatApproxResponse;
Modeler.register(ElementcheckVatApproxResponse, "ElementcheckVatApproxResponse");
