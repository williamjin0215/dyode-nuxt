<template>
  <section class="relative bg-green">
    <div class="flex align-center justify-between px-5 pb-1 pt-3.5 lg:px-12 lg:pb-7 lg:pt-9">
      <div>
        <button class="lg:hidden mr-6 align-middle" @click="toggleMobileMenu">
          <img src="/images/icon/menu.png" alt="menu">
        </button>
        <img src="/images/logo.png" class="inline-block w-14 lg:w-[93px]" alt="logo" />
      </div>
      <ul class="hidden lg:flex justify-between items-center max-w-xl w-full font-lato text-lato_header text-white uppercase font-medium">
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">Women's</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Sale!</a>
        </li>
      </ul>
      <ul class="flex items-center gap-5 md:gap-7">
        <li>
          <a href="#">
            <img src="/images/icon/search.png" alt="search" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/icon/account.png" alt="account" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/icon/cart.png" alt="cart" />
          </a>
        </li>
      </ul>
    </div>
    <div class="w-full bg-green" v-if="showMobileMenu">
      <ul class="p-5 font-lato text-lato_header text-white uppercase font-medium">
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">Women's</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Sale!</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}
</script>