<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

defineEmits(["click"]);
const router = useRouter();

const date = ref(new Date().toLocaleTimeString());
const dropdown = ref(null);
let interval: number = 0;

onMounted(() => {
  interval = setInterval(
    () => (date.value = new Date().toLocaleTimeString()),
    1000
  );
  M.Dropdown.init(dropdown.value, { constrainWidth: false });
});
onBeforeUnmount(() => {
  clearInterval(interval);
});
function logout(): void {
  router.push("/login?message=logout");
}
</script>

<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a @click.prevent="$emit('click')" href="#">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a @click.prevent="logout" href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
