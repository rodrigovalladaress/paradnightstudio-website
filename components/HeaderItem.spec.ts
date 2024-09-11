// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import HeaderItem from "./HeaderItem.vue";

describe("HeaderItem", () => {
  beforeEach(async () => {
    await renderSuspended(HeaderItem);
  });

  it("shows the title", async () => {
    expect(screen.getByRole("heading", { name: /Paradnight Studio/i })).toBeDefined();
  });

  it("shows the subtitle", async () => {
    expect(
      screen.getByRole("heading", {
        name: /Crafting weird retro inspired horror games/i,
      }),
    ).toBeDefined();
  });
});
