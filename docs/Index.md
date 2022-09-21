# ZincSearchSDK.Index

All URIs are relative to *http://localhost:4080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrRemoveESAlias**](Index.md#addOrRemoveESAlias) | **POST** /es/_aliases | Add or remove index alias for compatible ES
[**analyze**](Index.md#analyze) | **POST** /api/_analyze | Analyze
[**analyzeIndex**](Index.md#analyzeIndex) | **POST** /api/{index}/_analyze | Analyze
[**delete**](Index.md#delete) | **DELETE** /api/index/{index} | Delete index
[**create**](Index.md#create) | **POST** /api/index | Create index
[**createTemplate**](Index.md#createTemplate) | **POST** /es/_index_template | Create update index template
[**deleteTemplate**](Index.md#deleteTemplate) | **DELETE** /es/_index_template/{name} | Delete template
[**eSCreateIndex**](Index.md#eSCreateIndex) | **PUT** /es/{index} | Create index for compatible ES
[**eSGetMapping**](Index.md#eSGetMapping) | **GET** /es/{index}/_mapping | Get index mappings for compatible ES
[**esExists**](Index.md#esExists) | **HEAD** /es/{index} | Checks if the index exists for compatible ES
[**exists**](Index.md#exists) | **HEAD** /api/index/{index} | Checks if the index exists
[**getESAliases**](Index.md#getESAliases) | **GET** /es/{target}/_alias/{target_alias} | Get index alias for compatible ES
[**getIndex**](Index.md#getIndex) | **GET** /api/index/{index} | Get index metadata
[**getMapping**](Index.md#getMapping) | **GET** /api/{index}/_mapping | Get index mappings
[**getSettings**](Index.md#getSettings) | **GET** /api/{index}/_settings | Get index settings
[**getTemplate**](Index.md#getTemplate) | **GET** /es/_index_template/{name} | Get index template
[**indexNameList**](Index.md#indexNameList) | **GET** /api/index_name | List index Name
[**list**](Index.md#list) | **GET** /api/index | List indexes
[**listTemplates**](Index.md#listTemplates) | **GET** /es/_index_template | List index teplates
[**refresh**](Index.md#refresh) | **POST** /api/index/{index}/refresh | Resfresh index
[**setMapping**](Index.md#setMapping) | **PUT** /api/{index}/_mapping | Set index mappings
[**setSettings**](Index.md#setSettings) | **PUT** /api/{index}/_settings | Set index Settings
[**updateTemplate**](Index.md#updateTemplate) | **PUT** /es/_index_template/{name} | Create update index template



## addOrRemoveESAlias

> Object addOrRemoveESAlias()

Add or remove index alias for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
apiInstance.addOrRemoveESAlias((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyze

> IndexAnalyzeResponse analyze(query)

Analyze

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let query = {key: null}; // Object | Query
apiInstance.analyze(query, (error, data, response) => {
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
 **query** | **Object**| Query | 

### Return type

[**IndexAnalyzeResponse**](IndexAnalyzeResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## analyzeIndex

> IndexAnalyzeResponse analyzeIndex(index, query)

Analyze

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
let query = {key: null}; // Object | Query
apiInstance.analyzeIndex(index, query, (error, data, response) => {
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
 **query** | **Object**| Query | 

### Return type

[**IndexAnalyzeResponse**](IndexAnalyzeResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete

> MetaHTTPResponseIndex delete(index)

Delete index

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.delete(index, (error, data, response) => {
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

### Return type

[**MetaHTTPResponseIndex**](MetaHTTPResponseIndex.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create

> MetaHTTPResponseIndex create(data)

Create index

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let data = new ZincSearchSDK.MetaIndexSimple(); // MetaIndexSimple | Index data
apiInstance.create(data, (error, data, response) => {
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
 **data** | [**MetaIndexSimple**](MetaIndexSimple.md)| Index data | 

### Return type

[**MetaHTTPResponseIndex**](MetaHTTPResponseIndex.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplate

> MetaHTTPResponseTemplate createTemplate(template)

Create update index template

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let template = new ZincSearchSDK.MetaIndexTemplate(); // MetaIndexTemplate | Template data
apiInstance.createTemplate(template, (error, data, response) => {
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
 **template** | [**MetaIndexTemplate**](MetaIndexTemplate.md)| Template data | 

### Return type

[**MetaHTTPResponseTemplate**](MetaHTTPResponseTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplate

> MetaHTTPResponse deleteTemplate(name)

Delete template

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let name = "name_example"; // String | Template
apiInstance.deleteTemplate(name, (error, data, response) => {
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
 **name** | **String**| Template | 

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eSCreateIndex

> Object eSCreateIndex(index, data)

Create index for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
let data = new ZincSearchSDK.MetaIndexSimple(); // MetaIndexSimple | Index data
apiInstance.eSCreateIndex(index, data, (error, data, response) => {
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
 **data** | [**MetaIndexSimple**](MetaIndexSimple.md)| Index data | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eSGetMapping

> Object eSGetMapping(index)

Get index mappings for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.eSGetMapping(index, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## esExists

> MetaHTTPResponse esExists(index)

Checks if the index exists for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.esExists(index, (error, data, response) => {
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

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exists

> MetaHTTPResponse exists(index)

Checks if the index exists

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.exists(index, (error, data, response) => {
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

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getESAliases

> Object getESAliases(target, targetAlias)

Get index alias for compatible ES

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let target = "target_example"; // String | Target Index
let targetAlias = "targetAlias_example"; // String | Target Alias
apiInstance.getESAliases(target, targetAlias, (error, data, response) => {
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
 **target** | **String**| Target Index | 
 **targetAlias** | **String**| Target Alias | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIndex

> Object getIndex(index)

Get index metadata

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.getIndex(index, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMapping

> Object getMapping(index)

Get index mappings

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.getMapping(index, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSettings

> Object getSettings(index)

Get index settings

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.getSettings(index, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> MetaIndexTemplate getTemplate(name)

Get index template

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let name = "name_example"; // String | Template
apiInstance.getTemplate(name, (error, data, response) => {
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
 **name** | **String**| Template | 

### Return type

[**MetaIndexTemplate**](MetaIndexTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexNameList

> [String] indexNameList(opts)

List index Name

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let opts = {
  'name': "name_example" // String | IndexName
};
apiInstance.indexNameList(opts, (error, data, response) => {
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
 **name** | **String**| IndexName | [optional] 

### Return type

**[String]**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> IndexIndexListResponse list(opts)

List indexes

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let opts = {
  'pageNum': 56, // Number | page num
  'pageSize': 56, // Number | page size
  'sortBy': "sortBy_example", // String | sort by
  'desc': true, // Boolean | desc
  'name': "name_example" // String | name
};
apiInstance.list(opts, (error, data, response) => {
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
 **pageNum** | **Number**| page num | [optional] 
 **pageSize** | **Number**| page size | [optional] 
 **sortBy** | **String**| sort by | [optional] 
 **desc** | **Boolean**| desc | [optional] 
 **name** | **String**| name | [optional] 

### Return type

[**IndexIndexListResponse**](IndexIndexListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplates

> [MetaTemplate] listTemplates()

List index teplates

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
apiInstance.listTemplates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MetaTemplate]**](MetaTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refresh

> MetaHTTPResponse refresh(index)

Resfresh index

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
apiInstance.refresh(index, (error, data, response) => {
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

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMapping

> MetaHTTPResponse setMapping(index, mapping)

Set index mappings

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
let mapping = new ZincSearchSDK.MetaMappings(); // MetaMappings | Mapping
apiInstance.setMapping(index, mapping, (error, data, response) => {
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
 **mapping** | [**MetaMappings**](MetaMappings.md)| Mapping | 

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setSettings

> MetaHTTPResponse setSettings(index, settings)

Set index Settings

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let index = "index_example"; // String | Index
let settings = new ZincSearchSDK.MetaIndexSettings(); // MetaIndexSettings | Settings
apiInstance.setSettings(index, settings, (error, data, response) => {
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
 **settings** | [**MetaIndexSettings**](MetaIndexSettings.md)| Settings | 

### Return type

[**MetaHTTPResponse**](MetaHTTPResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> MetaHTTPResponseTemplate updateTemplate(name, template)

Create update index template

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.Index();
let name = "name_example"; // String | Template
let template = new ZincSearchSDK.MetaIndexTemplate(); // MetaIndexTemplate | Template data
apiInstance.updateTemplate(name, template, (error, data, response) => {
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
 **name** | **String**| Template | 
 **template** | [**MetaIndexTemplate**](MetaIndexTemplate.md)| Template data | 

### Return type

[**MetaHTTPResponseTemplate**](MetaHTTPResponseTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

