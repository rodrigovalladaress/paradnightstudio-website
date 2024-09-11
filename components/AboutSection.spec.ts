// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import AboutSection from "./AboutSection.vue";

describe("AboutSection", () => {
  beforeEach(async () => {
    await renderSuspended(AboutSection);
  });

  it("shows the title", async () => {
    expect(screen.getByRole("heading", { name: /About/i })).toBeDefined();
  });

  it("shows the copy", async () => {
    expect(screen.getByText(/Paradnight Studio is a small/i)).toBeDefined();
  });
});
