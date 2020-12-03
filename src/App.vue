<template>
  <v-app :dark="dark">

    <!-- Nav Bar -->
    <v-app-bar app :class="{ darkmode: dark }">
      <v-btn
        text
        tile
        class="nav-button"
        v-for="item in items"
        :key="item.name"
        :to="item.path">{{ item.name}}
      </v-btn>
      
      <v-spacer></v-spacer>
      
      <!-- Theme selection -->
      <v-btn text tile @click="switchDark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
       
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view :key="$router.fullPath"></router-view>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

@Component({})
export default class App extends Vue {

  private darkTheme = false;

  private items = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ];

  get dark() : boolean {
    return this.darkTheme;
  }

  set dark(val : boolean) {
    this.darkTheme = val;
    this.$vuetify.theme.dark = val;
  }

  switchDark() : void {
    this.darkTheme = !this.darkTheme
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
