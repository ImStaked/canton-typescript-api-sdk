# .ExternalApi

All URIs are relative to *https://example.com/api/scan*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forceAcsSnapshotNow**](ExternalApi.md#forceAcsSnapshotNow) | **POST** /v0/state/acs/force | 
[**getAcsSnapshotAt**](ExternalApi.md#getAcsSnapshotAt) | **POST** /v0/state/acs | 
[**getClosedRounds**](ExternalApi.md#getClosedRounds) | **GET** /v0/closed-rounds | 
[**getDateOfMostRecentSnapshotBefore**](ExternalApi.md#getDateOfMostRecentSnapshotBefore) | **GET** /v0/state/acs/snapshot-timestamp | 
[**getDsoInfo**](ExternalApi.md#getDsoInfo) | **GET** /v0/dso | 
[**getDsoPartyId**](ExternalApi.md#getDsoPartyId) | **GET** /v0/dso-party-id | 
[**getHoldingsStateAt**](ExternalApi.md#getHoldingsStateAt) | **POST** /v0/holdings/state | 
[**getHoldingsSummaryAt**](ExternalApi.md#getHoldingsSummaryAt) | **POST** /v0/holdings/summary | 
[**getMemberTrafficStatus**](ExternalApi.md#getMemberTrafficStatus) | **GET** /v0/domains/{domain_id}/members/{member_id}/traffic-status | 
[**getOpenAndIssuingMiningRounds**](ExternalApi.md#getOpenAndIssuingMiningRounds) | **POST** /v0/open-and-issuing-mining-rounds | 
[**getPartyToParticipant**](ExternalApi.md#getPartyToParticipant) | **GET** /v0/domains/{domain_id}/parties/{party_id}/participant-id | 
[**getUpdateByIdV1**](ExternalApi.md#getUpdateByIdV1) | **GET** /v1/updates/{update_id} | 
[**getUpdateHistoryV1**](ExternalApi.md#getUpdateHistoryV1) | **POST** /v1/updates | 
[**getValidatorFaucetsByValidator**](ExternalApi.md#getValidatorFaucetsByValidator) | **GET** /v0/validators/validator-faucets | 
[**listAnsEntries**](ExternalApi.md#listAnsEntries) | **GET** /v0/ans-entries | 
[**listDsoScans**](ExternalApi.md#listDsoScans) | **GET** /v0/scans | 
[**listDsoSequencers**](ExternalApi.md#listDsoSequencers) | **GET** /v0/dso-sequencers | 
[**listValidatorLicenses**](ExternalApi.md#listValidatorLicenses) | **GET** /v0/admin/validator/licenses | 
[**lookupAnsEntryByName**](ExternalApi.md#lookupAnsEntryByName) | **GET** /v0/ans-entries/by-name/{name} | 
[**lookupAnsEntryByParty**](ExternalApi.md#lookupAnsEntryByParty) | **GET** /v0/ans-entries/by-party/{party} | 


# **forceAcsSnapshotNow**
> ForceAcsSnapshotResponse forceAcsSnapshotNow()

Takes a snapshot of the ACS at the current time. The responses can be used as parameters to `/v0/state/acs` to retrieve the snapshot. Disabled in production environments due to its persistent alteration of the behavior of future invocations of `/v0/state/acs`, as it causes an immediate internal snapshot and delay in the next automatic snapshot. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request = {};

const data = await apiInstance.forceAcsSnapshotNow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ForceAcsSnapshotResponse**

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
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAcsSnapshotAt**
> AcsResponse getAcsSnapshotAt(acsRequest)

Returns the ACS in creation date ascending order, paged, for a given migration id and record time. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetAcsSnapshotAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetAcsSnapshotAtRequest = {
  
  acsRequest: {
    migrationId: 1,
    recordTime: new Date('1970-01-01T00:00:00.00Z'),
    after: 1,
    pageSize: 1,
    partyIds: [
      "partyIds_example",
    ],
    templates: [
      "templates_example",
    ],
  },
};

const data = await apiInstance.getAcsSnapshotAt(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acsRequest** | **AcsRequest**|  |


### Return type

**AcsResponse**

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

# **getClosedRounds**
> GetClosedRoundsResponse getClosedRounds()

Every closed mining round on the ledger still in post-close process for the connected Splice network, in round number order, earliest-first. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request = {};

const data = await apiInstance.getClosedRounds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetClosedRoundsResponse**

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

# **getDateOfMostRecentSnapshotBefore**
> AcsSnapshotTimestampResponse getDateOfMostRecentSnapshotBefore()

Returns the timestamp of the most recent snapshot before the given date, for the given migration_id. This corresponds to the record time of the last transaction in the snapshot. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetDateOfMostRecentSnapshotBeforeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetDateOfMostRecentSnapshotBeforeRequest = {
  
  before: new Date('1970-01-01T00:00:00.00Z'),
  
  migrationId: 1,
};

const data = await apiInstance.getDateOfMostRecentSnapshotBefore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | [**Date**] |  | defaults to undefined
 **migrationId** | [**number**] |  | defaults to undefined


### Return type

**AcsSnapshotTimestampResponse**

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

# **getDsoInfo**
> GetDsoInfoResponse getDsoInfo()


### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request = {};

const data = await apiInstance.getDsoInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetDsoInfoResponse**

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

# **getDsoPartyId**
> GetDsoPartyIdResponse getDsoPartyId()

The party ID of the DSO for the Splice network connected by this Scan app. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

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

# **getHoldingsStateAt**
> AcsResponse getHoldingsStateAt(holdingsStateRequest)

Returns the active amulet contracts for a given migration id and record time, in creation date ascending order, paged. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetHoldingsStateAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetHoldingsStateAtRequest = {
  
  holdingsStateRequest: {
    migrationId: 1,
    recordTime: new Date('1970-01-01T00:00:00.00Z'),
    after: 1,
    pageSize: 1,
    ownerPartyIds: [
      "ownerPartyIds_example",
    ],
  },
};

const data = await apiInstance.getHoldingsStateAt(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **holdingsStateRequest** | **HoldingsStateRequest**|  |


### Return type

**AcsResponse**

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

# **getHoldingsSummaryAt**
> HoldingsSummaryResponse getHoldingsSummaryAt(holdingsSummaryRequest)

Returns the summary of active amulet contracts for a given migration id and record time, for the given parties. This is an aggregate of `/v0/holdings/state` by owner party ID with better performance than client-side computation. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetHoldingsSummaryAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetHoldingsSummaryAtRequest = {
  
  holdingsSummaryRequest: {
    migrationId: 1,
    recordTime: new Date('1970-01-01T00:00:00.00Z'),
    ownerPartyIds: [
      "ownerPartyIds_example",
    ],
    asOfRound: 1,
  },
};

const data = await apiInstance.getHoldingsSummaryAt(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **holdingsSummaryRequest** | **HoldingsSummaryRequest**|  |


### Return type

**HoldingsSummaryResponse**

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

# **getMemberTrafficStatus**
> GetMemberTrafficStatusResponse getMemberTrafficStatus()

Get a member\'s traffic status as reported by the sequencer, according to ledger state at the time of the request. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetMemberTrafficStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetMemberTrafficStatusRequest = {
    // The synchronizer ID to look up traffic for. 
  domainId: "domain_id_example",
    // The participant or mediator whose traffic to look up, in the format `code::id::fingerprint` where `code` is `PAR` or `MED`. 
  memberId: "member_id_example",
};

const data = await apiInstance.getMemberTrafficStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] | The synchronizer ID to look up traffic for.  | defaults to undefined
 **memberId** | [**string**] | The participant or mediator whose traffic to look up, in the format &#x60;code::id::fingerprint&#x60; where &#x60;code&#x60; is &#x60;PAR&#x60; or &#x60;MED&#x60;.  | defaults to undefined


### Return type

**GetMemberTrafficStatusResponse**

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

# **getOpenAndIssuingMiningRounds**
> GetOpenAndIssuingMiningRoundsResponse getOpenAndIssuingMiningRounds(getOpenAndIssuingMiningRoundsRequest)

All current open and issuing mining rounds, if the request is empty; passing contract IDs in the request can reduce the response data for polling/client-cache-update efficiency. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetOpenAndIssuingMiningRoundsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetOpenAndIssuingMiningRoundsRequest = {
  
  getOpenAndIssuingMiningRoundsRequest: {
    cachedOpenMiningRoundContractIds: [
      "cachedOpenMiningRoundContractIds_example",
    ],
    cachedIssuingRoundContractIds: [
      "cachedIssuingRoundContractIds_example",
    ],
  },
};

const data = await apiInstance.getOpenAndIssuingMiningRounds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getOpenAndIssuingMiningRoundsRequest** | **GetOpenAndIssuingMiningRoundsRequest**|  |


### Return type

**GetOpenAndIssuingMiningRoundsResponse**

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

# **getPartyToParticipant**
> GetPartyToParticipantResponse getPartyToParticipant()

Get the ID of the participant hosting a given party.  This will fail if there are multiple party-to-participant mappings for the given synchronizer and party, which is not currently supported. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetPartyToParticipantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetPartyToParticipantRequest = {
    // The synchronizer ID to look up a mapping for. 
  domainId: "domain_id_example",
    // The party ID to lookup a participant ID for. 
  partyId: "party_id_example",
};

const data = await apiInstance.getPartyToParticipant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | [**string**] | The synchronizer ID to look up a mapping for.  | defaults to undefined
 **partyId** | [**string**] | The party ID to lookup a participant ID for.  | defaults to undefined


### Return type

**GetPartyToParticipantResponse**

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
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUpdateByIdV1**
> UpdateHistoryItem getUpdateByIdV1()

Returns the update with the given update_id. Unlike /v0/updates/{update_id}, this endpoint returns responses that are consistent across different scan instances. Event ids returned by this endpoint are not comparable to event ids returned by /v0/updates. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetUpdateByIdV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetUpdateByIdV1Request = {
  
  updateId: "update_id_example",
  
  damlValueEncoding: "compact_json",
};

const data = await apiInstance.getUpdateByIdV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateId** | [**string**] |  | defaults to undefined
 **damlValueEncoding** | **DamlValueEncoding** |  | (optional) defaults to undefined


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

# **getUpdateHistoryV1**
> UpdateHistoryResponse getUpdateHistoryV1(updateHistoryRequestV1)

Returns the update history in ascending order, paged, from ledger begin or optionally starting after a record time. Unlike /v0/updates, this endpoint returns responses that are consistent across different scan instances. Event ids returned by this endpoint are not comparable to event ids returned by /v0/updates.  Updates are ordered lexicographically by `(migration id, record time)`. For a given migration id, each update has a unique record time. The record time ranges of different migrations may overlap, i.e., it is not guaranteed that the maximum record time of one migration is smaller than the minimum record time of the next migration, and there may be two updates with the same record time but different migration ids. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetUpdateHistoryV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetUpdateHistoryV1Request = {
  
  updateHistoryRequestV1: {
    after: {
      afterMigrationId: 1,
      afterRecordTime: "afterRecordTime_example",
    },
    pageSize: 1,
    damlValueEncoding: "compact_json",
  },
};

const data = await apiInstance.getUpdateHistoryV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateHistoryRequestV1** | **UpdateHistoryRequestV1**|  |


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

# **getValidatorFaucetsByValidator**
> GetValidatorFaucetsByValidatorResponse getValidatorFaucetsByValidator()

For every argument that is a valid onboarded validator, return statistics on its liveness activity, according to on-ledger state at the time of the request. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiGetValidatorFaucetsByValidatorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiGetValidatorFaucetsByValidatorRequest = {
    // A list of validator party IDs, one per specification of the parameter. Any party IDs not matching onboarded validators will be ignored 
  validatorIds: [
    "validator_ids_example",
  ],
};

const data = await apiInstance.getValidatorFaucetsByValidator(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorIds** | **Array&lt;string&gt;** | A list of validator party IDs, one per specification of the parameter. Any party IDs not matching onboarded validators will be ignored  | defaults to undefined


### Return type

**GetValidatorFaucetsByValidatorResponse**

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

# **listAnsEntries**
> ListEntriesResponse listAnsEntries()

Lists all non-expired ANS entries whose names are prefixed with the `name_prefix`, up to `page_size` entries. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiListAnsEntriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiListAnsEntriesRequest = {
    // The maximum number of results returned. Older (but still non-expired) results are listed first. 
  pageSize: 1,
    // Every result\'s name will start with this substring; if empty or absent, all entries will be listed. Does not have to be a whole word or segment; any substring will be accepted.  (optional)
  namePrefix: "name_prefix_example",
};

const data = await apiInstance.listAnsEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | The maximum number of results returned. Older (but still non-expired) results are listed first.  | defaults to undefined
 **namePrefix** | [**string**] | Every result\&#39;s name will start with this substring; if empty or absent, all entries will be listed. Does not have to be a whole word or segment; any substring will be accepted.  | (optional) defaults to undefined


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

# **listDsoScans**
> ListDsoScansResponse listDsoScans()

Retrieve Canton scan configuration for all SVs, grouped by connected synchronizer ID 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request = {};

const data = await apiInstance.listDsoScans(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListDsoScansResponse**

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

# **listDsoSequencers**
> ListDsoSequencersResponse listDsoSequencers()

Retrieve Canton sequencer configuration for all SVs, grouped by connected synchronizer ID 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request = {};

const data = await apiInstance.listDsoSequencers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListDsoSequencersResponse**

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

# **listValidatorLicenses**
> ListValidatorLicensesResponse listValidatorLicenses()

List all validators currently approved by members of the DSO, paginated, sorted newest-first. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiListValidatorLicensesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiListValidatorLicensesRequest = {
    // A `next_page_token` from a prior response; if absent, return the first page.  (optional)
  after: 1,
    // Maximum number of elements to return, 1000 by default. (optional)
  limit: 1,
};

const data = await apiInstance.listValidatorLicenses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | [**number**] | A &#x60;next_page_token&#x60; from a prior response; if absent, return the first page.  | (optional) defaults to undefined
 **limit** | [**number**] | Maximum number of elements to return, 1000 by default. | (optional) defaults to undefined


### Return type

**ListValidatorLicensesResponse**

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

If present, the ANS entry named exactly `name`.

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiLookupAnsEntryByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiLookupAnsEntryByNameRequest = {
  
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

If present, the first ANS entry for user `party` according to `name` lexicographic order. 

### Example


```typescript
import { createConfiguration, ExternalApi } from '';
import type { ExternalApiLookupAnsEntryByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExternalApi(configuration);

const request: ExternalApiLookupAnsEntryByPartyRequest = {
    // The user party ID that holds the ANS entry.
  party: "party_example",
};

const data = await apiInstance.lookupAnsEntryByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**string**] | The user party ID that holds the ANS entry. | defaults to undefined


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


