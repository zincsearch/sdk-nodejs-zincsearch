/**
 * Zinc Search engine API
 * Zinc Search engine API documents https://docs.zincsearch.com
 *
 * The version of the OpenAPI document: 0.2.7
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
    instance = new ZincSearchSDK.V1SearchResponse();
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

  describe('V1SearchResponse', function() {
    it('should create an instance of V1SearchResponse', function() {
      // uncomment below and update the code to test V1SearchResponse
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be.a(ZincSearchSDK.V1SearchResponse);
    });

    it('should have the property aggregations (base name: "aggregations")', function() {
      // uncomment below and update the code to test the property aggregations
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property hits (base name: "hits")', function() {
      // uncomment below and update the code to test the property hits
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property timedOut (base name: "timed_out")', function() {
      // uncomment below and update the code to test the property timedOut
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property took (base name: "took")', function() {
      // uncomment below and update the code to test the property took
      //var instance = new ZincSearchSDK.V1SearchResponse();
      //expect(instance).to.be();
    });

  });

}));
