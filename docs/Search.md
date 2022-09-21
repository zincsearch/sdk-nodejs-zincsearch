# ZincSearchSDK.Search

All URIs are relative to *http://localhost:4080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteByQuery**](Search.md#deleteByQuery) | **POST** /es/{index}/_delete_by_query | Searches the index and deletes all matched documents
[**mSearch**](Search.md#mSearch) | **POST** /es/_msearch | Search V2 MultipleSearch for compatible ES
[**search**](Search.md#search) | **POST** /es/{index}/_search | Search V2 DSL for compatible ES
[**searchV1**](Search.md#searchV1) | **POST** /api/{index}/_search | Search V1



## deleteByQuery

> MetaHTTPResponseDeleteByQuery deleteByQuery(index, query)

Searches the index and deletes all matched documents

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Search();
let index = "index_example"; // String | Index
let query = new ZincSearchSDK.MetaZincQuery(); // MetaZincQuery | Query
apiInstance.deleteByQuery(index, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**| Index | 
 **query** | [**MetaZincQuery**](MetaZincQuery.md)| Query | 

### Return type

[**MetaHTTPResponseDeleteByQuery**](MetaHTTPResponseDeleteByQuery.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mSearch

> MetaSearchResponse mSearch(query)

Search V2 MultipleSearch for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Search();
let query = "query_example"; // String | Query
apiInstance.mSearch(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Query | 

### Return type

[**MetaSearchResponse**](MetaSearchResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## search

> MetaSearchResponse search(index, query)

Search V2 DSL for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Search();
let index = "index_example"; // String | Index
let query = new ZincSearchSDK.MetaZincQuery(); // MetaZincQuery | Query
apiInstance.search(index, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**| Index | 
 **query** | [**MetaZincQuery**](MetaZincQuery.md)| Query | 

### Return type

[**MetaSearchResponse**](MetaSearchResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchV1

> MetaSearchResponse searchV1(index, query)

Search V1

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Search();
let index = "index_example"; // String | Index
let query = new ZincSearchSDK.V1ZincQuery(); // V1ZincQuery | Query
apiInstance.searchV1(index, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**| Index | 
 **query** | [**V1ZincQuery**](V1ZincQuery.md)| Query | 

### Return type

[**MetaSearchResponse**](MetaSearchResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

