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
import AggregationHistogramBound from './AggregationHistogramBound';

/**
 * The MetaAggregationDateHistogram model module.
 * @module model/MetaAggregationDateHistogram
 * @version 0.3.3
 */
class MetaAggregationDateHistogram {
    /**
     * Constructs a new <code>MetaAggregationDateHistogram</code>.
     * @alias module:model/MetaAggregationDateHistogram
     */
    constructor() { 
        
        MetaAggregationDateHistogram.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregationDateHistogram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregationDateHistogram} obj Optional instance to populate.
     * @return {module:model/MetaAggregationDateHistogram} The populated <code>MetaAggregationDateHistogram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregationDateHistogram();

            if (data.hasOwnProperty('calendar_interval')) {
                obj['calendar_interval'] = ApiClient.convertToType(data['calendar_interval'], 'String');
            }
            if (data.hasOwnProperty('extended_bounds')) {
                obj['extended_bounds'] = AggregationHistogramBound.constructFromObject(data['extended_bounds']);
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('fixed_interval')) {
                obj['fixed_interval'] = ApiClient.convertToType(data['fixed_interval'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('hard_bounds')) {
                obj['hard_bounds'] = AggregationHistogramBound.constructFromObject(data['hard_bounds']);
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
            }
            if (data.hasOwnProperty('keyed')) {
                obj['keyed'] = ApiClient.convertToType(data['keyed'], 'Boolean');
            }
            if (data.hasOwnProperty('min_doc_count')) {
                obj['min_doc_count'] = ApiClient.convertToType(data['min_doc_count'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * minute,hour,day,week,month,quarter,year
 * @member {String} calendar_interval
 */
MetaAggregationDateHistogram.prototype['calendar_interval'] = undefined;

/**
 * @member {module:model/AggregationHistogramBound} extended_bounds
 */
MetaAggregationDateHistogram.prototype['extended_bounds'] = undefined;

/**
 * @member {String} field
 */
MetaAggregationDateHistogram.prototype['field'] = undefined;

/**
 * ms,s,m,h,d
 * @member {String} fixed_interval
 */
MetaAggregationDateHistogram.prototype['fixed_interval'] = undefined;

/**
 * format key_as_string
 * @member {String} format
 */
MetaAggregationDateHistogram.prototype['format'] = undefined;

/**
 * @member {module:model/AggregationHistogramBound} hard_bounds
 */
MetaAggregationDateHistogram.prototype['hard_bounds'] = undefined;

/**
 * ms,s,m,h,d
 * @member {String} interval
 */
MetaAggregationDateHistogram.prototype['interval'] = undefined;

/**
 * @member {Boolean} keyed
 */
MetaAggregationDateHistogram.prototype['keyed'] = undefined;

/**
 * @member {Number} min_doc_count
 */
MetaAggregationDateHistogram.prototype['min_doc_count'] = undefined;

/**
 * @member {Number} size
 */
MetaAggregationDateHistogram.prototype['size'] = undefined;

/**
 * time_zone
 * @member {String} time_zone
 */
MetaAggregationDateHistogram.prototype['time_zone'] = undefined;






export default MetaAggregationDateHistogram;

