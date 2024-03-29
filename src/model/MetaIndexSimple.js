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
import MetaIndexSettings from './MetaIndexSettings';

/**
 * The MetaIndexSimple model module.
 * @module model/MetaIndexSimple
 * @version 0.3.3
 */
class MetaIndexSimple {
    /**
     * Constructs a new <code>MetaIndexSimple</code>.
     * @alias module:model/MetaIndexSimple
     */
    constructor() { 
        
        MetaIndexSimple.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaIndexSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaIndexSimple} obj Optional instance to populate.
     * @return {module:model/MetaIndexSimple} The populated <code>MetaIndexSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaIndexSimple();

            if (data.hasOwnProperty('mappings')) {
                obj['mappings'] = ApiClient.convertToType(data['mappings'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = MetaIndexSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('shard_num')) {
                obj['shard_num'] = ApiClient.convertToType(data['shard_num'], 'Number');
            }
            if (data.hasOwnProperty('storage_type')) {
                obj['storage_type'] = ApiClient.convertToType(data['storage_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} mappings
 */
MetaIndexSimple.prototype['mappings'] = undefined;

/**
 * @member {String} name
 */
MetaIndexSimple.prototype['name'] = undefined;

/**
 * @member {module:model/MetaIndexSettings} settings
 */
MetaIndexSimple.prototype['settings'] = undefined;

/**
 * @member {Number} shard_num
 */
MetaIndexSimple.prototype['shard_num'] = undefined;

/**
 * @member {String} storage_type
 */
MetaIndexSimple.prototype['storage_type'] = undefined;






export default MetaIndexSimple;

