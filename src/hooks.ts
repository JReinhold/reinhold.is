import type { GetSession } from "@sveltejs/kit";

export const getSession: GetSession = (event) => {
  return {
    countryCode: event.request.headers.get("CF-IPCountry"),
    cf: JSON.stringify((event.request as any).cf),
  };
};
