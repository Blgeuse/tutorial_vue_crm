<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLoginForm } from "../use/login-form";

const router = useRouter();
const { email, eError, eBlur, pBlur, password, pError } = useLoginForm();

function submitHandler() {
  router.push("/");
}
</script>

<template>
  <form @submit.prevent="submitHandler" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          v-model="email"
          @blur="eBlur"
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
          @blur="pBlur"
          id="password"
          type="password"
          class="validate"
          :class="{ invalid: pError }"
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
