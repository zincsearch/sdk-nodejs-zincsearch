# ZincSearchSDK.MetaZincQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **[String]** | true, false, [\&quot;field1\&quot;, \&quot;field2.*\&quot;] | [optional] 
**aggs** | [**{String: MetaAggregations}**](MetaAggregations.md) |  | [optional] 
**explain** | **Boolean** |  | [optional] 
**fields** | **[String]** | [\&quot;field1\&quot;, \&quot;field2.*\&quot;, {\&quot;field\&quot;: \&quot;fieldName\&quot;, \&quot;format\&quot;: \&quot;epoch_millis\&quot;}] | [optional] 
**from** | **Number** |  | [optional] 
**highlight** | [**MetaHighlight**](MetaHighlight.md) |  | [optional] 
**query** | [**MetaQuery**](MetaQuery.md) |  | [optional] 
**size** | **Number** |  | [optional] 
**sort** | **[String]** | \&quot;_sorce\&quot;, [\&quot;+Year\&quot;,\&quot;-Year\&quot;, {\&quot;Year\&quot;: \&quot;desc\&quot;}, \&quot;Date\&quot;: {\&quot;order\&quot;: \&quot;asc\&quot;\&quot;, \&quot;format\&quot;: \&quot;yyyy-MM-dd\&quot;}}\&quot;}] | [optional] 
**timeout** | **Number** |  | [optional] 
**trackTotalHits** | **Boolean** |  | [optional] 


