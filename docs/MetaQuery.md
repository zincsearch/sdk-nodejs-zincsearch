# ZincSearchSDK.MetaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool** | [**MetaBoolQuery**](MetaBoolQuery.md) |  | [optional] 
**exists** | [**MetaExistsQuery**](MetaExistsQuery.md) |  | [optional] 
**fuzzy** | [**{String: MetaFuzzyQuery}**](MetaFuzzyQuery.md) | simple, PrefixQuery | [optional] 
**ids** | [**MetaIdsQuery**](MetaIdsQuery.md) |  | [optional] 
**match** | [**{String: MetaMatchQuery}**](MetaMatchQuery.md) | simple, MatchQuery | [optional] 
**matchAll** | **Object** |  | [optional] 
**matchBoolPrefix** | [**{String: MetaMatchBoolPrefixQuery}**](MetaMatchBoolPrefixQuery.md) | simple, MatchBoolPrefixQuery | [optional] 
**matchNone** | **Object** |  | [optional] 
**matchPhrase** | [**{String: MetaMatchPhraseQuery}**](MetaMatchPhraseQuery.md) | simple, MatchPhraseQuery | [optional] 
**matchPhrasePrefix** | [**{String: MetaMatchPhrasePrefixQuery}**](MetaMatchPhrasePrefixQuery.md) | simple, MatchPhrasePrefixQuery | [optional] 
**multiMatch** | [**MetaMultiMatchQuery**](MetaMultiMatchQuery.md) |  | [optional] 
**prefix** | [**{String: MetaPrefixQuery}**](MetaPrefixQuery.md) | . | [optional] 
**queryString** | [**MetaQueryStringQuery**](MetaQueryStringQuery.md) |  | [optional] 
**range** | [**{String: MetaRangeQuery}**](MetaRangeQuery.md) | simple, FuzzyQuery | [optional] 
**regexp** | [**{String: MetaRegexpQuery}**](MetaRegexpQuery.md) | simple, FuzzyQuery | [optional] 
**simpleQueryString** | [**MetaSimpleQueryStringQuery**](MetaSimpleQueryStringQuery.md) |  | [optional] 
**term** | [**{String: MetaTermQuery}**](MetaTermQuery.md) | simple, TermQuery | [optional] 
**terms** | **{String: Object}** | . | [optional] 
**wildcard** | [**{String: MetaWildcardQuery}**](MetaWildcardQuery.md) | simple, WildcardQuery | [optional] 


