# .ValidatorPublicApi

All URIs are relative to *https://example.com/api/validator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getValidatorUserInfo**](ValidatorPublicApi.md#getValidatorUserInfo) | **GET** /v0/validator-user | 


# **getValidatorUserInfo**
> GetValidatorUserInfoResponse getValidatorUserInfo()

Get public information about the validator operator. 

### Example


```typescript
import { createConfiguration, ValidatorPublicApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidatorPublicApi(configuration);

const request = {};

const data = await apiInstance.getValidatorUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetValidatorUserInfoResponse**

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


