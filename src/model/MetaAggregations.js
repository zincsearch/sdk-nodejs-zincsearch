/**
 * Zinc Search engine API
 * Zinc Search engine API documents https://docs.zincsearch.com
 *
 * The version of the OpenAPI document: 0.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MetaAggregationAutoDateHistogram from './MetaAggregationAutoDateHistogram';
import MetaAggregationDateHistogram from './MetaAggregationDateHistogram';
import MetaAggregationDateRange from './MetaAggregationDateRange';
import MetaAggregationHistogram from './MetaAggregationHistogram';
import MetaAggregationIPRange from './MetaAggregationIPRange';
import MetaAggregationMetric from './MetaAggregationMetric';
import MetaAggregationRange from './MetaAggregationRange';
import MetaAggregationsTerms from './MetaAggregationsTerms';

/**
 * The MetaAggregations model module.
 * @module model/MetaAggregations
 * @version 0.2.4
 */
class MetaAggregations {
    /**
     * Constructs a new <code>MetaAggregations</code>.
     * @alias module:model/MetaAggregations
     */
    constructor() { 
        
        MetaAggregations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregations} obj Optional instance to populate.
     * @return {module:model/MetaAggregations} The populated <code>MetaAggregations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregations();

            if (data.hasOwnProperty('aggs')) {
                obj['aggs'] = ApiClient.convertToType(data['aggs'], {'String': MetaAggregations});
            }
            if (data.hasOwnProperty('auto_date_histogram')) {
                obj['auto_date_histogram'] = MetaAggregationAutoDateHistogram.constructFromObject(data['auto_date_histogram']);
            }
            if (data.hasOwnProperty('avg')) {
                obj['avg'] = MetaAggregationMetric.constructFromObject(data['avg']);
            }
            if (data.hasOwnProperty('cardinality')) {
                obj['cardinality'] = MetaAggregationMetric.constructFromObject(data['cardinality']);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = MetaAggregationMetric.constructFromObject(data['count']);
            }
            if (data.hasOwnProperty('date_histogram')) {
                obj['date_histogram'] = MetaAggregationDateHistogram.constructFromObject(data['date_histogram']);
            }
            if (data.hasOwnProperty('date_range')) {
                obj['date_range'] = MetaAggregationDateRange.constructFromObject(data['date_range']);
            }
            if (data.hasOwnProperty('histogram')) {
                obj['histogram'] = MetaAggregationHistogram.constructFromObject(data['histogram']);
            }
            if (data.hasOwnProperty('ip_range')) {
                obj['ip_range'] = MetaAggregationIPRange.constructFromObject(data['ip_range']);
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = MetaAggregationMetric.constructFromObject(data['max']);
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = MetaAggregationMetric.constructFromObject(data['min']);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = MetaAggregationRange.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('sum')) {
                obj['sum'] = MetaAggregationMetric.constructFromObject(data['sum']);
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = MetaAggregationsTerms.constructFromObject(data['terms']);
            }
            if (data.hasOwnProperty('weighted_avg')) {
                obj['weighted_avg'] = MetaAggregationMetric.constructFromObject(data['weighted_avg']);
            }
        }
        return obj;
    }


}

/**
 * nested aggregations
 * @member {Object.<String, module:model/MetaAggregations>} aggs
 */
MetaAggregations.prototype['aggs'] = undefined;

/**
 * @member {module:model/MetaAggregationAutoDateHistogram} auto_date_histogram
 */
MetaAggregations.prototype['auto_date_histogram'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} avg
 */
MetaAggregations.prototype['avg'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} cardinality
 */
MetaAggregations.prototype['cardinality'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} count
 */
MetaAggregations.prototype['count'] = undefined;

/**
 * @member {module:model/MetaAggregationDateHistogram} date_histogram
 */
MetaAggregations.prototype['date_histogram'] = undefined;

/**
 * @member {module:model/MetaAggregationDateRange} date_range
 */
MetaAggregations.prototype['date_range'] = undefined;

/**
 * @member {module:model/MetaAggregationHistogram} histogram
 */
MetaAggregations.prototype['histogram'] = undefined;

/**
 * @member {module:model/MetaAggregationIPRange} ip_range
 */
MetaAggregations.prototype['ip_range'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} max
 */
MetaAggregations.prototype['max'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} min
 */
MetaAggregations.prototype['min'] = undefined;

/**
 * @member {module:model/MetaAggregationRange} range
 */
MetaAggregations.prototype['range'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} sum
 */
MetaAggregations.prototype['sum'] = undefined;

/**
 * @member {module:model/MetaAggregationsTerms} terms
 */
MetaAggregations.prototype['terms'] = undefined;

/**
 * @member {module:model/MetaAggregationMetric} weighted_avg
 */
MetaAggregations.prototype['weighted_avg'] = undefined;






export default MetaAggregations;
