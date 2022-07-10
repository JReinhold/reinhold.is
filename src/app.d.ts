/// <reference types="@sveltejs/kit" />

import type { Theme, ClientGeolocation } from "$lib/get-sun-theme";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Locals {}

    // From https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare#environment-variables
    interface Platform {
      context: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        waitUntil(promise: Promise<any>): void;
      };
    }

    interface Session {
      clientGeolocation: ClientGeolocation;
    }

    interface Stuff {
      theme: Theme;
    }
  }
}
