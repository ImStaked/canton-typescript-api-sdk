# .ScanProxyApi

All URIs are relative to *https://example.com/api/validator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAmuletRules**](ScanProxyApi.md#getAmuletRules) | **GET** /v0/scan-proxy/amulet-rules | 
[**getAnsRules**](ScanProxyApi.md#getAnsRules) | **POST** /v0/scan-proxy/ans-rules | 
[**getDsoPartyId**](ScanProxyApi.md#getDsoPartyId) | **GET** /v0/scan-proxy/dso-party-id | 
[**getOpenAndIssuingMiningRounds**](ScanProxyApi.md#getOpenAndIssuingMiningRounds) | **GET** /v0/scan-proxy/open-and-issuing-mining-rounds | 
[**listAnsEntries**](ScanProxyApi.md#listAnsEntries) | **GET** /v0/scan-proxy/ans-entries | 
[**lookupAnsEntryByName**](ScanProxyApi.md#lookupAnsEntryByName) | **GET** /v0/scan-proxy/ans-entries/by-name/{name} | 
[**lookupAnsEntryByParty**](ScanProxyApi.md#lookupAnsEntryByParty) | **GET** /v0/scan-proxy/ans-entries/by-party/{party} | 
[**lookupFeaturedAppRight**](ScanProxyApi.md#lookupFeaturedAppRight) | **GET** /v0/scan-proxy/featured-apps/{provider_party_id} | 
[**lookupTransferCommandCounterByParty**](ScanProxyApi.md#lookupTransferCommandCounterByParty) | **GET** /v0/scan-proxy/transfer-command-counter/{party} | 
[**lookupTransferCommandStatus**](ScanProxyApi.md#lookupTransferCommandStatus) | **GET** /v0/scan-proxy/transfer-command/status | 
[**lookupTransferPreapprovalByParty**](ScanProxyApi.md#lookupTransferPreapprovalByParty) | **GET** /v0/scan-proxy/transfer-preapprovals/by-party/{party} | 


# **getAmuletRules**
> GetAmuletRulesProxyResponse getAmuletRules()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request = {};

const data = await apiInstance.getAmuletRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetAmuletRulesProxyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnsRules**
> GetAnsRulesResponse getAnsRules(getAnsRulesRequest)


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiGetAnsRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiGetAnsRulesRequest = {
  
  getAnsRulesRequest: {
    cachedAnsRulesContractId: "cachedAnsRulesContractId_example",
    cachedAnsRulesDomainId: "cachedAnsRulesDomainId_example",
  },
};

const data = await apiInstance.getAnsRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAnsRulesRequest** | **GetAnsRulesRequest**|  |


### Return type

**GetAnsRulesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDsoPartyId**
> GetDsoPartyIdResponse getDsoPartyId()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request = {};

const data = await apiInstance.getDsoPartyId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetDsoPartyIdResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOpenAndIssuingMiningRounds**
> GetOpenAndIssuingMiningRoundsProxyResponse getOpenAndIssuingMiningRounds()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request = {};

const data = await apiInstance.getOpenAndIssuingMiningRounds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetOpenAndIssuingMiningRoundsProxyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAnsEntries**
> ListEntriesResponse listAnsEntries()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiListAnsEntriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiListAnsEntriesRequest = {
  
  pageSize: 1,
  
  namePrefix: "name_prefix_example",
};

const data = await apiInstance.listAnsEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] |  | defaults to undefined
 **namePrefix** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListEntriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupAnsEntryByName**
> LookupEntryByNameResponse lookupAnsEntryByName()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupAnsEntryByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupAnsEntryByNameRequest = {
  
  name: "name_example",
};

const data = await apiInstance.lookupAnsEntryByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


### Return type

**LookupEntryByNameResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupAnsEntryByParty**
> LookupEntryByPartyResponse lookupAnsEntryByParty()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupAnsEntryByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupAnsEntryByPartyRequest = {
  
  party: "party_example",
};

const data = await apiInstance.lookupAnsEntryByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**string**] |  | defaults to undefined


### Return type

**LookupEntryByPartyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupFeaturedAppRight**
> LookupFeaturedAppRightResponse lookupFeaturedAppRight()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupFeaturedAppRightRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupFeaturedAppRightRequest = {
  
  providerPartyId: "provider_party_id_example",
};

const data = await apiInstance.lookupFeaturedAppRight(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerPartyId** | [**string**] |  | defaults to undefined


### Return type

**LookupFeaturedAppRightResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupTransferCommandCounterByParty**
> LookupTransferCommandCounterByPartyResponse lookupTransferCommandCounterByParty()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupTransferCommandCounterByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupTransferCommandCounterByPartyRequest = {
  
  party: "party_example",
};

const data = await apiInstance.lookupTransferCommandCounterByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**string**] |  | defaults to undefined


### Return type

**LookupTransferCommandCounterByPartyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupTransferCommandStatus**
> LookupTransferCommandStatusResponse lookupTransferCommandStatus()

Retrieve the status of all transfer commands of the given sender for the specified nonce.

### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupTransferCommandStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupTransferCommandStatusRequest = {
  
  sender: "sender_example",
  
  nonce: 1,
};

const data = await apiInstance.lookupTransferCommandStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sender** | [**string**] |  | defaults to undefined
 **nonce** | [**number**] |  | defaults to undefined


### Return type

**LookupTransferCommandStatusResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupTransferPreapprovalByParty**
> LookupTransferPreapprovalByPartyResponse lookupTransferPreapprovalByParty()


### Example


```typescript
import { createConfiguration, ScanProxyApi } from '';
import type { ScanProxyApiLookupTransferPreapprovalByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanProxyApi(configuration);

const request: ScanProxyApiLookupTransferPreapprovalByPartyRequest = {
  
  party: "party_example",
};

const data = await apiInstance.lookupTransferPreapprovalByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**string**] |  | defaults to undefined


### Return type

**LookupTransferPreapprovalByPartyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


