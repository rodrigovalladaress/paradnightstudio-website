<template>
  <div class="px-edge pb-8 bg-gradient-to-b from-tuna/95 to-woodsmoke/95">
    <h3 class="mb-headingbottom text-h3 leading-none font-heading text-springsun">
      Contact
    </h3>

    <SubscribeForm />

    <div class="flex justify-between mt-edge2x text-springsun">
      <a href="https://x.com/ParadnightStdio" aria-label="X/Twitter">
        <div class="size-[3rem]">
          <SvgoTwitter class="size-[100%_!important]" />
        </div>
      </a>

      <a
        href="https://bsky.app/profile/paradnight-studio.bsky.social"
        aria-label="Bluesky"
      >
        <div class="size-[3rem]">
          <SvgoBluesky class="size-[100%_!important]" />
        </div>
      </a>

      <a href="mailto:paradnightstudio@gmail.com" aria-label="Email">
        <div class="size-[3rem]">
          <SvgoEmail class="size-[100%_!important]" />
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SubscribeForm, SvgoTwitter, SvgoBluesky, SvgoEmail } from "#components";
</script>

<style></style>
