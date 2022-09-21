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


import ApiClient from "../ApiClient";
import MetaHTTPResponseDeleteByQuery from '../model/MetaHTTPResponseDeleteByQuery';
import MetaHTTPResponseError from '../model/MetaHTTPResponseError';
import MetaSearchResponse from '../model/MetaSearchResponse';
import MetaZincQuery from '../model/MetaZincQuery';
import V1ZincQuery from '../model/V1ZincQuery';

/**
* Search service.
* @module api/Search
* @version 0.3.3
*/
export default class Search {

    /**
    * Constructs a new Search. 
    * @alias module:api/Search
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteByQuery operation.
     * @callback module:api/Search~deleteByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponseDeleteByQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches the index and deletes all matched documents
     * @param {String} index Index
     * @param {module:model/MetaZincQuery} query Query
     * @param {module:api/Search~deleteByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponseDeleteByQuery}
     */
    deleteByQuery(index, query, callback) {
      let postBody = query;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling deleteByQuery");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling deleteByQuery");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponseDeleteByQuery;
      return this.apiClient.callApi(
        '/es/{index}/_delete_by_query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mSearch operation.
     * @callback module:api/Search~mSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search V2 MultipleSearch for compatible ES
     * @param {String} query Query
     * @param {module:api/Search~mSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaSearchResponse}
     */
    mSearch(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling mSearch");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['text/plain'];
      let accepts = ['application/json'];
      let returnType = MetaSearchResponse;
      return this.apiClient.callApi(
        '/es/_msearch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/Search~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search V2 DSL for compatible ES
     * @param {String} index Index
     * @param {module:model/MetaZincQuery} query Query
     * @param {module:api/Search~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaSearchResponse}
     */
    search(index, query, callback) {
      let postBody = query;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling search");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling search");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaSearchResponse;
      return this.apiClient.callApi(
        '/es/{index}/_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchV1 operation.
     * @callback module:api/Search~searchV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search V1
     * @param {String} index Index
     * @param {module:model/V1ZincQuery} query Query
     * @param {module:api/Search~searchV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaSearchResponse}
     */
    searchV1(index, query, callback) {
      let postBody = query;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling searchV1");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchV1");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaSearchResponse;
      return this.apiClient.callApi(
        '/api/{index}/_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
