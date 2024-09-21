<template>
  <a
    class="button flex py-[6px] px-[12px] text-btn leading-none tracking-wide uppercase bg-white
      text-black transition-colors duration-200 hover:bg-buff active:bg-springsun
      focus:[&:not(:active)]:outline-dashed focus:[&:not(:active)]:outline-white"
    :href="href"
    target="_blank"
  >
    <div class="flex flex-grow justify-center">
      <slot />
    </div>

    <div class="flex w-1/3 justify-center">
      <div class="size-[1.5rem]">
        <component :is="iconComponent" class="size-[100%_!important]" />
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { SvgoSteam, SvgoGlobe, SvgoItchIo } from "#components";

const props = defineProps<{
  href: string;
}>();

const iconComponent = computed(() => {
  let r;

  if (/steam/.test(props.href)) {
    r = SvgoSteam;
  } else if (/itch\.io/.test(props.href)) {
    r = SvgoItchIo;
  } else {
    r = SvgoGlobe;
  }

  return r;
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.button {
  &:hover {
    box-shadow: 0 0 0.35rem 0.2rem rgba(255, 255, 255, 0.95);
  }

  &:active {
    box-shadow: 0 0 0.45rem 0.3rem #{mix($color-buff, transparent, 95%)};
  }
}
</style>
