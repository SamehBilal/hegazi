<template>
  <header class="freelancre valign">
    <Particles id="particles-js" :options="particlesOption" />
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="img">
            <img src="/img/hero.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-8 valign">
          <div class="cont">
            <h1 class="cd-headline clip">
              Hello, I’m Mustafa Hegazi, a multimedia professional, I can guarantee that I will create the best environment you wish for. Including 
              <span class="cd-words-wrapper">
                <VueTyper
                  :text="['Video Production.', 'Motion Graphics.', 'Video Editing.', 'Videography.', 'Photography.', 'Live Streams.']"
                  :repeat="Infinity"
                  initial-action="erasing"
                  :pre-type-delay="50"
                  :type-delay="50"
                  :pre-erase-delay="1000"
                  :erase-delay="50"
                  erase-style="backspace"
                  caret-animation="smooth"
                  class="color-font fw-600"
                ></VueTyper>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="states">
        <div class="container">
          <ul class="flex">
            <li class="flex">
              <div class="numb valign">
                <h3>+5</h3>
              </div>
              <div class="text valign">
                <p>
                  Years <br />
                  Of Experience
                </p>
              </div>
            </li>

            <li class="flex">
              <div class="numb valign">
                <h3>174</h3>
              </div>
              <div class="text valign">
                <p>
                  Projects Completed <br />
                  In 5 Countries
                </p>
              </div>
            </li>

            <li class="mail-us">
              <a href="mailto:mustafa.hegazi08@gmail.com?subject=New Project">
                <div class="flex">
                  <div class="text valign">
                    <div class="full-width">
                      <p>Get In Touch</p>
                      <h6>mustafa.hegazi08@gmail.com</h6>
                    </div>
                  </div>
                  <div class="mail-icon">
                    <div class="icon-box">
                      <span class="icon color-font pe-7s-mail"></span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>
import particlesConfig from "../../config/particle-config";
import initIsotope from "../../common/initIsotope";
export default {
  name: "demos",
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Demos",
    };
  },
  data() {
    return {
      particlesOption: particlesConfig,
    };
  },
  mounted() {
    setTimeout(() => {
      initIsotope();
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 1000);
  },
};
</script>

<style>
span.right {
    display: none !important;
}
span.caret:empty:before {
    content: "\200B";
    background: #fff;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
}
</style>
