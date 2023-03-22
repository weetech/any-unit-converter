import {
  Area,
  DataTransferRate,
  DigitalStorage,
  Energy,
  Frequency,
  FuelEconomics,
  Length,
  Mass,
  PlaneAngle,
  Pressure,
  Speed,
  Temperature,
  Time,
  Volume,
} from "./../interface/index";
import uc from "../index";
import { UNIT_TYPE } from "../interface";

test("Area unit type", () => {
  expect(uc.convert(1, Area.SquareMeter, Area.SquareKiloMeter, UNIT_TYPE.AREA));
  expect(uc.convert(4, Area.SquareYard, Area.SquareMile, UNIT_TYPE.AREA));
  expect(uc.convert(3, Area.SquareInch, Area.Hectare, UNIT_TYPE.AREA));
  expect(uc.convert(5, Area.Hectare, Area.Acre, UNIT_TYPE.AREA));
  expect(uc.convert(2, Area.SquareFoot, Area.SquareInch, UNIT_TYPE.AREA));
});

test("Data transfer rate unit type", () => {
  expect(
    uc.convert(
      12,
      DataTransferRate.BitPerSecond,
      DataTransferRate.KilobitPerSecond,
      UNIT_TYPE.DATA_TRANSFER_RATE
    )
  );
  expect(
    uc.convert(
      1,
      DataTransferRate.KiloBytePerSecond,
      DataTransferRate.KibibitPerSecond,
      UNIT_TYPE.DATA_TRANSFER_RATE
    )
  );
  expect(
    uc.convert(
      2,
      DataTransferRate.MegaBitPerSecond,
      DataTransferRate.MegaBytePerSecond,
      UNIT_TYPE.DATA_TRANSFER_RATE
    )
  );
  expect(
    uc.convert(
      0.1,
      DataTransferRate.GigaBitPerSecond,
      DataTransferRate.GibibitPerSecond,
      UNIT_TYPE.DATA_TRANSFER_RATE
    )
  );
  expect(
    uc.convert(
      45.8,
      DataTransferRate.TeraBitPerSecond,
      DataTransferRate.TeraBytePerSecond,
      UNIT_TYPE.DATA_TRANSFER_RATE
    )
  );
});

test("Digital storage unit type", () => {
  expect(
    uc.convert(
      2,
      DigitalStorage.Gigabit,
      DigitalStorage.Megabit,
      UNIT_TYPE.DIGITAL_STORAGE
    )
  );
  expect(
    uc.convert(
      9000,
      DigitalStorage.Bit,
      DigitalStorage.Kilobit,
      UNIT_TYPE.DIGITAL_STORAGE
    )
  );
  expect(
    uc.convert(
      6,
      DigitalStorage.Mebibit,
      DigitalStorage.Kibibit,
      UNIT_TYPE.DIGITAL_STORAGE
    )
  );
  expect(
    uc.convert(
      97,
      DigitalStorage.Terabit,
      DigitalStorage.Megabit,
      UNIT_TYPE.DIGITAL_STORAGE
    )
  );
  expect(
    uc.convert(
      7,
      DigitalStorage.Petabyte,
      DigitalStorage.Pebibyte,
      UNIT_TYPE.DIGITAL_STORAGE
    )
  );
})

test("Energy unit type", () => {
  expect(uc.convert(1, Energy.Joule, Energy.Kilojoule, UNIT_TYPE.ENERGY));
  expect(uc.convert(78, Energy.Kilojoule, Energy.WattHour, UNIT_TYPE.ENERGY));
  expect(
    uc.convert(5, Energy.KilowattHour, Energy.Electronvolt, UNIT_TYPE.ENERGY)
  );
  expect(
    uc.convert(
      0.23,
      Energy.BritishThermalUnit,
      Energy.Kilojoule,
      UNIT_TYPE.ENERGY
    )
  );
  expect(uc.convert(8, Energy.Joule, Energy.USTherm, UNIT_TYPE.ENERGY));
});

test("Frequency unit type", () => {
  expect(
    uc.convert(1, Frequency.Hertz, Frequency.Kilohertz, UNIT_TYPE.FREQUENCY)
  );
  expect(
    uc.convert(
      87,
      Frequency.Kilohertz,
      Frequency.Megahertz,
      UNIT_TYPE.FREQUENCY
    )
  );
  expect(
    uc.convert(
      4.5,
      Frequency.Megahertz,
      Frequency.Gigahertz,
      UNIT_TYPE.FREQUENCY
    )
  );
});

test("Fuel economics unit type", () => {
  expect(
    uc.convert(
      1,
      FuelEconomics.MilesPerGallon,
      FuelEconomics.MilesPerGallonImperial,
      UNIT_TYPE.FUEL_ECONOMICS
    )
  );
  expect(
    uc.convert(
      69,
      FuelEconomics.KilometerPerLiter,
      FuelEconomics.MilesPerGallonImperial,
      UNIT_TYPE.FUEL_ECONOMICS
    )
  );
  expect(
    uc.convert(
      56,
      FuelEconomics.MilesPerGallonImperial,
      FuelEconomics.KilometerPerLiter,
      UNIT_TYPE.FUEL_ECONOMICS
    )
  );
  expect(
    uc.convert(
      8.9,
      FuelEconomics.LiterPer100Kilometers,
      FuelEconomics.MilesPerGallonImperial,
      UNIT_TYPE.FUEL_ECONOMICS
    )
  );
  expect(
    uc.convert(
      5,
      FuelEconomics.KilometerPerLiter,
      FuelEconomics.LiterPer100Kilometers,
      UNIT_TYPE.FUEL_ECONOMICS
    )
  );
});

test("Length unit type", () => {
  expect(uc.convert(1, Length.Meter, Length.Centimeter, UNIT_TYPE.LENGTH));
  expect(
    uc.convert(16, Length.NauticalMile, Length.Centimeter, UNIT_TYPE.LENGTH)
  );
  expect(uc.convert(81, Length.Micrometers, Length.Mile, UNIT_TYPE.LENGTH));
  expect(uc.convert(89, Length.Foot, Length.Mile, UNIT_TYPE.LENGTH));
  expect(uc.convert(100, Length.NauticalMile, Length.Inch, UNIT_TYPE.LENGTH));
});

test("Mass unit type", () => {
  expect(uc.convert(21, Mass.Tonne, Mass.Kilogram, UNIT_TYPE.MASS));
  expect(uc.convert(61, Mass.Kilogram, Mass.Gram, UNIT_TYPE.MASS));
  expect(uc.convert(91, Mass.Milligram, Mass.ImperialTon, UNIT_TYPE.MASS));
  expect(uc.convert(18, Mass.USTon, Mass.Pound, UNIT_TYPE.MASS));
  expect(uc.convert(11, Mass.Ounce, Mass.Stone, UNIT_TYPE.MASS));
})

test("Plane angle unit type", () => {
  expect(
    uc.convert(61, PlaneAngle.Gradian, PlaneAngle.Radian, UNIT_TYPE.PLANE_ANGLE)
  );
  expect(
    uc.convert(
      10.5,
      PlaneAngle.MinuteOfArc,
      PlaneAngle.Arcsecond,
      UNIT_TYPE.PLANE_ANGLE
    )
  );
  expect(
    uc.convert(
      51,
      PlaneAngle.Radian,
      PlaneAngle.MinuteOfArc,
      UNIT_TYPE.PLANE_ANGLE
    )
  );
  expect(
    uc.convert(
      19,
      PlaneAngle.MinuteOfArc,
      PlaneAngle.Radian,
      UNIT_TYPE.PLANE_ANGLE
    )
  );
  expect(
    uc.convert(
      61,
      PlaneAngle.Gradian,
      PlaneAngle.MinuteOfArc,
      UNIT_TYPE.PLANE_ANGLE
    )
  );
})

test("Pressure unit type", () => {
  expect(
    uc.convert(
      784,
      Pressure.StandardAtmosphere,
      Pressure.Bar,
      UNIT_TYPE.PRESSURE
    )
  );
  expect(
    uc.convert(
      12.1,
      Pressure.PoundPerSquareInch,
      Pressure.Bar,
      UNIT_TYPE.PRESSURE
    )
  );
  expect(
    uc.convert(
      160,
      Pressure.StandardAtmosphere,
      Pressure.PoundPerSquareInch,
      UNIT_TYPE.PRESSURE
    )
  );
  expect(uc.convert(891, Pressure.Pascal, Pressure.Bar, UNIT_TYPE.PRESSURE));
  expect(
    uc.convert(
      71,
      Pressure.Torr,
      Pressure.StandardAtmosphere,
      UNIT_TYPE.PRESSURE
    )
  );
})

test(("Speed unit type"), () => {
  expect(
    uc.convert(41, Speed.FootPerSecond, Speed.MilePerHour, UNIT_TYPE.SPEED)
  );
  expect(
    uc.convert(5.1, Speed.MeterPerSecond, Speed.FootPerSecond, UNIT_TYPE.SPEED)
  );
  expect(
    uc.convert(
      691,
      Speed.KilometerPerHour,
      Speed.MeterPerSecond,
      UNIT_TYPE.SPEED
    )
  );
  expect(uc.convert(541, Speed.Knot, Speed.KilometerPerHour, UNIT_TYPE.SPEED));
  expect(uc.convert(14, Speed.Knot, Speed.MeterPerSecond, UNIT_TYPE.SPEED));
})

test("Temperature unit type", () => {
  expect(
    uc.convert(
      1.1,
      Temperature.DegreeCelsius,
      Temperature.Fahrenheit,
      UNIT_TYPE.TEMPERATURE
    )
  );
  expect(
    uc.convert(
      21,
      Temperature.Kelvin,
      Temperature.DegreeCelsius,
      UNIT_TYPE.TEMPERATURE
    )
  );
  expect(
    uc.convert(
      81,
      Temperature.Kelvin,
      Temperature.Fahrenheit,
      UNIT_TYPE.TEMPERATURE
    )
  );
})

test("Time unit type", () => {
  expect(uc.convert(80, Time.Microsecond, Time.Nanosecond, UNIT_TYPE.TIME));
  expect(uc.convert(500, Time.Minute, Time.Second, UNIT_TYPE.TIME));
  expect(uc.convert(2, Time.Day, Time.Hour, UNIT_TYPE.TIME));
  expect(uc.convert(45, Time.Month, Time.Week, UNIT_TYPE.TIME));
  expect(uc.convert(5, Time.Decade, Time.CalendarYear, UNIT_TYPE.TIME));
})

test("Volume unit type", () => {
  expect(
    uc.convert(
      55,
      Volume.USLiquidQuart,
      Volume.USLiquidGallon,
      UNIT_TYPE.VOLUME
    )
  );
  expect(
    uc.convert(2.5, Volume.USLiquidPint, Volume.USLiquidQuart, UNIT_TYPE.VOLUME)
  );
  expect(
    uc.convert(51, Volume.USLegalCup, Volume.USLiquidPint, UNIT_TYPE.VOLUME)
  );
  expect(uc.convert(55, Volume.Liter, Volume.CubicMeter, UNIT_TYPE.VOLUME));
  expect(
    uc.convert(
      50,
      Volume.ImperialQuart,
      Volume.ImperialGallon,
      UNIT_TYPE.VOLUME
    )
  );
})