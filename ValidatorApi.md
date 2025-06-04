# .ValidatorApi

All URIs are relative to *https://example.com/api/validator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransferPreapprovalByParty**](ValidatorApi.md#cancelTransferPreapprovalByParty) | **DELETE** /v0/admin/transfer-preapprovals/by-party/{receiver-party} | 
[**createExternalPartySetupProposal**](ValidatorApi.md#createExternalPartySetupProposal) | **POST** /v0/admin/external-party/setup-proposal | 
[**dumpParticipantIdentities**](ValidatorApi.md#dumpParticipantIdentities) | **GET** /v0/admin/participant/identities | 
[**generateExternalPartyTopology**](ValidatorApi.md#generateExternalPartyTopology) | **POST** /v0/admin/external-party/topology/generate | 
[**getDecentralizedSynchronizerConnectionConfig**](ValidatorApi.md#getDecentralizedSynchronizerConnectionConfig) | **GET** /v0/admin/participant/global-domain-connection-config | 
[**getExternalPartyBalance**](ValidatorApi.md#getExternalPartyBalance) | **GET** /v0/admin/external-party/balance | 
[**getValidatorDomainDataSnapshot**](ValidatorApi.md#getValidatorDomainDataSnapshot) | **GET** /v0/admin/domain/data-snapshot | 
[**listExternalPartySetupProposals**](ValidatorApi.md#listExternalPartySetupProposals) | **GET** /v0/admin/external-party/setup-proposal | 
[**listTransferPreapprovals**](ValidatorApi.md#listTransferPreapprovals) | **GET** /v0/admin/transfer-preapprovals | 
[**listUsers**](ValidatorApi.md#listUsers) | **GET** /v0/admin/users | 
[**lookupTransferPreapprovalByParty**](ValidatorApi.md#lookupTransferPreapprovalByParty) | **GET** /v0/admin/transfer-preapprovals/by-party/{receiver-party} | 
[**offboardUser**](ValidatorApi.md#offboardUser) | **POST** /v0/admin/users/offboard | 
[**onboardUser**](ValidatorApi.md#onboardUser) | **POST** /v0/admin/users | 
[**prepareAcceptExternalPartySetupProposal**](ValidatorApi.md#prepareAcceptExternalPartySetupProposal) | **POST** /v0/admin/external-party/setup-proposal/prepare-accept | 
[**prepareTransferPreapprovalSend**](ValidatorApi.md#prepareTransferPreapprovalSend) | **POST** /v0/admin/external-party/transfer-preapproval/prepare-send | 
[**register**](ValidatorApi.md#register) | **POST** /v0/register | 
[**submitAcceptExternalPartySetupProposal**](ValidatorApi.md#submitAcceptExternalPartySetupProposal) | **POST** /v0/admin/external-party/setup-proposal/submit-accept | 
[**submitExternalPartyTopology**](ValidatorApi.md#submitExternalPartyTopology) | **POST** /v0/admin/external-party/topology/submit | 
[**submitTransferPreapprovalSend**](ValidatorApi.md#submitTransferPreapprovalSend) | **POST** /v0/admin/external-party/transfer-preapproval/submit-send | 


# **cancelTransferPreapprovalByParty**
> void cancelTransferPreapprovalByParty()

Remove the `Splice.AmuletRules.TransferPreapproval` contract for the given receiver party. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiCancelTransferPreapprovalByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiCancelTransferPreapprovalByPartyRequest = {
  
  receiverParty: "receiver-party_example",
};

const data = await apiInstance.cancelTransferPreapprovalByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receiverParty** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createExternalPartySetupProposal**
> CreateExternalPartySetupProposalResponse createExternalPartySetupProposal(createExternalPartySetupProposalRequest)

Create the ExternalPartySetupProposal contract as the validator operator which then has to be accepted by the external party using /v0/admin/external-party/setup-proposal/prepare-accept and /v0/admin/external-party/setup-proposal/submit-accept 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiCreateExternalPartySetupProposalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiCreateExternalPartySetupProposalRequest = {
  
  createExternalPartySetupProposalRequest: {
    userPartyId: "userPartyId_example",
  },
};

const data = await apiInstance.createExternalPartySetupProposal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createExternalPartySetupProposalRequest** | **CreateExternalPartySetupProposalRequest**|  |


### Return type

**CreateExternalPartySetupProposalResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |
**409** | conflict |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dumpParticipantIdentities**
> NodeIdentitiesDump dumpParticipantIdentities()

Returns a dump of participant identities.  Use this endpoint if instructed to do so by an operational manual or support. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request = {};

const data = await apiInstance.dumpParticipantIdentities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NodeIdentitiesDump**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateExternalPartyTopology**
> GenerateExternalPartyTopologyResponse generateExternalPartyTopology(generateExternalPartyTopologyRequest)

Creates a root namespace topology transaction, which will create the party and sets the public key controlling the party namespace, a party to participant mapping topology transaction, which hosts the party on the participant with Confirmation rights, and a party to key mapping topology transaction, which sets the key to authorize daml transactions. The hash of each of these transactions will be signed along with the corresponding topology transaction (unchanged) in the /v0/admin/external-party/topology/submit endpoint 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiGenerateExternalPartyTopologyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiGenerateExternalPartyTopologyRequest = {
  
  generateExternalPartyTopologyRequest: {
    partyHint: "partyHint_example",
    publicKey: "publicKey_example",
  },
};

const data = await apiInstance.generateExternalPartyTopology(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateExternalPartyTopologyRequest** | **GenerateExternalPartyTopologyRequest**|  |


### Return type

**GenerateExternalPartyTopologyResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDecentralizedSynchronizerConnectionConfig**
> GetDecentralizedSynchronizerConnectionConfigResponse getDecentralizedSynchronizerConnectionConfig()

Returns the connection configuration for the global synchronizer.  Use this endpoint if instructed to do so by an operational manual or support. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request = {};

const data = await apiInstance.getDecentralizedSynchronizerConnectionConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetDecentralizedSynchronizerConnectionConfigResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExternalPartyBalance**
> ExternalPartyBalanceResponse getExternalPartyBalance()

Get the balance of an external party. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiGetExternalPartyBalanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiGetExternalPartyBalanceRequest = {
  
  partyId: "party_id_example",
};

const data = await apiInstance.getExternalPartyBalance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | [**string**] |  | defaults to undefined


### Return type

**ExternalPartyBalanceResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidatorDomainDataSnapshot**
> GetValidatorDomainDataSnapshotResponse getValidatorDomainDataSnapshot()

Returns a snapshot of the global synchronizer data for this validator. The snapshot includes a list of parties, the active contract set (ACS), and node identities.  Use this endpoint if instructed to do so by an operational manual or support. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiGetValidatorDomainDataSnapshotRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiGetValidatorDomainDataSnapshotRequest = {
    // The timestamp as of which the dump (in particular, the ACS) is valid.  Must in the ISO-8601 format in UTC timezone, e.g., `yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'`. 
  timestamp: "timestamp_example",
    // The current migration id.  (optional)
  migrationId: 1,
    // If true, do not check whether the provided timestamp is clean. Not recommended for production, see the `ExportAcs` endpoint of the `ParticipantRepairService` participant gRPC API.  (optional)
  force: true,
};

const data = await apiInstance.getValidatorDomainDataSnapshot(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | [**string**] | The timestamp as of which the dump (in particular, the ACS) is valid.  Must in the ISO-8601 format in UTC timezone, e.g., &#x60;yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSS\&#39;Z\&#39;&#x60;.  | defaults to undefined
 **migrationId** | [**number**] | The current migration id.  | (optional) defaults to undefined
 **force** | [**boolean**] | If true, do not check whether the provided timestamp is clean. Not recommended for production, see the &#x60;ExportAcs&#x60; endpoint of the &#x60;ParticipantRepairService&#x60; participant gRPC API.  | (optional) defaults to undefined


### Return type

**GetValidatorDomainDataSnapshotResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listExternalPartySetupProposals**
> ListExternalPartySetupProposalsResponse listExternalPartySetupProposals()

List all ExternalPartySetupProposal contracts. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request = {};

const data = await apiInstance.listExternalPartySetupProposals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListExternalPartySetupProposalsResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransferPreapprovals**
> ListTransferPreapprovalsResponse listTransferPreapprovals()

List all `Splice.AmuletRules.TransferPreapproval` contracts where the preapproval provider is the validator operator. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request = {};

const data = await apiInstance.listTransferPreapprovals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListTransferPreapprovalsResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUsers**
> ListUsersResponse listUsers()

Lists all users onboarded onto this validator. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request = {};

const data = await apiInstance.listUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListUsersResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupTransferPreapprovalByParty**
> LookupTransferPreapprovalByPartyResponse lookupTransferPreapprovalByParty()

Lookup the `Splice.AmuletRules.TransferPreapproval` contract for the given receiver party. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiLookupTransferPreapprovalByPartyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiLookupTransferPreapprovalByPartyRequest = {
  
  receiverParty: "receiver-party_example",
};

const data = await apiInstance.lookupTransferPreapprovalByParty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receiverParty** | [**string**] |  | defaults to undefined


### Return type

**LookupTransferPreapprovalByPartyResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **offboardUser**
> void offboardUser()

As the validator operator, offboard the user specified in the request. Offboarding archives the daml contracts required for the user to use a wallet on this validator. Offboarding does not delete the ledger API user, and does not archive any other daml contracts owned by the user. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiOffboardUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiOffboardUserRequest = {
  
  username: "username_example",
};

const data = await apiInstance.offboardUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **onboardUser**
> OnboardUserResponse onboardUser(onboardUserRequest)

As the validator operator, onboard an arbitrary user specified in the request. Onboarding includes allocating a ledger API user and daml party, and setting up daml contracts required for the user to use a wallet on this validator.  Once this call returns a successful response, the user is fully onboarded. Use [v0/wallet/user-status](../../../../wallet/src/main/openapi/wallet-internal.yaml#/paths/v0/wallet/user-status) to check the status of the user onboarding. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiOnboardUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiOnboardUserRequest = {
  
  onboardUserRequest: {
    name: "name_example",
    partyId: "partyId_example",
  },
};

const data = await apiInstance.onboardUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboardUserRequest** | **OnboardUserRequest**|  |


### Return type

**OnboardUserResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **prepareAcceptExternalPartySetupProposal**
> PrepareAcceptExternalPartySetupProposalResponse prepareAcceptExternalPartySetupProposal(prepareAcceptExternalPartySetupProposalRequest)

Given a contract id of an ExternalPartySetupProposal, prepare the transaction to accept it such that it can be signed externally and then submitted using /v0/admin/external-party/setup-proposal/submit-accept 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiPrepareAcceptExternalPartySetupProposalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiPrepareAcceptExternalPartySetupProposalRequest = {
  
  prepareAcceptExternalPartySetupProposalRequest: {
    contractId: "contractId_example",
    userPartyId: "userPartyId_example",
    verboseHashing: false,
  },
};

const data = await apiInstance.prepareAcceptExternalPartySetupProposal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepareAcceptExternalPartySetupProposalRequest** | **PrepareAcceptExternalPartySetupProposalRequest**|  |


### Return type

**PrepareAcceptExternalPartySetupProposalResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **prepareTransferPreapprovalSend**
> PrepareTransferPreapprovalSendResponse prepareTransferPreapprovalSend(prepareTransferPreapprovalSendRequest)

Prepare a transaction to create a TransferCommand with the given CC amount to the specified receiver from the externally hosted sender. The transaction then needs to be signed and submitted through /v0/admin/external-party/transfer-preapproval/submit-send. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiPrepareTransferPreapprovalSendRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiPrepareTransferPreapprovalSendRequest = {
  
  prepareTransferPreapprovalSendRequest: {
    senderPartyId: "senderPartyId_example",
    receiverPartyId: "receiverPartyId_example",
    amount: 3.14,
    expiresAt: new Date('1970-01-01T00:00:00.00Z'),
    nonce: 1,
    verboseHashing: false,
    description: "description_example",
  },
};

const data = await apiInstance.prepareTransferPreapprovalSend(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepareTransferPreapprovalSendRequest** | **PrepareTransferPreapprovalSendRequest**|  |


### Return type

**PrepareTransferPreapprovalSendResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **register**
> RegistrationResponse register()

As an authenticated user, onboard yourself. Onboarding includes allocating a ledger API user and daml party, and setting up daml contracts required for the user to use a wallet on this validator.  The ledger API user name is taken from the subject claim of the JWT token.  Once this call returns a successful response, the user is fully onboarded. Use [v0/wallet/user-status](../../../../wallet/src/main/openapi/wallet-internal.yaml#/paths/v0/wallet/user-status) to check the status of the user onboarding. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiRegisterRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiRegisterRequest = {
  
  body: {},
};

const data = await apiInstance.register(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**RegistrationResponse**

### Authorization

[userAuth](README.md#userAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitAcceptExternalPartySetupProposal**
> SubmitAcceptExternalPartySetupProposalResponse submitAcceptExternalPartySetupProposal(submitAcceptExternalPartySetupProposalRequest)

Submit a transaction prepared using /v0/admin/external-party/setup-proposal/prepare-accept together with its signature. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiSubmitAcceptExternalPartySetupProposalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiSubmitAcceptExternalPartySetupProposalRequest = {
  
  submitAcceptExternalPartySetupProposalRequest: {
    submission: {
      partyId: "partyId_example",
      transaction: "transaction_example",
      signedTxHash: "signedTxHash_example",
      publicKey: "publicKey_example",
    },
  },
};

const data = await apiInstance.submitAcceptExternalPartySetupProposal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitAcceptExternalPartySetupProposalRequest** | **SubmitAcceptExternalPartySetupProposalRequest**|  |


### Return type

**SubmitAcceptExternalPartySetupProposalResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | not found |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitExternalPartyTopology**
> SubmitExternalPartyTopologyResponse submitExternalPartyTopology(submitExternalPartyTopologyRequest)

Constructs a SignedTopologyTransaction and writes the topology transactions to the authorized store. The input will consist of the unchanged topology transaction and the signed hash from the /v0/external-party-topology/generate endpoint 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiSubmitExternalPartyTopologyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiSubmitExternalPartyTopologyRequest = {
  
  submitExternalPartyTopologyRequest: {
    publicKey: "publicKey_example",
    signedTopologyTxs: [
      {
        topologyTx: "topologyTx_example",
        signedHash: "signedHash_example",
      },
    ],
  },
};

const data = await apiInstance.submitExternalPartyTopology(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitExternalPartyTopologyRequest** | **SubmitExternalPartyTopologyRequest**|  |


### Return type

**SubmitExternalPartyTopologyResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitTransferPreapprovalSend**
> SubmitTransferPreapprovalSendResponse submitTransferPreapprovalSend(submitTransferPreapprovalSendRequest)

Submit transaction generated by /v0/admin/transfer-preapproval/prepare-send together with its signature. Note that this only waits until the TransferCommand is created. The actual transfer will happen afterwards through automation run by the SVs. 

### Example


```typescript
import { createConfiguration, ValidatorApi } from '';
import type { ValidatorApiSubmitTransferPreapprovalSendRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorApi(configuration);

const request: ValidatorApiSubmitTransferPreapprovalSendRequest = {
  
  submitTransferPreapprovalSendRequest: {
    submission: {
      partyId: "partyId_example",
      transaction: "transaction_example",
      signedTxHash: "signedTxHash_example",
      publicKey: "publicKey_example",
    },
  },
};

const data = await apiInstance.submitTransferPreapprovalSend(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitTransferPreapprovalSendRequest** | **SubmitTransferPreapprovalSendRequest**|  |


### Return type

**SubmitTransferPreapprovalSendResponse**

### Authorization

[adminAuth](README.md#adminAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | bad request |  -  |
**404** | not found |  -  |
**501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


