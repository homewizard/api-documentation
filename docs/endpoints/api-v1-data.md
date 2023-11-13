---
sidebar_position: 2
description: Get the most recent measurement from the device.
---

# Recent measurement (`/api/v1/data`)

The `/api/v1/data` endpoint allows you to get the most recent measurement from the device. All data points are "optional"; The API does not send data points that are `null` or not available at all. This mostly depends on the connected smart meter. Make sure your application can handle this.

## Data points for **HWE-P1**

| Data                        | Type   | Description                                                                                                                                                                                              |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unique_id                   | String | The unique identifier from the smart meter                                                                                                                                                               |
| smr_version                 | Number | The DSMR version of the smart meter                                                                                                                                                                      |
| meter_model                 | String | The brand identification the smart meter                                                                                                                                                                 |
| wifi_ssid                   | String | The Wi-Fi network that the meter is connected to                                                                                                                                                         |
| wifi_strength               | Number | The strength of the Wi-Fi signal in %                                                                                                                                                                    |
| total_power_import_kwh      | Number | The power usage meter reading for all tariffs in kWh                                                                                                                                                     |
| total_power_import_t1_kwh   | Number | The power usage meter reading for tariff 1 in kWh                                                                                                                                                        |
| total_power_import_t2_kwh   | Number | The power usage meter reading for tariff 2 in kWh                                                                                                                                                        |
| total_power_import_t3_kwh   | Number | The power usage meter reading for tariff 3 in kWh                                                                                                                                                        |
| total_power_import_t4_kwh   | Number | The power usage meter reading for tariff 4 in kWh                                                                                                                                                        |
| total_power_export_kwh      | Number | The power feed-in meter reading for all tariffs in kWh                                                                                                                                                   |
| total_power_export_t1_kwh   | Number | The power feed-in meter reading for tariff 1 in kWh                                                                                                                                                      |
| total_power_export_t2_kwh   | Number | The power feed-in meter reading for tariff 2 in kWh                                                                                                                                                      |
| total_power_export_t3_kwh   | Number | The power feed-in meter reading for tariff 3 in kWh                                                                                                                                                      |
| total_power_export_t4_kwh   | Number | The power feed-in meter reading for tariff 4 in kWh                                                                                                                                                      |
| active_power_w              | Number | The total active usage in watt                                                                                                                                                                           |
| active_power_l1_w           | Number | The active usage for phase 1 in watt                                                                                                                                                                     |
| active_power_l2_w           | Number | The active usage for phase 2 in watt                                                                                                                                                                     |
| active_power_l3_w           | Number | The active usage for phase 3 in watt                                                                                                                                                                     |
| active_voltage_l1_v         | Number | The active voltage for phase 1 in volt                                                                                                                                                                   |
| active_voltage_l2_v         | Number | The active voltage for phase 2 in volt                                                                                                                                                                   |
| active_voltage_l3_v         | Number | The active voltage for phase 3 in volt                                                                                                                                                                   |
| active_current_l1_a         | Number | The active current for phase 1 in ampere                                                                                                                                                                 |
| active_current_l2_a         | Number | The active current for phase 2 in ampere                                                                                                                                                                 |
| active_current_l3_a         | Number | The active current for phase 3 in ampere                                                                                                                                                                 |
| active_frequency_hz         | Number | Line frequency in hertz                                                                                                                                                                                  |
| voltage_sag_l1_count        | Number | Number of voltage sags detected by meter for phase 1                                                                                                                                                     |
| voltage_sag_l2_count        | Number | Number of voltage sags detected by meter for phase 2                                                                                                                                                     |
| voltage_sag_l3_count        | Number | Number of voltage sags detected by meter for phase 3                                                                                                                                                     |
| voltage_swell_l1_count      | Number | Number of voltage swells detected by meter for phase 1                                                                                                                                                   |
| voltage_swell_l2_count      | Number | Number of voltage swells detected by meter for phase 2                                                                                                                                                   |
| voltage_swell_l3_count      | Number | Number of voltage swells detected by meter for phase 3                                                                                                                                                   |
| any_power_fail_count        | Number | Number of power failures detected by meter                                                                                                                                                               |
| long_power_fail_count       | Number | Number of 'long' power fails detected by meter                                                                                                                                                           |
| active_power_average_w      | Number | The active average demand                                                                                                                                                                                |
| montly_power_peak_w         | Number | The peak average demand of this month. There is a spelling mistake with this data point, see [Monthly power peak](#monthly-power-peak) for more information                                              |
| montly_power_peak_timestamp | Number | Timestamp when peak demand was registered, formatted as YYMMDDhhmmss                                                                                                                                     |
| total_gas_m3                | Number | The gas meter reading in m3 for the first detected gas meter. <br/>**Gas data points will be removed in favor of 'external' in a future software version, do not use this field in new implementations** |
| gas_timestamp               | Number | The most recent gas update time stamp structured as YYMMDDhhmmss.                                                                                                                                        |
| unique_gas_id               | Number | The unique identifier for the gas meter, can be used to migrate to the 'external' data point                                                                                                             |
| external                    | Array  | A list of externally connected utility meters, see [External data point](#external-data-point) for more information                                                                                      |

## `External` data point

Some smart meters have more than one external device connected to it. This can be, for example, a gas and a water meter. The `external` data point adds support for these devices.
Each entry is supplied with a set of data. See [this example](#hwe-p1-3-phase-with-gas).

| Data      | Type   | Description                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| unique_id | String | The unique identifier from this device                                                                         |
| type      | String | The type of the device, can be `gas_meter` `heat_meter` `warm_water_meter` `water_meter` or `inlet_heat_meter` |
| timestamp | Number | The most recent value update time stamp structured as YYMMDDhhmmss.                                            |
| value     | Number | The raw value                                                                                                  |
| unit      | String | The unit of the value, for example: "m3" or "GJ"                                                               |

The original data points `total_gas_m3`, `gas_timestamp` and `unique_gas_id` use the first detected gas meter. These data points will be removed in a future version. You can use `unique_id` to migrate any values if needed.

## Monthly power peak

Belgium users are started to get charged for the peak usage per month (see [capaciteitstarief](https://www.fluvius.be/nl/thema/factuur-en-tarieven/capaciteitstarief)). The data points `active_power_average_w`, `montly_power_peak_w` and `montly_power_peak_timestamp` can be used to track the maximum demand.

## HWE-P1 (1-phase, no gas)

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "smr_version": 50,
   "meter_model": "ISKRA  2M550T-101",
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "total_power_import_t1_kwh": 10830.511,
   "total_power_import_t2_kwh": 2948.827,
   "total_power_export_t1_kwh": 1285.951,
   "total_power_export_t2_kwh": 2876.51,
   "active_power_w": -678,
   "active_power_l1_w": -676,
}
```

### HWE-P1 (3-phase, with gas and water meter)

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "smr_version": 50,
   "meter_model": "ISKRA  2M550T-101",
   "unique_id": "00112233445566778899AABBCCDDEEFF",
   "active_tariff": 2,
   "total_power_import_kwh": 13779.338,
   "total_power_import_t1_kwh": 10830.511,
   "total_power_import_t2_kwh": 2948.827,
   "total_power_export_kwh": 0,
   "total_power_export_t1_kwh": 0,
   "total_power_export_t2_kwh": 0,
   "active_power_w": -543,
   "active_power_l1_w": -676,
   "active_power_l2_w": 133,
   "active_power_l3_w": 0,
   "active_current_l1_a": -4,
   "active_current_l2_a": 2,
   "active_current_l3_a": 0,
   "voltage_sag_l1_count": 1,
   "voltage_sag_l2_count": 1,
   "voltage_sag_l3_count": 0,
   "voltage_swell_l1_count": 0,
   "voltage_swell_l2_count": 0,
   "voltage_swell_l3_count": 0,
   "any_power_fail_count": 4,
   "long_power_fail_count": 5,
   "total_gas_m3": 2569.646,
   "gas_timestamp": 210606140010,
   "gas_unique_id": "FFEEDDCCBBAA99887766554433221100",
   "active_power_average_w": 123.000,
   "montly_power_peak_w": 1111.000,
   "montly_power_peak_timestamp": 230101080010,
   "external": [
      {
         "unique_id": "FFEEDDCCBBAA99887766554433221100",
         "type": "gas_meter",
         "timestamp": 210606140010,
         "value": 2569.646,
         "unit": "m3"
      },
      {
         "unique_id": "ABCDEF0123456789ABCDEF0123456789",
         "type": "water_meter",
         "timestamp": 210606140015,
         "value": 123.456,
         "unit": "m3"
      }
   ]
}
```

## Energy Socket (HWE-SKT)

### Data points

| Data                      | Type   | Description                                         |
| ------------------------- | ------ | --------------------------------------------------- |
| wifi_ssid                 | String | The Wi-Fi network that the meter is connected to    |
| wifi_strength             | Number | The strength of the Wi-Fi signal in %               |
| total_power_import_t1_kwh | Number | The power usage meter reading for tariff 1 in kWh   |
| total_power_export_t1_kwh | Number | The power feed-in meter reading for tariff 1 in kWh |
| active_power_w            | Number | The total active usage in watt                      |
| active_power_l1_w         | Number | The active usage for phase 1 in watt                |

### Example

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "total_power_import_t1_kwh": 30.511,
   "total_power_export_t1_kwh": 85.951,
   "active_power_w": 543,
   "active_power_l1_w": 676,
}
```

## kWh Meters (SDM230-wifi and SDM630-wifi)

### Data points

| Data                      | Type   | Available for            | Description                                         |
| ------------------------- | ------ | ------------------------ | --------------------------------------------------- |
| wifi_ssid                 | String | SDM230-wifi, SDM630-wifi | The Wi-Fi network that the meter is connected to    |
| wifi_strength             | Number | SDM230-wifi, SDM630-wifi | The strength of the Wi-Fi signal in %               |
| total_power_import_t1_kwh | Number | SDM230-wifi, SDM630-wifi | The power usage meter reading for tariff 1 in kWh   |
| total_power_export_t1_kwh | Number | SDM230-wifi, SDM630-wifi | The power feed-in meter reading for tariff 1 in kWh |
| active_power_w            | Number | SDM230-wifi, SDM630-wifi | The total active usage in watt                      |
| active_power_l1_w         | Number | SDM230-wifi, SDM630-wifi | The active usage for phase 1 in watt                |
| active_power_l2_w         | Number | SDM630-wifi              | The active usage for phase 2 in watt                |
| active_power_l3_w         | Number | SDM630-wifi              | The active usage for phase 3 in watt                |

### Example: SDM230-wifi

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "total_power_import_t1_kwh": 10830,
   "total_power_export_t1_kwh": 1285.951,
   "active_power_w": 640,
   "active_power_l1_w": 640
}
```

### Example: SDM630-wifi

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "total_power_import_t1_kwh": 10830.511,
   "total_power_export_t1_kwh": 1285.951,
   "active_power_w": -543,
   "active_power_l1_w": -676,
   "active_power_l2_w": 133,
   "active_power_l3_w": 0
}
```

## Watermeter (HWE-WTR)

:::warning API is not available when using batteries
The API for the water meter can only be used when the water meter is powered over USB. To save energy, the water meter only connects to Wi-Fi a couple of times per day when powered with batteries.
:::

### Data points

| Data                  | Type   | Description                                                      |
| --------------------- | ------ | ---------------------------------------------------------------- |
| wifi_ssid             | String | The Wi-Fi network that the meter is connected to                 |
| wifi_strength         | Number | The strength of the Wi-Fi signal in %                            |
| active_liter_lpm      | Number | Active water usage in liters per minute                          |
| total_liter_m3        | Number | Total water usage in cubic meters since installation             |
| total_liter_offset_m3 | Number | The usage of this value is in development and should not be used |

### Example

```
<Request>
GET http://{IP address}/api/v1/data HTTP/1.1

<Response>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: <length>

{
   "wifi_ssid": "My Wi-Fi",
   "wifi_strength": 100,
   "total_liter_m3": 123.456,
   "active_liter_lpm": 7.2,
   "total_liter_offset_m3": 0
}
```
