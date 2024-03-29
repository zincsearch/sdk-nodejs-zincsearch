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

import ApiClient from '../ApiClient';
import MetaAnalyzer from './MetaAnalyzer';

/**
 * The MetaIndexAnalysis model module.
 * @module model/MetaIndexAnalysis
 * @version 0.3.3
 */
class MetaIndexAnalysis {
    /**
     * Constructs a new <code>MetaIndexAnalysis</code>.
     * @alias module:model/MetaIndexAnalysis
     */
    constructor() { 
        
        MetaIndexAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaIndexAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaIndexAnalysis} obj Optional instance to populate.
     * @return {module:model/MetaIndexAnalysis} The populated <code>MetaIndexAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaIndexAnalysis();

            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], {'String': MetaAnalyzer});
            }
            if (data.hasOwnProperty('char_filter')) {
                obj['char_filter'] = ApiClient.convertToType(data['char_filter'], Object);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], Object);
            }
            if (data.hasOwnProperty('token_filter')) {
                obj['token_filter'] = ApiClient.convertToType(data['token_filter'], Object);
            }
            if (data.hasOwnProperty('tokenizer')) {
                obj['tokenizer'] = ApiClient.convertToType(data['tokenizer'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/MetaAnalyzer>} analyzer
 */
MetaIndexAnalysis.prototype['analyzer'] = undefined;

/**
 * @member {Object} char_filter
 */
MetaIndexAnalysis.prototype['char_filter'] = undefined;

/**
 * compatibility with es, alias for TokenFilter
 * @member {Object} filter
 */
MetaIndexAnalysis.prototype['filter'] = undefined;

/**
 * @member {Object} token_filter
 */
MetaIndexAnalysis.prototype['token_filter'] = undefined;

/**
 * @member {Object} tokenizer
 */
MetaIndexAnalysis.prototype['tokenizer'] = undefined;






export default MetaIndexAnalysis;

