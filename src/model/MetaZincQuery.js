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
import MetaAggregations from './MetaAggregations';
import MetaHighlight from './MetaHighlight';
import MetaQuery from './MetaQuery';

/**
 * The MetaZincQuery model module.
 * @module model/MetaZincQuery
 * @version 0.3.3
 */
class MetaZincQuery {
    /**
     * Constructs a new <code>MetaZincQuery</code>.
     * @alias module:model/MetaZincQuery
     */
    constructor() { 
        
        MetaZincQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaZincQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaZincQuery} obj Optional instance to populate.
     * @return {module:model/MetaZincQuery} The populated <code>MetaZincQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaZincQuery();

            if (data.hasOwnProperty('_source')) {
                obj['_source'] = ApiClient.convertToType(data['_source'], ['String']);
            }
            if (data.hasOwnProperty('aggs')) {
                obj['aggs'] = ApiClient.convertToType(data['aggs'], {'String': MetaAggregations});
            }
            if (data.hasOwnProperty('explain')) {
                obj['explain'] = ApiClient.convertToType(data['explain'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('highlight')) {
                obj['highlight'] = MetaHighlight.constructFromObject(data['highlight']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = MetaQuery.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('track_total_hits')) {
                obj['track_total_hits'] = ApiClient.convertToType(data['track_total_hits'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * true, false, [\"field1\", \"field2.*\"]
 * @member {Array.<String>} _source
 */
MetaZincQuery.prototype['_source'] = undefined;

/**
 * @member {Object.<String, module:model/MetaAggregations>} aggs
 */
MetaZincQuery.prototype['aggs'] = undefined;

/**
 * @member {Boolean} explain
 */
MetaZincQuery.prototype['explain'] = undefined;

/**
 * [\"field1\", \"field2.*\", {\"field\": \"fieldName\", \"format\": \"epoch_millis\"}]
 * @member {Array.<String>} fields
 */
MetaZincQuery.prototype['fields'] = undefined;

/**
 * @member {Number} from
 */
MetaZincQuery.prototype['from'] = undefined;

/**
 * @member {module:model/MetaHighlight} highlight
 */
MetaZincQuery.prototype['highlight'] = undefined;

/**
 * @member {module:model/MetaQuery} query
 */
MetaZincQuery.prototype['query'] = undefined;

/**
 * @member {Number} size
 */
MetaZincQuery.prototype['size'] = undefined;

/**
 * \"_sorce\", [\"+Year\",\"-Year\", {\"Year\": \"desc\"}, \"Date\": {\"order\": \"asc\"\", \"format\": \"yyyy-MM-dd\"}}\"}]
 * @member {Array.<String>} sort
 */
MetaZincQuery.prototype['sort'] = undefined;

/**
 * @member {Number} timeout
 */
MetaZincQuery.prototype['timeout'] = undefined;

/**
 * @member {Boolean} track_total_hits
 */
MetaZincQuery.prototype['track_total_hits'] = undefined;






export default MetaZincQuery;

