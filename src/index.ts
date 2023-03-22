import { unitConfig } from './assets/unitConfig';
import {
  Area,
  DigitalStorage,
  DataTransferRate,
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
  UNIT_TYPE,
} from './interface';

function isDecimalZero(num: number | string) {
  const decimalRegex = /\.0+$|\.0+e/;
  return decimalRegex.test(num.toString());
}

function convertUnit(
  value: number,
  fromUnit:
    | Area
    | DataTransferRate
    | DigitalStorage
    | Energy
    | Frequency
    | FuelEconomics
    | Length
    | Mass
    | PlaneAngle
    | Pressure
    | Speed
    | Temperature
    | Time
    | Volume,
  toUnit:
    | Area
    | DataTransferRate
    | DigitalStorage
    | Energy
    | Frequency
    | FuelEconomics
    | Length
    | Mass
    | PlaneAngle
    | Pressure
    | Speed
    | Temperature
    | Time
    | Volume,
  unitType: UNIT_TYPE,
) {
  if (
    !unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === fromUnit) ||
    !unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === toUnit)
  ) {
    throw Error('invalid unit');
  }

  let fromValue;
  if (
    typeof unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === fromUnit)
      ?.conversionFactor === 'object'
  ) {
    fromValue = Object(
      unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === fromUnit)
        ?.conversionFactor,
    )?.fromBase(value);
  } else {
    fromValue = unitConfig[unitType !== null ? unitType : '']?.unitOption?.find(
      (res) => res.shortCode === fromUnit,
    )?.conversionFactor;
  }

  let toValue;
  if (
    typeof unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === toUnit)
      ?.conversionFactor === 'object'
  ) {
    toValue = Object(
      unitConfig[unitType !== null ? unitType : '']?.unitOption?.find((res) => res.shortCode === toUnit)
        ?.conversionFactor,
    )?.toBase(fromValue);
  } else {
    toValue = unitConfig[unitType !== null ? unitType : '']?.unitOption?.find(
      (res) => res.shortCode === toUnit,
    )?.conversionFactor;
  }
  if (unitType !== 'temperature' && unitType !== 'fuel-economics') {
    const baseValue = (value * fromValue) / toValue;
    if (baseValue === 0) {
      return baseValue;
    } else if (baseValue > 1000000 || baseValue < 0.0001) {
      return baseValue.toExponential(3);
    } else {
      if (Number.isInteger(baseValue)) {
        return baseValue;
      } else if (baseValue.toString().includes('.')) {
        if (String(baseValue).split('.')[1].length > 6) {
          return isDecimalZero(baseValue.toFixed(6)) ? Number(baseValue.toFixed(0)) : Number(baseValue.toFixed(6));
        } else {
          return baseValue;
        }
      } else {
        return baseValue;
      }
    }
  } else if (unitType === 'temperature') {
    if (Number.isInteger(parseFloat(toValue))) {
      return parseFloat(toValue);
    } else {
      return parseFloat(toValue).toFixed(4);
    }
  } else {
    const baseValue = toUnit !== 'L/100km' ? (value * fromValue) / toValue : (value * toValue) / fromValue;

    if (baseValue === 0) {
      return baseValue;
    } else if (baseValue > 1000000 || baseValue < 0.0001) {
      return baseValue.toExponential(3);
    } else {
      if (Number.isInteger(baseValue)) {
        return baseValue;
      } else if (baseValue.toString().includes('.')) {
        if (String(baseValue).split('.')[1].length > 6) {
          return baseValue.toFixed(6);
        } else {
          return baseValue;
        }
      } else {
        return baseValue;
      }
    }
  }
}

export function convert(
  value: number,
  fromUnit:
    | Area
    | DataTransferRate
    | DigitalStorage
    | Energy
    | Frequency
    | FuelEconomics
    | Length
    | Mass
    | PlaneAngle
    | Pressure
    | Speed
    | Temperature
    | Time
    | Volume,
  toUnit:
    | Area
    | DataTransferRate
    | DigitalStorage
    | Energy
    | Frequency
    | FuelEconomics
    | Length
    | Mass
    | PlaneAngle
    | Pressure
    | Speed
    | Temperature
    | Time
    | Volume,
  unitType: UNIT_TYPE,
): number | string {
  return convertUnit(value, fromUnit, toUnit, unitType);
}

const uc = { convert };
export default uc;
