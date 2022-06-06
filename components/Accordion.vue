<template>
  <div>
    <h2 class="font-pacifico text-white text-pacifico_header2_md mb-3">
      <span>{{ title }}</span>
      <button type="button" class="lg:hidden" @click="isOpen = !isOpen" v-if="isOpen">-</button>
      <button type="button" class="lg:hidden" @click="isOpen = !isOpen" v-else>+</button>
    </h2>
    <ul class="font-lato text-white text-lato_footer_md lg:text-lato_footer transition-all duration-500 overflow-hidden lg:!max-h-full" :class="isOpen ? 'max-h-[200px]' : 'max-h-0'">
      <li v-for="link in links">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data: function() {
    return {
      isOpen: false
    }
  },
  created() {
    this.isOpen = this.open;
  },
  props: {
    open: Boolean,
    title: String,
    links: Array,
  }
}
</script>