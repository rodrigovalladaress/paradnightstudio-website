<template>
  <!-- Mobile header -->
  <div class="flex flex-col lg:hidden min-h-screen">
    <HeaderItemMobile />
  </div>

  <!-- Desktop header -->
  <div class="hidden lg:block">
    <div
      class="flex flex-col min-h-screen px-edge py-edge2x gap-[50px] justify-center bg-gradient-desktop"
      :class="{ 'bg-gradient-desktop-visible': isGradientVisible }"
    >
      <HeaderItemDesktop />
    </div>

    <div class="h-[250px] mt-auto bg-gradient-desktop-below" />
  </div>
</template>

<script lang="ts" setup>
import { HeaderItemMobile, HeaderItemDesktop } from "#components";

const isGradientVisible = ref(false);

onMounted(() => {
  isGradientVisible.value = true;
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

@property --p-1 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

@property --p-2 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.bg-gradient-desktop {
  --p-1: 0%;
  --p-2: 0%;
  transition:
    --p-1 2000ms cubic-bezier(0.4, 0, 0.2, 1),
    --p-2 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  background: radial-gradient(
    circle at center,
    #{mix($color-violetpink, transparent, 95%)} 0%,
    #{mix($color-royalpurple, transparent, 95%)} var(--p-1),
    #{mix($color-woodsmoke, transparent, 95%)} var(--p-2)
  );
}

.bg-gradient-desktop-visible {
  --p-1: 30%;
  --p-2: 42%;
}

.bg-gradient-desktop-below {
  background: radial-gradient(
    ellipse 150% 70% at top,
    #{mix($color-woodsmoke, transparent, 95%)} 30%,
    #{mix($color-tuna, transparent, 95%)} 90%
  );
}
</style>
