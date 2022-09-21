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
import MetaDateRange from './MetaDateRange';

/**
 * The MetaAggregationDateRange model module.
 * @module model/MetaAggregationDateRange
 * @version 0.3.3
 */
class MetaAggregationDateRange {
    /**
     * Constructs a new <code>MetaAggregationDateRange</code>.
     * @alias module:model/MetaAggregationDateRange
     */
    constructor() { 
        
        MetaAggregationDateRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregationDateRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregationDateRange} obj Optional instance to populate.
     * @return {module:model/MetaAggregationDateRange} The populated <code>MetaAggregationDateRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregationDateRange();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('keyed')) {
                obj['keyed'] = ApiClient.convertToType(data['keyed'], 'Boolean');
            }
            if (data.hasOwnProperty('ranges')) {
                obj['ranges'] = ApiClient.convertToType(data['ranges'], [MetaDateRange]);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
MetaAggregationDateRange.prototype['field'] = undefined;

/**
 * format the `to` and `from` values to `_as_string`, and used to format `keyed response`
 * @member {String} format
 */
MetaAggregationDateRange.prototype['format'] = undefined;

/**
 * @member {Boolean} keyed
 */
MetaAggregationDateRange.prototype['keyed'] = undefined;

/**
 * refer
 * @member {Array.<module:model/MetaDateRange>} ranges
 */
MetaAggregationDateRange.prototype['ranges'] = undefined;

/**
 * refer
 * @member {String} time_zone
 */
MetaAggregationDateRange.prototype['time_zone'] = undefined;






export default MetaAggregationDateRange;

