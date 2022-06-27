<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
});
const links: { title: string; url: string }[] = [
  { title: "Счет", url: "/" },
  { title: "История", url: "/history" },
  { title: "Планирование", url: "/planning" },
  { title: "Новая запись", url: "/record" },
  { title: "Категории", url: "/categories" },
];
</script>

<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <router-link
      v-for="link of links"
      :key="link.url"
      :to="link.url"
      custom
      v-slot="{ href, isActive }"
    >
      <li :class="{ active: isActive }">
        <a :href="href" class="waves-effect waves-orange pointer">
          {{ link.title }}
        </a>
      </li>
    </router-link>
  </ul>
</template>

<style scoped></style>
