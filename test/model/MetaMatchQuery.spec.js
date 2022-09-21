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
    instance = new ZincSearchSDK.MetaMatchQuery();
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

  describe('MetaMatchQuery', function() {
    it('should create an instance of MetaMatchQuery', function() {
      // uncomment below and update the code to test MetaMatchQuery
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be.a(ZincSearchSDK.MetaMatchQuery);
    });

    it('should have the property analyzer (base name: "analyzer")', function() {
      // uncomment below and update the code to test the property analyzer
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

    it('should have the property boost (base name: "boost")', function() {
      // uncomment below and update the code to test the property boost
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

    it('should have the property fuzziness (base name: "fuzziness")', function() {
      // uncomment below and update the code to test the property fuzziness
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

    it('should have the property prefixLength (base name: "prefix_length")', function() {
      // uncomment below and update the code to test the property prefixLength
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new ZincSearchSDK.MetaMatchQuery();
      //expect(instance).to.be();
    });

  });

}));
