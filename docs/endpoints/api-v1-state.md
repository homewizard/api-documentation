---
sidebar_position: 3
description: Control the state of the Energy Socket.
---

# Control socket state (`/api/v1/state`)

The `/api/v1/state` endpoint returns the actual state of the Energy Socket. This endpoint is only available for the Energy Socket as this is the only controllable device.

This endpoint accepts `GET` and `PUT` requests.

-   With `GET` you will receive the actual state
-   With `PUT` you can control the state.

## Parameters

| Data        | Type   | Description                                                                 |
| ----------- | ------ | --------------------------------------------------------------------------- |
| power_on    | bool   | The state of the switch. Returns `true` when the relay is in the 'on' state |
| switch_lock | bool   | When set to `true`, the socket cannot be turned off.                        |
| brightness  | number | Brightness of LED ring when socket is 'on'. Value from 0 (0%) to 255 (100%) |

## Examples

### Get actual state

This response tells that the socket is 'on', switch-lock is 'off' and the brightness of the LED ring is set to maximum.

```
<Request>
GET http://{IP address}/api/v1/state HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "power_on": true,
   "switch_lock": false,
   "brightness": 255
}
```

### Turn on socket

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "power_on": true
}

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "power_on": true
}
```

### Turn on switch-lock

After enabling `switch_lock`, the socket is 'on' and cannot be turned off until `switch_lock` is disabled.

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "switch_lock": true
}

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "switch_lock": true
}
```

### Set multiple parameters

You can configure multiple parameters at the same time. In this example.

-   Socket is turned off.
-   Switch-lock is turned off.
-   Brightness is set to 127 (50%).

The order of a combined request does not matter: If `switch-lock` was on, the socket will still turn off.
The complete state has to make sense; It is not possible to set `power_on` to false and `switch_lock` to true. See (see [Error handling](/docs/error-handling.md)) for more details.

```
<Request>
PUT http://{IP address}/api/v1/state HTTP/1.1
Content-Type: application/json
Content-Length: <length>
{
   "power_on": false,
   "switch_lock": false,
   "brightness": 127
}

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
      "switch_lock": false,
      "power_on": false,
      "brightness": 127
}
```
