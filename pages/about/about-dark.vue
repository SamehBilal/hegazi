<template>
  <div>
    <Navbar ref="navbar" />
    <PagesHeader imageLink="/img/slid/about.jpg">
      <template v-slot:title>
        I am always bursting with talent, experience and
        passion for what i do.
      </template>
    </PagesHeader>
    <AboutIntro />
    <Services3 />
    <VideoWithTestimonials />
   <br><br><br>
    <Clients1 theme="dark" />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - About Dark'
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>
