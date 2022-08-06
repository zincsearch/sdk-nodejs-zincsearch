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
 * The MetaHit model module.
 * @module model/MetaHit
 * @version 0.2.7
 */
class MetaHit {
    /**
     * Constructs a new <code>MetaHit</code>.
     * @alias module:model/MetaHit
     */
    constructor() { 
        
        MetaHit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaHit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaHit} obj Optional instance to populate.
     * @return {module:model/MetaHit} The populated <code>MetaHit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaHit();

            if (data.hasOwnProperty('@timestamp')) {
                obj['@timestamp'] = ApiClient.convertToType(data['@timestamp'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('_index')) {
                obj['_index'] = ApiClient.convertToType(data['_index'], 'String');
            }
            if (data.hasOwnProperty('_score')) {
                obj['_score'] = ApiClient.convertToType(data['_score'], 'Number');
            }
            if (data.hasOwnProperty('_source')) {
                obj['_source'] = ApiClient.convertToType(data['_source'], Object);
            }
            if (data.hasOwnProperty('_type')) {
                obj['_type'] = ApiClient.convertToType(data['_type'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Object);
            }
            if (data.hasOwnProperty('highlight')) {
                obj['highlight'] = ApiClient.convertToType(data['highlight'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} @timestamp
 */
MetaHit.prototype['@timestamp'] = undefined;

/**
 * @member {String} _id
 */
MetaHit.prototype['_id'] = undefined;

/**
 * @member {String} _index
 */
MetaHit.prototype['_index'] = undefined;

/**
 * @member {Number} _score
 */
MetaHit.prototype['_score'] = undefined;

/**
 * @member {Object} _source
 */
MetaHit.prototype['_source'] = undefined;

/**
 * @member {String} _type
 */
MetaHit.prototype['_type'] = undefined;

/**
 * @member {Object} fields
 */
MetaHit.prototype['fields'] = undefined;

/**
 * @member {Object} highlight
 */
MetaHit.prototype['highlight'] = undefined;






export default MetaHit;

