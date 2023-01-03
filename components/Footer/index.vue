<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>Official Address</h6>
                  <p>Business Bay, Dubai, United Arab Emirates</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Email Me</h6>
                  <p>mustafa.hegazi08@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5><br></h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Call Me</h6>
                  <p>+20 106 4444 267</p>
                  <p>+971 58 6050 541</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- <div class="item md-mb50">
            <div class="title">
              <h5>Recent News</h5>
            </div>
            <ul>
              <li>
                <div class="img">
                  <NuxtLink to="#">
                    <img src="/img/blog/1.jpg" alt=""
                  /></NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span class="date">14 sep 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="img">
                  <NuxtLink to="#">
                    <img src="/img/blog/2.jpg" alt="" />
                  </NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span class="date">14 sep 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span class="subs pe-7s-paper-plane"></span>
                </div>
              </li>
            </ul>
          </div> -->
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="logo">
              <img src="/img/logo-light.png" alt="logo" />
            </div>
            <div class="social">
              <a href="https://www.facebook.com/mustafa.hegazi.08">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/HEGZO08">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/mustafahegazi8/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/mustafahegazi08/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div class="copy-right">
              <p>
                © <span id="year"></span>, Made with passion by
                <a href="https://samehbilal.000webhostapp.com/">Sameh Bilal</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    props: ['hideBGCOLOR'],
    mounted() {
      document.getElementById("year").innerHTML = new Date().getFullYear();
    },
};
</script>

<style scoped>
</style>
