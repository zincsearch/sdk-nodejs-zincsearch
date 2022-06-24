# ZincSearchSDK.User

All URIs are relative to *http://localhost:4080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](User.md#delete) | **DELETE** /api/user/{id} | Delete user
[**create**](User.md#create) | **POST** /api/user | Create user
[**list**](User.md#list) | **GET** /api/user | List user
[**login**](User.md#login) | **POST** /api/login | Login
[**update**](User.md#update) | **PUT** /api/user | Update user



## delete

> MetaHTTPResponseID delete(id)

Delete user

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.User();
let id = "id_example"; // String | User id
apiInstance.delete(id, (error, data, response) => {
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
 **id** | **String**| User id | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create

> MetaHTTPResponseID create(user)

Create user

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.User();
let user = new ZincSearchSDK.MetaUser(); // MetaUser | User data
apiInstance.create(user, (error, data, response) => {
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
 **user** | [**MetaUser**](MetaUser.md)| User data | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## list

> [MetaUser] list()

List user

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.User();
apiInstance.list((error, data, response) => {
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

[**[MetaUser]**](MetaUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## login

> AuthLoginResponse login(login)

Login

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.User();
let login = new ZincSearchSDK.AuthLoginRequest(); // AuthLoginRequest | Login credentials
apiInstance.login(login, (error, data, response) => {
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
 **login** | [**AuthLoginRequest**](AuthLoginRequest.md)| Login credentials | 

### Return type

[**AuthLoginResponse**](AuthLoginResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update

> MetaHTTPResponseID update(user)

Update user

### Example

```javascript
import ZincSearchSDK from 'zincsearch-sdk';
let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ZincSearchSDK.User();
let user = new ZincSearchSDK.MetaUser(); // MetaUser | User data
apiInstance.update(user, (error, data, response) => {
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
 **user** | [**MetaUser**](MetaUser.md)| User data | 

### Return type

[**MetaHTTPResponseID**](MetaHTTPResponseID.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

