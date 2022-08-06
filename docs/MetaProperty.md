# ZincSearchSDK.MetaProperty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatable** | **Boolean** |  | [optional] 
**analyzer** | **String** |  | [optional] 
**fields** | [**{String: MetaProperty}**](MetaProperty.md) | Fields allow the same string value to be indexed in multiple ways for different purposes, such as one field for search and a multi-field for sorting and aggregations, or the same string value analyzed by different analyzers. If the Fields property is defined within a sub-field, it will be ignored.  Currently, only \&quot;text\&quot; fields support the Fields parameter. | [optional] 
**format** | **String** | date format yyyy-MM-dd HH:mm:ss || yyyy-MM-dd || epoch_millis | [optional] 
**highlightable** | **Boolean** |  | [optional] 
**index** | **Boolean** |  | [optional] 
**searchAnalyzer** | **String** |  | [optional] 
**sortable** | **Boolean** |  | [optional] 
**store** | **Boolean** |  | [optional] 
**timeZone** | **String** | date format time_zone | [optional] 
**type** | **String** | text, keyword, date, numeric, boolean, geo_point | [optional] 


