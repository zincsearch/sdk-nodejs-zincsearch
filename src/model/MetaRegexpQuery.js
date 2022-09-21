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
 * The MetaRegexpQuery model module.
 * @module model/MetaRegexpQuery
 * @version 0.3.3
 */
class MetaRegexpQuery {
    /**
     * Constructs a new <code>MetaRegexpQuery</code>.
     * @alias module:model/MetaRegexpQuery
     */
    constructor() { 
        
        MetaRegexpQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaRegexpQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaRegexpQuery} obj Optional instance to populate.
     * @return {module:model/MetaRegexpQuery} The populated <code>MetaRegexpQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaRegexpQuery();

            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = ApiClient.convertToType(data['flags'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} boost
 */
MetaRegexpQuery.prototype['boost'] = undefined;

/**
 * @member {String} flags
 */
MetaRegexpQuery.prototype['flags'] = undefined;

/**
 * @member {String} value
 */
MetaRegexpQuery.prototype['value'] = undefined;






export default MetaRegexpQuery;

