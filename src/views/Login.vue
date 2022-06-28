<script setup lang="ts">
import { useLoginForm } from "../use/login-form";
import { onMounted } from "vue";
import { message } from "../utils/message.plugin";
import { useRoute } from "vue-router";
import messages from "../utils/message";

const route = useRoute();

onMounted(() => {
  const status: string | null = messages[route.query.message];
  if (status) {
    message(status);
  }
});

const { email, eError, password, pError, onSubmit } = useLoginForm();
</script>

<template>
  <form @submit.prevent="onSubmit" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          v-model="email"
          id="email"
          type="text"
          :class="eError ? 'invalid' : 'validate'"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="eError">{{ eError }}</small>
      </div>
      <div class="input-field">
        <input
          v-model="password"
          id="password"
          type="password"
          autocomplete="on"
          :class="pError ? 'invalid' : 'validate'"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="pError">{{ pError }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped></style>
