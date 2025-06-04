# .InternalApi

All URIs are relative to *https://example.com/api/scan*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featureSupport**](InternalApi.md#featureSupport) | **GET** /v0/feature-support | 
[**getAmuletRules**](InternalApi.md#getAmuletRules) | **POST** /v0/amulet-rules | 
[**getAnsRules**](InternalApi.md#getAnsRules) | **POST** /v0/ans-rules | 
[**getBackfillingStatus**](InternalApi.md#getBackfillingStatus) | **GET** /v0/backfilling/status | 
[**getExternalPartyAmuletRules**](InternalApi.md#getExternalPartyAmuletRules) | **POST** /v0/external-party-amulet-rules | 
[**getMigrationInfo**](InternalApi.md#getMigrationInfo) | **POST** /v0/backfilling/migration-info | 
[**getMigrationSchedule**](InternalApi.md#getMigrationSchedule) | **GET** /v0/migrations/schedule | 
[**getSpliceInstanceNames**](InternalApi.md#getSpliceInstanceNames) | **GET** /v0/splice-instance-names | 
[**getSynchronizerBootstrappingTransactions**](InternalApi.md#getSynchronizerBootstrappingTransactions) | **GET** /v0/synchronizer-bootstrapping-transactions/{domain_id_prefix} | 
[**getSynchronizerIdentities**](InternalApi.md#getSynchronizerIdentities) | **GET** /v0/synchronizer-identities/{domain_id_prefix} | 
[**getTopValidatorsByValidatorFaucets**](InternalApi.md#getTopValidatorsByValidatorFaucets) | **GET** /v0/top-validators-by-validator-faucets | 
[**getUpdatesBefore**](InternalApi.md#getUpdatesBefore) | **POST** /v0/backfilling/updates-before | 
[**listAmuletPriceVotes**](InternalApi.md#listAmuletPriceVotes) | **GET** /v0/amulet-price/votes | 
[**listDsoRulesVoteRequests**](InternalApi.md#listDsoRulesVoteRequests) | **GET** /v0/admin/sv/voterequests | 
[**listFeaturedAppRights**](InternalApi.md#listFeaturedAppRights) | **GET** /v0/featured-apps | 
[**listSvBftSequencers**](InternalApi.md#listSvBftSequencers) | **GET** /v0/sv-bft-sequencers | 
[**listVoteRequestResults**](InternalApi.md#listVoteRequestResults) | **POST** /v0/admin/sv/voteresults | 
[**listVoteRequestsByTrackingCid**](InternalApi.md#listVoteRequestsByTrackingCid) | **POST** /v0/voterequest | 
[**lookupDsoRulesVoteRequest**](InternalApi.md#lookupDsoRulesVoteRequest) | **GET** /v0/voterequests/{vote_request_contract_id} | 
[**lookupFeaturedAppRight**](InternalApi.md#lookupFeaturedAppRight) | **GET** /v0/featured-apps/{provider_party_id} | 
[**lookupTransferCommandCounterByParty**](InternalApi.md#lookupTransferCommandCounterByParty) | **GET** /v0/transfer-command-counter/{party} | 
[**lookupTransferCommandStatus**](InternalApi.md#lookupTransferCommandStatus) | **GET** /v0/transfer-command/status | 
[**lookupTransferPreapprovalByParty**](InternalApi.md#lookupTransferPreapprovalByParty) | **GET** /v0/transfer-preapprovals/by-party/{party} | 


# **featureSupport**
> FeatureSupportResponse featureSupport()


### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.featureSupport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**FeatureSupportResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAmuletRules**
> GetAmuletRulesResponse getAmuletRules(getAmuletRulesRequest)


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetAmuletRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetAmuletRulesRequest = {
  
  getAmuletRulesRequest: {
    cachedAmuletRulesContractId: "cachedAmuletRulesContractId_example",
    cachedAmuletRulesDomainId: "cachedAmuletRulesDomainId_example",
  },
};

const data = await apiInstance.getAmuletRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAmuletRulesRequest** | **GetAmuletRulesRequest**|  |


### Return type

**GetAmuletRulesResponse**

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

# **getAnsRules**
> GetAnsRulesResponse getAnsRules(getAnsRulesRequest)


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetAnsRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetAnsRulesRequest = {
  
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

# **getBackfillingStatus**
> GetBackfillingStatusResponse getBackfillingStatus()

Retrieve the status of the backfilling process. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.getBackfillingStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetBackfillingStatusResponse**

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

# **getExternalPartyAmuletRules**
> GetExternalPartyAmuletRulesResponse getExternalPartyAmuletRules(getExternalPartyAmuletRulesRequest)


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetExternalPartyAmuletRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetExternalPartyAmuletRulesRequest = {
  
  getExternalPartyAmuletRulesRequest: {
    cachedExternalPartyAmuletRulesContractId: "cachedExternalPartyAmuletRulesContractId_example",
    cachedExternalPartyAmuletRulesDomainId: "cachedExternalPartyAmuletRulesDomainId_example",
  },
};

const data = await apiInstance.getExternalPartyAmuletRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getExternalPartyAmuletRulesRequest** | **GetExternalPartyAmuletRulesRequest**|  |


### Return type

**GetExternalPartyAmuletRulesResponse**

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

# **getMigrationInfo**
> GetMigrationInfoResponse getMigrationInfo(getMigrationInfoRequest)

List all previous synchronizer migrations in this Splice network\'s history. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetMigrationInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetMigrationInfoRequest = {
  
  getMigrationInfoRequest: {
    migrationId: 1,
  },
};

const data = await apiInstance.getMigrationInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMigrationInfoRequest** | **GetMigrationInfoRequest**|  |


### Return type

**GetMigrationInfoResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMigrationSchedule**
> MigrationSchedule getMigrationSchedule()

If the DSO has scheduled a synchronizer upgrade, return its planned time and the new migration ID. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.getMigrationSchedule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MigrationSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | No migration scheduled |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSpliceInstanceNames**
> GetSpliceInstanceNamesResponse getSpliceInstanceNames()

Retrieve the UI names of various elements of this Splice network.

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.getSpliceInstanceNames(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetSpliceInstanceNamesResponse**

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

# **getSynchronizerBootstrappingTransactions**
> SynchronizerBootstrappingTransactions getSynchronizerBootstrappingTransactions()


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetSynchronizerBootstrappingTransactionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetSynchronizerBootstrappingTransactionsRequest = {
  
  domainIdPrefix: "domain_id_prefix_example",
};

const data = await apiInstance.getSynchronizerBootstrappingTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainIdPrefix** | [**string**] |  | defaults to undefined


### Return type

**SynchronizerBootstrappingTransactions**

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

# **getSynchronizerIdentities**
> SynchronizerIdentities getSynchronizerIdentities()


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetSynchronizerIdentitiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetSynchronizerIdentitiesRequest = {
  
  domainIdPrefix: "domain_id_prefix_example",
};

const data = await apiInstance.getSynchronizerIdentities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainIdPrefix** | [**string**] |  | defaults to undefined


### Return type

**SynchronizerIdentities**

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

# **getTopValidatorsByValidatorFaucets**
> GetTopValidatorsByValidatorFaucetsResponse getTopValidatorsByValidatorFaucets()

Get a list of top validators by number of rounds in which they collected faucets, and basis statistics on their round collection history 

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetTopValidatorsByValidatorFaucetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetTopValidatorsByValidatorFaucetsRequest = {
    // Maximum number of validator records that may be returned in the response 
  limit: 1,
};

const data = await apiInstance.getTopValidatorsByValidatorFaucets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Maximum number of validator records that may be returned in the response  | defaults to undefined


### Return type

**GetTopValidatorsByValidatorFaucetsResponse**

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

# **getUpdatesBefore**
> GetUpdatesBeforeResponse getUpdatesBefore(getUpdatesBeforeRequest)

Retrieve transactions and synchronizer reassignments prior to the request\'s specification. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiGetUpdatesBeforeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiGetUpdatesBeforeRequest = {
  
  getUpdatesBeforeRequest: {
    migrationId: 1,
    synchronizerId: "synchronizerId_example",
    before: new Date('1970-01-01T00:00:00.00Z'),
    atOrAfter: new Date('1970-01-01T00:00:00.00Z'),
    count: 1,
  },
};

const data = await apiInstance.getUpdatesBefore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUpdatesBeforeRequest** | **GetUpdatesBeforeRequest**|  |


### Return type

**GetUpdatesBeforeResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAmuletPriceVotes**
> ListAmuletPriceVotesResponse listAmuletPriceVotes()

Retrieve a list of the latest amulet price votes

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.listAmuletPriceVotes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListAmuletPriceVotesResponse**

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

# **listDsoRulesVoteRequests**
> ListDsoRulesVoteRequestsResponse listDsoRulesVoteRequests()

List all active `VoteRequest`\\ s.

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.listDsoRulesVoteRequests(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListDsoRulesVoteRequestsResponse**

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

# **listFeaturedAppRights**
> ListFeaturedAppRightsResponse listFeaturedAppRights()

List every `FeaturedAppRight` registered with the DSO on the ledger. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.listFeaturedAppRights(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListFeaturedAppRightsResponse**

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

# **listSvBftSequencers**
> ListSvBftSequencersResponse listSvBftSequencers()

Retrieve Canton BFT sequencer configuration for this SV, for each configured Synchronizer 

### Example


```typescript
import { createConfiguration, InternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request = {};

const data = await apiInstance.listSvBftSequencers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListSvBftSequencersResponse**

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

# **listVoteRequestResults**
> ListDsoRulesVoteResultsResponse listVoteRequestResults(listVoteResultsRequest)


### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiListVoteRequestResultsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiListVoteRequestResultsRequest = {
  
  listVoteResultsRequest: {
    actionName: "actionName_example",
    accepted: true,
    requester: "requester_example",
    effectiveFrom: "effectiveFrom_example",
    effectiveTo: "effectiveTo_example",
    limit: 1,
  },
};

const data = await apiInstance.listVoteRequestResults(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listVoteResultsRequest** | **ListVoteResultsRequest**|  |


### Return type

**ListDsoRulesVoteResultsResponse**

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

# **listVoteRequestsByTrackingCid**
> ListVoteRequestByTrackingCidResponse listVoteRequestsByTrackingCid(batchListVotesByVoteRequestsRequest)

Look up several `VoteRequest`\\ s at once by their contract IDs.

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiListVoteRequestsByTrackingCidRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiListVoteRequestsByTrackingCidRequest = {
  
  batchListVotesByVoteRequestsRequest: {
    voteRequestContractIds: [
      "voteRequestContractIds_example",
    ],
  },
};

const data = await apiInstance.listVoteRequestsByTrackingCid(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchListVotesByVoteRequestsRequest** | **BatchListVotesByVoteRequestsRequest**|  |


### Return type

**ListVoteRequestByTrackingCidResponse**

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

# **lookupDsoRulesVoteRequest**
> LookupDsoRulesVoteRequestResponse lookupDsoRulesVoteRequest()

Look up a `VoteRequest` by contract ID.

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiLookupDsoRulesVoteRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiLookupDsoRulesVoteRequestRequest = {
  
  voteRequestContractId: "vote_request_contract_id_example",
};

const data = await apiInstance.lookupDsoRulesVoteRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voteRequestContractId** | [**string**] |  | defaults to undefined


### Return type

**LookupDsoRulesVoteRequestResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | VoteRequest contract not found. |  -  |
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupFeaturedAppRight**
> LookupFeaturedAppRightResponse lookupFeaturedAppRight()

If `provider_party_id` has a `FeaturedAppRight` registered with the DSO, return it; `featured_app_right` will be empty otherwise. 

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiLookupFeaturedAppRightRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiLookupFeaturedAppRightRequest = {
  
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

Lookup a TransferCommandCounter by the receiver party.

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiLookupTransferCommandCounterByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiLookupTransferCommandCounterByPartyRequest = {
  
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

Retrieve the status of all transfer commands (up to a limit of 100) of the given sender for the specified nonce.

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiLookupTransferCommandStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiLookupTransferCommandStatusRequest = {
  
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

Lookup a TransferPreapproval by the receiver party.

### Example


```typescript
import { createConfiguration, InternalApi } from '';
import type { InternalApiLookupTransferPreapprovalByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InternalApi(configuration);

const request: InternalApiLookupTransferPreapprovalByPartyRequest = {
  
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


