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

import ApiClient from '../ApiClient';

/**
 * The MetaAnalyzer model module.
 * @module model/MetaAnalyzer
 * @version 0.2.7
 */
class MetaAnalyzer {
    /**
     * Constructs a new <code>MetaAnalyzer</code>.
     * @alias module:model/MetaAnalyzer
     */
    constructor() { 
        
        MetaAnalyzer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAnalyzer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAnalyzer} obj Optional instance to populate.
     * @return {module:model/MetaAnalyzer} The populated <code>MetaAnalyzer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAnalyzer();

            if (data.hasOwnProperty('char_filter')) {
                obj['char_filter'] = ApiClient.convertToType(data['char_filter'], ['String']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], ['String']);
            }
            if (data.hasOwnProperty('lowercase')) {
                obj['lowercase'] = ApiClient.convertToType(data['lowercase'], 'Boolean');
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('stopwords')) {
                obj['stopwords'] = ApiClient.convertToType(data['stopwords'], ['String']);
            }
            if (data.hasOwnProperty('token_filter')) {
                obj['token_filter'] = ApiClient.convertToType(data['token_filter'], ['String']);
            }
            if (data.hasOwnProperty('tokenizer')) {
                obj['tokenizer'] = ApiClient.convertToType(data['tokenizer'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} char_filter
 */
MetaAnalyzer.prototype['char_filter'] = undefined;

/**
 * compatibility with es, alias for TokenFilter
 * @member {Array.<String>} filter
 */
MetaAnalyzer.prototype['filter'] = undefined;

/**
 * for type=pattern
 * @member {Boolean} lowercase
 */
MetaAnalyzer.prototype['lowercase'] = undefined;

/**
 * for type=pattern
 * @member {String} pattern
 */
MetaAnalyzer.prototype['pattern'] = undefined;

/**
 * for type=pattern,standard,stop
 * @member {Array.<String>} stopwords
 */
MetaAnalyzer.prototype['stopwords'] = undefined;

/**
 * @member {Array.<String>} token_filter
 */
MetaAnalyzer.prototype['token_filter'] = undefined;

/**
 * @member {String} tokenizer
 */
MetaAnalyzer.prototype['tokenizer'] = undefined;

/**
 * options for compatible
 * @member {String} type
 */
MetaAnalyzer.prototype['type'] = undefined;






export default MetaAnalyzer;

