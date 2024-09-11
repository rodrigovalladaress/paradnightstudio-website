// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import ContactSection from "./ContactSection.vue";

describe("ContactSection", () => {
  beforeEach(async () => {
    await renderSuspended(ContactSection);
  });

  it("shows the title", async () => {
    expect(screen.getByRole("heading", { name: /Contact/i })).toBeDefined();
  });

  it("shows the mailing list input", async () => {
    const input = screen.getByRole("textbox", { name: /Subscribe to/i });
    expect(input).toBeDefined();
    expect(input.getAttribute("placeholder")).toContain("@");
  });

  it("shows the subscribe button", async () => {
    const input = screen.getByRole("button", { name: /Subscribe/i });
    expect(input).toBeDefined();
  });

  it("shows the information copy", async () => {
    expect(screen.getByText(/We promise to send/i)).toBeDefined();
  });
});
