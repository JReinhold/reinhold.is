/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}

  // From https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare#environment-variables
  interface Platform {
    env: {
      COUNTER: DurableObjectNamespace;
    };
    context: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      waitUntil(promise: Promise<any>): void;
    };
  }

  // interface Session {}
  // interface Stuff {}
}
