<template>
  <section class="m-5 lg:m-12">
    <div class="flex flex-wrap lg:flex-nowrap gap-2.5 lg:gap-5">
      <div class="relative w-[calc(50%-5px)] lg:w-1/3">
        <img class="w-full" src="/images/collections/womens.png" alt="women">
        <div class="absolute bottom-0 w-full py-1 lg:py-5 bg-green flex justify-center">
          <span class="font-pacifico text-pacifico_header2_sm lg:text-pacifico_header2_lg text-white">Women's</span>
        </div>
      </div>
      <div class="relative w-[calc(50%-5px)] lg:w-1/3">
        <img class="w-full" src="/images/collections/mens.png" alt="men">
        <div class="absolute bottom-0 w-full py-1 lg:py-5 bg-green flex justify-center">
          <span class="font-pacifico text-pacifico_header2_sm lg:text-pacifico_header2_lg text-white">Men's</span>
        </div>
      </div>
      <div class="relative w-full lg:w-1/3">
        <img class="w-full hidden lg:block" src="/images/collections/accessories.png" alt="accessories">
        <img class="w-full lg:hidden" src="/images/collections/accessories-mobile.png" alt="accessories">
        <div class="absolute bottom-0 w-full py-1 lg:py-5 bg-green flex justify-center">
          <span class="font-pacifico text-pacifico_header2_sm lg:text-pacifico_header2_lg text-white">Accessories</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Collections'
}
</script>