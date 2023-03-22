# any-unit-converter

## Description

A unit converter package allows users to convert values from one unit of measurement to another. It is designed to provide a convenient and easy-to-use solution for converting a wide range of units across various categories.

## Installing

```bash
 $ npm install any-unit-converter@latest
```

## Importing

```ts
  // Using Node.js 'require()'
  const uc = require(`any-unit-converter`);

  // Using ES6 imports
  import uc from 'any-unit-converter';

  // You can use different type of unit to pass into the function by importing their type.
  import UNIT_TYPE from 'any-unit-converter';
  import Area from 'any-unit-converter';

  // Example
   uc.convert(1,Area.SquareMeter,Area.SquareKiloMeter,UNIT_TYPE.AREA);

   # Convert square meter to square kilometer
   /// 1.00e+6

  - For detailed example refer usage section

```

## Supported Units

<style>
table th:first-of-type {
    width: 70%;
}

</style>

### 1. Area ( `area` )

| Unit             | Abbriviation |
| ---------------- | ------------ |
| Square kilometer | km²          |
| Square meter     | m²           |
| Square mile      | mi²          |
| Square yard      | yd²          |
| Square foot      | ft²          |
| Square inch      | in²          |
| Hectare          | ha           |
| Acre             | ac           |

### 2. Data Transfer Rate ( `data-transfer-rate` )

| Unit                | Abbriviation |
| ------------------- | ------------ |
| Bit per second      | bps          |
| Kilobit per second  | kbps         |
| Kilobyte per second | KB/s         |
| Kibibit per second  | Kibps        |
| Megabit per second  | Mbps         |
| Megabyte per second | MB/s         |
| Mebibit per second  | Mib/s        |
| Gigabit per second  | Gbps         |
| Gigabyte per second | GB/s         |
| Gibibit per second  | Gib/s        |
| Terabit per second  | Tbpss        |
| Terabyte per second | TB/s         |
| Tebibit per second  | Tib/s        |

### 3. Digital Storage ( `digital-storage` )

| Unit     | Abbreviation |
| -------- | ------------ |
| Bit      | b            |
| Kilobit  | kb           |
| Kibibit  | Kibit        |
| Megabit  | Mb           |
| Mebibit  | Mibit        |
| Gigabit  | Gb           |
| Gibibit  | Gibit        |
| Terabit  | Tb           |
| Tebibit  | Tibit        |
| Petabit  | Pb           |
| Pebibit  | Pibit        |
| Byte     | B            |
| Kilobyte | kB           |
| Kibibyte | KiB          |
| Megabyte | MB           |
| Mebibyte | MiB          |
| Gigabyte | GB           |
| Gibibyte | GiB          |
| Terabyte | TB           |
| Tebibyte | TiB          |
| Petabyte | PB           |
| Pebibyte | PiB          |

### 4. Energy (`energy`)

| Unit                 | Abbriviation |
| -------------------- | ------------ |
| Joule                | J            |
| Kilojoule            | kJ           |
| Gram calorie         | cal          |
| Kilocalorie          | kcal         |
| Watt hour            | Wh           |
| Kilowatt hour        | kWh          |
| Electronvolt         | eV           |
| British thermal unit | BTU          |
| US therm             | thm          |
| Foot-pound           | ft-lb        |

### 5. Frequency (`frequency`)

| Unit      | Abbriviation |
| --------- | ------------ |
| Hertz     | Hz           |
| Kilohertz | kHz          |
| Megahertz | MHz          |
| Gigahertz | GHz          |

### 6. Fuel Economics (`fuel-economics`)

| Unit                        | Abbriviation |
| --------------------------- | ------------ |
| Miles per gallon            | mpg          |
| Miles per gallon (Imperial) | mpgimp       |
| Kilometer per liter         | km/L         |
| Liter per 100 kilometers    | L/100km      |

### 7. Length (`length`)

| Unit          | Abbriviation |
| ------------- | ------------ |
| Kilometer     | km           |
| Meter         | m            |
| Centimeter    | cm           |
| Millimeter    | mm           |
| Micrometers   | um           |
| Nanometer     | nm           |
| Mile          | mi           |
| Yard          | yd           |
| Foot          | ft           |
| Inch          | in           |
| Nautical mile | nmi          |

### 8. Mass (`mass`)

| Unit         | Abbriviation |
| ------------ | ------------ |
| Tonne        | t            |
| Kilogram     | kg           |
| Gram         | g            |
| Milligram    | mg           |
| Microgram    | ug           |
| Imperial ton | long-ton     |
| US ton       | short-ton    |
| Stone        | st           |
| Pound        | lb           |
| Ounce        | oz           |

### 9. Plane angle (`plane-angle`)

| Unit          | Abbriviation |
| ------------- | ------------ |
| Arcsecond     | arcsec       |
| Degree        | °            |
| Gradian       | grad         |
| Milliradian   | mrad         |
| Minute of arc | arcmin       |
| Radian        | rad          |

### 10. Pressure (`pressure`)

| Unit                  | Abbriviation |
| --------------------- | ------------ |
| Bar                   | Bar          |
| Pascal                | Pa           |
| Pound per square inch | psi          |
| Standard atmosphere   | atm          |
| Torr                  | mmHg         |

### 11. Speed (`speed`)

| Unit               | Abbriviation |
| ------------------ | ------------ |
| Mile per hour      | mph          |
| Foot per second    | fps          |
| Meter per second   | m/s          |
| Kilometer per hour | km/h         |
| Knot               | kt           |

### 12. Temperature (`temperature`)

| Unit           | Abbriviation |
| -------------- | ------------ |
| Degree Celsius | C            |
| Fahrenheit     | F            |
| Kelvin         | K            |

### 13. Time (`time`)

| Unit          | Abbriviation |
| ------------- | ------------ |
| Nanosecond    | ns           |
| Microsecond   | us           |
| Millisecond   | ms           |
| Second        | s            |
| Minute        | min          |
| Hour          | h            |
| Day           | d            |
| Week          | wk           |
| Month         | mo           |
| Calendar year | yr           |
| Decade        | dec          |
| Century       | cen          |

### 14. Volume (`volume`)

| Unit                | Abbriviation |
| ------------------- | ------------ |
| US liquid gallon    | short-gal    |
| US liquid quart     | short-qt     |
| US liquid pint      | short-pt     |
| US legal cup        | UScp         |
| Fluid ounce         | fl-oz        |
| US tablespoon       | short-tbsp   |
| US teaspoon         | short-tsp    |
| Cubic meter         | m³           |
| Liter               | L            |
| Milliliter          | mL           |
| Imperial gallon     | long-gal     |
| Imperial quart      | long-qt      |
| Imperial pint       | long-pt      |
| Imperial cup        | long-cp      |
| Imp. fluid ounce    | long-oz      |
| Imperial tablespoon | long-tbsp    |
| Imperial teaspoon   | long-tsp     |
| Cubic foot          | ft³          |
| Cubic inch          | in³          |

## Usage

**_Note:_** Use above mentioned name to convert value in different unit.

```ts
  import UNIT_TYPE from 'any-unit-converter';
  import Area from 'any-unit-converter';
  import DataTransferRate from 'any-unit-converter';
  import DigitalStorage from 'any-unit-converter';
  import Energy from 'any-unit-converter';
  import FuelEconomics from 'any-unit-converter';
  import Length from 'any-unit-converter';
  import Mass from 'any-unit-converter';
  import PlaneAngle from 'any-unit-converter';
  import Pressure from 'any-unit-converter';
  import Temperature from 'any-unit-converter';
  import Time from 'any-unit-converter';
  import Volume from 'any-unit-converter';

  // ~ Convert square meter to square kilometer
  console.log(uc.convert(1,Area.SquareMeter,Area.SquareKiloMeter,UNIT_TYPE.AREA)); /// 1.00e+6
  
  // ~ Convert Kilobyte per second to Kilobit per second
  console.log(uc.convert(16,DataTransferRate.KiloBytePerSecond,DataTransferRate.KilobitPerSecond,UNIT_TYPE.DATA_TRANSFER_RATE)); /// 128
  
  // ~ Convert Kibibit to Kilobit
  console.log(uc.convert(19.2,DigitalStorage.Kibibit,DigitalStorage.Kilobit,UNIT_TYPE.DIGITAL_STORAGE)); /// 19.6608
  
  // ~ Convert Kilojoule to Joule
  console.log(uc.convert(1.2,Energy.Kilojoule,Energy.Joule,UNIT_TYPE.ENERGY)); /// 1200
  
  // ~ Convert Gigahertz to Megahertz
  console.log(uc.convert(500,Frequency.Gigahertz,Frequency.Megahertz,UNIT_TYPE.FREQUENCY)); /// 500000
  
  // ~ Convert Gigahertz to Megahertz
  console.log(uc.convert(5.6,FuelEconomics.KilometerPerLiter,FuelEconomics.MilesPerGallonImperial,UNIT_TYPE.FUEL_ECONOMICS)); /// 15.818941
  
  // ~ Convert meter to centimeter
  console.log(uc.convert(1,Length.Meter,Length.Centimeter,UNIT_TYPE.LENGTH)); /// 100
  
  // ~ Convert Milligram to Gram
  console.log(uc.convert(50,Mass.Milligram,Mass.Gram,UNIT_TYPE.MASS)); /// 0.05
  
  // ~ Convert Gradian to Arcsecond
  console.log(uc.convert(6.50,PlaneAngle.Gradian,PlaneAngle.Arcsecond,UNIT_TYPE.PLANE_ANGLE)); /// 21060
  
  // ~ Convert Pascal to Bar
  console.log(uc.convert(1.1,Pressure.Pascal,Pressure.Bar,UNIT_TYPE.PRESSURE)); /// 1.100e-5
  
  // ~ Convert Foot per second to Mile per hour
  console.log(uc.convert(1000,Speed.FootPerSecond,Speed.MilePerHour,UNIT_TYPE.SPEED)); /// 681.818182
  
  // ~ Convert Fahrenheit to Degree Celsius
  console.log(uc.convert(50,Temperature.Fahrenheit,Temperature.DegreeCelsius,UNIT_TYPE.TEMPERATURE)); /// 10
  
  // ~ Convert Hour to Millisecond
  console.log(uc.convert(150,Time.Hour,Time.Millisecond,UNIT_TYPE.TIME)); /// 5.400e+8
  
  // ~ Convert US liquid gallon to US legal cup
  console.log(uc.convert(60,Volume.USLiquidGallon,Volume.USLegalCup,UNIT_TYPE.VOLUME)); /// 946.3525

```

## Authors

- **WeeTech Solution PVT LTD**

## Stay in touch

- Website - [https://www.weetechsolution.com/](https://www.weetechsolution.com/)
- GitHub - [WeeTech Solution](https://github.com/weetech)

## License

 - [MIT](LICENSE).