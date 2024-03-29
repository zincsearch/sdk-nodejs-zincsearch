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
    instance = new ZincSearchSDK.MetaAggregationHistogram();
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

  describe('MetaAggregationHistogram', function() {
    it('should create an instance of MetaAggregationHistogram', function() {
      // uncomment below and update the code to test MetaAggregationHistogram
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be.a(ZincSearchSDK.MetaAggregationHistogram);
    });

    it('should have the property extendedBounds (base name: "extended_bounds")', function() {
      // uncomment below and update the code to test the property extendedBounds
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property hardBounds (base name: "hard_bounds")', function() {
      // uncomment below and update the code to test the property hardBounds
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property keyed (base name: "keyed")', function() {
      // uncomment below and update the code to test the property keyed
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property minDocCount (base name: "min_doc_count")', function() {
      // uncomment below and update the code to test the property minDocCount
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new ZincSearchSDK.MetaAggregationHistogram();
      //expect(instance).to.be();
    });

  });

}));
