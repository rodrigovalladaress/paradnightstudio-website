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
    // Use getAllByRole, as Testing Library get the heading even when it's
    // hidden
    expect(
      screen.getAllByRole("heading", { name: /Paradnight Studio/i }).at(0),
    ).toBeDefined();
  });

  it("shows the subtitle", async () => {
    // Use getAllByRole, as Testing Library get the heading even when it's
    // hidden
    expect(
      screen
        .getAllByRole("heading", {
          name: /Crafting weird retro inspired horror games/i,
        })
        .at(0),
    ).toBeDefined();
  });
});
