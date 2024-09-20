<template>
  <!-- Mobile header -->
  <div class="lg:hidden">
    <HeaderItemMobile />
  </div>

  <!-- Desktop header -->
  <div
    class="hidden lg:flex 2xl:hidden flex-col min-h-screen px-edge py-edge2x gap-[50px]
      justify-center bg-gradient-desktop-lg"
  >
    <HeaderItemDesktop />
  </div>

  <!-- XL Desktop header -->
  <div
    class="hidden 2xl:flex flex-col min-h-screen px-edge py-edge2x gap-[50px] justify-center
      bg-gradient-desktop-xl"
  >
    <HeaderItemDesktop />
  </div>
</template>

<script lang="ts" setup>
import { HeaderItemMobile, HeaderItemDesktop } from "#components";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.bg-gradient-desktop-lg {
  background: radial-gradient(
    circle at center,
    #{mix($color-violetpink, transparent, 95%)} 0%,
    #{mix($color-royalpurple, transparent, 95%)} 30%,
    #{mix($color-woodsmoke, transparent, 95%)} 42%
  );
}

.bg-gradient-desktop-xl {
  background: radial-gradient(
    circle at center,
    #{mix($color-violetpink, transparent, 95%)} 0%,
    #{mix($color-royalpurple, transparent, 95%)} 20%,
    #{mix($color-woodsmoke, transparent, 95%)} 32%
  );
}
</style>
