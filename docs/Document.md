# ZincSearchSDK.Document

All URIs are relative to *http://localhost:4080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk**](Document.md#bulk) | **POST** /api/_bulk | Bulk documents
[**delete**](Document.md#delete) | **DELETE** /api/{index}/_doc/{id} | Delete document
[**esBulk**](Document.md#esBulk) | **POST** /es/_bulk | ES bulk documents
[**index**](Document.md#index) | **POST** /api/{index}/_doc | Create or update document
[**indexWithID**](Document.md#indexWithID) | **PUT** /api/{index}/_doc/{id} | Create or update document with id
[**update**](Document.md#update) | **POST** /api/{index}/_update/{id} | Update document with id



## bulk

> MetaHTTPResponseRecordCount bulk(query)

Bulk documents

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let query = "query_example"; // String | Query
apiInstance.bulk(query, (error, data, response) => {
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

[**MetaHTTPResponseRecordCount**](MetaHTTPResponseRecordCount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## delete

> MetaHTTPResponseDocument delete(index, id)

Delete document

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let index = "index_example"; // String | Index
let id = "id_example"; // String | ID
apiInstance.delete(index, id, (error, data, response) => {
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
 **id** | **String**| ID | 

### Return type

[**MetaHTTPResponseDocument**](MetaHTTPResponseDocument.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## esBulk

> Object esBulk(query)

ES bulk documents

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let query = "query_example"; // String | Query
apiInstance.esBulk(query, (error, data, response) => {
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

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## index

> MetaHTTPResponseID index(index, document)

Create or update document

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let index = "index_example"; // String | Index
let document = {key: null}; // Object | Document
apiInstance.index(index, document, (error, data, response) => {
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
 **document** | **Object**| Document | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## indexWithID

> MetaHTTPResponseID indexWithID(index, id, document)

Create or update document with id

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let index = "index_example"; // String | Index
let id = "id_example"; // String | ID
let document = {key: null}; // Object | Document
apiInstance.indexWithID(index, id, document, (error, data, response) => {
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
 **id** | **String**| ID | 
 **document** | **Object**| Document | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update

> MetaHTTPResponseID update(index, id, document)

Update document with id

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Document();
let index = "index_example"; // String | Index
let id = "id_example"; // String | ID
let document = {key: null}; // Object | Document
apiInstance.update(index, id, document, (error, data, response) => {
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
 **id** | **String**| ID | 
 **document** | **Object**| Document | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

