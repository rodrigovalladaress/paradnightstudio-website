// @vitest-environment nuxt
import { screen } from "@testing-library/vue";
import { beforeEach, expect, describe, it } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import GameCard from "./GameCard.vue";

const ITEM = {
  title: "The Nameless City",
  description: "Narrative-driven first person horror adventure",
  image:
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2987830/header.jpg",
  actions: [
    {
      label: "Buy on Steam",
      link: "https://store.steampowered.com/app/2987830/The_Nameless_City/",
    },
  ],
};

describe("GameCard", () => {
  beforeEach(async () => {
    await renderSuspended(GameCard, { props: { ...ITEM } });
  });

  it("shows the info of the game", async () => {
    expect(screen.getByRole("img", { name: `${ITEM.title} logo` })).toBeDefined();
    expect(screen.getByRole("heading", { name: ITEM.title })).toBeDefined();
    expect(screen.getByText(ITEM.description)).toBeDefined();

    const button = screen.getByRole("link", { name: ITEM.actions[0].label });
    expect(button).toBeDefined();
    expect(button.getAttribute("href")).toBe(ITEM.actions[0].link);
  });
});
