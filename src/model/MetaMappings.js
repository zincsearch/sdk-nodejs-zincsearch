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
import MetaProperty from './MetaProperty';

/**
 * The MetaMappings model module.
 * @module model/MetaMappings
 * @version 0.2.7
 */
class MetaMappings {
    /**
     * Constructs a new <code>MetaMappings</code>.
     * @alias module:model/MetaMappings
     */
    constructor() { 
        
        MetaMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaMappings} obj Optional instance to populate.
     * @return {module:model/MetaMappings} The populated <code>MetaMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaMappings();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': MetaProperty});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/MetaProperty>} properties
 */
MetaMappings.prototype['properties'] = undefined;






export default MetaMappings;

