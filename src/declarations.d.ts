declare module "suncalc" {
  const SunCalc: {
    getTimes: (
      date: Date,
      lat: number,
      long: number,
    ) => {
      solarNoon: Date;
      nadir: Date;
      sunrise: Date;
      sunset: Date;
      sunriseEnd: Date;
      sunsetStart: Date;
      dawn: Date;
      dusk: Date;
      nauticalDawn: Date;
      nauticalDusk: Date;
      nightEnd: Date;
      night: Date;
      goldenHourEnd: Date;
      goldenHour: Date;
    };
    getPosition: (
      date: Date,
      lat: number,
      long: number,
    ) => { altitude: number; azimuth: number };
  };

  export default SunCalc;
}
