<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="form md-mb50">
            <h4 class="fw-700 color-font mb-50">Get In Touch.</h4>

            <form id="contact-form" method="get" action="https://mostafaeltaweel.com/contact.php">
              <div class="messages"></div>

              <div class="controls">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    id="form_subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>

                <button type="submit" :class="`butn ${theme === 'light' ? 'dark': 'bord  color'}`"  id="resumeButton" >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="cont-info">
            <h4 class="fw-700 color-font mb-50">Contact Info.</h4>
            <h3 class="wow" data-splitting>{{ contentFormData.title }}</h3>
            <div class="item mb-40">
              <h5>
                <a href="mailto:mustafa.hegazi08@gmail.com">{{ contentFormData.email }}</a>
              </h5>
              <h6>
                {{ contentFormData.phone.first }}
                <br />
                {{ contentFormData.phone.second }}
              </h6>
            </div>
            <h3 class="wow" data-splitting>Visit Me.</h3>
            <div class="item">
              <h5>
                {{ contentFormData.location }}
              </h5>
            </div>
            <div class="social mt-50">
              <a href="https://www.facebook.com/mustafa.hegazi.08" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/HEGZO08" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/mustafahegazi8/" class="icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/mustafahegazi08/" class="icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contentFormData from "../../data/contact-form.json";

export default {
  props: ["theme"],
  data() {
    return {
      contentFormData,
    };
  },
};
</script>

<style scoped>
</style>
