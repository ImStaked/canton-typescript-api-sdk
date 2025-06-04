# .WalletApi

All URIs are relative to *https://example.com/api/validator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBuyTrafficRequest**](WalletApi.md#createBuyTrafficRequest) | **POST** /v0/wallet/buy-traffic-requests | 
[**createTransferOffer**](WalletApi.md#createTransferOffer) | **POST** /v0/wallet/transfer-offers | 
[**getBuyTrafficRequestStatus**](WalletApi.md#getBuyTrafficRequestStatus) | **POST** /v0/wallet/buy-traffic-requests/{tracking_id}/status | 
[**getTransferOfferStatus**](WalletApi.md#getTransferOfferStatus) | **POST** /v0/wallet/transfer-offers/{tracking_id}/status | 
[**listTransferOffers**](WalletApi.md#listTransferOffers) | **GET** /v0/wallet/transfer-offers | 


# **createBuyTrafficRequest**
> CreateBuyTrafficRequestResponse createBuyTrafficRequest(createBuyTrafficRequest)

Create a request to buy traffic. Note that this only creates the request to do so. Refer to the status endpoint to check if the request succeeded.

### Example


```typescript
import { createConfiguration, WalletApi } from '';
import type { WalletApiCreateBuyTrafficRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletApi(configuration);

const request: WalletApiCreateBuyTrafficRequestRequest = {
  
  createBuyTrafficRequest: {
    receivingValidatorPartyId: "receivingValidatorPartyId_example",
    domainId: "domainId_example",
    trafficAmount: 1,
    trackingId: "trackingId_example",
    expiresAt: 1,
  },
};

const data = await apiInstance.createBuyTrafficRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBuyTrafficRequest** | **CreateBuyTrafficRequest**|  |


### Return type

**CreateBuyTrafficRequestResponse**

### Authorization

[walletUserAuth](README.md#walletUserAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to buy traffic got created |  -  |
**400** | Request was invalid, adjust parameters |  -  |
**409** | A request to buy traffic with the same tracking id has been created. Check the status endpoint for the current status. |  -  |
**429** | A request to buy traffic with the same tracking id is currently being processed. Check the status endpoint and resubmit if it returns 404. |  -  |
**500** | Internal server error that requires operator investigation. Retrying for a small number of times with exponential back-off MAY work. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTransferOffer**
> CreateTransferOfferResponse createTransferOffer(createTransferOfferRequest)

Create an offer to directly transfer a given amount of Amulet to another party. Direct transfers are a three-step process: 1. The sender creates a transfer offer 2. The receiver accepts the offer 3. The sender\'s wallet automation consumes the accepted offer and transfers the amount.    Amulets are not locked for direct transfers.    If the sender\'s wallet does not have enough Amulet to fulfill the offer at this point,    the transfer will fail. 

### Example


```typescript
import { createConfiguration, WalletApi } from '';
import type { WalletApiCreateTransferOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletApi(configuration);

const request: WalletApiCreateTransferOfferRequest = {
  
  createTransferOfferRequest: {
    receiverPartyId: "receiverPartyId_example",
    amount: "amount_example",
    description: "description_example",
    expiresAt: 1,
    trackingId: "trackingId_example",
  },
};

const data = await apiInstance.createTransferOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTransferOfferRequest** | **CreateTransferOfferRequest**|  |


### Return type

**CreateTransferOfferResponse**

### Authorization

[walletUserAuth](README.md#walletUserAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The transfer offer has been created. |  -  |
**400** | Invalid request, check the error response for details.  |  -  |
**404** | The submitter’s wallet could not be found.  |  -  |
**409** | A transfer offer with the same tracking id has been created. Check the status endpoint for the current status. |  -  |
**429** | A transfer offer with the same tracking id is currently being processed, which may or may not succeed. Retry submitting the request with exponential back-off. |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBuyTrafficRequestStatus**
> GetBuyTrafficRequestStatusResponse getBuyTrafficRequestStatus()

Check the status of a buy traffic request with a given tracking id. 

### Example


```typescript
import { createConfiguration, WalletApi } from '';
import type { WalletApiGetBuyTrafficRequestStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletApi(configuration);

const request: WalletApiGetBuyTrafficRequestStatusRequest = {
  
  trackingId: "tracking_id_example",
};

const data = await apiInstance.getBuyTrafficRequestStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingId** | [**string**] |  | defaults to undefined


### Return type

**GetBuyTrafficRequestStatusResponse**

### Authorization

[walletUserAuth](README.md#walletUserAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A request to buy traffic with this tracking id has been submitted before, check the response for details. |  -  |
**404** | No request with this tracking id was found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransferOfferStatus**
> GetTransferOfferStatusResponse getTransferOfferStatus()

Check the status of a transfer offer with a given tracking id. 

### Example


```typescript
import { createConfiguration, WalletApi } from '';
import type { WalletApiGetTransferOfferStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletApi(configuration);

const request: WalletApiGetTransferOfferStatusRequest = {
  
  trackingId: "tracking_id_example",
};

const data = await apiInstance.getTransferOfferStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingId** | [**string**] |  | defaults to undefined


### Return type

**GetTransferOfferStatusResponse**

### Authorization

[walletUserAuth](README.md#walletUserAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An offer with this tracking id is known. Check the response for its status. |  -  |
**404** | No offer with this tracking id is known. Perhaps it has not yet been submitted or processed; or it has been submitted in the past before the current beginning of the wallet transaction log.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransferOffers**
> ListTransferOffersResponse listTransferOffers()

List all open transfer offers where the user is either sender or receiver.

### Example


```typescript
import { createConfiguration, WalletApi } from '';

const configuration = createConfiguration();
const apiInstance = new WalletApi(configuration);

const request = {};

const data = await apiInstance.listTransferOffers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListTransferOffersResponse**

### Authorization

[walletUserAuth](README.md#walletUserAuth)

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


