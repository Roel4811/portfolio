<template>
  <div class="page-content mx-auto py-16">
    <div class="banner d-flex justify-space-between pa-12">
      <div class="banner-text d-flex flex-column justify-space-between">
        <h1>
          Hi! I'm Roel,<br />
          a developer.
        </h1>
        <div>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            href="mailto:roeldj@hey.com"
            target="_blank"
          >
           Contact me
          </v-btn>

          <div class="soclial-links">
            <fa class="mx-2" :icon="['fab', 'github']" />
            <fa class="mx-2" :icon="['fab', 'linkedin']" />
          </div>
        </div>
      </div>
      <div class="banner-picture">
        <img src="~/assets/images/profile_logo.jpg" alt="Profile Picture" />
      </div>
    </div>
    <!-- <hr class="my-5"> -->
    <div class="content my-5">
      <!-- <fa :icon="['fab','github']" /> -->

      <!-- <p>
        Working on interesting projects is something I will never get tired of!
        Find my previous projects on this page and don’t hesitate to reach out!
      </p> -->
      <!-- <div class="technologies">
        <h2>Programming Languages</h2>
        <ul>
          <li>Ruby</li>
          <li>Javascript</li>
          <li>Elixir</li>
          <li>Rust</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
h1 {
  font-size: 3em;
  font-weight: 600;
  line-height: 58px;
}
p {
  font-size: 1.5em;
  font-weight: 300;
}
.banner {
  background: #fffdf7;
  box-shadow: -3px 11px 59px -7px black;
}
.page-content {
  max-width: 800px;
}
.banner-text {
  max-width: 50%;
  a {
    font-size: 1.4em;
    color: #514eff;
    font-weight: 500;
  }
}
img {
  max-width: 250px;
}
.technologies {
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    font-size: 1.5em;
    font-weight: 300;
  }
}
</style>
