<template>
  <div class="xl:flex xl:justify-center bg-woodsmoke">
    <div
      class="flex-col xl:w-full xl:max-w-[75rem] bg-auto bg-repeat
        bg-[url('https://paradnight-studio.sirv.com/paradnight-website/Grainy%207%20-%20512x512.png?w=256&h=256')]
        content-shadow"
    >
      <HeaderItem />

      <GamesSection />

      <AboutSection />

      <ContactSection />

      <FooterItem />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-shadow {
  box-shadow: 0 0 32px 15px rgba(253, 255, 247, 0.2);
}
</style>
