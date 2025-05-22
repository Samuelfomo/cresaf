<template>

  <div class="bg-blue-50 flex items-start justify-center min-h-screen p-10">

      <div class="bg-white px-5 rounded-xl shadow">
        <header class="py-6 px-4 rounded-t-lg text-center w-full max-w-xs">
          <img :src="logo" alt="Logo Cresaf App" class="max-w-40 mx-auto"/>
        </header>
        <div class="w-full h-px bg-black"></div>
        <main class="py-6 px-5 w-full max-w-xs">
          <p class="w-full text-lg font-semibold">Nous avons besoin de vos identifiants de connexion</p>
          <div class="relative py-4">
            <input
                v-model="identify"
                type="text"
                placeholder="Votre identifiant ★"
                class="w-full px-6 py-3 border rounded-xl
                 focus:outline-none focus:border-black transition duration-300
                 placeholder-black hover:placeholder-gray-400"
            />
            <p v-if="errors.identify" class="text-red-600 text-sm mt-1">{{ errors.identify }}</p>
          </div>
          <div class="relative py-4">
            <input
                v-model="password"
                type="password"
                placeholder="Your password ★"
                class="w-full px-6 py-3 border rounded-xl
                 focus:outline-none focus:border-black transition duration-300
                 placeholder-black hover:placeholder-gray-400"
            />
            <p v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password }}</p>
          </div>
          <button
              @click="handleSubmit"
              class="w-full text-purple-600 text-xl border-purple-500 font-semibold py-3 border rounded-xl
              hover:bg-purple-500 hover:text-white transition duration-300 z-50 shadow"
          >
            Suivant
          </button>

          <div class="flex flex-col w-full pt-10 justify-center items-center">
            <span class="text-lg font-light">Vous n'avez pas de compte ?</span>
            <span @click="router.push('/')" class="text-purple-500 text-lg font-light hover:underline cursor-pointer">Demander votre compte ici</span>
          </div>
        </main>
        <footer class="flex justify-center items-center px-5 pb-5 gap-2">
          <span class="font-light">© 2020 – 2025</span>
          <a href="#" class="font-light text-purple-500 text-sm cursor-pointer" @click="openImediatis">imediatis-team</a>
        </footer>
      </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

import Logo from "@/assets/images/logo.webp"

const router = useRouter()
const logo = Logo
const identify = ref('');
const password = ref('')

const errors = ref({
  identify: '',
  password: '',
});

const handleSubmit = () => {
  // Reset errors
  errors.value = {
    identify: '',
    password: '',
  };

  // Validate fields
  if (!identify.value) {
    errors.value.identify = 'Veuillez entrer votre identifiant';
  }
  if (!password.value) {
    errors.value.password = 'Veuillez entrer votre mot de passe';
  }

  // If no errors, proceed with form submission
  if (!errors.value.identify && !errors.value.password) {
    // Add form submission logic here
    const submit = password.value
    console.log('Form submitted',submit);
  }
};
const openImediatis = () => {
  window.open("https://imediatis.cm/", "_blank");
}


</script>