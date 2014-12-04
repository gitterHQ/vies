/* jshint node:true */
'use strict';

var checkVatService = require('./checkVatService');
checkVatService.Settings.debugSoap = true;

exports.checkVat = function(countryCode, vatNumber, callback) {
  var checkVatRequest = new checkVatService.checkVatPort.checkVat({
    countryCode: countryCode,
    vatNumber: vatNumber
  });

  checkVatRequest.request(function(err, response) {
    if(err) return callback(err);

    return callback(null, {
        countryCode: response.countryCode,
        vatNumber: response.vatNumber,
        requestDate: response.requestDate,
        valid: response.valid,
        name: response.name,
        address: response.address,
      });
  });

};

/**
 * Options are
 *   countryCode
 *   vatNumber
 *   traderName
 *   traderCompanyType
 *   traderStreet
 *   traderPostcode
 *   traderCity
 *   requesterCountryCode
 *   requesterVatNumber
 */
exports.checkVatApprox = function(options, callback) {
  var checkVatApproxRequest = new checkVatService.checkVatPort.checkVatApprox(options);

  checkVatApproxRequest.request(function(err, response) {
    if(err) return callback(err);

    return callback(null, {
        countryCode: response.countryCode,
        vatNumber: response.vatNumber,
        requestDate: response.requestDate,
        valid: response.valid,
        traderName: response.traderName,
        traderCompanyType: response.traderCompanyType,
        traderAddress: response.traderAddress,
        traderStreet: response.traderStreet,
        traderPostcode: response.traderPostcode,
        traderCity: response.traderCity,
        traderNameMatch: response.traderNameMatch,
        traderCompanyTypeMatch: response.traderCompanyTypeMatch,
        traderStreetMatch: response.traderStreetMatch,
        traderPostcodeMatch: response.traderPostcodeMatch,
        traderCityMatch: response.traderCityMatch,
        requestIdentifier: response.requestIdentifier
      });
  });

};

