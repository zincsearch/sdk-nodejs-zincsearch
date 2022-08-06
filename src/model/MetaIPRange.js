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
 * The MetaIPRange model module.
 * @module model/MetaIPRange
 * @version 0.2.7
 */
class MetaIPRange {
    /**
     * Constructs a new <code>MetaIPRange</code>.
     * @alias module:model/MetaIPRange
     */
    constructor() { 
        
        MetaIPRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaIPRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaIPRange} obj Optional instance to populate.
     * @return {module:model/MetaIPRange} The populated <code>MetaIPRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaIPRange();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} from
 */
MetaIPRange.prototype['from'] = undefined;

/**
 * @member {String} to
 */
MetaIPRange.prototype['to'] = undefined;






export default MetaIPRange;

