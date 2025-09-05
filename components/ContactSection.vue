<template>
  <div
    class="flex justify-center px-edge pb-8 bg-gradient-to-b from-tuna/95 to-woodsmoke/95
      sm:pb-[90px]"
  >
    <div class="w-full max-w-[37.5rem]">
      <h3
        id="contact"
        class="mb-headingbottom text-h3 leading-none font-heading text-springsun"
      >
        Contact
      </h3>

      <SubscribeForm />

      <div class="flex justify-between mt-edge2x text-springsun">
        <a
          v-for="item of socials"
          :key="item.label"
          :href="item.href"
          target="_blank"
          :aria-label="item.label"
          class="hover:text-buff active:text-springsun focus:[&:not(:active)]:outline-dashed
            focus:[&:not(:active)]:outline-white"
        >
          <div class="size-[3rem]">
            <component :is="item.iconComponent" class="size-[100%_!important]" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SubscribeForm, SvgoBluesky, SvgoEmail } from "#components";

const socials = [
  {
    href: "https://bsky.app/profile/paradnight-studio.bsky.social",
    label: "Bluesky",
    iconComponent: SvgoBluesky,
  },
  {
    href: "mailto:hello@paradnight-studio.com",
    label: "Email",
    iconComponent: SvgoEmail,
  },
];
</script>

<style lang="scss" scoped>
svg {
  transition: filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

a:hover {
  svg {
    filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.95));
  }
}
</style>
