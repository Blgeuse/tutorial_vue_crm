<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

const route = useRoute();
const layout = computed(() => {
  return route.meta.layout === "empty" ? EmptyLayout : MainLayout;
});
</script>

<template>
  <component :is="layout"> </component>
</template>

<style>
@import "materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
