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

<template>
  <div class="max-w-4xl mx-auto my-6 p-4 bg-white rounded-2xl shadow-xl">
    <h2 class="text-xl font-bold mb-4 text-center">Notre Siège à Douala</h2>
    <div class="w-full h-[450px]">
      <iframe
          class="w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1048.3107933470685!2d9.70440172672647!3d4.05273483122112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136521bddd85%3A0x4dc0381643068eab!2sCRESAF%20-%20Cr%C3%A9dit%20Solidaire%20d&#39;Afrique!5e0!3m2!1sfr!2scm!4v1747233173429!5m2!1sfr!2scm"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
// Pas besoin de JS ici, tout est statique
</script>

<style scoped>
/* Optionnel : styles CSS supplémentaires */
</style>


<!--<template>-->
<!--  <div class="bg-purple-50 flex flex-col h-full py-12">-->
<!--    <h1 class="text-primary lg:text-4xl text-3xl montserrat montserrat-700 text-center">-->
<!--      Nos produits et services-->
<!--    </h1>-->
<!--    <p class="flex w-full justify-center items-center montserrat text-lg mt-2 mb-8 text-gray-700">-->
<!--      Des solutions adaptées pour particuliers, entreprises et institutions-->
<!--    </p>-->

<!--    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-8 max-w-7xl px-4">-->
<!--      &lt;!&ndash; Card 1: PARTICULIERS &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">-->
<!--        &lt;!&ndash; Header with icon &ndash;&gt;-->
<!--        <div class="bg-purple-800 p-6 flex justify-center items-center">-->
<!--          <div class="text-white flex flex-col items-center">-->
<!--            <div class="mb-3">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">-->
<!--                <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <h2 class="text-xl font-bold tracking-wider">PARTICULIERS</h2>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Content &ndash;&gt;-->
<!--        <div class="p-6 flex-grow">-->
<!--          <p class="text-gray-800 leading-relaxed">-->
<!--            Découvrez nos solutions bancaires pensées pour vous accompagner au quotidien, sécuriser votre épargne et financer vos projets personnels en toute sérénité.-->
<!--          </p>-->
<!--        </div>-->

<!--        &lt;!&ndash; Button &ndash;&gt;-->
<!--        <div class="px-6 pb-6">-->
<!--          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">-->
<!--            <span>Accéder aux informations</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--              <path d="M5 12h14M12 5l7 7-7 7"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Card 2: GE/PMI/PME &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">-->
<!--        &lt;!&ndash; Header with icon &ndash;&gt;-->
<!--        <div class="bg-orange-400 p-6 flex justify-center items-center">-->
<!--          <div class="text-white flex flex-col items-center">-->
<!--            <div class="mb-3">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">-->
<!--                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <h2 class="text-xl font-bold tracking-wider">GE/PMI/PME</h2>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Content &ndash;&gt;-->
<!--        <div class="p-6 flex-grow">-->
<!--          <p class="text-gray-800 leading-relaxed">-->
<!--            Bénéficiez de services bancaires conçus pour les entreprises afin d'optimiser vos opérations financières et soutenir la croissance de votre activité.-->
<!--          </p>-->
<!--        </div>-->

<!--        &lt;!&ndash; Button &ndash;&gt;-->
<!--        <div class="px-6 pb-6">-->
<!--          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">-->
<!--            <span>Accéder aux informations</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--              <path d="M5 12h14M12 5l7 7-7 7"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Card 3: INSTITUTIONNELS &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">-->
<!--        &lt;!&ndash; Header with icon &ndash;&gt;-->
<!--        <div class="bg-purple-500 p-6 flex justify-center items-center">-->
<!--          <div class="text-white flex flex-col items-center">-->
<!--            <div class="mb-3">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">-->
<!--                <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M6 11h12M6 15h12M6 19h12"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <h2 class="text-xl font-bold tracking-wider">INSTITUTIONNELS</h2>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Content &ndash;&gt;-->
<!--        <div class="p-6 flex-grow">-->
<!--          <p class="text-gray-800 leading-relaxed">-->
<!--            Optimisez votre impact et votre gestion financière avec nos solutions bancaires spécialisées, adaptées aux besoins uniques des institutions publiques et privées.-->
<!--          </p>-->
<!--        </div>-->

<!--        &lt;!&ndash; Button &ndash;&gt;-->
<!--        <div class="px-6 pb-6">-->
<!--          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">-->
<!--            <span>Accéder aux informations</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--              <path d="M5 12h14M12 5l7 7-7 7"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Second section for your products &ndash;&gt;-->
<!--    <h2 class="text-primary lg:text-3xl text-2xl montserrat montserrat-600 text-center mt-16 mb-6">-->
<!--      Nos produits bancaires pour particuliers-->
<!--    </h2>-->

<!--    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-6 max-w-7xl px-4">-->
<!--      <div v-for="(product, index) in products" :key="index"-->
<!--           class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">-->
<!--        <div class="flex justify-center items-center pt-6 pb-4">-->
<!--          <div class="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">-->
<!--            <component :is="product.icon" class="h-8 w-8 text-purple-700" />-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="px-6 pb-6 flex-grow">-->
<!--          <h3 class="font-semibold text-xl text-center mb-3 text-gray-800">{{ product.titre }}</h3>-->
<!--          <p class="text-gray-600 text-center">{{ product.description }}</p>-->
<!--        </div>-->

<!--        <div class="px-6 pb-6">-->
<!--          <button @click="openPdf(product.pdfContent)"-->
<!--                  class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300">-->
<!--            <span>{{ product.suite }}</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--              <path d="M5 12h14M12 5l7 7-7 7"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, h } from 'vue';-->

<!--// Import your icons or use Vue components-->
<!--const CreditCardIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'-->
<!--  })-->
<!--]);-->

<!--const MoneyIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'-->
<!--  })-->
<!--]);-->

<!--const CashIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'-->
<!--  })-->
<!--]);-->

<!--const CalendarIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'-->
<!--  })-->
<!--]);-->

<!--const SavingsIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M12 8v13m0-13V6a4 4 0 00-4-4H6m12 0h-2a4 4 0 00-4 4v1m8 10v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m2-4h.01M12 12h.01M18 12h.01M6 16h.01M12 16h.01M18 16h.01'-->
<!--  })-->
<!--]);-->

<!--const VisaCardIcon = () => h('svg', {-->
<!--  xmlns: 'http://www.w3.org/2000/svg',-->
<!--  class: 'h-full w-full',-->
<!--  fill: 'none',-->
<!--  viewBox: '0 0 24 24',-->
<!--  stroke: 'currentColor'-->
<!--}, [-->
<!--  h('path', {-->
<!--    'stroke-linecap': 'round',-->
<!--    'stroke-linejoin': 'round',-->
<!--    'stroke-width': '2',-->
<!--    d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'-->
<!--  })-->
<!--]);-->

<!--// Products data with improved descriptions-->
<!--const products = ref([-->
<!--  {-->
<!--    icon: CreditCardIcon,-->
<!--    titre: 'Compte Chèque',-->
<!--    description: 'Un compte courant flexible pour gérer vos opérations quotidiennes avec simplicité. Idéal pour vos retraits, paiements et virements.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--  {-->
<!--    icon: MoneyIcon,-->
<!--    titre: 'Bon de caisse',-->
<!--    description: 'Solution d\'épargne à court terme avec un rendement fixe et garanti. Faites fructifier votre argent en toute sécurité.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--  {-->
<!--    icon: CashIcon,-->
<!--    titre: 'Collecte journalière',-->
<!--    description: 'Service destiné aux travailleurs indépendants pour sécuriser vos recettes quotidiennes sans avoir à vous déplacer en agence.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--  {-->
<!--    icon: CalendarIcon,-->
<!--    titre: 'Dépôt à terme',-->
<!--    description: 'Placement à échéance fixe offrant un taux d\'intérêt garanti. Plus la durée est longue, plus le rendement est avantageux.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--  {-->
<!--    icon: SavingsIcon,-->
<!--    titre: 'Compte d\'épargne',-->
<!--    description: 'Solution d\'épargne flexible et sécurisée avec disponibilité permanente des fonds et rémunération progressive selon votre encours.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--  {-->
<!--    icon: VisaCardIcon,-->
<!--    titre: 'Carte Visa',-->
<!--    description: 'Moyen de paiement international accepté chez des millions de commerçants. Retirez de l\'argent et effectuez vos achats partout dans le monde.',-->
<!--    suite: 'Accéder aux informations',-->
<!--    pdfContent: null,-->
<!--  },-->
<!--]);-->

<!--// Function to open PDF content-->
<!--const openPdf = (pdfContent) => {-->
<!--  if (pdfContent) {-->
<!--    // Logic to open PDF-->
<!--    console.log('Opening PDF:', pdfContent);-->
<!--  } else {-->
<!--    console.log('PDF content not available yet');-->
<!--    // You could implement a notification or modal here-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Add any custom styles here */-->
<!--.montserrat {-->
<!--  font-family: 'Montserrat', sans-serif;-->
<!--}-->

<!--.montserrat-700 {-->
<!--  font-weight: 700;-->
<!--}-->

<!--.montserrat-600 {-->
<!--  font-weight: 600;-->
<!--}-->

<!--.text-primary {-->
<!--  color: #4338ca; /* Indigo-700, adjust to match your brand color */-->
<!--}-->
<!--</style>-->



<!--<template>-->
<!--  <header class="fixed bg-white px-5 py-2 lg:pb-5 lg:px-14 flex justify-between items-center w-full flex-row border-b z-50">-->
<!--    <div class="absolute text-xl font-bold text-blue-600 cursor-pointer h-[4rem] w-[4rem] z-50" @click="router.push('/')">-->
<!--      <img :src="logo" alt="Logo" class="object-scale-down">-->
<!--    </div>-->
<!--    <div></div>-->

<!--    &lt;!&ndash; Bouton pour afficher le menu mobile &ndash;&gt;-->
<!--    <button class="lg:hidden text-gray-700" @click="isDrawerOpen = !isDrawerOpen">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"-->
<!--           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--        <path d="M3 12h18M3 6h18M3 18h18"></path>-->
<!--      </svg>-->
<!--    </button>-->

<!--    <div class="hidden lg:flex justify-between w-full max-w-xl">-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownAboutUs" @mouseleave="closeDropdown1">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'values' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Qui sommes-nous ?-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-300 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen1" class="absolute right-0 mt-12 min-w-72 bg-white rounded-lg shadow-lg p-5 border z-50"-->
<!--           @mouseenter="toggleDropdownAboutUs"-->
<!--           @mouseleave="closeDropdown1"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600"   :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <h1 class="text-2xl">🤍</h1>-->
<!--            <router-link to="/values" class="flex flex-col font-semibold text-lg px-5 pb-2"-->
<!--                         @click="closeAndScroll1"-->
<!--            >-->
<!--              <h2 class="group relative">Nos valeurs-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600"  :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <img :src="briefcase" alt="briefcase" class="h-5 w-5">-->

<!--            <router-link to="values" class="flex flex-col font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll2"-->
<!--            >-->
<!--              <h2 class="relative group">Nos atouts-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Culture de la performance </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <img :src="graphUp" alt="graphUp" class="h-5 w-5">-->
<!--            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll3"-->
<!--            >-->
<!--              <h2 class="group relative">Notre vision-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Miser sur l'avenir </span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600" :class="[$route.name === '#' ? activeClass : inactiveClass]">-->
<!--            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                  class="text-gray-400">-->
<!--              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--              <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--            </svg>-->
<!--            <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         @click="closeAndScroll4"-->
<!--            >-->
<!--             <h2 class="relative group">Notre mission-->
<!--               <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--             </h2>-->
<!--              <span class="text-xs text-gray-500">Renforcer la solidarité</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover=toggleDropdownProducts @mouseleave="closeDropdown2">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'products' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Nos produits-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open2" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close2" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen2" class="absolute right-0 mt-12 min-w-72 bg-white rounded-md shadow-lg border p-5 z-50"-->
<!--           @mouseenter="toggleDropdownProducts"-->
<!--           @mouseleave="closeDropdown2"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="personCircle" alt="personCircle" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col font-semibold text-lg px-5 pb-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts1"-->
<!--            >-->
<!--              <h2 class="group relative">Compte chèque-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="wallet2" alt="wallet2" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts2"-->
<!--            >-->
<!--              <h2 class="relative group">Bons de caisse-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Bon plan pour votre épargne</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="database" alt="database-up" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts3"-->
<!--            >-->
<!--              <h2 class="group relative">Dépôt à terme-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Fructifier votre argent</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="collection" alt="collection" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts4"-->
<!--            >-->
<!--              <h2 class="relative group">Compte d'épargne-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Livret & Association</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="piggy" alt="piggy" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts5"-->
<!--            >-->
<!--              <h2 class="group relative">Collecte journalière-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Nous suivre au quotidien</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="personCard" alt="personCard" class="h-5 w-5">-->
<!--            <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollProducts6"-->
<!--            >-->
<!--              <h2 class="relative group">Carte VISA-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Vous ouvrir au monde</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="text-sm text-gray-700 flex relative">-->
<!--      <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownSolutions" @mouseleave="closeDropdown3">-->
<!--        <h2 class="relative hover:text-green-600 lg:text-lg text-xs flex group"-->
<!--            :class="[$route.name === 'solutions' ? activeClass : inactiveClass]"-->
<!--        >-->
<!--          Nos solutions-->
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="currentColor" stroke-width="1" stroke-linecap="round"-->
<!--                stroke-linejoin="round">-->
<!--            <path v-if="open3" d="M9 9l6 8l7 -8" />-->
<!--            <path v-if="close3" d="M9 18l6 -8l7 8" />-->
<!--          </svg>-->
<!--          <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--        </h2>-->
<!--      </div>-->

<!--      &lt;!&ndash; Menu déroulant &ndash;&gt;-->
<!--      <div v-if="isDropdownOpen3" class="absolute right-0 mt-12 min-w-[385px] bg-white rounded-md shadow-lg border p-5 z-50"-->
<!--           @mouseenter="toggleDropdownSolutions"-->
<!--           @mouseleave="closeDropdown3"-->
<!--      >-->
<!--        <div class="py-1">-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="smile" alt="smile emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions1"-->
<!--            >-->
<!--              <h1 class="relative group">Financement de projets-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h1>-->
<!--              <span class="text-xs text-gray-500">Sur mésure pour vos projets</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="heart" alt="heart emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions2"-->
<!--            >-->
<!--              <h2 class="group relative">Financement de la trésorerie-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Financement des besoins de trésorerie ponctuels</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--          <div class="flex items-center hover:text-green-600">-->
<!--            <img :src="sunglasses" alt="sunglasses emoji" class="h-5 w-5">-->
<!--            <router-link to="solutions" class="flex flex-col justify-start font-medium text-lg px-5 py-2"-->
<!--                         :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                         @click="closeAndScrollSolutions3"-->
<!--            >-->
<!--              <h2 class="relative group">Financement Import/Export-->
<!--                <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-950 transition-all duration-500 group-hover:w-full"></span>-->
<!--              </h2>-->
<!--              <span class="text-xs text-gray-500">Financer votre développement international</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    </div>-->
<!--    <div class=" hidden lg:flex justify-between gap-x-2">-->
<!--      <button type="button" class="flex justify-center items-center text-lg  px-3 font-semibold border rounded-lg hover:border-blue-950"-->
<!--              :class="[$route.name === 'contact' ? activeContact : 'bg-gray-100']"-->
<!--              @click="router.push('/contact')">-->
<!--        Contact-->
<!--        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5-->
<!--           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />-->
<!--        </svg>-->
<!--      </button>-->
<!--      <button type="button"-->
<!--              class="text-lg bg-blue-950 p-2 text-white font-semibold border border-white rounded-lg-->
<!--               hover:text-green-600 hover:border-green-500"-->
<!--              @click="contact"-->
<!--      >-->
<!--        Ouvrir un compte-->
<!--      </button>-->
<!--    </div>-->

<!--    &lt;!&ndash; Drawer (Menu latéral pour mobile) &ndash;&gt;-->
<!--    <transition name="slide">-->
<!--      <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">-->
<!--        <div class="w-full max-w-[300px] p-5 shadow-lg transform transition-all bg-blue-950 border-r border-white">-->
<!--          <button class="py-2 text-gray-700 w-full flex justify-between items-center" @click="isDrawerOpen = false">-->
<!--            <img :src="logoDrewa" alt="logo Cresaf drewa" class="w-16">-->
<!--             <span class="drop-shadow-[0_0_2px_blue] uppercase font-bold text-3xl text-white">cresaf</span>-->

<!--            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"-->
<!--                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--            class="text-white hover:text-black">-->
<!--              <path d="M18 6L6 18M6 6l12 12"></path>-->
<!--            </svg>-->
<!--          </button>-->
<!--          <nav class="flex flex-col space-y-4 py-5">-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3-->
<!--            border-b items-center"-->
<!--                         :class="[$route.name === 'values' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenAboutUs"-->
<!--            >-->
<!--             <span>Qui sommes-nous ?</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewaboutUs" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewaboutUs2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="aboutUs" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center">-->
<!--              <h1 class="text-2xl">🤍</h1>-->
<!--              <router-link to="/values" class="flex flex-col text-white font-semibold hover:text-green-500 text-base px-5 pb-2"-->
<!--                           @click="closeDrawerAndScroll1"-->
<!--              >-->
<!--                <h1>Nos valeurs</h1>-->
<!--                <span class="text-xs text-gray-400">Confiance, Intégrité et solidarité </span>-->
<!--              </router-link>-->
<!--            </div>-->
<!--              <div class="w-full flex items-center">-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                    class="text-gray-400">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />-->
<!--                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />-->
<!--                <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />-->
<!--              </svg>-->
<!--              <router-link to="values" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"-->
<!--                           @click="closeDrawerAndScroll2"-->
<!--              >-->
<!--                <h1>Nos atouts</h1>-->
<!--                <span class="text-xs text-gray-400">Culture de la performance </span>-->
<!--              </router-link>-->
<!--            </div>-->
<!--              <div class="w-full flex items-center">-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />-->
<!--                </svg>-->
<!--                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             @click="closeDrawerAndScroll3"-->
<!--                >-->
<!--                  <h1>Notre vision</h1>-->
<!--                  <span class="text-xs text-gray-400">Miser sur l'avenir </span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center">-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             @click="closeDrawerAndScroll4"-->
<!--                >-->
<!--                  <h1>Notre mission</h1>-->
<!--                  <span class="text-xs text-gray-400">Renforcer la solidarité</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b-->
<!--            items-center"-->
<!--                         :class="[$route.name === 'products' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenProducts"-->
<!--            >-->
<!--             <span>Nos produits</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewproducts" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewproducts2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="products" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollProducts1"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />-->
<!--                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />-->
<!--                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 pb-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Compte chèque</h2>-->
<!--                  <span class="text-xs text-gray-400">Particulier, entreprise & salaire</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts2"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"-->
<!--                      stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Bon de caisse</h2>-->
<!--                  <span class="text-xs text-gray-400">Bon plan pour votre épargne</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts3"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col justify-start text-white font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Dépôt à terme</h2>-->
<!--                  <span class="text-xs text-gray-400">Fructifier votre argent</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts4"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Compte d'épargne</h2>-->
<!--                  <span class="text-xs text-gray-400">Livret & Association</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts5"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white opacity-60">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />-->
<!--                  <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008-->
<!--              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1-->
<!--             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Collecte journalière</h2>-->
<!--                  <span class="text-xs text-gray-400">Nous suivre au quotidien</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollProducts6"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h2>Carte VISA</h2>-->
<!--                  <span class="text-xs text-gray-400">Vous ouvrir au monde</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--            <router-link to="#" class="w-full h-full text-lg font-bold hover:text-green-600 flex justify-between py-3 border-b-->
<!--            items-center"-->
<!--                         :class="[$route.name === 'solutions' ? activeDrawerClass : 'text-white']"-->
<!--                         @click="OpenSolutions"-->
<!--            >-->
<!--             <span>Nos solutions</span>-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor" stroke-width="2" stroke-linecap="round"-->
<!--                    stroke-linejoin="round">-->
<!--                <path v-if="viewsolutions" d="M3 16l10 -10l10 10" />-->
<!--                <path v-if="viewsolutions2" d="M2 9l10 11l10 -12" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--            <div v-if="solutions" class="w-full flex flex-col">-->
<!--              <div class="w-full flex items-center"-->
<!--              @click="closeDrawerAndScrollSolutions1"-->
<!--              >-->
<!--                <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Emoji&#45;&#45;Streamline-Iconoir" height="24" width="24">-->
<!--                  <path d="M7.5 14.337187499999999C3.7239375000000003 14.337187499999999 0.6628125 11.276062499999998 0.6628125 7.5 0.6628125-->
<!--              3.7239375000000003 3.7239375000000003 0.6628125 7.5 0.6628125c3.7760624999999997 0 6.837187500000001 3.061125 6.837187500000001-->
<!--              6.837187500000001 0 3.7760624999999997 -3.061125 6.837187500000001 -6.837187500000001 6.837187500000001Z" stroke="#d9d9d9"-->
<!--                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M10.576749999999999 9.2093125S9.551187500000001-->
<!--                    10.576749999999999 7.5 10.576749999999999s-3.0767499999999997 -1.3674374999999999 -3.0767499999999997-->
<!--                     -1.3674374999999999" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                  <path d="M9.892999999999999 5.4488125c-0.18875 0 -0.3418125 -0.1530625 -0.3418125 -0.3418125s0.1530625 -0.34187500000000004-->
<!--              0.3418125 -0.34187500000000004 0.34187500000000004 0.1530625 0.34187500000000004 0.34187500000000004 -0.1530625 0.3418125-->
<!--              -0.34187500000000004 0.3418125Z" fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                  <path d="M5.107 5.4488125c-0.1888125 0 -0.34187500000000004 -0.1530625 -0.34187500000000004 -0.3418125s0.1530625 -0.34187500000000004-->
<!--              0.34187500000000004 -0.34187500000000004 0.3418125 0.1530625 0.3418125 0.34187500000000004 -0.1530625 0.3418125 -0.3418125 0.3418125Z"-->
<!--                        fill="#d9d9d9" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement de projets</h1>-->
<!--                  <span class="text-xs text-gray-400">Sur mésure pour vos projets</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollSolutions2"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                  <path d="M3 21l17 -17" /><path d="M3 3v18h18" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement de la trésorerie</h1>-->
<!--                  <span class="text-xs text-gray-400">Financement des besoins de trésorerie ponctuels</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--              <div class="w-full flex items-center"-->
<!--                   @click="closeDrawerAndScrollSolutions3"-->
<!--              >-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"-->
<!--                      class="text-gray-400">-->
<!--                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />-->
<!--                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />-->
<!--                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1-->
<!--               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428-->
<!--             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />-->
<!--                </svg>-->
<!--                <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 px-5 py-2"-->
<!--                             :class="[$route.name === '#' ? activeClass : inactiveClass]"-->
<!--                >-->
<!--                  <h1>Financement Import / Export</h1>-->
<!--                  <span class="text-xs text-gray-400">Financer votre développement international</span>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </nav>-->
<!--            <button type="button"-->
<!--                    class="flex justify-center items-center gap-2 text-lg bg-blue-950 p-2 mt-2 font-semibold border border-white rounded-lg hover:text-green-600 hover:border-green-500"-->
<!--                    :class="[$route.name === 'contact' ? 'border-green-600 text-green-600' : 'text-white']"-->
<!--                    @click="router.push('/contact')"-->
<!--            >-->
<!--              Contactez-nous-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5-->
<!--           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />-->
<!--              </svg>-->
<!--            </button>-->

<!--        </div>-->
<!--      </div>-->
<!--    </transition>-->

<!--  </header>-->

<!--</template>-->





<!--<script setup>-->
<!--import {ref} from "vue";-->
<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import Image from "@public/components/contact-image.vue";-->
<!--// import FaceBook from "@/assets/images/svg/social/facebook.svg"-->
<!--// import Youtube from "@/assets/images/svg/social/youtube.svg"-->
<!--// import Twitter from "@/assets/images/svg/social/twitter.svg"-->
<!--// import Linkedin from "@/assets/images/svg/social/linkedin.svg"-->
<!--import Playstore from "@/assets/images/svg/social/playstore.svg"-->
<!--import Logo from "@/assets/images/logo-cref.webp"-->

<!--// const logos = ref([-->
<!--//   {-->
<!--//     name :FaceBook,-->
<!--//     title: "logo Facebook",-->
<!--//     link: "https://www.facebook.com/cresaf.sa"-->
<!--//   },-->
<!--//   {-->
<!--//     name :Youtube,-->
<!--//     title: "logo Youtube",-->
<!--//     link: ""-->
<!--//   },-->
<!--//   {-->
<!--//     name :Twitter,-->
<!--//     title: "logo Twitter",-->
<!--//     link: ""-->
<!--//   },-->
<!--//   {-->
<!--//     name :Linkedin,-->
<!--//     title: "logo Linkedin",-->
<!--//     link: "https://cm.linkedin.com/company/cr%C3%A9saf-credit-solidaire-d-afrique"-->
<!--//   },-->
<!--// ])-->

<!--const locations = ref([-->
<!--  {-->
<!--    city: "Siège Social (Douala)",-->
<!--    address: "Bonakouamouang, Akwa, Face Prudential Beneficial Life Insurance",-->
<!--    phone: "+237 658 794 995",-->
<!--    textphone: "658 794 995 / 650 591 548",-->
<!--  },-->
<!--  {-->
<!--    city: "Douala",-->
<!--    address: "Carrefour Anatole, face la station total",-->
<!--    phone: null,-->
<!--    textphone: "+237 *** *** ***"-->
<!--  },-->
<!--  {-->
<!--    city: "Yaounde",-->
<!--    address: "Descente Mokolo Elobi, batiment Dubaï Market",-->
<!--    phone: "+237 692 313 295",-->
<!--    textphone: "692 313 295 / 676 976 332"-->
<!--  },-->
<!--  {-->
<!--    city: "Bafoussam",-->
<!--    address: "Montée sens interdit, marché A, avant la direction régionale de la Total",-->
<!--    phone: "+237 699 477 764",-->
<!--    textphone: "699 477 764 / 691 919 624"-->
<!--  }-->
<!--]);-->

<!--const openWhatsApp = (phone) =>{-->
<!--  if (phone) {-->
<!--    const phoneExemple = String(phone).replace(/\s+/g, '').replace('+', '')-->
<!--    const url = `https://api.whatsapp.com/send/?phone=${phoneExemple}&image&type=phone_number&app_absent=0`;-->
<!--    window.open(url, "_blank");-->
<!--  } else {-->
<!--    console.error("Numéro de téléphone non disponible !");-->
<!--  }-->
<!--}-->
<!--// const openSocial = (link) =>{-->
<!--//   if (link) {-->
<!--//     window.open(link, "_blank");-->
<!--//   } else {-->
<!--//     console.log("Réseau social non disponible !");-->
<!--//   }-->
<!--// }-->

<!--const mockupImage = Logo;-->
<!--const playStoreIcon = Playstore-->

<!--const features = ref([-->
<!--  {-->
<!--    title: "Transactions Rapides",-->
<!--    description: "Effectuez vos opérations financières en quelques clics",-->
<!--    icon: "⚡"-->
<!--  },-->
<!--  {-->
<!--    title: "Sécurisé",-->
<!--    description: "Vos données sont protégées avec les dernières technologies de sécurité",-->
<!--    icon: "🔒"-->
<!--  },-->
<!--  {-->
<!--    title: "Disponible 24/7",-->
<!--    description: "Accédez à vos services bancaires à tout moment",-->
<!--    icon: "🕒"-->
<!--  }-->
<!--]);-->

<!--const openPlaystore = () => {-->
<!--  window.open('https://play.google.com/store/apps/details?id=net.betterplanning.mobileBanking.cresaf&hl=fr','_blank' )-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--  <div class="min-h-screen">-->
<!--    <Header />-->
<!--    <main class="flex flex-col lg:pt-24 pt-32">-->
<!--      <div class="min-h-screen flex flex-wrap lg:flex-nowrap lg:pt-8 lg:pb-10 bg-primary">-->
<!--      <div class="w-full flex flex-col-->
<!--       lg:px-10 px-5 lg:text-start text-center justify-start lg:items-start items-center">-->
<!--        <h1 class="text-4xl font-accent text-white lg:pb-6">Contactez-nous</h1>-->
<!--        <h5 class="text-gray-300 font-accent text-lg max-w-xl py-6 text-start">-->
<!--          Vous souhaitez en savoir plus sur le CRESAF, nos réussites et les avantages d’une collaboration avec nous ?-->
<!--          Envie de devenir partenaire ? Contactez-nous dès aujourd’hui !-->
<!--        </h5>-->

<!--        <div class="space-y-2 lg:pb-4">-->
<!--          <h2 class="text-2xl font-semibold text-white">-->
<!--            Laissez-nous <span class="text-primary-accent">un message</span>-->
<!--          </h2>-->
<!--          <div class="h-1 w-20 bg-secondary rounded"></div>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="flex gap-2 lg:py-4 py-10">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="flex justify-center items-center rounded-full bg-secondary h-8 w-8 cursor-pointer transition-transform duration-200 hover:scale-105"&ndash;&gt;-->
<!--&lt;!&ndash;               v-for="(logo , index) in logos" :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;                @click="openSocial(logo.link)"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src="logo.name" :alt="logo.title" class=" object-cover">&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->

<!--        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 cursor-pointer">-->
<!--          <div-->
<!--            v-for="location in locations"-->
<!--            :key="location.city"-->
<!--            class="bg-blue-900/55 py-6 pl-6 rounded-lg backdrop-blur-sm hover:bg-blue-900/70 transition-colors"-->
<!--            @click="openWhatsApp(location.phone)"-->
<!--        >-->
<!--          <h3 class="text-green-500 font-bold text-xl mb-4">-->
<!--            {{ location.city }}-->
<!--          </h3>-->
<!--          <div class="space-y-4 text-gray-200 font-accent">-->
<!--            <div class="flex gap-1">-->
<!--              <div>-->
<!--                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"-->
<!--                         stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-green-500">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />-->
<!--                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />-->
<!--              </svg>-->
<!--              </div>-->

<!--                <p class="text-base text-left leading-6 font-serif pr-1">{{ location.address }}</p>-->
<!--            </div>-->
<!--            <div class="flex items-center gap-1">-->
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"-->
<!--                    stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="text-green-500">-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />-->
<!--              </svg>-->
<!--              <p class="text-sm">{{ location.textphone }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        </div>-->
<!--      </div>-->
<!--        <div class="w-full max-w-xl lg:py-0 py-10">-->
<!--          <Image />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="w-full py-8 bg-blue-50 px-10">-->
<!--&lt;!&ndash;        <div class="w-full py-16 bg-gradient-to-b from-blue-50 to-white">&ndash;&gt;-->
<!--          <div class="mx-auto">-->
<!--            <div class="grid lg:grid-cols-2 gap-12 items-center">-->
<!--              &lt;!&ndash; Texte et features &ndash;&gt;-->
<!--              <div class="space-y-8">-->
<!--                <div class="space-y-4">-->
<!--                  <h2 class="text-3xl lg:text-4xl font-bold text-blue-950">-->
<!--                    CRESAF Mobile-->
<!--                  </h2>-->
<!--                  <p class="text-lg text-gray-600">-->
<!--                    Découvrez une nouvelle façon de gérer vos finances. Notre application mobile vous offre une expérience bancaire simple, rapide et sécurisée.-->
<!--                  </p>-->
<!--                </div>-->

<!--                &lt;!&ndash; Features &ndash;&gt;-->
<!--                <div class="grid gap-6">-->
<!--                  <div-->
<!--                      v-for="feature in features"-->
<!--                      :key="feature.title"-->
<!--                      class="flex items-start gap-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"-->
<!--                  >-->
<!--                    <div class="text-2xl">{{ feature.icon }}</div>-->
<!--                    <div>-->
<!--                      <h3 class="font-semibold text-lg text-blue-950">{{ feature.title }}</h3>-->
<!--                      <p class="text-gray-600">{{ feature.description }}</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                &lt;!&ndash; Bouton de téléchargement &ndash;&gt;-->
<!--                <div class="flex w-full justify-center lg:justify-normal items-center">-->
<!--                  <div class="flex w-full justify-start items-center gap-1 border max-w-[15rem] rounded-xl bg-blue-950-->
<!--                 px-4 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer hover:bg-green-700"-->
<!--                       @click="openPlaystore"-->
<!--                  >-->
<!--                    <a-->
<!--                        class="inline-block"-->
<!--                    >-->
<!--                      <img-->
<!--                          :src="playStoreIcon"-->
<!--                          alt="Télécharger sur Google Play"-->
<!--                          class="h-12 hover:opacity-90 transition-opacity"-->
<!--                      />-->
<!--                    </a>-->
<!--                    <div class="flex flex-col justify-center items-start">-->
<!--                      <span class="font-roboto text-lg text-gray-300">-->
<!--                        Téléchargez sur-->
<!--                      </span>-->
<!--                      <span class="font-bold text-white text-2xl">-->
<!--                        Google Play-->
<!--                      </span>-->
<!--                    </div>-->

<!--  &lt;!&ndash;                  <a&ndash;&gt;-->
<!--  &lt;!&ndash;                      @click="openPlaystore"&ndash;&gt;-->
<!--  &lt;!&ndash;                      href="#"&ndash;&gt;-->
<!--  &lt;!&ndash;                      target="_blank"&ndash;&gt;-->
<!--  &lt;!&ndash;                      class="inline-block"&ndash;&gt;-->
<!--  &lt;!&ndash;                  >&ndash;&gt;-->
<!--  &lt;!&ndash;                    <img&ndash;&gt;-->
<!--  &lt;!&ndash;                        :src="playStoreIcon"&ndash;&gt;-->
<!--  &lt;!&ndash;                        alt="Télécharger sur Google Play"&ndash;&gt;-->
<!--  &lt;!&ndash;                        class="h-10 hover:opacity-90 transition-opacity duration-500 hover:scale-105"&ndash;&gt;-->
<!--  &lt;!&ndash;                    />&ndash;&gt;-->
<!--  &lt;!&ndash;                  </a>&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              &lt;!&ndash; Image de l'application &ndash;&gt;-->
<!--              <div class="flex justify-center lg:justify-end">-->
<!--                <div class="relative">-->
<!--                  &lt;!&ndash; Effet de brillance &ndash;&gt;-->
<!--                  <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 blur-xl rounded-full"></div>-->
<!--                  &lt;!&ndash; Mockup de l'application &ndash;&gt;-->
<!--                  <img-->
<!--                      @click="openPlaystore"-->
<!--                      :src="mockupImage"-->
<!--                      alt="CRESAF Mobile App"-->
<!--                      class="relative w-64 rounded-3xl shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105"-->
<!--                  />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--    </main>-->
<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--</style>-->