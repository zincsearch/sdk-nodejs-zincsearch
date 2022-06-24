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

import ApiClient from '../ApiClient';

/**
 * The IndexAnalyzeResponseToken model module.
 * @module model/IndexAnalyzeResponseToken
 * @version 0.2.4
 */
class IndexAnalyzeResponseToken {
    /**
     * Constructs a new <code>IndexAnalyzeResponseToken</code>.
     * @alias module:model/IndexAnalyzeResponseToken
     */
    constructor() { 
        
        IndexAnalyzeResponseToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IndexAnalyzeResponseToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexAnalyzeResponseToken} obj Optional instance to populate.
     * @return {module:model/IndexAnalyzeResponseToken} The populated <code>IndexAnalyzeResponseToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndexAnalyzeResponseToken();

            if (data.hasOwnProperty('end_offset')) {
                obj['end_offset'] = ApiClient.convertToType(data['end_offset'], 'Number');
            }
            if (data.hasOwnProperty('keyword')) {
                obj['keyword'] = ApiClient.convertToType(data['keyword'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('start_offset')) {
                obj['start_offset'] = ApiClient.convertToType(data['start_offset'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} end_offset
 */
IndexAnalyzeResponseToken.prototype['end_offset'] = undefined;

/**
 * @member {Boolean} keyword
 */
IndexAnalyzeResponseToken.prototype['keyword'] = undefined;

/**
 * @member {Number} position
 */
IndexAnalyzeResponseToken.prototype['position'] = undefined;

/**
 * @member {Number} start_offset
 */
IndexAnalyzeResponseToken.prototype['start_offset'] = undefined;

/**
 * @member {String} token
 */
IndexAnalyzeResponseToken.prototype['token'] = undefined;

/**
 * @member {String} type
 */
IndexAnalyzeResponseToken.prototype['type'] = undefined;






export default IndexAnalyzeResponseToken;
