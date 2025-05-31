import SunCalc from "suncalc";

type ClientGeolocation = { lat: number; long: number };

const FALLBACK_THEME: Theme = { mode: "light", key: "4-noon" };

export const getSunTheme = ({ lat, long }: ClientGeolocation): Theme => {
  let currentSunRadians: ReturnType<typeof SunCalc.getPosition>;

  try {
    //https://github.com/mourner/suncalc#sun-position
    currentSunRadians = SunCalc.getPosition(new Date(), lat, long);
  } catch {
    return FALLBACK_THEME;
  }

  // convert radians to degrees
  // from https://github.com/mourner/suncalc/issues/13#issuecomment-36289006
  const currentSunDegrees = {
    altitude: currentSunRadians.altitude * (180 / Math.PI),
    azimuth: ((currentSunRadians.azimuth * 180) / Math.PI + 180) % 360,
  };

  let result = FALLBACK_THEME;
  let smallestAltitudeDifference = Infinity;

  themeSunPositions
    // only factor in the themes where the sun is on the same side (east/west)
    // eg. in the morning disregard the 'sunset' theme
    .filter((theme) => currentSunDegrees.azimuth < 180 === theme.azimuth < 180)
    // select the theme whose altitude is closest to the current sun's altitude
    .forEach((theme) => {
      const altitudeDifference = Math.abs(
        currentSunDegrees.altitude - theme.altitude,
      );
      if (altitudeDifference >= smallestAltitudeDifference) {
        return;
      }
      smallestAltitudeDifference = altitudeDifference;
      result = {
        key: theme.key,
        mode: theme.mode,
      };
    });

  return result;
};

export type Theme = { key: ThemeKey; mode: ThemeMode };
export type ThemeKey =
  | "0-night"
  | "1-dawn"
  | "2-sunrise"
  | "3-morning"
  | "4-noon"
  | "5-afternoon"
  | "6-sunset"
  | "7-dusk";
export type ThemeMode = "light" | "dark";

// altitude and azimuth extracted from the actual "The Beach.heic" file on MacOS
const themeSunPositions: Array<{
  key: ThemeKey;
  mode: ThemeMode;
  altitude: number;
  azimuth: number;
}> = [
  {
    key: "0-night",
    mode: "dark",
    altitude: -25,
    azimuth: 70,
  },
  {
    key: "1-dawn",
    mode: "dark",
    altitude: -9,
    azimuth: 80,
  },
  {
    key: "2-sunrise",
    mode: "dark",
    altitude: 0,
    azimuth: 90,
  },
  {
    key: "3-morning",
    mode: "light",
    altitude: 10,
    azimuth: 100,
  },
  {
    key: "4-noon",
    mode: "light",
    altitude: 25,
    azimuth: 110,
  },
  {
    key: "4-noon",
    mode: "light",
    altitude: 25,
    azimuth: 250,
  },
  {
    key: "5-afternoon",
    mode: "light",
    altitude: 10,
    azimuth: 260,
  },
  {
    key: "6-sunset",
    mode: "dark",
    altitude: 0,
    azimuth: 270,
  },
  {
    key: "7-dusk",
    mode: "dark",
    altitude: -9,
    azimuth: 280,
  },
  {
    key: "0-night",
    mode: "dark",
    altitude: -25,
    azimuth: 290,
  },
];
/*
raw configuration extracted from "The Beach.heic":

image index: 1, azimuth: 70.0, altitude: -25.0
image index: 2, azimuth: 80.0, altitude: -9.0
image index: 3, azimuth: 90.0, altitude: 0.0
image index: 0, azimuth: 100.0, altitude: 10.0
image index: 4, azimuth: 110.0, altitude: 25.0
image index: 4, azimuth: 250.0, altitude: 25.0
image index: 5, azimuth: 260.0, altitude: 10.0
image index: 6, azimuth: 270.0, altitude: 0.0
image index: 7, azimuth: 280.0, altitude: -9.0
image index: 1, azimuth: 290.0, altitude: -25.0
*/
