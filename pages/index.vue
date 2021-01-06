<template>
  <div class="page-content mx-auto py-16">
    <div
      class="card d-flex flex-column flex-sm-row align-center justify-center pa-10 pa-sm-16 rounded-lg"
    >
      <div class="social-links d-flex flex-column">
        <v-btn
          class="my-2"
          x-small
          icon
          href="https://github.com/Roel4811"
          target="_blank"
        >
          <fa :icon="['fab', 'github']" />
        </v-btn>
        <v-btn
          class="my-2"
          x-small
          icon
          href="https://www.linkedin.com/in/roeldejongamsterdam/"
          target="_blank"
        >
          <fa :icon="['fab', 'linkedin']" />
        </v-btn>
      </div>
      <div class="card-picture">
        <img src="~/assets/images/profile_logo.jpg" alt="Profile Picture" />
      </div>
      <div class="card-text text-center text-sm-left pl-sm-4 d-flex flex-column justify-space-between">
        <h1 class="font-italic font-weight-medium">
          Roel de Jong.<br />
          Developer.
        </h1>
        <div>
          <v-btn
            text
            class="pl-0 font-weight-bold font-italic text-none"
            color="#CA9B66"
            href="mailto:roeldj@hey.com"
            target="_blank"
          >
            Contact me
          </v-btn>
        </div>
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
  font-size: 1.8em;
  // font-weight: 600;
  line-height: 33px;
}
p {
  font-size: 1.5em;
  font-weight: 300;
}
.card {
  position: relative;
  background: url('~assets/images/card_bg.jpg');
  background-size: 100% 100%;
  box-shadow: -3px 9px 40px -17px black;
  will-change: transform;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 12px 60px -19px black;
  }
}
.page-content {
  max-width: 450px;
}
.card-picture {
  img {
    border-radius: 50%;
    max-width: 100px;
    border: 1px solid #a0a89f;
  }
}
.card-text {
  span {
    font-size: 1.3em;
  }
}
img {
  max-width: 250px;
}
.social-links {
  position: absolute;
  left: 10px;
  bottom: 10px;
  align-self: flex-end;
  svg {
    font-size: 2em;
  }
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
