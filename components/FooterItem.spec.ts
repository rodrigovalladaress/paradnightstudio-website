// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import FooterItem from "./FooterItem.vue";

describe("FooterItem", () => {
  beforeEach(async () => {
    await renderSuspended(FooterItem);
  });

  it("shows the copyright text", () => {
    expect(screen.getByText(/Copyright © \d\d\d\d Paradnight Studio/)).toBeDefined();
  });
});
