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
 * The MetaRangeQuery model module.
 * @module model/MetaRangeQuery
 * @version 0.2.7
 */
class MetaRangeQuery {
    /**
     * Constructs a new <code>MetaRangeQuery</code>.
     * @alias module:model/MetaRangeQuery
     */
    constructor() { 
        
        MetaRangeQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaRangeQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaRangeQuery} obj Optional instance to populate.
     * @return {module:model/MetaRangeQuery} The populated <code>MetaRangeQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaRangeQuery();

            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], 'String');
            }
            if (data.hasOwnProperty('gte')) {
                obj['gte'] = ApiClient.convertToType(data['gte'], 'String');
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], 'String');
            }
            if (data.hasOwnProperty('lte')) {
                obj['lte'] = ApiClient.convertToType(data['lte'], 'String');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} boost
 */
MetaRangeQuery.prototype['boost'] = undefined;

/**
 * Date format used to convert date values in the query.
 * @member {String} format
 */
MetaRangeQuery.prototype['format'] = undefined;

/**
 * string, float64
 * @member {String} gt
 */
MetaRangeQuery.prototype['gt'] = undefined;

/**
 * string, float64
 * @member {String} gte
 */
MetaRangeQuery.prototype['gte'] = undefined;

/**
 * string, float64
 * @member {String} lt
 */
MetaRangeQuery.prototype['lt'] = undefined;

/**
 * string, float64
 * @member {String} lte
 */
MetaRangeQuery.prototype['lte'] = undefined;

/**
 * used to convert date values in the query to UTC.
 * @member {String} time_zone
 */
MetaRangeQuery.prototype['time_zone'] = undefined;






export default MetaRangeQuery;

