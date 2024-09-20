<template>
  <div
    class="flex flex-col"
    :class="{
      'max-w-[25rem] md:flex-row md:max-w-[45.75rem] md:items-center': item.isFeatured,
    }"
  >
    <div
      class="w-full aspect-square bg-cover bg-no-repeat bg-center"
      :class="[
        {
          'sm:w-full md:min-w-[22.063rem] md:h-full': item.isFeatured,
          'sm:w-[22.063rem] sm:h-[22.063rem]': !item.isFeatured,
        },
      ]"
      :style="{ backgroundImage: `url('${item.image}')` }"
    ></div>

    <div
      class="flex flex-col px-[18px] pt-[11px] pb-[18px]"
      :class="{
        'bg-barneypurple md:flex-grow md:px-[26px] md:pt-[19px] pb-[20px]':
          item.isFeatured,
        'bg-woodsmoke sm:w-[22.063rem] lg:flex-grow': !item.isFeatured,
      }"
    >
      <h4 class="text-h4 font-heading mb-headingbottom text-white leading-none">
        {{ item.title }}
      </h4>

      <p class="leading-normal text-white">{{ item.description }}</p>

      <div class="flex flex-col flex-grow justify-end mt-[1.875rem] gap-[18px]">
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
