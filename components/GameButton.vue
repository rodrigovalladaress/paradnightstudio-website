<template>
  <a
    class="flex py-[6px] px-[12px] text-btn leading-none tracking-wide uppercase bg-white text-black"
    :href="href"
    target="_blank"
  >
    <div class="flex flex-grow justify-center">
      <slot />
    </div>

    <div class="size-[1.5rem]">
      <component :is="iconComponent" class="size-[100%_!important]" />
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

<style></style>
