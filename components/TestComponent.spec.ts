// @vitest-environment nuxt
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/vue";
import { TestComponent } from "#components";

describe("App", () => {
  it("shows title", async () => {
    await renderSuspended(TestComponent);

    expect(screen.getByText("This is a test")).toBeDefined();
  });
});
