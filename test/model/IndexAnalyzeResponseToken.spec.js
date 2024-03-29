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
    instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
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

  describe('IndexAnalyzeResponseToken', function() {
    it('should create an instance of IndexAnalyzeResponseToken', function() {
      // uncomment below and update the code to test IndexAnalyzeResponseToken
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be.a(ZincSearchSDK.IndexAnalyzeResponseToken);
    });

    it('should have the property endOffset (base name: "end_offset")', function() {
      // uncomment below and update the code to test the property endOffset
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property keyword (base name: "keyword")', function() {
      // uncomment below and update the code to test the property keyword
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property startOffset (base name: "start_offset")', function() {
      // uncomment below and update the code to test the property startOffset
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ZincSearchSDK.IndexAnalyzeResponseToken();
      //expect(instance).to.be();
    });

  });

}));
