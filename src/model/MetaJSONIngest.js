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
 * The MetaJSONIngest model module.
 * @module model/MetaJSONIngest
 * @version 0.2.7
 */
class MetaJSONIngest {
    /**
     * Constructs a new <code>MetaJSONIngest</code>.
     * @alias module:model/MetaJSONIngest
     */
    constructor() { 
        
        MetaJSONIngest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaJSONIngest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaJSONIngest} obj Optional instance to populate.
     * @return {module:model/MetaJSONIngest} The populated <code>MetaJSONIngest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaJSONIngest();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} index
 */
MetaJSONIngest.prototype['index'] = undefined;

/**
 * @member {Array.<Object>} records
 */
MetaJSONIngest.prototype['records'] = undefined;






export default MetaJSONIngest;

