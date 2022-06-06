<template>
  <section class="relative">
    <div class="bg-black px-5 py-8 lg:px-12 lg:py-16 flex flex-col lg:flex-row">
      <div class="mb-3 lg:mb-0">
        <Accordion
          :open="true"
          title="Customer Service"
          :links="['Accessibility', 'Contact Us', 'Return Policy', 'FAQ', 'Gift Certificates', 'Wishlist']"
        >
        </Accordion>
      </div>
      <div class="mb-3 lg:ml-[92px] lg:mb-0">
        <Accordion
          :open="false"
          title="Company"
          :links="['About Us', 'Careers', 'Press', 'Affiliates']"
        >
        </Accordion>
      </div>
      <div class="lg:ml-auto">
        <h2 class="font-pacifico text-white text-pacifico_header2_md mb-3">Follow Us</h2>
        <ul class="flex gap-10 lg:gap-12">
          <li>
            <a href="#">
              <img src="/images/icon/facebook-logo.svg" class="h-[26px] lg:h-8" alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icon/instagram-logo.svg" class="h-[26px] lg:h-8" alt="instagram-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icon/twitter-logo.svg" class="h-[26px] lg:h-8" alt="twitter-logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from './Accordion.vue'

export default {
  name: "Footer",
  components: { Accordion }
}
</script>