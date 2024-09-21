<template>
  <!-- Add a margin to the parent element so the size of the element fits the 
   size of the scaled child -->
  <div
    class="w-fit mx-[-26.5px] my-[-32px] md:mx-[26.5px] md:my-[32px]"
    :class="[initialClasses, { [visibleClass]: isVisible }]"
  >
    <div
      class="relative border-solid border-[6px] border-black bg-white scale-[0.75] w-[212px] h-[256px]
        md:scale-[1.25]"
    >
      <!-- Mobile video -->
      <video
        class="lg:hidden absolute top-[10px] left-[10px] size-[180px]"
        poster="https://paradnight-studio.sirv.com/paradnight-website/only_paradnight.png?w=320&h=320"
        preload="metadata"
        loop
        autoplay
        muted
      >
        <source
          src="https://paradnight-studio.sirv.com/paradnight-website/paradnight_loop_320.mp4"
          type="video/mp4"
        />
      </video>

      <!-- Desktop video -->
      <video
        class="lg:block absolute top-[10px] left-[10px] size-[180px]"
        poster="https://paradnight-studio.sirv.com/paradnight-website/only_paradnight.png?w=640&h=640"
        preload="metadata"
        loop
        autoplay
        muted
      >
        <source
          src="https://paradnight-studio.sirv.com/paradnight-website/paradnight_loop_640.mp4"
          type="video/mp4"
        />
      </video>

      <div
        class="absolute bottom-[12px] w-full h-[2.188rem] text-center font-heading"
        style="font-size: 42.5273px; line-height: 35px"
      >
        Paradnight Studio
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { initialClasses, visibleClass, isVisible } = useVisible(1000);
</script>

<style lang="scss" scoped></style>
