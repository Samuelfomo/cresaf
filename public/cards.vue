<!--&lt;!&ndash;Footer.vue avec intégration d'iframes Google Maps&ndash;&gt;-->
<!--<template>-->
<!--  <footer class="bg-primary pt-10 lg:pt-12">-->
<!--    <div class="container mx-auto px-4 w-full">-->
<!--      &lt;!&ndash; Call to Action Section &ndash;&gt;-->
<!--      <div class="flex flex-col items-center text-center lg:mb-36 mb-10">-->
<!--        <h2 class="text-white font-bold text-2xl lg::text-3xl mb-4">-->
<!--          Construisons ensemble votre avenir financier-->
<!--        </h2>-->
<!--        <p class="text-gray-200 font-roboto text-base lg:text-lg mb-6">-->
<!--          Cresaf s'engage à vos côtés pour concrétiser vos projets grâce à des solutions de financement adaptées-->
<!--          et un accompagnement personnalisé. Que vous soyez commerçant, entrepreneur ou agriculteur, nous sommes-->
<!--          là pour soutenir votre réussite.-->
<!--        </p>-->
<!--        <button type="button"-->
<!--                class="btn btn-primary-accent mt-0 mb-0"-->
<!--                @click="contact"-->
<!--        >-->
<!--          Ouvrez votre compte aujourd'hui-->
<!--        </button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Locations Grid &ndash;&gt;-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">-->
<!--        <div v-for="(location, index) in locations" :key="index" class="text-white md:text-start text-center">-->
<!--          &lt;!&ndash; Carte Google Maps intégrée &ndash;&gt;-->
<!--          <div class="map-container rounded-lg overflow-hidden shadow-lg mb-3 cursor-pointer"-->
<!--               @click="openGoogleMapsDirections(location)">-->
<!--            <iframe-->
<!--                :src="location.mapEmbedUrl"-->
<!--                width="100%"-->
<!--                height="180"-->
<!--                style="border:0;"-->
<!--                allowfullscreen=""-->
<!--                loading="lazy"-->
<!--                referrerpolicy="no-referrer-when-downgrade"-->
<!--                title="Google Maps"-->
<!--                class="w-full"-->
<!--            ></iframe>-->
<!--          </div>-->

<!--          <h3 class="font-bold text-sm py-1">{{ location.title }}</h3>-->
<!--          <p class="text-gray-300 italic font-semibold text-xs">-->
<!--            {{ location.address }}-->
<!--          </p>-->
<!--          <div class="flex md:justify-normal justify-center items-center space-x-2 italic font-bold">-->
<!--            <img :src="phone" alt="phone icon" class="w-4 h-4" />-->
<!--            <span class="cursor-pointer text-sm font-bold text-white" @click="openWhatsApp(location.phone)">{{ location.textPhone }}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Footer Bottom &ndash;&gt;-->
<!--      <div class="border-t border-white pt-6 pb-2">-->
<!--        <div class="lg:flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">-->
<!--          <div class="w-full lg:flex flex-wrap lg:justify-start justify-start gap-x-4 text-sm text-gray-300 lg:space-x-0 space-x-4 leading-8">-->
<!--            <span>Copyright © 2023 - 2025</span>-->
<!--            <span class="hover:text-green-600 transition-colors cursor-pointer font-bold" @click="router.push('/')">-->
<!--              Crédit Solidaire D'Afrique S.A-->
<!--            </span>-->
<!--            <span class="hidden md:inline">|</span>-->
<!--            <span>Designed by</span>-->
<!--            <span class="hover:text-green-600 transition-colors cursor-pointer font-bold" @click="openImediatis">-->
<!--              IMEDIATIS-->
<!--            </span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="fixed right-2 top-[95%] transform -translate-y-1/2 space-y-4 z-50">-->
<!--      <div class="top-full right-0 mt-auto h-full flex justify-center md:justify-end z-50 pointer-events-none lg:pb-5 lg:pr-0 pr-2">-->
<!--        <a href="#" class="rounded-xl h-12 w-12 flex items-center justify-center border-2 border-purple-600 bg-white-->
<!--              transition-transform hover:scale-110 pointer-events-auto"-->
<!--        >-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14f05d"-->
<!--               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--            <path d="M12 3l0 16" />-->
<!--            <path d="M16 7l-4 -4" />-->
<!--            <path d="M8 7l4 -4" />-->
<!--          </svg>-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </footer>-->
<!--</template>-->

<!--<script setup>-->
<!--import { useRouter } from "vue-router";-->
<!--import Phone from "@/assets/images/svg/phone.svg"-->

<!--const router = useRouter()-->
<!--const phone = Phone-->

<!--// Données des emplacements avec les URLs d'intégration Google Maps-->
<!--const locations = [-->
<!--  {-->
<!--    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1048.3107933470685!2d9.70440172672647!3d4.05273483122112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136521bddd85%3A0x4dc0381643068eab!2sCRESAF%20-%20Cr%C3%A9dit%20Solidaire%20d%27Afrique!5e0!3m2!1sfr!2scm!4v1747233173429!5m2!1sfr!2scm",-->
<!--    title: 'Siège social (Douala)',-->
<!--    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',-->
<!--    phone: '+237 658 794 995',-->
<!--    textPhone: '+237 658 794 995',-->
<!--    gpsCoords: '4.052734831221122,9.70440172672647'-->
<!--  },-->
<!--  {-->
<!--    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8225923979527!2d9.703365511685044!3d4.056295596917937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136521bddd85%3A0x4dc0381643068eab!2sCRESAF%20-%20Cr%C3%A9dit%20Solidaire%20d&#39;Afrique!5e0!3m2!1sfr!2scm!4v1715971302953!5m2!1sfr!2scm",-->
<!--    title: 'Agence d\'Akwa',-->
<!--    address: 'Bonakouamouang, Akwa, Face Prudential Beneficial Life',-->
<!--    phone: '+237 658 794 995',-->
<!--    textPhone: '+237 658 794 995',-->
<!--    gpsCoords: '4.056295596917937,9.703365511685044'-->
<!--  },-->
<!--  {-->
<!--    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.88246563407!2d9.700099511684809!3d4.041553896920996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112337c5fc7f7%3A0x89a8836a257e4ab2!2sCarrefour%20Anatole%2C%20Douala!5e0!3m2!1sfr!2scm!4v1715971461095!5m2!1sfr!2scm",-->
<!--    title: 'Agence Anatole',-->
<!--    address: 'Carrefour Anatole, face la station total',-->
<!--    phone: null,-->
<!--    textPhone: '+237 *** *** ***',-->
<!--    gpsCoords: '4.041553896920996,9.700099511684809'-->
<!--  },-->
<!--  {-->
<!--    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8289708097245!2d11.511476911682971!3d3.862953097127033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfd9dba9c739%3A0xeb9f84583978b64c!2sMarch%C3%A9%20Mokolo!5e0!3m2!1sfr!2scm!4v1715971524686!5m2!1sfr!2scm",-->
<!--    title: 'Agence de Yaoundé',-->
<!--    address: 'Descente Mokolo Elobi, batiment Dubaï Market',-->
<!--    phone: '+237 692 313 295',-->
<!--    textPhone: '+237 692 313 295',-->
<!--    gpsCoords: '3.862953097127033,11.511476911682971'-->
<!--  },-->
<!--  {-->
<!--    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4129265629776!2d10.41624259171053!3d5.77758409582046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f131f2ac9da29%3A0xe98a1d38f7321015!2sTotal%20Energies%20March%C3%A9%20A!5e0!3m2!1sfr!2scm!4v1715971588638!5m2!1sfr!2scm",-->
<!--    title: 'Agence de Bafoussam',-->
<!--    address: 'Montée sens interdit, marché A, avant la direction régionale de la Total',-->
<!--    phone: '+237 699 477 764',-->
<!--    textPhone: '+237 699 477 764',-->
<!--    gpsCoords: '5.77758409582046,10.41624259171053'-->
<!--  }-->
<!--]-->

<!--// Ouvre Google Maps avec l'itinéraire vers l'emplacement choisi-->
<!--const openGoogleMapsDirections = (location) => {-->
<!--  if (location.gpsCoords) {-->
<!--    // Format: https://www.google.com/maps/dir/?api=1&destination=LAT,LNG-->
<!--    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.gpsCoords}`;-->
<!--    window.open(mapsUrl, '_blank');-->
<!--  }-->
<!--}-->

<!--const openImediatis = () => {-->
<!--  window.open("https://imediatis.cm/", "_blank");-->
<!--}-->

<!--const contact = () => {-->
<!--  window.open(`https://api.whatsapp.com/send/?phone=237233421788&text&type=phone_number&app_absent=0`, "_blank");-->
<!--}-->

<!--const openWhatsApp = (phone) => {-->
<!--  if (phone) {-->
<!--    const phoneExemple = String(phone).replace(/\s+/g, '').replace('+', '')-->
<!--    const url = `https://api.whatsapp.com/send/?phone=${phoneExemple}&image&type=phone_number&app_absent=0`;-->
<!--    window.open(url, "_blank");-->
<!--  } else {-->
<!--    console.error("Numéro de téléphone non disponible !");-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.map-container {-->
<!--  transition: transform 0.3s ease;-->
<!--}-->

<!--.map-container:hover {-->
<!--  transform: translateY(-5px);-->
<!--  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div class="max-w-4xl mx-auto my-6 p-4 bg-white rounded-2xl shadow-xl">-->
<!--    <h2 class="text-xl font-bold mb-4 text-center">Notre Siège à Douala</h2>-->
<!--    <div class="w-full h-[450px]">-->
<!--      <iframe-->
<!--          class="w-full h-full rounded-xl"-->
<!--          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1048.3107933470685!2d9.70440172672647!3d4.05273483122112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136521bddd85%3A0x4dc0381643068eab!2sCRESAF%20-%20Cr%C3%A9dit%20Solidaire%20d&#39;Afrique!5e0!3m2!1sfr!2scm!4v1747233173429!5m2!1sfr!2scm"-->
<!--          style="border:0;"-->
<!--          allowfullscreen=""-->
<!--          loading="lazy"-->
<!--          referrerpolicy="no-referrer-when-downgrade"-->
<!--      ></iframe>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--// Pas besoin de JS ici, tout est statique-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Optionnel : styles CSS supplémentaires */-->
<!--</style>-->


<template>
  <div class="bg-purple-50 flex flex-col h-full py-12">
    <h1 class="text-primary lg:text-4xl text-3xl montserrat montserrat-700 text-center">
      Nos produits et services
    </h1>
    <p class="flex w-full justify-center items-center montserrat text-lg mt-2 mb-8 text-gray-700">
      Des solutions adaptées pour particuliers, entreprises et institutions
    </p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-8 max-w-7xl px-4">
      <!-- Card 1: PARTICULIERS -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <!-- Header with icon -->
        <div class="bg-purple-800 p-6 flex justify-center items-center">
          <div class="text-white flex flex-col items-center">
            <div class="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold tracking-wider">PARTICULIERS</h2>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-grow">
          <p class="text-gray-800 leading-relaxed">
            Découvrez nos solutions bancaires pensées pour vous accompagner au quotidien, sécuriser votre épargne et financer vos projets personnels en toute sérénité.
          </p>
        </div>

        <!-- Button -->
        <div class="px-6 pb-6">
          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">
            <span>Accéder aux informations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Card 2: GE/PMI/PME -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <!-- Header with icon -->
        <div class="bg-orange-400 p-6 flex justify-center items-center">
          <div class="text-white flex flex-col items-center">
            <div class="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold tracking-wider">GE/PMI/PME</h2>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-grow">
          <p class="text-gray-800 leading-relaxed">
            Bénéficiez de services bancaires conçus pour les entreprises afin d'optimiser vos opérations financières et soutenir la croissance de votre activité.
          </p>
        </div>

        <!-- Button -->
        <div class="px-6 pb-6">
          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">
            <span>Accéder aux informations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Card 3: INSTITUTIONNELS -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <!-- Header with icon -->
        <div class="bg-purple-500 p-6 flex justify-center items-center">
          <div class="text-white flex flex-col items-center">
            <div class="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M6 11h12M6 15h12M6 19h12"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold tracking-wider">INSTITUTIONNELS</h2>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-grow">
          <p class="text-gray-800 leading-relaxed">
            Optimisez votre impact et votre gestion financière avec nos solutions bancaires spécialisées, adaptées aux besoins uniques des institutions publiques et privées.
          </p>
        </div>

        <!-- Button -->
        <div class="px-6 pb-6">
          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">
            <span>Accéder aux informations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Second section for your products -->
    <h2 class="text-primary lg:text-3xl text-2xl montserrat montserrat-600 text-center mt-16 mb-6">
      Nos produits bancaires pour particuliers
    </h2>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-6 max-w-7xl px-4">
      <div v-for="(product, index) in products" :key="index"
           class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
        <div class="flex justify-center items-center pt-6 pb-4">
          <div class="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
            <component :is="product.icon" class="h-8 w-8 text-purple-700" />
          </div>
        </div>

        <div class="px-6 pb-6 flex-grow">
          <h3 class="font-semibold text-xl text-center mb-3 text-gray-800">{{ product.titre }}</h3>
          <p class="text-gray-600 text-center">{{ product.description }}</p>
        </div>

        <div class="px-6 pb-6">
          <button @click="openPdf(product.pdfContent)"
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">
            <span>{{ product.suite }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue';

// Import your icons or use Vue components
const CreditCardIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  })
]);

const MoneyIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  })
]);

const CashIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
  })
]);

const CalendarIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  })
]);

const SavingsIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 8v13m0-13V6a4 4 0 00-4-4H6m12 0h-2a4 4 0 00-4 4v1m8 10v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m2-4h.01M12 12h.01M18 12h.01M6 16h.01M12 16h.01M18 16h.01'
  })
]);

const VisaCardIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  class: 'h-full w-full',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  })
]);

// Products data with improved descriptions
const products = ref([
  {
    icon: CreditCardIcon,
    titre: 'Compte Chèque',
    description: 'Un compte courant flexible pour gérer vos opérations quotidiennes avec simplicité. Idéal pour vos retraits, paiements et virements.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
  {
    icon: MoneyIcon,
    titre: 'Bon de caisse',
    description: 'Solution d\'épargne à court terme avec un rendement fixe et garanti. Faites fructifier votre argent en toute sécurité.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
  {
    icon: CashIcon,
    titre: 'Collecte journalière',
    description: 'Service destiné aux travailleurs indépendants pour sécuriser vos recettes quotidiennes sans avoir à vous déplacer en agence.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
  {
    icon: CalendarIcon,
    titre: 'Dépôt à terme',
    description: 'Placement à échéance fixe offrant un taux d\'intérêt garanti. Plus la durée est longue, plus le rendement est avantageux.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
  {
    icon: SavingsIcon,
    titre: 'Compte d\'épargne',
    description: 'Solution d\'épargne flexible et sécurisée avec disponibilité permanente des fonds et rémunération progressive selon votre encours.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
  {
    icon: VisaCardIcon,
    titre: 'Carte Visa',
    description: 'Moyen de paiement international accepté chez des millions de commerçants. Retirez de l\'argent et effectuez vos achats partout dans le monde.',
    suite: 'Accéder aux informations',
    pdfContent: null,
  },
]);

// Function to open PDF content
const openPdf = (pdfContent) => {
  if (pdfContent) {
    // Logic to open PDF
    console.log('Opening PDF:', pdfContent);
  } else {
    console.log('PDF content not available yet');
    // You could implement a notification or modal here
  }
};
</script>

<style scoped>
/* Add any custom styles here */
.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.montserrat-700 {
  font-weight: 700;
}

.montserrat-600 {
  font-weight: 600;
}

.text-primary {
  color: #4338ca; /* Indigo-700, adjust to match your brand color */
}
</style>