import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    // renderSuspended() needs globals: true
    // https://nuxt.com/docs/getting-started/testing#rendersuspended
    globals: true,
    // https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
    setupFiles: ["tests/vitest.setup.ts"],
  },
});
