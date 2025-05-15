<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Image from "@public/components/contact-image.vue";
// import FaceBook from "@/assets/images/svg/social/facebook.svg"
// import Youtube from "@/assets/images/svg/social/youtube.svg"
// import Twitter from "@/assets/images/svg/social/twitter.svg"
// import Linkedin from "@/assets/images/svg/social/linkedin.svg"
import Playstore from "@/assets/images/svg/social/playstore.svg"
import Logo from "@/assets/images/logo-cref.webp"

// const logos = ref([
//   {
//     name :FaceBook,
//     title: "logo Facebook",
//     link: "https://www.facebook.com/cresaf.sa"
//   },
//   {
//     name :Youtube,
//     title: "logo Youtube",
//     link: ""
//   },
//   {
//     name :Twitter,
//     title: "logo Twitter",
//     link: ""
//   },
//   {
//     name :Linkedin,
//     title: "logo Linkedin",
//     link: "https://cm.linkedin.com/company/cr%C3%A9saf-credit-solidaire-d-afrique"
//   },
// ])

const locations = ref([
  {
    city: "Siège Social (Douala)",
    address: "Bonakouamouang, Akwa, Face Prudential Beneficial Life Insurance",
    phone: "+237 658 794 995",
    textphone: "658 794 995 / 650 591 548",
  },
  {
    city: "Douala",
    address: "Carrefour Anatole, face la station total",
    phone: null,
    textphone: "+237 *** *** ***"
  },
  {
    city: "Yaounde",
    address: "Descente Mokolo Elobi, batiment Dubaï Market",
    phone: "+237 692 313 295",
    textphone: "692 313 295 / 676 976 332"
  },
  {
    city: "Bafoussam",
    address: "Montée sens interdit, marché A, avant la direction régionale de la Total",
    phone: "+237 699 477 764",
    textphone: "699 477 764 / 691 919 624"
  }
]);

const openWhatsApp = (phone) =>{
  if (phone) {
    const phoneExemple = String(phone).replace(/\s+/g, '').replace('+', '')
    const url = `https://api.whatsapp.com/send/?phone=${phoneExemple}&image&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
  } else {
    console.error("Numéro de téléphone non disponible !");
  }
}
// const openSocial = (link) =>{
//   if (link) {
//     window.open(link, "_blank");
//   } else {
//     console.log("Réseau social non disponible !");
//   }
// }

const mockupImage = Logo;
const playStoreIcon = Playstore

const features = ref([
  {
    title: "Transactions Rapides",
    description: "Effectuez vos opérations financières en quelques clics",
    icon: "⚡"
  },
  {
    title: "Sécurisé",
    description: "Vos données sont protégées avec les dernières technologies de sécurité",
    icon: "🔒"
  },
  {
    title: "Disponible 24/7",
    description: "Accédez à vos services bancaires à tout moment",
    icon: "🕒"
  }
]);

const openPlaystore = () => {
  window.open('https://play.google.com/store/apps/details?id=net.betterplanning.mobileBanking.cresaf&hl=fr','_blank' )
}

</script>

<template>
  <div class="min-h-screen bg-blue-950">
    <Header />
    <main class="flex flex-col lg:pt-24 pt-32">
      <div class="min-h-screen flex flex-wrap lg:flex-nowrap lg:pt-8 lg:pb-10">
      <div class="w-full flex flex-col
       lg:px-10 px-5 lg:text-start text-center justify-start lg:items-start items-center">
        <h1 class="text-4xl font-accent text-white lg:pb-6">Contactez-nous</h1>
        <h5 class="text-gray-300 font-accent text-lg max-w-xl py-6 text-start">
          Vous souhaitez en savoir plus sur le CRESAF, nos réussites et les avantages d’une collaboration avec nous ?
          Envie de devenir partenaire ? Contactez-nous dès aujourd’hui !
        </h5>

        <div class="space-y-2 lg:pb-4">
          <h2 class="text-2xl font-semibold text-white">
            Laissez-nous <span class="text-primary-accent">un message</span>
          </h2>
          <div class="h-1 w-20 bg-secondary rounded"></div>
        </div>
<!--        <div class="flex gap-2 lg:py-4 py-10">-->
<!--          <div class="flex justify-center items-center rounded-full bg-secondary h-8 w-8 cursor-pointer transition-transform duration-200 hover:scale-105"-->
<!--               v-for="(logo , index) in logos" :key="index"-->
<!--                @click="openSocial(logo.link)"-->
<!--          >-->
<!--            <img :src="logo.name" :alt="logo.title" class=" object-cover">-->
<!--          </div>-->
<!--        </div>-->

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 cursor-pointer">
          <div
            v-for="location in locations"
            :key="location.city"
            class="bg-blue-900/50 py-6 pl-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/70 transition-colors"
            @click="openWhatsApp(location.phone)"
        >
          <h3 class="text-green-500 font-bold text-xl mb-4">
            {{ location.city }}
          </h3>
          <div class="space-y-4 text-gray-200 font-accent">
            <div class="flex gap-1">
              <div>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                         stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-green-500">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              </div>

                <p class="text-base text-left leading-6 font-serif pr-1">{{ location.address }}</p>
            </div>
            <div class="flex items-center gap-1">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                    stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="text-green-500">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <p class="text-sm">{{ location.textphone }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
        <div class="w-full max-w-xl lg:py-0 py-10">
          <Image />
        </div>
      </div>
        <div class="w-full py-8 bg-blue-50 px-10">
<!--        <div class="w-full py-16 bg-gradient-to-b from-blue-50 to-white">-->
          <div class="mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <!-- Texte et features -->
              <div class="space-y-8">
                <div class="space-y-4">
                  <h2 class="text-3xl lg:text-4xl font-bold text-blue-950">
                    CRESAF Mobile
                  </h2>
                  <p class="text-lg text-gray-600">
                    Découvrez une nouvelle façon de gérer vos finances. Notre application mobile vous offre une expérience bancaire simple, rapide et sécurisée.
                  </p>
                </div>

                <!-- Features -->
                <div class="grid gap-6">
                  <div
                      v-for="feature in features"
                      :key="feature.title"
                      class="flex items-start gap-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div class="text-2xl">{{ feature.icon }}</div>
                    <div>
                      <h3 class="font-semibold text-lg text-blue-950">{{ feature.title }}</h3>
                      <p class="text-gray-600">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>

                <!-- Bouton de téléchargement -->
                <div class="flex w-full justify-center lg:justify-normal items-center">
                  <div class="flex w-full justify-start items-center gap-1 border max-w-[15rem] rounded-xl bg-blue-950
                 px-4 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer hover:bg-green-700"
                       @click="openPlaystore"
                  >
                    <a
                        class="inline-block"
                    >
                      <img
                          :src="playStoreIcon"
                          alt="Télécharger sur Google Play"
                          class="h-12 hover:opacity-90 transition-opacity"
                      />
                    </a>
                    <div class="flex flex-col justify-center items-start">
                      <span class="font-roboto text-lg text-gray-300">
                        Téléchargez sur
                      </span>
                      <span class="font-bold text-white text-2xl">
                        Google Play
                      </span>
                    </div>

  <!--                  <a-->
  <!--                      @click="openPlaystore"-->
  <!--                      href="#"-->
  <!--                      target="_blank"-->
  <!--                      class="inline-block"-->
  <!--                  >-->
  <!--                    <img-->
  <!--                        :src="playStoreIcon"-->
  <!--                        alt="Télécharger sur Google Play"-->
  <!--                        class="h-10 hover:opacity-90 transition-opacity duration-500 hover:scale-105"-->
  <!--                    />-->
  <!--                  </a>-->
                  </div>
                </div>
              </div>

              <!-- Image de l'application -->
              <div class="flex justify-center lg:justify-end">
                <div class="relative">
                  <!-- Effet de brillance -->
                  <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 blur-xl rounded-full"></div>
                  <!-- Mockup de l'application -->
                  <img
                      @click="openPlaystore"
                      :src="mockupImage"
                      alt="CRESAF Mobile App"
                      class="relative w-64 rounded-3xl shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>