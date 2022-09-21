/**
 * Zinc Search engine API
 * Zinc Search engine API documents https://docs.zincsearch.com
 *
 * The version of the OpenAPI document: 0.3.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ZincSearchSDK);
  }
}(this, function(expect, ZincSearchSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ZincSearchSDK.MetaTermQuery();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MetaTermQuery', function() {
    it('should create an instance of MetaTermQuery', function() {
      // uncomment below and update the code to test MetaTermQuery
      //var instance = new ZincSearchSDK.MetaTermQuery();
      //expect(instance).to.be.a(ZincSearchSDK.MetaTermQuery);
    });

    it('should have the property boost (base name: "boost")', function() {
      // uncomment below and update the code to test the property boost
      //var instance = new ZincSearchSDK.MetaTermQuery();
      //expect(instance).to.be();
    });

    it('should have the property caseInsensitive (base name: "case_insensitive")', function() {
      // uncomment below and update the code to test the property caseInsensitive
      //var instance = new ZincSearchSDK.MetaTermQuery();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new ZincSearchSDK.MetaTermQuery();
      //expect(instance).to.be();
    });

  });

}));
