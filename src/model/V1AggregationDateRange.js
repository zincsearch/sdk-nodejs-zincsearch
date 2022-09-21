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
 * The V1AggregationDateRange model module.
 * @module model/V1AggregationDateRange
 * @version 0.3.3
 */
class V1AggregationDateRange {
    /**
     * Constructs a new <code>V1AggregationDateRange</code>.
     * @alias module:model/V1AggregationDateRange
     */
    constructor() { 
        
        V1AggregationDateRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AggregationDateRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AggregationDateRange} obj Optional instance to populate.
     * @return {module:model/V1AggregationDateRange} The populated <code>V1AggregationDateRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AggregationDateRange();

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
V1AggregationDateRange.prototype['from'] = undefined;

/**
 * @member {String} to
 */
V1AggregationDateRange.prototype['to'] = undefined;






export default V1AggregationDateRange;

