/**
 * Zinc Search engine API
 * Zinc Search engine API documents https://docs.zincsearch.com
 *
 * The version of the OpenAPI document: 0.2.4
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
    instance = new ZincSearchSDK.V1AggregationParams();
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

  describe('V1AggregationParams', function() {
    it('should create an instance of V1AggregationParams', function() {
      // uncomment below and update the code to test V1AggregationParams
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be.a(ZincSearchSDK.V1AggregationParams);
    });

    it('should have the property aggType (base name: "agg_type")', function() {
      // uncomment below and update the code to test the property aggType
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property aggs (base name: "aggs")', function() {
      // uncomment below and update the code to test the property aggs
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property dateRanges (base name: "date_ranges")', function() {
      // uncomment below and update the code to test the property dateRanges
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property ranges (base name: "ranges")', function() {
      // uncomment below and update the code to test the property ranges
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

    it('should have the property weightField (base name: "weight_field")', function() {
      // uncomment below and update the code to test the property weightField
      //var instance = new ZincSearchSDK.V1AggregationParams();
      //expect(instance).to.be();
    });

  });

}));