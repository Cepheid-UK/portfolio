<template>
  <v-app>

    <!-- Nav Bar -->
    <v-app-bar app>
      <v-btn
        class="nav-button"
        v-for="item in items"
        :key="item.name"
        :to="item.path">{{ item.name}}
      </v-btn>
      
      <v-spacer></v-spacer>
      
      <!-- Theme selection -->
      <v-btn text tile v-on="switchTheme">
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

  switchTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }
}
</script>
