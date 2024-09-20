<template>
  <div class="px-edge py-edge2x bg-gradient-to-b from-tuna/95 to-woodsmoke/95">
    <div class="flex justify-center">
      <h3
        class="mb-headingbottom text-h3 leading-none font-heading text-springsun w-[25rem]
          md:w-[45.75rem]"
      >
        Games
      </h3>
    </div>

    <div class="flex gap-7 flex-row justify-center">
      <GameCard v-for="item in games" :key="item.id" :item />
    </div>

    <div class="flex justify-center">
      <!-- 22.063rem is the width of the GameCard -->
      <!-- 45.75rem is the width of two GameCards and the gap -->
      <h3
        class="mt-[3.375rem] mb-headingbottom text-h3 leading-none font-heading text-springsun w-[25rem]
          md:w-[45.75rem] lg:w-[45.75rem]"
      >
        Experiments
      </h3>
    </div>

    <div
      class="flex flex-col gap-7 items-center lg:flex-wrap lg:flex-row lg:justify-between lg:mx-auto
        lg:w-[45.75rem] lg:items-stretch lg:gap-0"
    >
      <GameCard v-for="item in experiments" :key="item.id" :item />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from "~/types/game";

const games: Game[] = [
  {
    id: "1",
    title: "The Nameless City",
    description:
      "Narrative-driven first person horror adventure inspired by Lovecraft's " +
      "short novel of the same name. It has lo-fi 3D graphics inspired by the " +
      "PSX era and uses AI generated images to convey concepts alien to the " +
      "human mind.",
    image:
      "https://paradnight-studio.sirv.com/paradnight-website/The%20Nameless%20City%20logo.png",
    actions: [
      {
        label: "Buy on Steam",
        link: "https://store.steampowered.com/app/2987830/The_Nameless_City/",
      },
      {
        label: "Buy on itch",
        link: "https://itch.io/app/2987830/The_Nameless_City/",
      },
    ],
    isFeatured: true,
  },
];

const experiments: Game[] = [
  {
    id: "2",
    title: "Dream Machine",
    description:
      "Short experimental game about exploring dreams. It was developed for " +
      "the LSDJAM 2023.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2987830/header.jpg",
    actions: [
      {
        label: "Play on itch",
        link: "https://itch.io/app/2987830/The_Nameless_City/",
      },
    ],
    isFeatured: false,
  },
  {
    id: "2",
    title: "Pixels Out of Space",
    description:
      "Action/platformer game loosely inspired by Lovecraft’s short story " +
      "‘The Colour Out of Space’. Developed for the GBJAM 8, it mimics the " +
      "limitations of the Game Boy. But there’s a twist: due to the presence " +
      "of a mysterious entity, each level has an unique effect triggered when " +
      "the colour palette changes.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2987830/header.jpg",
    actions: [
      {
        label: "Play on itch",
        link: "https://itch.io/app/2987830/The_Nameless_City/",
      },
    ],
    isFeatured: false,
  },
];
</script>

<style></style>
