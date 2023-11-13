---
sidebar_position: 3
description: Get the most recent, raw telegram from the P1 meter.
---

# P1 telegram (`/api/v1/telegram`)

The `/api/v1/telegram` endpoint returns the most recent, valid telegram that was given by the P1 meter, therefore this endpoint is **only available for the HWE-P1**.

- The telegram validated with its CRC, but not parsed in any form.
- Note that this endpoint returns plain text instead of formatted JSON, even when an error occurs (see [Error handling](/docs/error-handling.md))

## Example
```
<Request>
GET http://{IP address}/api/v1/telegram

<Response>
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: <length>

/ISK5\\2M550T-10111-

3:0.2.8(50)
0-0:1.0.0(181106140429W)
0-0:96.1.1(31333631353032362020202020202020)
1-0:1.8.1(10830.511*kWh)
1-0:1.8.2(002948.827*kWh)
1-0:2.8.1(001285.951*kWh)
1-0:2.8.2(002876.514*kWh)
0-0:96.14.0(0002)
1-0:1.7.0(21.100*kW)
1-0:2.7.0(00.000*kW)
0-0:96.7.21(00006)
0-0:96.7.9(00003)
1-0:99.97.0(1)(0-0:96.7.19)(180529135630S)(0000002451*s)
1-0:32.32.0(00003)
1-0:52.32.0(00002)
1-0:72.32.0(00002)
1-0:32.36.0(00001)
1-0:52.36.0(00001)
1-0:72.36.0(00001)
0-0:96.13.0()
1-0:32.7.0(236.0*V)
1-0:52.7.0(232.6*V)
1-0:72.7.0(235.1*V)
1-0:31.7.0(002*A)
1-0:51.7.0(000*A)
1-0:71.7.0(000*A)
1-0:21.7.0(00.000*kW)
1-0:41.7.0(00.033*kW)
1-0:61.7.0(00.132*kW)
1-0:22.7.0(00.676*kW)
1-0:42.7.0(00.000*kW)
1-0:62.7.0(00.000*kW)
0-1:24.1.0(003)
0-1:96.1.0(4730303339303031373030343630313137)
0-1:24.2.1(210606140010W)(02569.646*m3)
!1F28
```
   