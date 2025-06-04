# .ScanApi

All URIs are relative to *https://example.com/api/scan*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featureSupport**](ScanApi.md#featureSupport) | **GET** /v0/feature-support | 
[**forceAcsSnapshotNow**](ScanApi.md#forceAcsSnapshotNow) | **POST** /v0/state/acs/force | 
[**getAcsSnapshotAt**](ScanApi.md#getAcsSnapshotAt) | **POST** /v0/state/acs | 
[**getAmuletRules**](ScanApi.md#getAmuletRules) | **POST** /v0/amulet-rules | 
[**getAnsRules**](ScanApi.md#getAnsRules) | **POST** /v0/ans-rules | 
[**getBackfillingStatus**](ScanApi.md#getBackfillingStatus) | **GET** /v0/backfilling/status | 
[**getClosedRounds**](ScanApi.md#getClosedRounds) | **GET** /v0/closed-rounds | 
[**getDateOfMostRecentSnapshotBefore**](ScanApi.md#getDateOfMostRecentSnapshotBefore) | **GET** /v0/state/acs/snapshot-timestamp | 
[**getDsoInfo**](ScanApi.md#getDsoInfo) | **GET** /v0/dso | 
[**getDsoPartyId**](ScanApi.md#getDsoPartyId) | **GET** /v0/dso-party-id | 
[**getExternalPartyAmuletRules**](ScanApi.md#getExternalPartyAmuletRules) | **POST** /v0/external-party-amulet-rules | 
[**getHoldingsStateAt**](ScanApi.md#getHoldingsStateAt) | **POST** /v0/holdings/state | 
[**getHoldingsSummaryAt**](ScanApi.md#getHoldingsSummaryAt) | **POST** /v0/holdings/summary | 
[**getMemberTrafficStatus**](ScanApi.md#getMemberTrafficStatus) | **GET** /v0/domains/{domain_id}/members/{member_id}/traffic-status | 
[**getMigrationInfo**](ScanApi.md#getMigrationInfo) | **POST** /v0/backfilling/migration-info | 
[**getMigrationSchedule**](ScanApi.md#getMigrationSchedule) | **GET** /v0/migrations/schedule | 
[**getOpenAndIssuingMiningRounds**](ScanApi.md#getOpenAndIssuingMiningRounds) | **POST** /v0/open-and-issuing-mining-rounds | 
[**getPartyToParticipant**](ScanApi.md#getPartyToParticipant) | **GET** /v0/domains/{domain_id}/parties/{party_id}/participant-id | 
[**getRewardsCollected**](ScanApi.md#getRewardsCollected) | **GET** /v0/rewards-collected | 
[**getRoundOfLatestData**](ScanApi.md#getRoundOfLatestData) | **GET** /v0/round-of-latest-data | 
[**getSpliceInstanceNames**](ScanApi.md#getSpliceInstanceNames) | **GET** /v0/splice-instance-names | 
[**getSynchronizerBootstrappingTransactions**](ScanApi.md#getSynchronizerBootstrappingTransactions) | **GET** /v0/synchronizer-bootstrapping-transactions/{domain_id_prefix} | 
[**getSynchronizerIdentities**](ScanApi.md#getSynchronizerIdentities) | **GET** /v0/synchronizer-identities/{domain_id_prefix} | 
[**getTopProvidersByAppRewards**](ScanApi.md#getTopProvidersByAppRewards) | **GET** /v0/top-providers-by-app-rewards | 
[**getTopValidatorsByPurchasedTraffic**](ScanApi.md#getTopValidatorsByPurchasedTraffic) | **GET** /v0/top-validators-by-purchased-traffic | 
[**getTopValidatorsByValidatorFaucets**](ScanApi.md#getTopValidatorsByValidatorFaucets) | **GET** /v0/top-validators-by-validator-faucets | 
[**getTopValidatorsByValidatorRewards**](ScanApi.md#getTopValidatorsByValidatorRewards) | **GET** /v0/top-validators-by-validator-rewards | 
[**getTotalAmuletBalance**](ScanApi.md#getTotalAmuletBalance) | **GET** /v0/total-amulet-balance | 
[**getUpdateByIdV1**](ScanApi.md#getUpdateByIdV1) | **GET** /v1/updates/{update_id} | 
[**getUpdateHistoryV1**](ScanApi.md#getUpdateHistoryV1) | **POST** /v1/updates | 
[**getUpdatesBefore**](ScanApi.md#getUpdatesBefore) | **POST** /v0/backfilling/updates-before | 
[**getValidatorFaucetsByValidator**](ScanApi.md#getValidatorFaucetsByValidator) | **GET** /v0/validators/validator-faucets | 
[**listActivity**](ScanApi.md#listActivity) | **POST** /v0/activities | 
[**listAmuletPriceVotes**](ScanApi.md#listAmuletPriceVotes) | **GET** /v0/amulet-price/votes | 
[**listAnsEntries**](ScanApi.md#listAnsEntries) | **GET** /v0/ans-entries | 
[**listDsoRulesVoteRequests**](ScanApi.md#listDsoRulesVoteRequests) | **GET** /v0/admin/sv/voterequests | 
[**listDsoScans**](ScanApi.md#listDsoScans) | **GET** /v0/scans | 
[**listDsoSequencers**](ScanApi.md#listDsoSequencers) | **GET** /v0/dso-sequencers | 
[**listFeaturedAppRights**](ScanApi.md#listFeaturedAppRights) | **GET** /v0/featured-apps | 
[**listSvBftSequencers**](ScanApi.md#listSvBftSequencers) | **GET** /v0/sv-bft-sequencers | 
[**listValidatorLicenses**](ScanApi.md#listValidatorLicenses) | **GET** /v0/admin/validator/licenses | 
[**listVoteRequestResults**](ScanApi.md#listVoteRequestResults) | **POST** /v0/admin/sv/voteresults | 
[**listVoteRequestsByTrackingCid**](ScanApi.md#listVoteRequestsByTrackingCid) | **POST** /v0/voterequest | 
[**lookupAnsEntryByName**](ScanApi.md#lookupAnsEntryByName) | **GET** /v0/ans-entries/by-name/{name} | 
[**lookupAnsEntryByParty**](ScanApi.md#lookupAnsEntryByParty) | **GET** /v0/ans-entries/by-party/{party} | 
[**lookupDsoRulesVoteRequest**](ScanApi.md#lookupDsoRulesVoteRequest) | **GET** /v0/voterequests/{vote_request_contract_id} | 
[**lookupFeaturedAppRight**](ScanApi.md#lookupFeaturedAppRight) | **GET** /v0/featured-apps/{provider_party_id} | 
[**lookupTransferCommandCounterByParty**](ScanApi.md#lookupTransferCommandCounterByParty) | **GET** /v0/transfer-command-counter/{party} | 
[**lookupTransferCommandStatus**](ScanApi.md#lookupTransferCommandStatus) | **GET** /v0/transfer-command/status | 
[**lookupTransferPreapprovalByParty**](ScanApi.md#lookupTransferPreapprovalByParty) | **GET** /v0/transfer-preapprovals/by-party/{party} | 


# **featureSupport**
> FeatureSupportResponse featureSupport()


### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **forceAcsSnapshotNow**
> ForceAcsSnapshotResponse forceAcsSnapshotNow()

Takes a snapshot of the ACS at the current time. The responses can be used as parameters to `/v0/state/acs` to retrieve the snapshot. Disabled in production environments due to its persistent alteration of the behavior of future invocations of `/v0/state/acs`, as it causes an immediate internal snapshot and delay in the next automatic snapshot. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetAcsSnapshotAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetAcsSnapshotAtRequest = {
  
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

# **getAmuletRules**
> GetAmuletRulesResponse getAmuletRules(getAmuletRulesRequest)


### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetAmuletRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetAmuletRulesRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetAnsRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetAnsRulesRequest = {
  
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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **getClosedRounds**
> GetClosedRoundsResponse getClosedRounds()

Every closed mining round on the ledger still in post-close process for the connected Splice network, in round number order, earliest-first. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetDateOfMostRecentSnapshotBeforeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetDateOfMostRecentSnapshotBeforeRequest = {
  
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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **getExternalPartyAmuletRules**
> GetExternalPartyAmuletRulesResponse getExternalPartyAmuletRules(getExternalPartyAmuletRulesRequest)


### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetExternalPartyAmuletRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetExternalPartyAmuletRulesRequest = {
  
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

# **getHoldingsStateAt**
> AcsResponse getHoldingsStateAt(holdingsStateRequest)

Returns the active amulet contracts for a given migration id and record time, in creation date ascending order, paged. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetHoldingsStateAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetHoldingsStateAtRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetHoldingsSummaryAtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetHoldingsSummaryAtRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetMemberTrafficStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetMemberTrafficStatusRequest = {
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

# **getMigrationInfo**
> GetMigrationInfoResponse getMigrationInfo(getMigrationInfoRequest)

List all previous synchronizer migrations in this Splice network\'s history. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetMigrationInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetMigrationInfoRequest = {
  
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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **getOpenAndIssuingMiningRounds**
> GetOpenAndIssuingMiningRoundsResponse getOpenAndIssuingMiningRounds(getOpenAndIssuingMiningRoundsRequest)

All current open and issuing mining rounds, if the request is empty; passing contract IDs in the request can reduce the response data for polling/client-cache-update efficiency. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetOpenAndIssuingMiningRoundsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetOpenAndIssuingMiningRoundsRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetPartyToParticipantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetPartyToParticipantRequest = {
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

# **getRewardsCollected**
> GetRewardsCollectedResponse getRewardsCollected()

**Deprecated**. Get the total rewards collected ever

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetRewardsCollectedRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetRewardsCollectedRequest = {
  
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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **getSpliceInstanceNames**
> GetSpliceInstanceNamesResponse getSpliceInstanceNames()

Retrieve the UI names of various elements of this Splice network.

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetSynchronizerBootstrappingTransactionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetSynchronizerBootstrappingTransactionsRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetSynchronizerIdentitiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetSynchronizerIdentitiesRequest = {
  
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

# **getTopProvidersByAppRewards**
> GetTopProvidersByAppRewardsResponse getTopProvidersByAppRewards()

**Deprecated**. Get a list of top-earning app providers, and the total earned app rewards for each 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetTopProvidersByAppRewardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetTopProvidersByAppRewardsRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetTopValidatorsByPurchasedTrafficRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetTopValidatorsByPurchasedTrafficRequest = {
  
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

# **getTopValidatorsByValidatorFaucets**
> GetTopValidatorsByValidatorFaucetsResponse getTopValidatorsByValidatorFaucets()

Get a list of top validators by number of rounds in which they collected faucets, and basis statistics on their round collection history 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetTopValidatorsByValidatorFaucetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetTopValidatorsByValidatorFaucetsRequest = {
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

# **getTopValidatorsByValidatorRewards**
> GetTopValidatorsByValidatorRewardsResponse getTopValidatorsByValidatorRewards()

**Deprecated**. Get a list of top-earning validators, and the total earned validator rewards for each 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetTopValidatorsByValidatorRewardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetTopValidatorsByValidatorRewardsRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetTotalAmuletBalanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetTotalAmuletBalanceRequest = {
  
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

# **getUpdateByIdV1**
> UpdateHistoryItem getUpdateByIdV1()

Returns the update with the given update_id. Unlike /v0/updates/{update_id}, this endpoint returns responses that are consistent across different scan instances. Event ids returned by this endpoint are not comparable to event ids returned by /v0/updates. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetUpdateByIdV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetUpdateByIdV1Request = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetUpdateHistoryV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetUpdateHistoryV1Request = {
  
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

# **getUpdatesBefore**
> GetUpdatesBeforeResponse getUpdatesBefore(getUpdatesBeforeRequest)

Retrieve transactions and synchronizer reassignments prior to the request\'s specification. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetUpdatesBeforeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetUpdatesBeforeRequest = {
  
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

# **getValidatorFaucetsByValidator**
> GetValidatorFaucetsByValidatorResponse getValidatorFaucetsByValidator()

For every argument that is a valid onboarded validator, return statistics on its liveness activity, according to on-ledger state at the time of the request. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiGetValidatorFaucetsByValidatorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiGetValidatorFaucetsByValidatorRequest = {
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

# **listActivity**
> ListActivityResponse listActivity(listActivityRequest)

**Deprecated**. Lists activities in descending order, paged, optionally starting after a provided event id. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiListActivityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiListActivityRequest = {
  
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

# **listAmuletPriceVotes**
> ListAmuletPriceVotesResponse listAmuletPriceVotes()

Retrieve a list of the latest amulet price votes

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **listAnsEntries**
> ListEntriesResponse listAnsEntries()

Lists all non-expired ANS entries whose names are prefixed with the `name_prefix`, up to `page_size` entries. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiListAnsEntriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiListAnsEntriesRequest = {
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

# **listDsoRulesVoteRequests**
> ListDsoRulesVoteRequestsResponse listDsoRulesVoteRequests()

List all active `VoteRequest`\\ s.

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **listDsoScans**
> ListDsoScansResponse listDsoScans()

Retrieve Canton scan configuration for all SVs, grouped by connected synchronizer ID 

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **listFeaturedAppRights**
> ListFeaturedAppRightsResponse listFeaturedAppRights()

List every `FeaturedAppRight` registered with the DSO on the ledger. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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
import { createConfiguration, ScanApi } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

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

# **listValidatorLicenses**
> ListValidatorLicensesResponse listValidatorLicenses()

List all validators currently approved by members of the DSO, paginated, sorted newest-first. 

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiListValidatorLicensesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiListValidatorLicensesRequest = {
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

# **listVoteRequestResults**
> ListDsoRulesVoteResultsResponse listVoteRequestResults(listVoteResultsRequest)


### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiListVoteRequestResultsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiListVoteRequestResultsRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiListVoteRequestsByTrackingCidRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiListVoteRequestsByTrackingCidRequest = {
  
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

# **lookupAnsEntryByName**
> LookupEntryByNameResponse lookupAnsEntryByName()

If present, the ANS entry named exactly `name`.

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupAnsEntryByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupAnsEntryByNameRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupAnsEntryByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupAnsEntryByPartyRequest = {
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

# **lookupDsoRulesVoteRequest**
> LookupDsoRulesVoteRequestResponse lookupDsoRulesVoteRequest()

Look up a `VoteRequest` by contract ID.

### Example


```typescript
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupDsoRulesVoteRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupDsoRulesVoteRequestRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupFeaturedAppRightRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupFeaturedAppRightRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupTransferCommandCounterByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupTransferCommandCounterByPartyRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupTransferCommandStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupTransferCommandStatusRequest = {
  
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
import { createConfiguration, ScanApi } from '';
import type { ScanApiLookupTransferPreapprovalByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ScanApi(configuration);

const request: ScanApiLookupTransferPreapprovalByPartyRequest = {
  
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


