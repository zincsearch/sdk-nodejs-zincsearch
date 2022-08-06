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
    instance = new ZincSearchSDK.V1AggregationBucket();
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

  describe('V1AggregationBucket', function() {
    it('should create an instance of V1AggregationBucket', function() {
      // uncomment below and update the code to test V1AggregationBucket
      //var instance = new ZincSearchSDK.V1AggregationBucket();
      //expect(instance).to.be.a(ZincSearchSDK.V1AggregationBucket);
    });

    it('should have the property aggregations (base name: "aggregations")', function() {
      // uncomment below and update the code to test the property aggregations
      //var instance = new ZincSearchSDK.V1AggregationBucket();
      //expect(instance).to.be();
    });

    it('should have the property docCount (base name: "doc_count")', function() {
      // uncomment below and update the code to test the property docCount
      //var instance = new ZincSearchSDK.V1AggregationBucket();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new ZincSearchSDK.V1AggregationBucket();
      //expect(instance).to.be();
    });

  });

}));
