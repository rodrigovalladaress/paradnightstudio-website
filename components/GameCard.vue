<template>
  <div>
    <img :src="image" :alt="`${title} logo`" />

    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <a v-for="{ label, link } in actions" :key="label" :href="link">
      {{ label }}
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  image: string;
  description: string;
  actions: { label: string; link: string }[];
}>();
</script>

<style></style>
