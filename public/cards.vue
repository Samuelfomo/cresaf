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