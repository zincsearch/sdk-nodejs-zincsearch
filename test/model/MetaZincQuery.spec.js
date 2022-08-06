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
    instance = new ZincSearchSDK.MetaZincQuery();
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

  describe('MetaZincQuery', function() {
    it('should create an instance of MetaZincQuery', function() {
      // uncomment below and update the code to test MetaZincQuery
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be.a(ZincSearchSDK.MetaZincQuery);
    });

    it('should have the property source (base name: "_source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property aggs (base name: "aggs")', function() {
      // uncomment below and update the code to test the property aggs
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property explain (base name: "explain")', function() {
      // uncomment below and update the code to test the property explain
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property highlight (base name: "highlight")', function() {
      // uncomment below and update the code to test the property highlight
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

    it('should have the property trackTotalHits (base name: "track_total_hits")', function() {
      // uncomment below and update the code to test the property trackTotalHits
      //var instance = new ZincSearchSDK.MetaZincQuery();
      //expect(instance).to.be();
    });

  });

}));
