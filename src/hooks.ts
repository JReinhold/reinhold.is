import type { GetSession } from "@sveltejs/kit";

export const getSession: GetSession = (event) => {
  return { countryCode: event.request.headers.get("CF-IPCountry") };
};
