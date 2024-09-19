<template>
  <div class="px-edge pt-[120px] pb-[10px] text-sm text-white bg-gradient">
    <div>Copyright © {{ new Date().getFullYear() }} Paradnight Studio</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.bg-gradient {
  background: linear-gradient(
    180deg,
    #{mix($color-woodsmoke, transparent, 95%)} 0%,
    #{mix($color-tuna, transparent, 95%)} 13%,
    #{mix($color-purple, transparent, 95%)} 37%,
    #{mix($color-barneypurple, transparent, 95%)} 63%,
    #{mix($color-royalpurple, transparent, 95%)} 100%
  );
}
</style>
