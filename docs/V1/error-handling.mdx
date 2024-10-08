---
sidebar_position: 4
---

# Error handling

When you perform an invalid request or something went wrong, the API will respond with an error message. You have to check if the HTTP status code returns `200 OK` before parsing the result.
If you use an endpoint that returns JSON, you also will receive an object with some error information.

## Error codes

The predefined error codes are as follows:

| Code | Description                 |
| ---- | --------------------------- |
| 2    | BODY_CONTAINS_INVALID_JSON  |
| 7    | INVALID_VALUE_FOR_PARAMETER |
| 8    | PARAMETER_IS_NOT_MODIFIABLE |
| 201  | REQUEST_TO_LONG             |
| 202  | API_DISABLED                |
| 901  | INTERNAL_ERROR              |

## Examples

### API was disabled

```
<Request>
GET http://{IP address}/api/v1/data

<Response>
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: <length>

{
   "error": {
      "id": 202,
      "description": "API not enabled"
   }
}
```

### Invalid JSON

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "power_on": invalid_value
}

<Response>
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: <length>

{
   "error": {
      "id": 2,
      "description": "Body contains invalid json"
   }
}
```

### Invalid value

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "brightness": 500
}

<Response>
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: <length>

{
   "error": {
      "id": 7,
      "description": "brightness value limited to 0-255"
   }
}
```

### Turn off socket when switch-lock is enabled

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "power_on": false
}

<Response>
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: <length>

{
   "error": {
      "id": 8,
      "description": "power_on cannot be turned off when switch_lock is on"
   }
}
```
