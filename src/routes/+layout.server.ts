import { getSunTheme } from "$lib/get-sun-theme";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request }) => {
  // default fallback to somewhere at the center of USA, as that's where most visitors are from
  let clientGeolocation = {
    lat: 37.156767,
    long: -94.999726,
  };

  try {
    // a special cf property available in Cloudflare Workers
    // see https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cf = (request as any).cf;
    const lat = Number.parseFloat(cf.latitude);
    const long = Number.parseFloat(cf.longitude);
    if (lat && long) {
      clientGeolocation = { lat, long };
    }
    // eslint-disable-next-line no-empty
  } catch {}

  // uncomment to test Denmark location
  // clientGeolocation = {
  //   long: 9.7918,
  //   lat: 56.3937,
  // };

  const theme = getSunTheme(clientGeolocation);
  return {
    theme,
  };
};
