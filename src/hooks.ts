import type { GetSession } from "@sveltejs/kit";

export const getSession: GetSession = (event) => {
  // uncomment for Denmark
  // return {
  //   clientGeolocation: {
  //     long: 9.7918,
  //     lat: 56.3937,
  //   },
  // };
  try {
    // a special cf property available in Cloudflare Workers
    // see https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cf = (event.request as any).cf;
    const lat = Number.parseFloat(cf.latitude);
    const long = Number.parseFloat(cf.longitude);
    if (lat && long) {
      return {
        clientGeolocation: { lat, long },
      };
    }
    // eslint-disable-next-line no-empty
  } catch {}

  // fallback to somewhere at the center of USA, as that's where most visitors are from
  return {
    clientGeolocation: {
      lat: 37.156767,
      long: -94.999726,
    },
  };
};
