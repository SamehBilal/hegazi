<template>
  <section class="feat sub-bg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head">
            <h6 class="wow fadeIn" data-wow-delay=".5s">My Skills</h6>
            <h3 class="wow color-font">
              I help to create Art, design &amp; development.
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 items md-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-images"></i>
            </span>
            <h5>Graphic Design</h5>
            <p>
              I create graphics including illustrations, logos, layouts and photos. I can shape the visual aspects of ads, books, magazines, exhibitions and more.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items active md-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-color-wand-outline"></i>
            </span>
            <h5>Motion Graphics</h5>
            <p>
              I Translate ideas into motion graphics that can be understood by a wide audience such as animated graphics, videos for use in commercials, video games, or other visual media productions.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items sm-mb30">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-videocam-outline"></i>
            </span>
            <h5>Videography & Video Editing</h5>
            <p>
              I create/manage materials such as camera footage, dialogue, sound effects, graphics and special effects to produce a final film or video product.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 items">
          <div class="item wow fadeIn" data-wow-delay=".3s">
            <span class="icon">
              <i class="ion-ios-camera-outline"></i>
            </span>
            <h5>Photography</h5>
            <p>
              I capture events, people, objects or scenes for records, art or commercial use.
            </p>
            <NuxtLink to="#0" class="more-stroke">
              <span></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardMouseEffect from "../../common/cardMouseEffect";
export default {
  mounted() {
    cardMouseEffect();
  },
};
</script>

<style scoped>
</style>
