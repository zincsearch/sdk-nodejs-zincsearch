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
 * The MetaTotal model module.
 * @module model/MetaTotal
 * @version 0.2.4
 */
class MetaTotal {
    /**
     * Constructs a new <code>MetaTotal</code>.
     * @alias module:model/MetaTotal
     */
    constructor() { 
        
        MetaTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaTotal} obj Optional instance to populate.
     * @return {module:model/MetaTotal} The populated <code>MetaTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaTotal();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Count of documents returned
 * @member {Number} value
 */
MetaTotal.prototype['value'] = undefined;






export default MetaTotal;
