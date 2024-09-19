<template>
  <a
    class="flex py-[6px] px-[12px] text-btn leading-none tracking-wide uppercase bg-white text-black
      transition-colors hover:bg-black hover:text-white active:bg-slate-700 active:text-white
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

<style></style>
