<template>
  <div>
    <div class="w-full h-[300px] overflow-clip sm:h-[300px] sm:w-[300px]">
      <img
        :src="item.image"
        :alt="`${item.title} logo`"
        class="h-full w-auto max-w-max m-auto object-contain relative left-[50%] translate-x-[-50%]"
      />
    </div>

    <div
      class="px-[18px] pt-[11px] pb-[18px]"
      :class="{ 'bg-barneypurple': item.isFeatured, 'bg-woodsmoke': !item.isFeatured }"
    >
      <h4 class="text-h4 font-heading mb-headingbottomxs text-white leading-none">
        {{ item.title }}
      </h4>

      <p class="leading-[1.2] text-white">{{ item.description }}</p>

      <div class="flex flex-col mt-[1.875rem] gap-[18px]">
        <GameButton v-for="{ label, link } in item.actions" :key="label" :href="link">
          <span class="inline-block m-auto font-sans-condensed text-center">
            {{ label }}
          </span>
        </GameButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Explicitly importing GameButton here so the tests work
import GameButton from "./GameButton.vue";
import type { Game } from "~/types/game";

defineProps<{
  item: Game;
}>();
</script>

<style></style>
