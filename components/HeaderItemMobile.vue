<template>
  <div
    class="flex flex-grow justify-center items-center px-edge py-edge2x bg-gradient-to-b from-tuna/95
      to-woodsmoke/95"
  >
    <h1 class="w-fit overflow-hidden">
      <ParadnightLogo />
    </h1>
  </div>

  <div
    class="flex justify-center px-edge pt-[117px] pb-[135px] bg-gradient"
    :class="{ 'bg-gradient-visible': isGradientVisible }"
  >
    <h2
      class="max-w-[18.75] leading-[1.1] text-center font-heading text-h2 text-white"
      :class="[initialClasses, { [visibleClass]: isVisible }]"
    >
      Crafting weird retro inspired horror games
    </h2>
  </div>
</template>

<script lang="ts" setup>
const { initialClasses, visibleClass, isVisible } = useVisible(1500);

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
  initial-value: 50%;
}

@property --p-2 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}

@property --p-t {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}

@property --p-b {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}

.bg-gradient {
  --p-1: 50%;
  --p-2: 50%;
  transition:
    --p-1 4000ms cubic-bezier(0.4, 0, 0.2, 1),
    --p-2 4000ms cubic-bezier(0.4, 0, 0.2, 1),
    --p-t 2000ms cubic-bezier(0.4, 0, 0.2, 1),
    --p-b 2000ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    180deg,
    #{mix($color-woodsmoke, transparent, 95%)} var(--p-t),
    #{mix($color-purple, transparent, 95%)} var(--p-1),
    #{mix($color-purple, transparent, 95%)} var(--p-2),
    #{mix($color-tuna, transparent, 95%)} var(--p-b)
  );
}

.bg-gradient-visible {
  --p-1: 30%;
  --p-2: 42%;
  --p-t: 0%;
  --p-b: 100%;
}
</style>
