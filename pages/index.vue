<template>
  <div id="app">
    <AnnouncementBar />
    <Header />
    <Hero />
    <Collections />
    <FeaturedCollection />
    <ImageText />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Newsletter from '../components/Newsletter.vue';
export default {
    name: "IndexPage",
    components: { Newsletter }
}
</script>
