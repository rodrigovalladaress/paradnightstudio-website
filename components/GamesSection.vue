<template>
  <div class="px-edge bg-gradient-to-b from-tuna/95 to-woodsmoke/95">
    <h3 class="mb-headingbottom text-h3 leading-none font-heading text-white">Games</h3>

    <GameCard :item />

    <h3>Experiments</h3>

    <!-- TODO Experiments -->
  </div>
</template>

<script lang="ts" setup>
const item = {
  title: "The Nameless City",
  description:
    "Narrative-driven first person horror adventure inspired by Lovecraft's " +
    "short novel of the same name. It has lo-fi 3D graphics inspired by the " +
    "PSX era and uses AI generated images to convey concepts alien to the " +
    "human mind.",
  image:
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2987830/header.jpg",
  actions: [
    {
      label: "Buy on Steam",
      link: "https://store.steampowered.com/app/2987830/The_Nameless_City/",
    },
    {
      label: "Buy on itch",
      link: "https://itch.io/app/2987830/The_Nameless_City/",
    },
    {
      label: "Buy on ",
      link: "https://google",
    },
  ],
};
</script>

<style></style>
