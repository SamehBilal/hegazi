<template>
  <section
    :class="`${
      grid ? (grid === 3 ? 'three-column' : null) : null
    } portfolio section-padding pb-70`"
  >
    <div v-if="!hideFilter" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
            <h3 class="wow color-font">
              My Recent Work &amp; <br />
              Some Past Projects.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          v-if="!hideFilter"
          :class="`filtering ${
            filterPosition === 'center'
              ? 'text-center'
              : filterPosition === 'left'
              ? 'text-left'
              : 'text-right'
          } col-12`"
        >
          <div class="filter">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".designs">Graphic Designs</span>
            <span data-filter=".motion">Motion Graphics</span>
            <span data-filter=".video">Videography & Video Editing</span>
            <span data-filter=".Photography">Photography</span>
            <span data-filter=".live">Live Streams</span>
          </div>
        </div>

        <div class="gallery full-width">
          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Logitech G Astro A30 Wireless Gaming Headset</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Intel® Core™ i9-12900K Processor</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Corsair DOMINATOR® PLATINUM RGB DDR5 </h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>ASUS ROG Ryujin ii 360</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>ASUS ROG MAXIMUS Z690 HERO</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>ASUS ROG Strix G513QY</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>ASUS Zenbook 13</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Bang & Olufsen - Beoplay EX</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Corsair iCUE H170i Elite Capellix</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>MSI RX 6600 XT</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Realme 5 Pro</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>UGREEN Power Delivery Fast Charger</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>XPG Prospector 950 1TB SSD</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items Photography wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                to="/project-details2/project-details2-dark"
                class="imago wow"
              >
                <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>XPG Gammix S70 Blade 2TB SSD</h6>
              <span> <a href="#0">Photography</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Insomnia Egypt 2019</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Arena of Valor - Arab World Qualifiers</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Arcane Premier in Egypt</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>PUBG MOBILE - Champions Challenge Egypt</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Brawl Stars MENA Community Cup</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Call Of Duty Warzone - Middle East Challenge</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Lenovo Legion Gaming Activation</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>OPPO Reno6 PUBG MOBILE GCC Cup</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Valorant Takeover in Egypt</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Kings Arena - MAF</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>ACE 01: Valorant Egyptian Cup</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items live wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Huawei APPS Up HMS APP Innovation Contest</h6>
              <span> <a href="#0">Online  </a>/ <a href="#0">Offline Events</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items web wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>See It Yourself</h6>
              <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
            </div>
          </div>

          <div
            :class="`${
              grid === 3
                ? 'col-lg-4 col-md-6'
                : grid === 2
                ? 'col-md-6'
                : 'col-12'
            } items brand wow fadeInUp`"
            data-wow-delay=".4s"
          >
            <div class="item-img">
              <NuxtLink
                class="imago wow"
                to="/project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6>Blast From The Past</h6>
              <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";

export default {
  props: ["grid", "filterPosition", "hideFilter"],
  mounted() {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  },
};
</script>

<style scoped>
</style>
