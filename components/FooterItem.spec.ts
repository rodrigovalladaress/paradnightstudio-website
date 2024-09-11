// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import FooterItem from "./FooterItem.vue";

describe("FooterItem", () => {
  beforeEach(async () => {
    await renderSuspended(FooterItem);
  });

  it("shows the social media and email links", async () => {
    const x = screen.getByRole("link", { name: /x/i });
    expect(x).toBeDefined();
    expect(x.getAttribute("href")).toContain("x.com");

    const blueSky = screen.getByRole("link", { name: /Bluesky/i });
    expect(blueSky).toBeDefined();
    expect(blueSky.getAttribute("href")).toContain("bsky.app");

    const email = screen.getByRole("link", { name: /Email/i });
    expect(email).toBeDefined();
    expect(email.getAttribute("href")).toContain("@");
  });

  it("shows the copyright text", () => {
    expect(screen.getByText(/Copyright © \d\d\d\d Paradnight Studio/)).toBeDefined();
  });
});
