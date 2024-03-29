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
import MetaTemplateTemplate from './MetaTemplateTemplate';

/**
 * The MetaIndexTemplate model module.
 * @module model/MetaIndexTemplate
 * @version 0.3.3
 */
class MetaIndexTemplate {
    /**
     * Constructs a new <code>MetaIndexTemplate</code>.
     * @alias module:model/MetaIndexTemplate
     */
    constructor() { 
        
        MetaIndexTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaIndexTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaIndexTemplate} obj Optional instance to populate.
     * @return {module:model/MetaIndexTemplate} The populated <code>MetaIndexTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaIndexTemplate();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('index_patterns')) {
                obj['index_patterns'] = ApiClient.convertToType(data['index_patterns'], ['String']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = MetaTemplateTemplate.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
MetaIndexTemplate.prototype['created_at'] = undefined;

/**
 * @member {Array.<String>} index_patterns
 */
MetaIndexTemplate.prototype['index_patterns'] = undefined;

/**
 * highest priority is chosen
 * @member {Number} priority
 */
MetaIndexTemplate.prototype['priority'] = undefined;

/**
 * @member {module:model/MetaTemplateTemplate} template
 */
MetaIndexTemplate.prototype['template'] = undefined;

/**
 * @member {String} updated_at
 */
MetaIndexTemplate.prototype['updated_at'] = undefined;






export default MetaIndexTemplate;

