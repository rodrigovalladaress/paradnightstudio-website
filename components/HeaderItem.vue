<template>
  <div>
    <div
      class="flex justify-center px-edge pt-edge2x bg-gradient-to-b from-tuna/95 to-woodsmoke/95"
    >
      <h1 class="w-fit overflow-hidden">
        <ParadnightLogo />
      </h1>
    </div>

    <div class="flex justify-center px-edge pt-[117px] pb-[135px] bg-gradient">
      <h2 class="max-w-[300px] leading-[1.1] text-center font-heading text-h2 text-white">
        Crafting weird retro inspired horror games
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "sass:color";
@import "@/assets/_variables.scss";

.bg-gradient {
  background: linear-gradient(
    180deg,
    #{mix($color-woodsmoke, transparent, 95%)} 0%,
    #{mix($color-purple, transparent, 95%)} 23%,
    #{mix($color-purple, transparent, 95%)} 77%,
    #{mix($color-tuna, transparent, 95%)} 100%
  );
}
</style>
