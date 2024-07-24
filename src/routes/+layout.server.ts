import { getSunTheme } from "$lib/get-sun-theme";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request, platform }) => {
  // default fallback to somewhere at the center of USA, as that's where most visitors are from
  let clientGeolocation = {
    lat: 37.156767,
    long: -94.999726,
  };

  try {
    // cf is a special property available in Cloudflare Workers
    // see https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties
    const lat = Number.parseFloat(platform?.cf?.latitude ?? "");
    const long = Number.parseFloat(platform?.cf?.longitude ?? "");
    if (lat && long) {
      clientGeolocation = { lat, long };
    }
  } catch {
    // ignore errors, the site should still work if this fails
  }

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
