<template>
  <!-- Mobile header -->
  <div class="lg:hidden">
    <HeaderItemMobile />
  </div>

  <!-- Desktop header -->
  <div class="hidden lg:block">
    <div
      class="flex flex-col min-h-screen px-edge py-edge2x gap-[50px] justify-center bg-gradient-desktop"
    >
      <HeaderItemDesktop />
    </div>

    <div class="h-[250px] mt-auto bg-gradient-desktop-below" />
  </div>
</template>

<script lang="ts" setup>
import { HeaderItemMobile, HeaderItemDesktop } from "#components";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.bg-gradient-desktop {
  background: radial-gradient(
    circle at center,
    #{mix($color-violetpink, transparent, 95%)} 0%,
    #{mix($color-royalpurple, transparent, 95%)} 30%,
    #{mix($color-woodsmoke, transparent, 95%)} 42%
  );
}

.bg-gradient-desktop-below {
  background: radial-gradient(
    ellipse 150% 70% at top,
    #{mix($color-woodsmoke, transparent, 95%)} 30%,
    #{mix($color-tuna, transparent, 95%)} 90%
  );
}
</style>
