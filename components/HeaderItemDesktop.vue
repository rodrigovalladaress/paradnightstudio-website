<template>
  <div class="flex justify-center">
    <h1 class="w-fit overflow-hidden">
      <ParadnightLogo />
    </h1>
  </div>

  <div class="flex justify-center">
    <h2
      class="max-w-[26.438rem] h-[7.15rem] leading-[1.1] text-center font-heading text-h2-desktop
        text-white"
      :class="[initialClasses, { [visibleClass]: isVisible }]"
    >
      Crafting weird retro inspired horror games
    </h2>
  </div>
</template>

<script lang="ts" setup>
const { initialClasses, visibleClass, isVisible } = useVisible(1500);
</script>

<style></style>
