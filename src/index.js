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


import ApiClient from './ApiClient';
import AggregationHistogramBound from './model/AggregationHistogramBound';
import AuthLoginRequest from './model/AuthLoginRequest';
import AuthLoginResponse from './model/AuthLoginResponse';
import AuthLoginUser from './model/AuthLoginUser';
import IndexAnalyzeResponse from './model/IndexAnalyzeResponse';
import IndexAnalyzeResponseToken from './model/IndexAnalyzeResponseToken';
import IndexIndexListResponse from './model/IndexIndexListResponse';
import MetaAggregationAutoDateHistogram from './model/MetaAggregationAutoDateHistogram';
import MetaAggregationDateHistogram from './model/MetaAggregationDateHistogram';
import MetaAggregationDateRange from './model/MetaAggregationDateRange';
import MetaAggregationHistogram from './model/MetaAggregationHistogram';
import MetaAggregationIPRange from './model/MetaAggregationIPRange';
import MetaAggregationMetric from './model/MetaAggregationMetric';
import MetaAggregationRange from './model/MetaAggregationRange';
import MetaAggregationResponse from './model/MetaAggregationResponse';
import MetaAggregations from './model/MetaAggregations';
import MetaAggregationsTerms from './model/MetaAggregationsTerms';
import MetaAnalyzer from './model/MetaAnalyzer';
import MetaBoolQuery from './model/MetaBoolQuery';
import MetaDateRange from './model/MetaDateRange';
import MetaExistsQuery from './model/MetaExistsQuery';
import MetaFuzzyQuery from './model/MetaFuzzyQuery';
import MetaHTTPResponse from './model/MetaHTTPResponse';
import MetaHTTPResponseDeleteByQuery from './model/MetaHTTPResponseDeleteByQuery';
import MetaHTTPResponseDocument from './model/MetaHTTPResponseDocument';
import MetaHTTPResponseError from './model/MetaHTTPResponseError';
import MetaHTTPResponseID from './model/MetaHTTPResponseID';
import MetaHTTPResponseIndex from './model/MetaHTTPResponseIndex';
import MetaHTTPResponseRecordCount from './model/MetaHTTPResponseRecordCount';
import MetaHTTPResponseTemplate from './model/MetaHTTPResponseTemplate';
import MetaHealthzResponse from './model/MetaHealthzResponse';
import MetaHighlight from './model/MetaHighlight';
import MetaHit from './model/MetaHit';
import MetaHits from './model/MetaHits';
import MetaHttpRetriesResponse from './model/MetaHttpRetriesResponse';
import MetaIPRange from './model/MetaIPRange';
import MetaIdsQuery from './model/MetaIdsQuery';
import MetaIndexAnalysis from './model/MetaIndexAnalysis';
import MetaIndexSettings from './model/MetaIndexSettings';
import MetaIndexSimple from './model/MetaIndexSimple';
import MetaIndexTemplate from './model/MetaIndexTemplate';
import MetaJSONIngest from './model/MetaJSONIngest';
import MetaMappings from './model/MetaMappings';
import MetaMatchBoolPrefixQuery from './model/MetaMatchBoolPrefixQuery';
import MetaMatchPhrasePrefixQuery from './model/MetaMatchPhrasePrefixQuery';
import MetaMatchPhraseQuery from './model/MetaMatchPhraseQuery';
import MetaMatchQuery from './model/MetaMatchQuery';
import MetaMultiMatchQuery from './model/MetaMultiMatchQuery';
import MetaPage from './model/MetaPage';
import MetaPrefixQuery from './model/MetaPrefixQuery';
import MetaProperty from './model/MetaProperty';
import MetaQuery from './model/MetaQuery';
import MetaQueryStringQuery from './model/MetaQueryStringQuery';
import MetaRange from './model/MetaRange';
import MetaRangeQuery from './model/MetaRangeQuery';
import MetaRegexpQuery from './model/MetaRegexpQuery';
import MetaSearchResponse from './model/MetaSearchResponse';
import MetaShards from './model/MetaShards';
import MetaSimpleQueryStringQuery from './model/MetaSimpleQueryStringQuery';
import MetaTemplate from './model/MetaTemplate';
import MetaTemplateTemplate from './model/MetaTemplateTemplate';
import MetaTermQuery from './model/MetaTermQuery';
import MetaTotal from './model/MetaTotal';
import MetaUser from './model/MetaUser';
import MetaVersionResponse from './model/MetaVersionResponse';
import MetaWildcardQuery from './model/MetaWildcardQuery';
import MetaZincQuery from './model/MetaZincQuery';
import V1AggregationDateRange from './model/V1AggregationDateRange';
import V1AggregationNumberRange from './model/V1AggregationNumberRange';
import V1AggregationParams from './model/V1AggregationParams';
import V1QueryParams from './model/V1QueryParams';
import V1ZincQuery from './model/V1ZincQuery';
import Default from './api/Default';
import Document from './api/Document';
import Index from './api/Index';
import Search from './api/Search';
import User from './api/User';


/**
* Zinc Search engine API documents https://docs.zincsearch.com.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ZincSearchSDK = require('index'); // See note below*.
* var xxxSvc = new ZincSearchSDK.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ZincSearchSDK.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ZincSearchSDK.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ZincSearchSDK.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.3.3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AggregationHistogramBound model constructor.
     * @property {module:model/AggregationHistogramBound}
     */
    AggregationHistogramBound,

    /**
     * The AuthLoginRequest model constructor.
     * @property {module:model/AuthLoginRequest}
     */
    AuthLoginRequest,

    /**
     * The AuthLoginResponse model constructor.
     * @property {module:model/AuthLoginResponse}
     */
    AuthLoginResponse,

    /**
     * The AuthLoginUser model constructor.
     * @property {module:model/AuthLoginUser}
     */
    AuthLoginUser,

    /**
     * The IndexAnalyzeResponse model constructor.
     * @property {module:model/IndexAnalyzeResponse}
     */
    IndexAnalyzeResponse,

    /**
     * The IndexAnalyzeResponseToken model constructor.
     * @property {module:model/IndexAnalyzeResponseToken}
     */
    IndexAnalyzeResponseToken,

    /**
     * The IndexIndexListResponse model constructor.
     * @property {module:model/IndexIndexListResponse}
     */
    IndexIndexListResponse,

    /**
     * The MetaAggregationAutoDateHistogram model constructor.
     * @property {module:model/MetaAggregationAutoDateHistogram}
     */
    MetaAggregationAutoDateHistogram,

    /**
     * The MetaAggregationDateHistogram model constructor.
     * @property {module:model/MetaAggregationDateHistogram}
     */
    MetaAggregationDateHistogram,

    /**
     * The MetaAggregationDateRange model constructor.
     * @property {module:model/MetaAggregationDateRange}
     */
    MetaAggregationDateRange,

    /**
     * The MetaAggregationHistogram model constructor.
     * @property {module:model/MetaAggregationHistogram}
     */
    MetaAggregationHistogram,

    /**
     * The MetaAggregationIPRange model constructor.
     * @property {module:model/MetaAggregationIPRange}
     */
    MetaAggregationIPRange,

    /**
     * The MetaAggregationMetric model constructor.
     * @property {module:model/MetaAggregationMetric}
     */
    MetaAggregationMetric,

    /**
     * The MetaAggregationRange model constructor.
     * @property {module:model/MetaAggregationRange}
     */
    MetaAggregationRange,

    /**
     * The MetaAggregationResponse model constructor.
     * @property {module:model/MetaAggregationResponse}
     */
    MetaAggregationResponse,

    /**
     * The MetaAggregations model constructor.
     * @property {module:model/MetaAggregations}
     */
    MetaAggregations,

    /**
     * The MetaAggregationsTerms model constructor.
     * @property {module:model/MetaAggregationsTerms}
     */
    MetaAggregationsTerms,

    /**
     * The MetaAnalyzer model constructor.
     * @property {module:model/MetaAnalyzer}
     */
    MetaAnalyzer,

    /**
     * The MetaBoolQuery model constructor.
     * @property {module:model/MetaBoolQuery}
     */
    MetaBoolQuery,

    /**
     * The MetaDateRange model constructor.
     * @property {module:model/MetaDateRange}
     */
    MetaDateRange,

    /**
     * The MetaExistsQuery model constructor.
     * @property {module:model/MetaExistsQuery}
     */
    MetaExistsQuery,

    /**
     * The MetaFuzzyQuery model constructor.
     * @property {module:model/MetaFuzzyQuery}
     */
    MetaFuzzyQuery,

    /**
     * The MetaHTTPResponse model constructor.
     * @property {module:model/MetaHTTPResponse}
     */
    MetaHTTPResponse,

    /**
     * The MetaHTTPResponseDeleteByQuery model constructor.
     * @property {module:model/MetaHTTPResponseDeleteByQuery}
     */
    MetaHTTPResponseDeleteByQuery,

    /**
     * The MetaHTTPResponseDocument model constructor.
     * @property {module:model/MetaHTTPResponseDocument}
     */
    MetaHTTPResponseDocument,

    /**
     * The MetaHTTPResponseError model constructor.
     * @property {module:model/MetaHTTPResponseError}
     */
    MetaHTTPResponseError,

    /**
     * The MetaHTTPResponseID model constructor.
     * @property {module:model/MetaHTTPResponseID}
     */
    MetaHTTPResponseID,

    /**
     * The MetaHTTPResponseIndex model constructor.
     * @property {module:model/MetaHTTPResponseIndex}
     */
    MetaHTTPResponseIndex,

    /**
     * The MetaHTTPResponseRecordCount model constructor.
     * @property {module:model/MetaHTTPResponseRecordCount}
     */
    MetaHTTPResponseRecordCount,

    /**
     * The MetaHTTPResponseTemplate model constructor.
     * @property {module:model/MetaHTTPResponseTemplate}
     */
    MetaHTTPResponseTemplate,

    /**
     * The MetaHealthzResponse model constructor.
     * @property {module:model/MetaHealthzResponse}
     */
    MetaHealthzResponse,

    /**
     * The MetaHighlight model constructor.
     * @property {module:model/MetaHighlight}
     */
    MetaHighlight,

    /**
     * The MetaHit model constructor.
     * @property {module:model/MetaHit}
     */
    MetaHit,

    /**
     * The MetaHits model constructor.
     * @property {module:model/MetaHits}
     */
    MetaHits,

    /**
     * The MetaHttpRetriesResponse model constructor.
     * @property {module:model/MetaHttpRetriesResponse}
     */
    MetaHttpRetriesResponse,

    /**
     * The MetaIPRange model constructor.
     * @property {module:model/MetaIPRange}
     */
    MetaIPRange,

    /**
     * The MetaIdsQuery model constructor.
     * @property {module:model/MetaIdsQuery}
     */
    MetaIdsQuery,

    /**
     * The MetaIndexAnalysis model constructor.
     * @property {module:model/MetaIndexAnalysis}
     */
    MetaIndexAnalysis,

    /**
     * The MetaIndexSettings model constructor.
     * @property {module:model/MetaIndexSettings}
     */
    MetaIndexSettings,

    /**
     * The MetaIndexSimple model constructor.
     * @property {module:model/MetaIndexSimple}
     */
    MetaIndexSimple,

    /**
     * The MetaIndexTemplate model constructor.
     * @property {module:model/MetaIndexTemplate}
     */
    MetaIndexTemplate,

    /**
     * The MetaJSONIngest model constructor.
     * @property {module:model/MetaJSONIngest}
     */
    MetaJSONIngest,

    /**
     * The MetaMappings model constructor.
     * @property {module:model/MetaMappings}
     */
    MetaMappings,

    /**
     * The MetaMatchBoolPrefixQuery model constructor.
     * @property {module:model/MetaMatchBoolPrefixQuery}
     */
    MetaMatchBoolPrefixQuery,

    /**
     * The MetaMatchPhrasePrefixQuery model constructor.
     * @property {module:model/MetaMatchPhrasePrefixQuery}
     */
    MetaMatchPhrasePrefixQuery,

    /**
     * The MetaMatchPhraseQuery model constructor.
     * @property {module:model/MetaMatchPhraseQuery}
     */
    MetaMatchPhraseQuery,

    /**
     * The MetaMatchQuery model constructor.
     * @property {module:model/MetaMatchQuery}
     */
    MetaMatchQuery,

    /**
     * The MetaMultiMatchQuery model constructor.
     * @property {module:model/MetaMultiMatchQuery}
     */
    MetaMultiMatchQuery,

    /**
     * The MetaPage model constructor.
     * @property {module:model/MetaPage}
     */
    MetaPage,

    /**
     * The MetaPrefixQuery model constructor.
     * @property {module:model/MetaPrefixQuery}
     */
    MetaPrefixQuery,

    /**
     * The MetaProperty model constructor.
     * @property {module:model/MetaProperty}
     */
    MetaProperty,

    /**
     * The MetaQuery model constructor.
     * @property {module:model/MetaQuery}
     */
    MetaQuery,

    /**
     * The MetaQueryStringQuery model constructor.
     * @property {module:model/MetaQueryStringQuery}
     */
    MetaQueryStringQuery,

    /**
     * The MetaRange model constructor.
     * @property {module:model/MetaRange}
     */
    MetaRange,

    /**
     * The MetaRangeQuery model constructor.
     * @property {module:model/MetaRangeQuery}
     */
    MetaRangeQuery,

    /**
     * The MetaRegexpQuery model constructor.
     * @property {module:model/MetaRegexpQuery}
     */
    MetaRegexpQuery,

    /**
     * The MetaSearchResponse model constructor.
     * @property {module:model/MetaSearchResponse}
     */
    MetaSearchResponse,

    /**
     * The MetaShards model constructor.
     * @property {module:model/MetaShards}
     */
    MetaShards,

    /**
     * The MetaSimpleQueryStringQuery model constructor.
     * @property {module:model/MetaSimpleQueryStringQuery}
     */
    MetaSimpleQueryStringQuery,

    /**
     * The MetaTemplate model constructor.
     * @property {module:model/MetaTemplate}
     */
    MetaTemplate,

    /**
     * The MetaTemplateTemplate model constructor.
     * @property {module:model/MetaTemplateTemplate}
     */
    MetaTemplateTemplate,

    /**
     * The MetaTermQuery model constructor.
     * @property {module:model/MetaTermQuery}
     */
    MetaTermQuery,

    /**
     * The MetaTotal model constructor.
     * @property {module:model/MetaTotal}
     */
    MetaTotal,

    /**
     * The MetaUser model constructor.
     * @property {module:model/MetaUser}
     */
    MetaUser,

    /**
     * The MetaVersionResponse model constructor.
     * @property {module:model/MetaVersionResponse}
     */
    MetaVersionResponse,

    /**
     * The MetaWildcardQuery model constructor.
     * @property {module:model/MetaWildcardQuery}
     */
    MetaWildcardQuery,

    /**
     * The MetaZincQuery model constructor.
     * @property {module:model/MetaZincQuery}
     */
    MetaZincQuery,

    /**
     * The V1AggregationDateRange model constructor.
     * @property {module:model/V1AggregationDateRange}
     */
    V1AggregationDateRange,

    /**
     * The V1AggregationNumberRange model constructor.
     * @property {module:model/V1AggregationNumberRange}
     */
    V1AggregationNumberRange,

    /**
     * The V1AggregationParams model constructor.
     * @property {module:model/V1AggregationParams}
     */
    V1AggregationParams,

    /**
     * The V1QueryParams model constructor.
     * @property {module:model/V1QueryParams}
     */
    V1QueryParams,

    /**
     * The V1ZincQuery model constructor.
     * @property {module:model/V1ZincQuery}
     */
    V1ZincQuery,

    /**
    * The Default service constructor.
    * @property {module:api/Default}
    */
    Default,

    /**
    * The Document service constructor.
    * @property {module:api/Document}
    */
    Document,

    /**
    * The Index service constructor.
    * @property {module:api/Index}
    */
    Index,

    /**
    * The Search service constructor.
    * @property {module:api/Search}
    */
    Search,

    /**
    * The User service constructor.
    * @property {module:api/User}
    */
    User
};
