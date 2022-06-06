<template>
  <section class="relative">
    <img src="/images/hero/hero-4-mobile.png" alt="hero" class="w-full lg:hidden" />
    <img src="/images/hero/hero-4.png" alt="hero" class="w-full hidden lg:inline-block" />
    <div class="lg:absolute bg-gray_1 flex flex-col items-center lg:bg-transparent lg:h-full lg:top-0 lg:right-0 lg:items-baseline lg:justify-center pt-3 pb-10 lg:pt-14 lg:pr-14 lg:pb-0">
      <h2 class="font-pacifico text-green lg:text-white text-pacifico_header_sm lg:text-pacifico_header_lg mb-2">Our Favorite Tees</h2>
      <p class="font-lato text-green lg:text-white text-lato_base lg:text-lato_subheader_lg mb-4 lg:mb-6">Everyday tees you need.</p>
      <button class="bg-black lg:bg-green text-center px-5 py-3 font-fato text-lato_base font-bold text-white uppercase">
        Shop now
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageText',
}
</script>