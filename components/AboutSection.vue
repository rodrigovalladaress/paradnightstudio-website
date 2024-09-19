<template>
  <div class="pt-edge3x px-edge pb-[7.5rem] bg-gradient">
    <h3 class="mb-4 text-h3 leading-none font-heading text-springsun">About</h3>

    <div class="mb-4 w-full h-[150px] overflow-clip sm:h-[150px] sm:w-[300px]">
      <img
        src="https://paradnight-studio.sirv.com/paradnight-website/paradnight_banner.png?canvas.height=300"
        alt="Paradnights"
        class="h-full w-auto max-w-max m-auto object-contain relative left-[50%] translate-x-[-50%]"
      />
    </div>

    <div class="text-xl space-y-[0.75rem] leading-[1.2] text-white">
      <p>
        Paradnight Studio is a small indie game studio. I (Rodrigo) do most of the design
        and programming work, but I usually collaborate with
        <a class="link" href="https://andreabaroni.com/" target="_blank">Andrea Baroni</a
        >, composer and sound designer.
      </p>

      <p>
        The idea behind the studio is to create weird, horror and/or retro inspired games.
        But not limited to that, as we don't know what ideas lurk in our brains.
      </p>

      <p>
        If you like our games, leaving a review on Steam or itch.io would make a huge
        difference to this minuscule studio!
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.bg-gradient {
  background: linear-gradient(
    180deg,
    #{mix($color-woodsmoke, transparent, 95%)} 0%,
    #{mix($color-barneypurple, transparent, 95%)} 23%,
    #{mix($color-royalpurple, transparent, 95%)} 77%,
    #{mix($color-tuna, transparent, 95%)} 100%
  );
}
</style>
