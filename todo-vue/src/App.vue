<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './example/components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <v-text-field label="First name"></v-text-field>
  </div>

  <!--<header>
    <img alt="Vue logo" class="logo" src="@/style/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  -->
</template>
