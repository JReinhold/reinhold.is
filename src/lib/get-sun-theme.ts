import SunCalc from "suncalc";

type ClientLocation = { lat: number; long: number };

const FALLBACK_THEME: Theme = { mode: "light", sun: "4-noon" };

export const getSunTheme = (countryCode: string | null): Theme => {
  try {
    const { lat, long } = (
      countryCode &&
      countryCode !== "XX" &&
      countryCodeLocationMap.has(countryCode)
        ? countryCodeLocationMap.get(countryCode)
        : // default to US country if we can't determine it from the header
          countryCodeLocationMap.get("US")
    ) as ClientLocation;

    //https://github.com/mourner/suncalc#sun-position
    const sunRadians = SunCalc.getPosition(new Date(), lat, long);
    const sunDegrees = {
      // from https://github.com/mourner/suncalc/issues/13#issuecomment-36289006
      azimuth: ((sunRadians.azimuth * 180) / Math.PI + 180) % 360,
      altitude: sunRadians.altitude * (180 / Math.PI),
    };

    // default to noon as fallback
    const theme = { ...FALLBACK_THEME };

    for (const [themeKey, { azimuth, mode }] of themeSunPositionMap) {
      if (
        azimuth.start <= sunDegrees.azimuth &&
        sunDegrees.azimuth <= azimuth.end
      ) {
        theme.mode = mode;
        theme.sun = themeKey;
        break;
      }
    }
    return { mode: "dark", sun: "7-dusk" };
    return theme;
  } catch {
    return FALLBACK_THEME;
  }
};

export type Theme = { sun: ThemeSunKey; mode: ThemeMode };
export type ThemeSunKey =
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
const themeSunPositionMap = new Map<
  ThemeSunKey,
  { mode: ThemeMode; altitude: number; azimuth: { start: number; end: number } }
>([
  [
    "0-night",
    {
      mode: "dark",
      altitude: -25,
      azimuth: { start: 0, end: 70 },
    },
  ],
  [
    "1-dawn",
    {
      mode: "dark",
      altitude: -9,
      azimuth: { start: 70, end: 80 },
    },
  ],
  [
    "2-sunrise",
    {
      mode: "dark",
      altitude: 0,
      azimuth: { start: 80, end: 90 },
    },
  ],
  [
    "3-morning",
    {
      mode: "light",
      altitude: 10,
      azimuth: { start: 90, end: 100 },
    },
  ],
  [
    "4-noon",
    {
      mode: "light",
      altitude: 25,
      azimuth: { start: 100, end: 250 },
    },
  ],
  [
    "5-afternoon",
    {
      mode: "light",
      altitude: 10,
      azimuth: { start: 250, end: 260 },
    },
  ],
  [
    "6-sunset",
    {
      mode: "dark",
      altitude: 0,
      azimuth: { start: 260, end: 270 },
    },
  ],
  [
    "7-dusk",
    {
      mode: "dark",
      altitude: -9,
      azimuth: { start: 270, end: 280 },
    },
  ],
  [
    "0-night",
    {
      mode: "dark",
      altitude: -25,
      azimuth: { start: 280, end: 360 },
    },
  ],
]);
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

const countryCodeLocationMap = new Map<string, ClientLocation>([
  ["AD", { lat: 42.546245, long: 1.601554 }],
  ["AE", { lat: 23.424076, long: 53.847818 }],
  ["AF", { lat: 33.93911, long: 67.709953 }],
  ["AG", { lat: 17.060816, long: -61 }],
  ["AI", { lat: 18.220554, long: -63 }],
  ["AL", { lat: 41.153332, long: 20.168331 }],
  ["AM", { lat: 40.069099, long: 45.038189 }],
  ["AN", { lat: 12.226079, long: -69 }],
  ["AO", { lat: -11.202692, long: 17.873887 }],
  ["AQ", { lat: -75.250973, long: -0 }],
  ["AR", { lat: -38.416097, long: -63 }],
  ["AS", { lat: -14.270972, long: -170 }],
  ["AT", { lat: 47.516231, long: 14.550072 }],
  ["AU", { lat: -25.274398, long: 133.775136 }],
  ["AW", { lat: 12.52111, long: -69 }],
  ["AZ", { lat: 40.143105, long: 47.576927 }],
  ["BA", { lat: 43.915886, long: 17.679076 }],
  ["BB", { lat: 13.193887, long: -59 }],
  ["BD", { lat: 23.684994, long: 90.356331 }],
  ["BE", { lat: 50.503887, long: 4.469936 }],
  ["BF", { lat: 12.238333, long: -1 }],
  ["BG", { lat: 42.733883, long: 25.48583 }],
  ["BH", { lat: 25.930414, long: 50.637772 }],
  ["BI", { lat: -3.373056, long: 29.918886 }],
  ["BJ", { lat: 9.30769, long: 2.315834 }],
  ["BM", { lat: 32.321384, long: -64 }],
  ["BN", { lat: 4.535277, long: 114.727669 }],
  ["BO", { lat: -16.290154, long: -63 }],
  ["BR", { lat: -14.235004, long: -51 }],
  ["BS", { lat: 25.03428, long: -77 }],
  ["BT", { lat: 27.514162, long: 90.433601 }],
  ["BV", { lat: -54.423199, long: 3.413194 }],
  ["BW", { lat: -22.328474, long: 24.684866 }],
  ["BY", { lat: 53.709807, long: 27.953389 }],
  ["BZ", { lat: 17.189877, long: -88 }],
  ["CA", { lat: 56.130366, long: -106 }],
  ["CC", { lat: -12.164165, long: 96.870956 }],
  ["CD", { lat: -4.038333, long: 21.758664 }],
  ["CF", { lat: 6.611111, long: 20.939444 }],
  ["CG", { lat: -0.228021, long: 15.827659 }],
  ["CH", { lat: 46.818188, long: 8.227512 }],
  ["CI", { lat: 7.539989, long: -5 }],
  ["CK", { lat: -21.236736, long: -159 }],
  ["CL", { lat: -35.675147, long: -71 }],
  ["CM", { lat: 7.369722, long: 12.354722 }],
  ["CN", { lat: 35.86166, long: 104.195397 }],
  ["CO", { lat: 4.570868, long: -74 }],
  ["CR", { lat: 9.748917, long: -83 }],
  ["CU", { lat: 21.521757, long: -77 }],
  ["CV", { lat: 16.002082, long: -24 }],
  ["CX", { lat: -10.447525, long: 105.690449 }],
  ["CY", { lat: 35.126413, long: 33.429859 }],
  ["CZ", { lat: 49.817492, long: 15.472962 }],
  ["DE", { lat: 51.165691, long: 10.451526 }],
  ["DJ", { lat: 11.825138, long: 42.590275 }],
  ["DK", { lat: 56.26392, long: 9.501785 }],
  ["DM", { lat: 15.414999, long: -61 }],
  ["DO", { lat: 18.735693, long: -70 }],
  ["DZ", { lat: 28.033886, long: 1.659626 }],
  ["EC", { lat: -1.831239, long: -78 }],
  ["EE", { lat: 58.595272, long: 25.013607 }],
  ["EG", { lat: 26.820553, long: 30.802498 }],
  ["EH", { lat: 24.215527, long: -12 }],
  ["ER", { lat: 15.179384, long: 39.782334 }],
  ["ES", { lat: 40.463667, long: -3 }],
  ["ET", { lat: 9.145, long: 40.489673 }],
  ["FI", { lat: 61.92411, long: 25.748151 }],
  ["FJ", { lat: -16.578193, long: 179.414413 }],
  ["FK", { lat: -51.796253, long: -59 }],
  ["FM", { lat: 7.425554, long: 150.550812 }],
  ["FO", { lat: 61.892635, long: -6 }],
  ["FR", { lat: 46.227638, long: 2.213749 }],
  ["GA", { lat: -0.803689, long: 11.609444 }],
  ["GB", { lat: 55.378051, long: -3 }],
  ["GD", { lat: 12.262776, long: -61 }],
  ["GE", { lat: 42.315407, long: 43.356892 }],
  ["GF", { lat: 3.933889, long: -53 }],
  ["GG", { lat: 49.465691, long: -2 }],
  ["GH", { lat: 7.946527, long: -1 }],
  ["GI", { lat: 36.137741, long: -5 }],
  ["GL", { lat: 71.706936, long: -42 }],
  ["GM", { lat: 13.443182, long: -15 }],
  ["GN", { lat: 9.945587, long: -9 }],
  ["GP", { lat: 16.995971, long: -62 }],
  ["GQ", { lat: 1.650801, long: 10.267895 }],
  ["GR", { lat: 39.074208, long: 21.824312 }],
  ["GS", { lat: -54.429579, long: -36 }],
  ["GT", { lat: 15.783471, long: -90 }],
  ["GU", { lat: 13.444304, long: 144.793731 }],
  ["GW", { lat: 11.803749, long: -15 }],
  ["GY", { lat: 4.860416, long: -58 }],
  ["GZ", { lat: 31.354676, long: 34.308825 }],
  ["HK", { lat: 22.396428, long: 114.109497 }],
  ["HM", { lat: -53.08181, long: 73.504158 }],
  ["HN", { lat: 15.199999, long: -86 }],
  ["HR", { lat: 45.1, long: 15.2 }],
  ["HT", { lat: 18.971187, long: -72 }],
  ["HU", { lat: 47.162494, long: 19.503304 }],
  ["ID", { lat: -0.789275, long: 113.921327 }],
  ["IE", { lat: 53.41291, long: -8 }],
  ["IL", { lat: 31.046051, long: 34.851612 }],
  ["IM", { lat: 54.236107, long: -4 }],
  ["IN", { lat: 20.593684, long: 78.96288 }],
  ["IO", { lat: -6.343194, long: 71.876519 }],
  ["IQ", { lat: 33.223191, long: 43.679291 }],
  ["IR", { lat: 32.427908, long: 53.688046 }],
  ["IS", { lat: 64.963051, long: -19 }],
  ["IT", { lat: 41.87194, long: 12.56738 }],
  ["JE", { lat: 49.214439, long: -2 }],
  ["JM", { lat: 18.109581, long: -77 }],
  ["JO", { lat: 30.585164, long: 36.238414 }],
  ["JP", { lat: 36.204824, long: 138.252924 }],
  ["KE", { lat: -0.023559, long: 37.906193 }],
  ["KG", { lat: 41.20438, long: 74.766098 }],
  ["KH", { lat: 12.565679, long: 104.990963 }],
  ["KI", { lat: -3.370417, long: -168 }],
  ["KM", { lat: -11.875001, long: 43.872219 }],
  ["KN", { lat: 17.357822, long: -62 }],
  ["KP", { lat: 40.339852, long: 127.510093 }],
  ["KR", { lat: 35.907757, long: 127.766922 }],
  ["KW", { lat: 29.31166, long: 47.481766 }],
  ["KY", { lat: 19.513469, long: -80 }],
  ["KZ", { lat: 48.019573, long: 66.923684 }],
  ["LA", { lat: 19.85627, long: 102.495496 }],
  ["LB", { lat: 33.854721, long: 35.862285 }],
  ["LC", { lat: 13.909444, long: -60 }],
  ["LI", { lat: 47.166, long: 9.555373 }],
  ["LK", { lat: 7.873054, long: 80.771797 }],
  ["LR", { lat: 6.428055, long: -9 }],
  ["LS", { lat: -29.609988, long: 28.233608 }],
  ["LT", { lat: 55.169438, long: 23.881275 }],
  ["LU", { lat: 49.815273, long: 6.129583 }],
  ["LV", { lat: 56.879635, long: 24.603189 }],
  ["LY", { lat: 26.3351, long: 17.228331 }],
  ["MA", { lat: 31.791702, long: -7 }],
  ["MC", { lat: 43.750298, long: 7.412841 }],
  ["MD", { lat: 47.411631, long: 28.369885 }],
  ["ME", { lat: 42.708678, long: 19.37439 }],
  ["MG", { lat: -18.766947, long: 46.869107 }],
  ["MH", { lat: 7.131474, long: 171.184478 }],
  ["MK", { lat: 41.608635, long: 21.745275 }],
  ["ML", { lat: 17.570692, long: -3 }],
  ["MM", { lat: 21.913965, long: 95.956223 }],
  ["MN", { lat: 46.862496, long: 103.846656 }],
  ["MO", { lat: 22.198745, long: 113.543873 }],
  ["MP", { lat: 17.33083, long: 145.38469 }],
  ["MQ", { lat: 14.641528, long: -61 }],
  ["MR", { lat: 21.00789, long: -10 }],
  ["MS", { lat: 16.742498, long: -62 }],
  ["MT", { lat: 35.937496, long: 14.375416 }],
  ["MU", { lat: -20.348404, long: 57.552152 }],
  ["MV", { lat: 3.202778, long: 73.22068 }],
  ["MW", { lat: -13.254308, long: 34.301525 }],
  ["MX", { lat: 23.634501, long: -102 }],
  ["MY", { lat: 4.210484, long: 101.975766 }],
  ["MZ", { lat: -18.665695, long: 35.529562 }],
  ["NA", { lat: -22.95764, long: 18.49041 }],
  ["NC", { lat: -20.904305, long: 165.618042 }],
  ["NE", { lat: 17.607789, long: 8.081666 }],
  ["NF", { lat: -29.040835, long: 167.954712 }],
  ["NG", { lat: 9.081999, long: 8.675277 }],
  ["NI", { lat: 12.865416, long: -85 }],
  ["NL", { lat: 52.132633, long: 5.291266 }],
  ["NO", { lat: 60.472024, long: 8.468946 }],
  ["NP", { lat: 28.394857, long: 84.124008 }],
  ["NR", { lat: -0.522778, long: 166.931503 }],
  ["NU", { lat: -19.054445, long: -169 }],
  ["NZ", { lat: -40.900557, long: 174.885971 }],
  ["OM", { lat: 21.512583, long: 55.923255 }],
  ["PA", { lat: 8.537981, long: -80 }],
  ["PE", { lat: -9.189967, long: -75 }],
  ["PF", { lat: -17.679742, long: -149 }],
  ["PG", { lat: -6.314993, long: 143.95555 }],
  ["PH", { lat: 12.879721, long: 121.774017 }],
  ["PK", { lat: 30.375321, long: 69.345116 }],
  ["PL", { lat: 51.919438, long: 19.145136 }],
  ["PM", { lat: 46.941936, long: -56 }],
  ["PN", { lat: -24.703615, long: -127 }],
  ["PR", { lat: 18.220833, long: -66 }],
  ["PS", { lat: 31.952162, long: 35.233154 }],
  ["PT", { lat: 39.399872, long: -8 }],
  ["PW", { lat: 7.51498, long: 134.58252 }],
  ["PY", { lat: -23.442503, long: -58 }],
  ["QA", { lat: 25.354826, long: 51.183884 }],
  ["RE", { lat: -21.115141, long: 55.536384 }],
  ["RO", { lat: 45.943161, long: 24.96676 }],
  ["RS", { lat: 44.016521, long: 21.005859 }],
  ["RU", { lat: 61.52401, long: 105.318756 }],
  ["RW", { lat: -1.940278, long: 29.873888 }],
  ["SA", { lat: 23.885942, long: 45.079162 }],
  ["SB", { lat: -9.64571, long: 160.156194 }],
  ["SC", { lat: -4.679574, long: 55.491977 }],
  ["SD", { lat: 12.862807, long: 30.217636 }],
  ["SE", { lat: 60.128161, long: 18.643501 }],
  ["SG", { lat: 1.352083, long: 103.819836 }],
  ["SH", { lat: -24.143474, long: -10 }],
  ["SI", { lat: 46.151241, long: 14.995463 }],
  ["SJ", { lat: 77.553604, long: 23.670272 }],
  ["SK", { lat: 48.669026, long: 19.699024 }],
  ["SL", { lat: 8.460555, long: -11 }],
  ["SM", { lat: 43.94236, long: 12.457777 }],
  ["SN", { lat: 14.497401, long: -14 }],
  ["SO", { lat: 5.152149, long: 46.199616 }],
  ["SR", { lat: 3.919305, long: -56 }],
  ["ST", { lat: 0.18636, long: 6.613081 }],
  ["SV", { lat: 13.794185, long: -88 }],
  ["SY", { lat: 34.802075, long: 38.996815 }],
  ["SZ", { lat: -26.522503, long: 31.465866 }],
  ["TC", { lat: 21.694025, long: -71 }],
  ["TD", { lat: 15.454166, long: 18.732207 }],
  ["TF", { lat: -49.280366, long: 69.348557 }],
  ["TG", { lat: 8.619543, long: 0.824782 }],
  ["TH", { lat: 15.870032, long: 100.992541 }],
  ["TJ", { lat: 38.861034, long: 71.276093 }],
  ["TK", { lat: -8.967363, long: -171 }],
  ["TL", { lat: -8.874217, long: 125.727539 }],
  ["TM", { lat: 38.969719, long: 59.556278 }],
  ["TN", { lat: 33.886917, long: 9.537499 }],
  ["TO", { lat: -21.178986, long: -175 }],
  ["TR", { lat: 38.963745, long: 35.243322 }],
  ["TT", { lat: 10.691803, long: -61 }],
  ["TV", { lat: -7.109535, long: 177.64933 }],
  ["TW", { lat: 23.69781, long: 120.960515 }],
  ["TZ", { lat: -6.369028, long: 34.888822 }],
  ["UA", { lat: 48.379433, long: 31.16558 }],
  ["UG", { lat: 1.373333, long: 32.290275 }],
  ["US", { lat: 37.09024, long: -95 }],
  ["UY", { lat: -32.522779, long: -55 }],
  ["UZ", { lat: 41.377491, long: 64.585262 }],
  ["VA", { lat: 41.902916, long: 12.453389 }],
  ["VC", { lat: 12.984305, long: -61 }],
  ["VE", { lat: 6.42375, long: -66 }],
  ["VG", { lat: 18.420695, long: -64 }],
  ["VI", { lat: 18.335765, long: -64 }],
  ["VN", { lat: 14.058324, long: 108.277199 }],
  ["VU", { lat: -15.376706, long: 166.959158 }],
  ["WF", { lat: -13.768752, long: -177 }],
  ["WS", { lat: -13.759029, long: -172 }],
  ["XK", { lat: 42.602636, long: 20.902977 }],
  ["YE", { lat: 15.552727, long: 48.516388 }],
  ["YT", { lat: -12.8275, long: 45.166244 }],
  ["ZA", { lat: -30.559482, long: 22.937506 }],
  ["ZM", { lat: -13.133897, long: 27.849332 }],
  ["ZW", { lat: -19.015438, long: 29.154857 }],
]);