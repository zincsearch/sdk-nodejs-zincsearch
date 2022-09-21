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
import MetaRange from './MetaRange';

/**
 * The MetaAggregationRange model module.
 * @module model/MetaAggregationRange
 * @version 0.3.3
 */
class MetaAggregationRange {
    /**
     * Constructs a new <code>MetaAggregationRange</code>.
     * @alias module:model/MetaAggregationRange
     */
    constructor() { 
        
        MetaAggregationRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregationRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregationRange} obj Optional instance to populate.
     * @return {module:model/MetaAggregationRange} The populated <code>MetaAggregationRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregationRange();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('keyed')) {
                obj['keyed'] = ApiClient.convertToType(data['keyed'], 'Boolean');
            }
            if (data.hasOwnProperty('ranges')) {
                obj['ranges'] = ApiClient.convertToType(data['ranges'], [MetaRange]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
MetaAggregationRange.prototype['field'] = undefined;

/**
 * @member {Boolean} keyed
 */
MetaAggregationRange.prototype['keyed'] = undefined;

/**
 * @member {Array.<module:model/MetaRange>} ranges
 */
MetaAggregationRange.prototype['ranges'] = undefined;






export default MetaAggregationRange;

