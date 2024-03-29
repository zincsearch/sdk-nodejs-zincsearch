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
 * The MetaProperty model module.
 * @module model/MetaProperty
 * @version 0.3.3
 */
class MetaProperty {
    /**
     * Constructs a new <code>MetaProperty</code>.
     * @alias module:model/MetaProperty
     */
    constructor() { 
        
        MetaProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaProperty} obj Optional instance to populate.
     * @return {module:model/MetaProperty} The populated <code>MetaProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaProperty();

            if (data.hasOwnProperty('aggregatable')) {
                obj['aggregatable'] = ApiClient.convertToType(data['aggregatable'], 'Boolean');
            }
            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': MetaProperty});
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('highlightable')) {
                obj['highlightable'] = ApiClient.convertToType(data['highlightable'], 'Boolean');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Boolean');
            }
            if (data.hasOwnProperty('search_analyzer')) {
                obj['search_analyzer'] = ApiClient.convertToType(data['search_analyzer'], 'String');
            }
            if (data.hasOwnProperty('sortable')) {
                obj['sortable'] = ApiClient.convertToType(data['sortable'], 'Boolean');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], 'Boolean');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} aggregatable
 */
MetaProperty.prototype['aggregatable'] = undefined;

/**
 * @member {String} analyzer
 */
MetaProperty.prototype['analyzer'] = undefined;

/**
 * Fields allow the same string value to be indexed in multiple ways for different purposes, such as one field for search and a multi-field for sorting and aggregations, or the same string value analyzed by different analyzers. If the Fields property is defined within a sub-field, it will be ignored.  Currently, only \"text\" fields support the Fields parameter.
 * @member {Object.<String, module:model/MetaProperty>} fields
 */
MetaProperty.prototype['fields'] = undefined;

/**
 * date format yyyy-MM-dd HH:mm:ss || yyyy-MM-dd || epoch_millis
 * @member {String} format
 */
MetaProperty.prototype['format'] = undefined;

/**
 * @member {Boolean} highlightable
 */
MetaProperty.prototype['highlightable'] = undefined;

/**
 * @member {Boolean} index
 */
MetaProperty.prototype['index'] = undefined;

/**
 * @member {String} search_analyzer
 */
MetaProperty.prototype['search_analyzer'] = undefined;

/**
 * @member {Boolean} sortable
 */
MetaProperty.prototype['sortable'] = undefined;

/**
 * @member {Boolean} store
 */
MetaProperty.prototype['store'] = undefined;

/**
 * date format time_zone
 * @member {String} time_zone
 */
MetaProperty.prototype['time_zone'] = undefined;

/**
 * text, keyword, date, numeric, boolean, geo_point
 * @member {String} type
 */
MetaProperty.prototype['type'] = undefined;






export default MetaProperty;

