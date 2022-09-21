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
 * The AggregationHistogramBound model module.
 * @module model/AggregationHistogramBound
 * @version 0.3.3
 */
class AggregationHistogramBound {
    /**
     * Constructs a new <code>AggregationHistogramBound</code>.
     * @alias module:model/AggregationHistogramBound
     */
    constructor() { 
        
        AggregationHistogramBound.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AggregationHistogramBound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregationHistogramBound} obj Optional instance to populate.
     * @return {module:model/AggregationHistogramBound} The populated <code>AggregationHistogramBound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggregationHistogramBound();

            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * maximum
 * @member {Number} max
 */
AggregationHistogramBound.prototype['max'] = undefined;

/**
 * minimum
 * @member {Number} min
 */
AggregationHistogramBound.prototype['min'] = undefined;






export default AggregationHistogramBound;

