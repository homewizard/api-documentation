---
sidebar_position: 1
description: Get information like serial and version number from the device.
---

# Basic information (`/api`)
The `/api` endpoint allows you to get basic information from the device.

Your application can use this endpoint to see if your integration is designed to work with this version of the API. You can validate your support based on the combination of `product_type` and `api_version`. Data points in this endpoint that are currently available won't change, but make sure your application can accept new data points for future updates.

| Data              | Type   | Description |
|-------------------|--------|-------------|
| product_type      | string | The product type, see [Supported devices](/docs/getting-started.md#supported-devices). Make sure your application can handle other values for future products. |
| product_name      | string | A fixed, user-friendly name. This name is not the same that is set by the user in the app. |
| serial            | string | Serial, also the MAC address. Consists of 12 hexadecimal values. |
| firmware_version  | string | The current firmware version. Make sure your application can handle other version formats. See [Versioning and updates](/docs/versioning.md) |
| api_version       | string | The current api version, currently 'v1' |

## Examples
```
<Request>
GET http://{IP address}/api HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
      "product_type": "HWE-P1",
      "product_name": "P1 Meter",
      "serial": "3c39e7aabbcc",
      "firmware_version": "2.11",
      "api_version": "v1"
}
```
