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
    instance = new ZincSearchSDK.MetaHighlight();
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

  describe('MetaHighlight', function() {
    it('should create an instance of MetaHighlight', function() {
      // uncomment below and update the code to test MetaHighlight
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be.a(ZincSearchSDK.MetaHighlight);
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be();
    });

    it('should have the property fragmentSize (base name: "fragment_size")', function() {
      // uncomment below and update the code to test the property fragmentSize
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be();
    });

    it('should have the property numberOfFragments (base name: "number_of_fragments")', function() {
      // uncomment below and update the code to test the property numberOfFragments
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be();
    });

    it('should have the property postTags (base name: "post_tags")', function() {
      // uncomment below and update the code to test the property postTags
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be();
    });

    it('should have the property preTags (base name: "pre_tags")', function() {
      // uncomment below and update the code to test the property preTags
      //var instance = new ZincSearchSDK.MetaHighlight();
      //expect(instance).to.be();
    });

  });

}));
