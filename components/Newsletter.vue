<template>
  <section class="relative">
    <div class="bg-green p-6 lg:px-12 lg:py-20">
      <h2 class="font-pacifico text-center text-white text-pacifico_header2_sm lg:text-pacifico_header2_lg flex items-center justify-center mb-3 lg:mb-6">
        <img class="h-5 lg:h-10 mr-1 lg:mr-2" src="/images/icon/email.svg" alt="email-logo">
        <span>Sign Up & Stay Connected</span>
      </h2>
      <div class="flex flex-col lg:flex-row items-center gap-14">
        <p class="lg:w-1/2 font-lato text-center lg:text-left text-white text-lato_base lg:text-lato_subheader_md">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
        <div class="lg:w-1/2 flex">
          <input type="text" class="hidden lg:inline-block font-lato text-lato_subheader_md mr-3 w-full pl-4" placeholder="Enter Your Email Address">
          <button class="bg-transparent border-[1px] border-white text-center px-7 py-3 lg:py-5 font-fato text-lato_subheader_xs font-bold lg:text-lato_base text-white uppercase">
            Subscribe
					</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
}
</script>