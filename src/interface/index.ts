export interface TemperatureValue {
  fromBase: (value: number) => number;
  toBase: (value: number) => number;
}

export interface UnitConverterInterface {
  [index: string]: {
    [index: string]: {
      unitType: string;
      shortCode: string;
      conversionFactor: number | TemperatureValue;
    }[];
  };
}

export enum UNIT_TYPE {
  AREA = "area",
  DATA_TRANSFER_RATE = "data-transfer-rate",
  DIGITAL_STORAGE = "digital-storage",
  ENERGY = "energy",
  FREQUENCY = "frequency",
  FUEL_ECONOMICS = "fuel-economics",
  LENGTH = "length",
  MASS = "mass",
  PLANE_ANGLE = "plane-angle",
  PRESSURE = "pressure",
  SPEED = "speed",
  TEMPERATURE = "temperature",
  TIME = "time",
  VOLUME = "volume",
}

export enum Area {
  SquareKiloMeter = "km²",
  SquareMeter = "m²",
  SquareMile = "mi²",
  SquareYard = "yd²",
  SquareFoot = "ft²",
  SquareInch = "in²",
  Hectare = "ha",
  Acre = "ac",
}

export enum DataTransferRate {
  BitPerSecond = "bps",
  KilobitPerSecond = "kbps",
  KiloBytePerSecond = "KB/s",
  KibibitPerSecond = "Kibps",
  MegaBitPerSecond = "Mbps",
  MegaBytePerSecond = "MB/s",
  MebibitPerSecond = "Mib/s",
  GigaBitPerSecond = "Gbps",
  GigaBytePerSecond = "GB/s",
  GibibitPerSecond = "Gib/s",
  TeraBitPerSecond = "Tbpss",
  TeraBytePerSecond = "TB/s",
  TebibitPerSecond = "Tib/s",
}

export enum DigitalStorage {
  Gigabit = "Gb",
  Megabit = "Mb",
  Bit = "b",
  Kilobit = "kb",
  Mebibit = "Mibit",
  Kibibit = "Kibit",
  Terabit = "Tb",
  Petabyte = "PB",
  Pebibyte = "PiB",
}
export enum Energy {
  Joule = "J",
  Kilojoule = "kJ",
  WattHour = "Wh",
  KilowattHour = "kWh",
  Electronvolt = "eV",
  BritishThermalUnit = "BTU",
  USTherm = "thm",
}
export enum Frequency {
  Hertz = "Hz",
  Kilohertz = "kHz",
  Megahertz = "MHz",
  Gigahertz = "GHz",
}
export enum FuelEconomics {
  MilesPerGallon = "mpg",
  MilesPerGallonImperial = "mpgimp",
  KilometerPerLiter = "km/L",
  LiterPer100Kilometers = "L/100km",
}
export enum Length {
  Meter = "m",
  Centimeter = "cm",
  Micrometers = "um",
  Mile = "mi",
  Foot = "ft",
  Inch = "in",
  NauticalMile = "nmi",
}

export enum Mass {
  Tonne = "t",
  Kilogram = "kg",
  Gram = "g",
  Milligram = "mg",
  ImperialTon = "long-ton",
  USTon = "short-ton",
  Pound = "lb",
  Ounce = "oz",
  Stone = "st",
}
export enum PlaneAngle {
  Gradian = "grad",
  Radian = "rad",
  MinuteOfArc = "arcmin",
  Arcsecond = "arcsec",
}

export enum Pressure {
  StandardAtmosphere = "atm",
  Bar = "Bar",
  PoundPerSquareInch = "psi",
  Pascal = "Pa",
  Torr = "mmHg",
}
export enum Speed {
  FootPerSecond = "fps",
  MilePerHour = "mph",
  MeterPerSecond = "m/s",
  KilometerPerHour = "km/h",
  Knot = "kt",
}
export enum Temperature {
  DegreeCelsius = "C",
  Fahrenheit = "F",
  Kelvin = "K",
}
export enum Time {
  Microsecond = "us",
  Nanosecond = "ns",
  Minute = "min",
  Second = "s",
  Day = "d",
  Hour = "h",
  Month = "mo",
  Week = "wk",
  CalendarYear = "yr",
  Decade = "dec",
}
export enum Volume {
  USLiquidQuart = "short-qt",
  USLiquidGallon = "short-gal",
  USLiquidPint = "short-pt",
  USLegalCup = "UScp",
  Liter = "L",
  CubicMeter = "m³",
  ImperialQuart = "long-qt",
  ImperialGallon = "long-gal",
}
