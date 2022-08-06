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
    instance = new ZincSearchSDK.MetaPage();
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

  describe('MetaPage', function() {
    it('should create an instance of MetaPage', function() {
      // uncomment below and update the code to test MetaPage
      //var instance = new ZincSearchSDK.MetaPage();
      //expect(instance).to.be.a(ZincSearchSDK.MetaPage);
    });

    it('should have the property pageNum (base name: "page_num")', function() {
      // uncomment below and update the code to test the property pageNum
      //var instance = new ZincSearchSDK.MetaPage();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "page_size")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new ZincSearchSDK.MetaPage();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new ZincSearchSDK.MetaPage();
      //expect(instance).to.be();
    });

  });

}));