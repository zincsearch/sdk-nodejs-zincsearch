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
 * The MetaAggregationsTerms model module.
 * @module model/MetaAggregationsTerms
 * @version 0.3.3
 */
class MetaAggregationsTerms {
    /**
     * Constructs a new <code>MetaAggregationsTerms</code>.
     * @alias module:model/MetaAggregationsTerms
     */
    constructor() { 
        
        MetaAggregationsTerms.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregationsTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregationsTerms} obj Optional instance to populate.
     * @return {module:model/MetaAggregationsTerms} The populated <code>MetaAggregationsTerms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregationsTerms();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], {'String': 'String'});
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
MetaAggregationsTerms.prototype['field'] = undefined;

/**
 * { \"_count\": \"asc\" }
 * @member {Object.<String, String>} order
 */
MetaAggregationsTerms.prototype['order'] = undefined;

/**
 * @member {Number} size
 */
MetaAggregationsTerms.prototype['size'] = undefined;






export default MetaAggregationsTerms;

