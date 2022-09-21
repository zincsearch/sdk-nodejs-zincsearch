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

/**
 * The MetaMatchBoolPrefixQuery model module.
 * @module model/MetaMatchBoolPrefixQuery
 * @version 0.3.3
 */
class MetaMatchBoolPrefixQuery {
    /**
     * Constructs a new <code>MetaMatchBoolPrefixQuery</code>.
     * @alias module:model/MetaMatchBoolPrefixQuery
     */
    constructor() { 
        
        MetaMatchBoolPrefixQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaMatchBoolPrefixQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaMatchBoolPrefixQuery} obj Optional instance to populate.
     * @return {module:model/MetaMatchBoolPrefixQuery} The populated <code>MetaMatchBoolPrefixQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaMatchBoolPrefixQuery();

            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], 'String');
            }
            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} analyzer
 */
MetaMatchBoolPrefixQuery.prototype['analyzer'] = undefined;

/**
 * @member {Number} boost
 */
MetaMatchBoolPrefixQuery.prototype['boost'] = undefined;

/**
 * @member {String} query
 */
MetaMatchBoolPrefixQuery.prototype['query'] = undefined;






export default MetaMatchBoolPrefixQuery;

