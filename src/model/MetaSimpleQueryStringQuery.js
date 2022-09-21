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
 * The MetaSimpleQueryStringQuery model module.
 * @module model/MetaSimpleQueryStringQuery
 * @version 0.3.3
 */
class MetaSimpleQueryStringQuery {
    /**
     * Constructs a new <code>MetaSimpleQueryStringQuery</code>.
     * @alias module:model/MetaSimpleQueryStringQuery
     */
    constructor() { 
        
        MetaSimpleQueryStringQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaSimpleQueryStringQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaSimpleQueryStringQuery} obj Optional instance to populate.
     * @return {module:model/MetaSimpleQueryStringQuery} The populated <code>MetaSimpleQueryStringQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaSimpleQueryStringQuery();

            if (data.hasOwnProperty('all_fields')) {
                obj['all_fields'] = ApiClient.convertToType(data['all_fields'], 'Boolean');
            }
            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], 'String');
            }
            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('default_operator')) {
                obj['default_operator'] = ApiClient.convertToType(data['default_operator'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} all_fields
 */
MetaSimpleQueryStringQuery.prototype['all_fields'] = undefined;

/**
 * @member {String} analyzer
 */
MetaSimpleQueryStringQuery.prototype['analyzer'] = undefined;

/**
 * @member {Number} boost
 */
MetaSimpleQueryStringQuery.prototype['boost'] = undefined;

/**
 * or(default), and
 * @member {String} default_operator
 */
MetaSimpleQueryStringQuery.prototype['default_operator'] = undefined;

/**
 * @member {Array.<String>} fields
 */
MetaSimpleQueryStringQuery.prototype['fields'] = undefined;

/**
 * @member {String} query
 */
MetaSimpleQueryStringQuery.prototype['query'] = undefined;






export default MetaSimpleQueryStringQuery;

