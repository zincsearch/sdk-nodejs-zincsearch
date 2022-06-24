/* Copyright 2022 Zinc Labs Inc. and Contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

var ZincSearchSDK = require('zincsearch-sdk');

let defaultClient = ZincSearchSDK.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'admin';
basicAuth.password = 'Complexpass#123';

let apiInstance = new ZincSearchSDK.Search();
let index = "index_example"; // String | Index
let query = {
  "search_type": "match",
  "query": {
    "term": "John",
    "field":"name",
  },
  "max_results": 5
}; // V1ZincQuery | Query
apiInstance.searchV1(index, query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
