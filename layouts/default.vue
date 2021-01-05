<template>
  <v-app dark>
    <!-- <v-app-bar app flat class="app-navbar white">
      <NuxtLink to="/" class="home-link">
        <v-toolbar-title class="portfolio-title">roeldejong.nl</v-toolbar-title>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/" nuxt class="text-none font-weight-bold"
          >Home</v-btn
        >
        <v-btn text to="/" nuxt class="text-none font-weight-bold"
          >About</v-btn
        >
      </v-toolbar-items>
    </v-app-bar> -->
    <v-main class="main-content">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
p {
  font-family: 'Barlow', Arial, Helvetica, sans-serif;
}
.main-content {
  background: url('~assets/images/background.jpg');
  background-size: 100% 100%;
}
.home-link {
  text-decoration: none;
  color: black;
  &:link,
  &:activem &:visited,
  &:hover {
    text-decoration: none;
    color: black;
  }
}
</style>
