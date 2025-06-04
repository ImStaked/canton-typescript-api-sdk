# .DeprecatedApi

All URIs are relative to *https://example.com/api/scan*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAcsSnapshot**](DeprecatedApi.md#getAcsSnapshot) | **GET** /v0/acs/{party} | 
[**getAggregatedRounds**](DeprecatedApi.md#getAggregatedRounds) | **GET** /v0/aggregated-rounds | 
[**getAmuletConfigForRound**](DeprecatedApi.md#getAmuletConfigForRound) | **GET** /v0/amulet-config-for-round | 
[**getRewardsCollected**](DeprecatedApi.md#getRewardsCollected) | **GET** /v0/rewards-collected | 
[**getRoundOfLatestData**](DeprecatedApi.md#getRoundOfLatestData) | **GET** /v0/round-of-latest-data | 
[**getTopProvidersByAppRewards**](DeprecatedApi.md#getTopProvidersByAppRewards) | **GET** /v0/top-providers-by-app-rewards | 
[**getTopValidatorsByPurchasedTraffic**](DeprecatedApi.md#getTopValidatorsByPurchasedTraffic) | **GET** /v0/top-validators-by-purchased-traffic | 
[**getTopValidatorsByValidatorRewards**](DeprecatedApi.md#getTopValidatorsByValidatorRewards) | **GET** /v0/top-validators-by-validator-rewards | 
[**getTotalAmuletBalance**](DeprecatedApi.md#getTotalAmuletBalance) | **GET** /v0/total-amulet-balance | 
[**getUpdateById**](DeprecatedApi.md#getUpdateById) | **GET** /v0/updates/{update_id} | 
[**getUpdateHistory**](DeprecatedApi.md#getUpdateHistory) | **POST** /v0/updates | 
[**getWalletBalance**](DeprecatedApi.md#getWalletBalance) | **GET** /v0/wallet-balance | 
[**listActivity**](DeprecatedApi.md#listActivity) | **POST** /v0/activities | 
[**listRoundPartyTotals**](DeprecatedApi.md#listRoundPartyTotals) | **POST** /v0/round-party-totals | 
[**listRoundTotals**](DeprecatedApi.md#listRoundTotals) | **POST** /v0/round-totals | 
[**listTransactionHistory**](DeprecatedApi.md#listTransactionHistory) | **POST** /v0/transactions | 


# **getAcsSnapshot**
> GetAcsSnapshotResponse getAcsSnapshot()

**Deprecated**. Fetch the current SV participant ACS snapshot for the DSO and `party`.

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetAcsSnapshotRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetAcsSnapshotRequest = {
  
  party: "party_example",
  
  recordTime: "record_time_example",
};

const data = await apiInstance.getAcsSnapshot(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**string**] |  | defaults to undefined
 **recordTime** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetAcsSnapshotResponse**

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

# **getAggregatedRounds**
> GetAggregatedRoundsResponse getAggregatedRounds()

**Deprecated**. Retrieve the current earliest and latest rounds aggregated for this Scan.

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request = {};

const data = await apiInstance.getAggregatedRounds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetAggregatedRoundsResponse**

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

# **getAmuletConfigForRound**
> GetAmuletConfigForRoundResponse getAmuletConfigForRound()

**Deprecated**. Retrieve some information from the `AmuletRules` selected for the given round 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetAmuletConfigForRoundRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetAmuletConfigForRoundRequest = {
  
  round: 1,
};

const data = await apiInstance.getAmuletConfigForRound(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **round** | [**number**] |  | defaults to undefined


### Return type

**GetAmuletConfigForRoundResponse**

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

# **getRewardsCollected**
> GetRewardsCollectedResponse getRewardsCollected()

**Deprecated**. Get the total rewards collected ever

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetRewardsCollectedRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetRewardsCollectedRequest = {
  
  round: 1,
};

const data = await apiInstance.getRewardsCollected(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **round** | [**number**] |  | (optional) defaults to undefined


### Return type

**GetRewardsCollectedResponse**

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

# **getRoundOfLatestData**
> GetRoundOfLatestDataResponse getRoundOfLatestData()

**Deprecated**. Get the latest round number for which aggregated data is available and the ledger effective time at which the round was closed. 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request = {};

const data = await apiInstance.getRoundOfLatestData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetRoundOfLatestDataResponse**

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

# **getTopProvidersByAppRewards**
> GetTopProvidersByAppRewardsResponse getTopProvidersByAppRewards()

**Deprecated**. Get a list of top-earning app providers, and the total earned app rewards for each 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetTopProvidersByAppRewardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetTopProvidersByAppRewardsRequest = {
  
  round: 1,
  
  limit: 1,
};

const data = await apiInstance.getTopProvidersByAppRewards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **round** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**GetTopProvidersByAppRewardsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTopValidatorsByPurchasedTraffic**
> GetTopValidatorsByPurchasedTrafficResponse getTopValidatorsByPurchasedTraffic()

**Deprecated**. Get a list of validators and their domain fees spends, sorted by the amount of extra traffic purchased 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetTopValidatorsByPurchasedTrafficRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetTopValidatorsByPurchasedTrafficRequest = {
  
  round: 1,
  
  limit: 1,
};

const data = await apiInstance.getTopValidatorsByPurchasedTraffic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **round** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**GetTopValidatorsByPurchasedTrafficResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTopValidatorsByValidatorRewards**
> GetTopValidatorsByValidatorRewardsResponse getTopValidatorsByValidatorRewards()

**Deprecated**. Get a list of top-earning validators, and the total earned validator rewards for each 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetTopValidatorsByValidatorRewardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetTopValidatorsByValidatorRewardsRequest = {
  
  round: 1,
  
  limit: 1,
};

const data = await apiInstance.getTopValidatorsByValidatorRewards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **round** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**GetTopValidatorsByValidatorRewardsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTotalAmuletBalance**
> GetTotalAmuletBalanceResponse getTotalAmuletBalance()

**Deprecated**. Get the total balance of Amulet in the network

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetTotalAmuletBalanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetTotalAmuletBalanceRequest = {
  
  asOfEndOfRound: 1,
};

const data = await apiInstance.getTotalAmuletBalance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asOfEndOfRound** | [**number**] |  | defaults to undefined


### Return type

**GetTotalAmuletBalanceResponse**

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

# **getUpdateById**
> UpdateHistoryItem getUpdateById()

**Deprecated**, use /v1/updates/{update_id} instead. 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetUpdateByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetUpdateByIdRequest = {
  
  updateId: "update_id_example",
    // Whether contract payload should be encoded into json using a lossless, but much harder to process, encoding. This is mostly used for backend calls, and is not recommended for external users. Optional and defaults to false.  (optional)
  lossless: true,
};

const data = await apiInstance.getUpdateById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateId** | [**string**] |  | defaults to undefined
 **lossless** | [**boolean**] | Whether contract payload should be encoded into json using a lossless, but much harder to process, encoding. This is mostly used for backend calls, and is not recommended for external users. Optional and defaults to false.  | (optional) defaults to undefined


### Return type

**UpdateHistoryItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUpdateHistory**
> UpdateHistoryResponse getUpdateHistory(updateHistoryRequest)

**Deprecated**, use /v1/updates instead. Returns the update history in ascending order, paged, from ledger begin or optionally starting after a record time. 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetUpdateHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetUpdateHistoryRequest = {
  
  updateHistoryRequest: {
    after: {
      afterMigrationId: 1,
      afterRecordTime: "afterRecordTime_example",
    },
    pageSize: 1,
    lossless: true,
  },
};

const data = await apiInstance.getUpdateHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateHistoryRequest** | **UpdateHistoryRequest**|  |


### Return type

**UpdateHistoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletBalance**
> GetWalletBalanceResponse getWalletBalance()

**Deprecated**, use /v0/holdings/summary with /v0/state/acs/snapshot-timestamp instead. Get the Amulet balance for a specific party at the end of a closed round 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiGetWalletBalanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiGetWalletBalanceRequest = {
  
  partyId: "party_id_example",
  
  asOfEndOfRound: 1,
};

const data = await apiInstance.getWalletBalance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | [**string**] |  | defaults to undefined
 **asOfEndOfRound** | [**number**] |  | defaults to undefined


### Return type

**GetWalletBalanceResponse**

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

# **listActivity**
> ListActivityResponse listActivity(listActivityRequest)

**Deprecated**. Lists activities in descending order, paged, optionally starting after a provided event id. 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiListActivityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiListActivityRequest = {
  
  listActivityRequest: {
    beginAfterId: "beginAfterId_example",
    pageSize: 1,
  },
};

const data = await apiInstance.listActivity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listActivityRequest** | **ListActivityRequest**|  |


### Return type

**ListActivityResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoundPartyTotals**
> ListRoundPartyTotalsResponse listRoundPartyTotals(listRoundPartyTotalsRequest)

**Deprecated**. Retrieve per-party Amulet statistics for up to 50 closed rounds.

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiListRoundPartyTotalsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiListRoundPartyTotalsRequest = {
  
  listRoundPartyTotalsRequest: {
    startRound: 1,
    endRound: 1,
  },
};

const data = await apiInstance.listRoundPartyTotals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listRoundPartyTotalsRequest** | **ListRoundPartyTotalsRequest**|  |


### Return type

**ListRoundPartyTotalsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoundTotals**
> ListRoundTotalsResponse listRoundTotals(listRoundTotalsRequest)

**Deprecated**. List Amulet statistics for up to 200 closed rounds.

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiListRoundTotalsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiListRoundTotalsRequest = {
  
  listRoundTotalsRequest: {
    startRound: 1,
    endRound: 1,
  },
};

const data = await apiInstance.listRoundTotals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listRoundTotalsRequest** | **ListRoundTotalsRequest**|  |


### Return type

**ListRoundTotalsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransactionHistory**
> TransactionHistoryResponse listTransactionHistory(transactionHistoryRequest)

**Deprecated**. Lists transactions, by default in ascending order, paged, from ledger begin or optionally starting after a provided event id. 

### Example


```typescript
import { createConfiguration, DeprecatedApi } from '';
import type { DeprecatedApiListTransactionHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeprecatedApi(configuration);

const request: DeprecatedApiListTransactionHistoryRequest = {
  
  transactionHistoryRequest: {
    pageEndEventId: "pageEndEventId_example",
    sortOrder: "asc",
    pageSize: 1,
  },
};

const data = await apiInstance.listTransactionHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHistoryRequest** | **TransactionHistoryRequest**|  |


### Return type

**TransactionHistoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


