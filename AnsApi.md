# .AnsApi

All URIs are relative to *https://example.com/api/validator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnsEntry**](AnsApi.md#createAnsEntry) | **POST** /v0/entry/create | 
[**listAnsEntries**](AnsApi.md#listAnsEntries) | **GET** /v0/entry/all | 


# **createAnsEntry**
> CreateAnsEntryResponse createAnsEntry(createAnsEntryRequest)

Requests the creation of a new ANS entry. ANS entries need to be paid and renewed via subscription payments.  Upon requesting the creation of the ANS entry, a subscription request is created. The user may accept the subscription request via their wallet by offering the initial payment. Once the subscription request is accepted, the DSO automation burns the payment and creates the ANS entry. 

### Example


```typescript
import { createConfiguration, AnsApi } from '';
import type { AnsApiCreateAnsEntryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnsApi(configuration);

const request: AnsApiCreateAnsEntryRequest = {
  
  createAnsEntryRequest: {
    name: "name_example",
    url: "url_example",
    description: "description_example",
  },
};

const data = await apiInstance.createAnsEntry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAnsEntryRequest** | **CreateAnsEntryRequest**|  |


### Return type

**CreateAnsEntryResponse**

### Authorization

[userAuth](README.md#userAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | Invalid request, check the error response for details.  |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAnsEntries**
> ListAnsEntriesResponse listAnsEntries()

Lists all ANS entries owned by the user. Expired entries are not included in the response, even if the corresponding contracts are still active on the ledger. 

### Example


```typescript
import { createConfiguration, AnsApi } from '';

const configuration = createConfiguration();
const apiInstance = new AnsApi(configuration);

const request = {};

const data = await apiInstance.listAnsEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListAnsEntriesResponse**

### Authorization

[userAuth](README.md#userAuth)

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


