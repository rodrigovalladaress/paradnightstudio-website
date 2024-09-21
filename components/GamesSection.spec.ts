// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import GamesSection from "./GamesSection.vue";

describe("GamesSection", () => {
  beforeEach(async () => {
    await renderSuspended(GamesSection);
  });

  it("shows the titles", async () => {
    expect(screen.getByRole("heading", { name: /Games/i })).toBeDefined();

    expect(screen.getByRole("heading", { name: /Experiments/i })).toBeDefined();
  });
});
