<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/app/Navbar.vue";
import Sidebar from "../components/app/Sidebar.vue";

const isOpen = ref(true);
</script>

<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar :isOpen="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
