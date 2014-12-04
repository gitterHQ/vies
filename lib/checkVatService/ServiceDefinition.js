module.exports = {
  "checkVatPort": {
    "namespace": "urn:ec.europa.eu:taxud:vies:services:checkVat:types",
    "serviceUrl": "http://ec.europa.eu/taxation_customs/vies/services/checkVatService",
    "checkVat": {
      "soapAction": "",
      "input": "ElementcheckVat",
      "output": "ElementcheckVatResponse"
    },
    "checkVatApprox": {
      "soapAction": "",
      "input": "ElementcheckVatApprox",
      "output": "ElementcheckVatApproxResponse"
    }
  }
}
