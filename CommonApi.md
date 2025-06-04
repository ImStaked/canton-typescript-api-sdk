# .CommonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealthStatus**](CommonApi.md#getHealthStatus) | **GET** /status | 
[**getVersion**](CommonApi.md#getVersion) | **GET** /version | 
[**isLive**](CommonApi.md#isLive) | **GET** /livez | 
[**isReady**](CommonApi.md#isReady) | **GET** /readyz | 


# **getHealthStatus**
> NodeStatus getHealthStatus()


### Example


```typescript
import { createConfiguration, CommonApi } from '';

const configuration = createConfiguration();
const apiInstance = new CommonApi(configuration);

const request = {};

const data = await apiInstance.getHealthStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NodeStatus**

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

# **getVersion**
> Version getVersion()


### Example


```typescript
import { createConfiguration, CommonApi } from '';

const configuration = createConfiguration();
const apiInstance = new CommonApi(configuration);

const request = {};

const data = await apiInstance.getVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Version**

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

# **isLive**
> void isLive()


### Example


```typescript
import { createConfiguration, CommonApi } from '';

const configuration = createConfiguration();
const apiInstance = new CommonApi(configuration);

const request = {};

const data = await apiInstance.isLive(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**503** | service_unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **isReady**
> void isReady()


### Example


```typescript
import { createConfiguration, CommonApi } from '';

const configuration = createConfiguration();
const apiInstance = new CommonApi(configuration);

const request = {};

const data = await apiInstance.isReady(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**503** | service_unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


