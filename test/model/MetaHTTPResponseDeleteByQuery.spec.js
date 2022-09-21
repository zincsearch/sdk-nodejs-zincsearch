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
    instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
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

  describe('MetaHTTPResponseDeleteByQuery', function() {
    it('should create an instance of MetaHTTPResponseDeleteByQuery', function() {
      // uncomment below and update the code to test MetaHTTPResponseDeleteByQuery
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be.a(ZincSearchSDK.MetaHTTPResponseDeleteByQuery);
    });

    it('should have the property batches (base name: "batches")', function() {
      // uncomment below and update the code to test the property batches
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property failures (base name: "failures")', function() {
      // uncomment below and update the code to test the property failures
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property noops (base name: "noops")', function() {
      // uncomment below and update the code to test the property noops
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property requestsPerSecond (base name: "requests_per_second")', function() {
      // uncomment below and update the code to test the property requestsPerSecond
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property retries (base name: "retries")', function() {
      // uncomment below and update the code to test the property retries
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property throttledMillis (base name: "throttled_millis")', function() {
      // uncomment below and update the code to test the property throttledMillis
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property throttledUntilMillis (base name: "throttled_until_millis")', function() {
      // uncomment below and update the code to test the property throttledUntilMillis
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property timeOut (base name: "time_out")', function() {
      // uncomment below and update the code to test the property timeOut
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property took (base name: "took")', function() {
      // uncomment below and update the code to test the property took
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

    it('should have the property versionConflicts (base name: "version_conflicts")', function() {
      // uncomment below and update the code to test the property versionConflicts
      //var instance = new ZincSearchSDK.MetaHTTPResponseDeleteByQuery();
      //expect(instance).to.be();
    });

  });

}));
