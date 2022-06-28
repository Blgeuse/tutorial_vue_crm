<script setup lang="ts">
import { useRegisterForm } from "../use/register-form";

const { email, eError, password, pError, name, nError, onSubmit } =
  useRegisterForm();
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
      <div class="input-field">
        <input
          v-model="name"
          id="name"
          type="text"
          :class="nError ? 'invalid' : 'validate'"
        />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="nError">{{ nError }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped></style>
