<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <div class="px-4 pt-40 pb-12 lg:pt-48">
    <div class="w-full mx-auto">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start">
          <h1 class="lg:text-5xl text-3xl text-center montserrat montserrat-700 text-secondary mb-6">
            {{service.value}}
          </h1>
          <h5 class="lg:montserrat montserrat-400 lg:text-xl text-base py-3 lg:leading-relaxed"  v-for="(description, index) in descriptions" :key="index">
            {{description.value}}
          </h5>
        </div>
        <div class="w-full lg:w-6/12 hidden lg:flex">
          <Image1 />
        </div>
      </div>
    </div>
    </div>

    <div class="bg-blue-50 lg:px-8 flex flex-col lg:py-12 py-8 justify-center">
      <div id="section1" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center">Nos valeurs fondamentales</h1>
        <p class="text-primary lg:text-xl text-lg lg:py-10 py-5 w-full lg:px-10 px-5 font-primary">
          Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.
        </p>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5 lg:px-0 px-5 lg:space-y-0 space-y-5 container mx-auto">
          <!-- Utilisation de v-for pour générer les cartes sans position absolue -->
          <div v-for="(valeur, index) in locations" :key="index"
               class="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <!-- Image d'arrière-plan avec titre superposé -->
            <div class="relative h-48">
              <img :src="valeur.image" alt="Image de fond" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-center text-white">
                <div class="mb-3">
                  <!-- Icône adaptée à chaque valeur (exemple avec icône de confiance) -->
                  <svg v-if="valeur.title === 'Confiance'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 16h6l-9 15-9-15h6v-6h6v6z"></path>
                  </svg>

                  <!-- Icône pour Responsabilité -->
                  <svg v-else-if="valeur.title === 'Responsabilité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>

                  <!-- Icône pour Innovation -->
                  <svg v-else-if="valeur.title === 'Innovation'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>

                  <!-- Icône pour Proximité -->
                  <svg v-else-if="valeur.title === 'Proximité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>

                  <!-- Icône pour Sécurité -->
                  <svg v-else-if="valeur.title === 'Sécurité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>

                  <!-- Icône pour Excellence -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold tracking-wider">{{ valeur.title }}</h2>
              </div>
            </div>

            <!-- Description -->
            <div class="p-6 bg-white flex-grow">
              <p class="text-gray-800 leading-relaxed text-lg">
                {{ valeur.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:px-8 flex-col py-12 justify-center hidden">
      <div id="section2" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center">Pourquoi nous faire confiance ?</h1>
        <p class="text-gray-700 montserrat montserrat-400 text-xl py-8 w-full lg:px-20 px-6">
          Nous disposons d'actifs de qualité que nous employons au profit de nos clients
        </p>
        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col justify-center items-center py-5 container mx-auto gap-4">
          <div v-for="(location2, index) in locations2" :key="index" class="group h-full w-full max-w-sm
   border rounded-lg bg-white cursor-pointer transition hover:scale-105 duration-500 shadow-lg">
            <div class="py-6 px-6">
              <p class="montserrat text-gray-700 text-lg">{{ location2.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:px-8 flex flex-col py-12 justify-center">
      <div id="section2" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center">Pourquoi nous faire confiance ?</h1>
        <p class="text-gray-700 montserrat montserrat-400 text-xl lg:py-8 w-full lg:px-20 p-6 text-center">
          Nous disposons d'actifs de qualité que nous employons au profit de nos clients
        </p>

        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-6 lg:space-y-0 space-y-6 container mx-auto">
          <div v-for="(raison, index) in locations2" :key="index"
               class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <!-- En-tête avec icône -->
            <div class="h-24 bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
              <div class="text-white flex flex-col items-center">
                <div class="mb-2">
                  <!-- Icônes différentes selon l'index -->
                  <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>

                  <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>

                  <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>

                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Contenu descriptif -->
            <div class="p-6 bg-white flex-grow">
              <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ raison.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:px-8 flex flex-col py-12 bg-primary">
      <div id="section3" class="container mx-auto">
        <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">
          <div class="flex flex-col">
            <h1 class="text-white lg:text-5xl text-3xl pb-10 lg:text-left text-center montserrat montserrat-700 w-full">Nous misons sur l'avenir</h1>
            <div class="md:grid lg:grid-cols-2 grid-cols-1 gap-4 lg:space-y-0 space-y-4 container mx-auto">
              <div v-for="(vision, index) in visions" :key="index"
                   class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                <!-- Contenu descriptif -->
                <div class="p-6 bg-white flex-grow">
                  <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ vision.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full h-full max-w-lg py-10 justify-start flex-wrap px-5 lg:px-20 gap-2">
            <img :src="girl" alt="image girl" class="object-cover transition-transform duration-500 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-8 flex flex-col py-12 justify-center">
      <div id="section4" class="container mx-auto">
          <h1 class="text-secondary lg:text-5xl text-3xl montserrat-700 montserrat text-center">Créons des opportunités pour tous !</h1>
        <p class="text-gray-600 montserrat lg:text-xl text-lg py-8 w-full lg:px-10 px-6 lg:text-center">
          Notre mission, « développer des produits financiers capables de changer l’avenir des entrepreneurs », s’inscrit dans la vision d’entreprise telle qu’énoncée plus haut. À ce titre, les missions de Cresaf S.A peuvent aisément se deviner :
        </p>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-2  container mx-auto">
          <div v-for="(location3, index) in locations3" :key="index"
               class="group rounded-lg overflow-hidden flex flex-col">
            <!-- En-tête avec icône -->
            <div class="lg:pt-10 pt-5 flex justify-center items-center">
              <div class=" flex flex-col items-center justify-center border border-gray-200 p-2 rounded-xl" :class="location3.bg">
                <div class="text-white">
                  <!-- Icônes différentes selon l'index -->
                  <IconCreditCard stroke={2} class="h-9 w-12" v-if="index === 0"/>

                  <IconMapPinDollar stroke={2} v-else-if="index === 1" class="h-9 w-12" />

                  <IconUsersPlus stroke={2} v-else-if="index === 2" class="h-9 w-12" />

                  <IconBuildingPlus stroke={2} v-else-if="index === 3" class="h-9 w-12" />

                  <IconBuildingCommunity stroke={2} v-else-if="index === 4" class="h-9 w-12" />

                  <IconDeviceIpadHorizontalPlus stroke={2} v-else class="h-9 w-12" />
                </div>
              </div>
            </div>

            <!-- Contenu descriptif -->
            <div class="p-6 bg-white flex-grow text-center">
              <p class="montserrat montserrat-400 text-gray-700 text-lg">{{ location3.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Image1 from "@public/components/image.vue";

import Valeur from "@/assets/images/cresaf/nos_valeurs_fondamentales.webp"
// import Secretaire from "@/assets/images/secretaire.webp"
import Conf from "@/assets/images/cresaf/confiance.webp"
import Girl from "@/assets/images/girl.webp"
import Sommet from "@/assets/images/sommet.webp"
import Check from"@/assets/images/svg/check-rounded.svg"
import confiance from "@/assets/images/confiance.jpg"
import Responsibility from "@/assets/images/responsabilite.jpg"
import Innovation from "@/assets/images/innovation.jpg"
import Proximity from "@/assets/images/proximity.jpg"
import Security from "@/assets/images/security.jpg"
import Excellence from "@/assets/images/excellence.jpg"
import ImageValue from "@public/components/imageValue.vue";
import {IconArrowRight} from "@tabler/icons-vue";
import { IconCreditCard } from '@tabler/icons-vue';
import { IconMapPinDollar } from '@tabler/icons-vue';
import { IconUsersPlus } from '@tabler/icons-vue';
import { IconBuildingPlus } from '@tabler/icons-vue';
import { IconBuildingCommunity } from '@tabler/icons-vue';
import { IconDeviceIpadHorizontalPlus } from '@tabler/icons-vue';



const valeurs = Valeur
const girl = Girl
const sommet = Sommet
const check = Check

const descriptions = ref([
  {
    value: 'Notre objectif est de répondre aux besoins de tous ceux qui, dans le secteur informel ou non, ont besoin d\'une assistance financière fiable, directe et personnalisée, en devenant le premier pourvoyeur de microcrédits.'
  },
  {
    value: 'Le Crédit Solidaire d\'Afrique (CRESAF) est une société anonyme créée par un groupe d\'entrepreneurs locaux désireux de contribuer au progrès économique et social du Cameroun en proposant des solutions de financement adaptées aux besoins des micros, petites et moyennes entreprises.'
  },
  {
    value: 'Cresaf s\'appuie sur des valeurs de solidarité, de confiance, de transparence et de responsabilité pour renforcer l\'inclusion financière, soutenir l\'innovation et favoriser le développement durable dans le pays.'
  }
])
const services =ref( [
  {
    value: 'Qui sommes-nous ?'
  }
])
const locations = ref([
  {
    title:'Confiance',
    description: 'Nous bâtissons des relations de confiance avec nos clients, en garantissant la transparence et la sécurité de toutes nos transactions.',
    image: confiance
  },
  {
    title:'Responsabilité',
    description: 'Nous agissons de manière responsable, en intégrant les enjeux sociaux et environnementaux dans chacune de nos décisions.',
    image: Responsibility
  },
  {
    title:'Innovation',
    description: 'Nous nous engageons à proposer des services bancaires innovants, adaptés aux besoins spécifiques de nos clients et à l’évolution de l’économie.',
    image: Innovation
  },
  {
    title:'Proximité',
    description: 'Nous valorisons la proximité avec nos clients, en offrant un service personnalisé, humain et réactif pour répondre à leurs attentes',
    image: Proximity
  },
  {
    title:'Sécurité',
    description: 'Nous assurons une sécurité optimale pour vos transactions et la protection de vos données, afin de garantir votre tranquillité d’esprit.',
    image: Security
  },
  {
    title:'Excellence',
    description: 'Nous visons l’excellence dans la qualité de nos services et l’efficacité de nos solutions, en plaçant toujours le client au centre de nos préoccupations.',
    image: Excellence
  },
])
const locations2 = ref([
  {
    description:'Notre connaissance fine du terrain nous permet d’offrir des solutions adaptées aux besoins réels des populations et des entrepreneurs.'
  },
  {
    description:'Nous combinons rigueur financière, innovation sociale et engagement humain pour maximiser l’impact de nos interventions.'
  },
  {
    description:'Notre réseau de partenaires locaux et internationaux renforce notre capacité à agir efficacement et durablement.'
  },
  {
    description:'Avec une équipe engagée et des outils flexibles, nous faisons de chaque accompagnement une opportunité de transformation.'
  }
])
const locations3 = ref([
  {
    description:'Favoriser l’inclusion financière en accompagnant les populations et les acteurs économiques avec des solutions accessibles, adaptées et durables',
    bg: 'bg-primary'
  },
  {
    description:'Soutenir l’autonomisation économique à travers des services bancaires responsables, ancrés dans les réalités locales.',
    bg: 'bg-secondary'
  },
  {
    description:'Contribuer activement au développement social et économique en Afrique, en plaçant l’humain au cœur de nos priorités',
    bg: 'bg-primary'
  },
  {
    description:'Œuvrer chaque jour pour renforcer la capacité d’action des entreprises, entrepreneurs, des jeunes et des communautés',
    bg: 'bg-secondary'
  },
  {
    description:' Bâtir une finance plus équitable, au service du progrès collectif grâce à une approche de proximité',
    bg: 'bg-primary'
  }
])
const visions = ref([
  {
    description: 'Nous aspirons à être une force motrice du changement pour transformer et établir le standard du secteur de la microfinance au Cameroun.'
  },
  {
    description: 'Les entrepreneurs sont confrontés à des défis uniques dans leurs activités quotidiennes,\n' +
        '              notamment le manque de solutions bancaires adaptées à leurs besoins spécifiques.'
  },
  {
    description: 'Nous tirons notre force de notre capacité à répondre à ces défis de manière directe, nous sommes déterminés à apporter des\n' +
        '              solutions bancaires simples, fiables et accessibles aux entrepreneurs, aux salariés et aux travailleurs indépendants.'
  },
])



</script>


<!--<template>-->
<!--  <div class="flex flex-col min-h-screen">-->
<!--    <Header />-->

<!--    &lt;!&ndash; Section Hero &ndash;&gt;-->
<!--    <div class="px-4 pt-40 pb-12 lg:pt-48 hero-section">-->
<!--      <div class="w-full mx-auto">-->
<!--        <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">-->
<!--          <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start hero-content">-->
<!--            <h1 class="lg:text-5xl text-3xl text-center montserrat montserrat-700 text-secondary mb-6 hero-title">-->
<!--              {{service.value}}-->
<!--            </h1>-->
<!--            <div class="hero-descriptions">-->
<!--              <h5 class="lg:montserrat montserrat-400 lg:text-xl text-base py-3 lg:leading-relaxed hero-description"-->
<!--                  v-for="(description, index) in descriptions" :key="index">-->
<!--                {{description.value}}-->
<!--              </h5>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="w-full lg:w-6/12 hidden lg:flex hero-image">-->
<!--            <Image1 />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Section Valeurs &ndash;&gt;-->
<!--    <div class="bg-blue-50 lg:px-8 flex flex-col lg:py-12 py-8 justify-center values-section">-->
<!--      <div id="section1" class="container mx-auto">-->
<!--        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center section-title">-->
<!--          Nos valeurs fondamentales-->
<!--        </h1>-->
<!--        <p class="text-primary lg:text-xl text-lg lg:py-10 py-5 w-full lg:px-10 px-5 font-primary section-subtitle">-->
<!--          Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.-->
<!--        </p>-->
<!--        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5 lg:px-0 px-5 lg:space-y-0 space-y-5 container mx-auto values-grid">-->
<!--          <div v-for="(valeur, index) in locations" :key="index"-->
<!--               class="rounded-lg shadow-lg overflow-hidden flex flex-col h-full value-card"-->
<!--               :data-index="index">-->
<!--            <div class="relative h-48 card-image-container">-->
<!--              <img :src="valeur.image" alt="Image de fond" class="w-full h-full object-cover card-image">-->
<!--              <div class="absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-center text-white card-overlay">-->
<!--                <div class="mb-3 card-icon">-->
<!--                  &lt;!&ndash; Vos icônes SVG existantes &ndash;&gt;-->
<!--                  <svg v-if="valeur.title === 'Confiance'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M16 16h6l-9 15-9-15h6v-6h6v6z"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="valeur.title === 'Responsabilité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="valeur.title === 'Innovation'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="valeur.title === 'Proximité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>-->
<!--                    <circle cx="9" cy="7" r="4"></circle>-->
<!--                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="valeur.title === 'Sécurité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>-->
<!--                    <path d="M7 11V7a5 5 0 0110 0v4"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>-->
<!--                  </svg>-->
<!--                </div>-->
<!--                <h2 class="text-2xl font-bold tracking-wider card-title">{{ valeur.title }}</h2>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="p-6 bg-white flex-grow card-content">-->
<!--              <p class="text-gray-800 leading-relaxed text-lg">-->
<!--                {{ valeur.description }}-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Section Confiance &ndash;&gt;-->
<!--    <div class="lg:px-8 flex flex-col py-12 justify-center trust-section">-->
<!--      <div id="section2" class="container mx-auto">-->
<!--        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center section-title">-->
<!--          Pourquoi nous faire confiance ?-->
<!--        </h1>-->
<!--        <p class="text-gray-700 montserrat montserrat-400 text-xl lg:py-8 w-full lg:px-20 p-6 text-center section-subtitle">-->
<!--          Nous disposons d'actifs de qualité que nous employons au profit de nos clients-->
<!--        </p>-->

<!--        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-6 lg:space-y-0 space-y-6 container mx-auto trust-grid">-->
<!--          <div v-for="(raison, index) in locations2" :key="index"-->
<!--               class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 trust-card"-->
<!--               :data-index="index">-->
<!--            <div class="h-24 bg-gradient-to-r from-primary to-secondary flex justify-center items-center card-header">-->
<!--              <div class="text-white flex flex-col items-center">-->
<!--                <div class="mb-2 trust-icon">-->
<!--                  <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>-->
<!--                    <polyline points="22 4 12 14.01 9 11.01"></polyline>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>-->
<!--                    <circle cx="9" cy="7" r="4"></circle>-->
<!--                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>-->
<!--                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>-->
<!--                  </svg>-->
<!--                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <line x1="12" y1="5" x2="12" y2="19"></line>-->
<!--                    <line x1="5" y1="12" x2="19" y2="12"></line>-->
<!--                  </svg>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="p-6 bg-white flex-grow trust-content">-->
<!--              <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ raison.description }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Section Vision &ndash;&gt;-->
<!--    <div class="lg:px-8 flex flex-col py-12 bg-primary vision-section">-->
<!--      <div id="section3" class="container mx-auto">-->
<!--        <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">-->
<!--          <div class="flex flex-col vision-content">-->
<!--            <h1 class="text-white lg:text-5xl text-3xl pb-10 lg:text-left text-center montserrat montserrat-700 w-full vision-title">-->
<!--              Nous misons sur l'avenir-->
<!--            </h1>-->
<!--            <div class="md:grid lg:grid-cols-2 grid-cols-1 gap-4 lg:space-y-0 space-y-4 container mx-auto vision-grid">-->
<!--              <div v-for="(vision, index) in visions" :key="index"-->
<!--                   class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 vision-card"-->
<!--                   :data-index="index">-->
<!--                <div class="p-6 bg-white flex-grow vision-card-content">-->
<!--                  <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ vision.description }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex w-full h-full max-w-lg py-10 justify-start flex-wrap px-5 lg:px-20 gap-2 vision-image">-->
<!--            <img :src="girl" alt="image girl" class="object-cover transition-transform duration-500 hover:scale-105">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Section Mission &ndash;&gt;-->
<!--    <div class="lg:px-8 flex flex-col py-12 justify-center mission-section">-->
<!--      <div id="section4" class="container mx-auto">-->
<!--        <h1 class="text-secondary lg:text-5xl text-3xl montserrat-700 montserrat text-center section-title">-->
<!--          Créons des opportunités pour tous !-->
<!--        </h1>-->
<!--        <p class="text-gray-600 montserrat lg:text-xl text-lg py-8 w-full lg:px-10 px-6 lg:text-center section-subtitle">-->
<!--          Notre mission, « développer des produits financiers capables de changer l'avenir des entrepreneurs », s'inscrit dans la vision d'entreprise telle qu'énoncée plus haut. À ce titre, les missions de Cresaf S.A peuvent aisément se deviner :-->
<!--        </p>-->
<!--        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-2 container mx-auto mission-grid">-->
<!--          <div v-for="(location3, index) in locations3" :key="index"-->
<!--               class="group rounded-lg overflow-hidden flex flex-col mission-card"-->
<!--               :data-index="index">-->
<!--            <div class="lg:pt-10 pt-5 flex justify-center items-center mission-icon-container">-->
<!--              <div class="flex flex-col items-center justify-center border border-gray-200 p-2 rounded-xl mission-icon-bg" :class="location3.bg">-->
<!--                <div class="text-white mission-icon">-->
<!--                  <IconCreditCard stroke={2} class="h-9 w-12" v-if="index === 0"/>-->
<!--                  <IconMapPinDollar stroke={2} v-else-if="index === 1" class="h-9 w-12" />-->
<!--                  <IconUsersPlus stroke={2} v-else-if="index === 2" class="h-9 w-12" />-->
<!--                  <IconBuildingPlus stroke={2} v-else-if="index === 3" class="h-9 w-12" />-->
<!--                  <IconBuildingCommunity stroke={2} v-else-if="index === 4" class="h-9 w-12" />-->
<!--                  <IconDeviceIpadHorizontalPlus stroke={2} v-else class="h-9 w-12" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="p-6 bg-white flex-grow text-center mission-content">-->
<!--              <p class="montserrat montserrat-400 text-gray-700 text-lg">{{ location3.description }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref, onMounted, nextTick} from "vue";-->
<!--import { gsap } from 'gsap';-->
<!--import { ScrollTrigger } from 'gsap/ScrollTrigger';-->
<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import Image1 from "@public/components/image.vue";-->

<!--// Vos imports d'images existants...-->
<!--import Valeur from "@/assets/images/cresaf/nos_valeurs_fondamentales.webp"-->
<!--import Girl from "@/assets/images/girl.webp"-->
<!--import Sommet from "@/assets/images/sommet.webp"-->
<!--import Check from"@/assets/images/svg/check-rounded.svg"-->
<!--import confiance from "@/assets/images/confiance.jpg"-->
<!--import Responsibility from "@/assets/images/responsabilite.jpg"-->
<!--import Innovation from "@/assets/images/innovation.jpg"-->
<!--import Proximity from "@/assets/images/proximity.jpg"-->
<!--import Security from "@/assets/images/security.jpg"-->
<!--import Excellence from "@/assets/images/excellence.jpg"-->
<!--import ImageValue from "@public/components/imageValue.vue";-->
<!--import {IconArrowRight} from "@tabler/icons-vue";-->
<!--import { IconCreditCard } from '@tabler/icons-vue';-->
<!--import { IconMapPinDollar } from '@tabler/icons-vue';-->
<!--import { IconUsersPlus } from '@tabler/icons-vue';-->
<!--import { IconBuildingPlus } from '@tabler/icons-vue';-->
<!--import { IconBuildingCommunity } from '@tabler/icons-vue';-->
<!--import { IconDeviceIpadHorizontalPlus } from '@tabler/icons-vue';-->

<!--// Enregistrement des plugins GSAP-->
<!--gsap.registerPlugin(ScrollTrigger);-->

<!--// Vos données existantes...-->
<!--const valeurs = Valeur-->
<!--const girl = Girl-->
<!--const sommet = Sommet-->
<!--const check = Check-->

<!--const descriptions = ref([-->
<!--  {-->
<!--    value: 'Notre objectif est de répondre aux besoins de tous ceux qui, dans le secteur informel ou non, ont besoin d\'une assistance financière fiable, directe et personnalisée, en devenant le premier pourvoyeur de microcrédits.'-->
<!--  },-->
<!--  {-->
<!--    value: 'Le Crédit Solidaire d\'Afrique (CRESAF) est une société anonyme créée par un groupe d\'entrepreneurs locaux désireux de contribuer au progrès économique et social du Cameroun en proposant des solutions de financement adaptées aux besoins des micros, petites et moyennes entreprises.'-->
<!--  },-->
<!--  {-->
<!--    value: 'Cresaf s\'appuie sur des valeurs de solidarité, de confiance, de transparence et de responsabilité pour renforcer l\'inclusion financière, soutenir l\'innovation et favoriser le développement durable dans le pays.'-->
<!--  }-->
<!--])-->

<!--const services = ref([-->
<!--  {-->
<!--    value: 'Qui sommes-nous ?'-->
<!--  }-->
<!--])-->

<!--const locations = ref([-->
<!--  {-->
<!--    title:'Confiance',-->
<!--    description: 'Nous bâtissons des relations de confiance avec nos clients, en garantissant la transparence et la sécurité de toutes nos transactions.',-->
<!--    image: confiance-->
<!--  },-->
<!--  {-->
<!--    title:'Responsabilité',-->
<!--    description: 'Nous agissons de manière responsable, en intégrant les enjeux sociaux et environnementaux dans chacune de nos décisions.',-->
<!--    image: Responsibility-->
<!--  },-->
<!--  {-->
<!--    title:'Innovation',-->
<!--    description: 'Nous nous engageons à proposer des services bancaires innovants, adaptés aux besoins spécifiques de nos clients et à l'évolution de l'économie.',-->
<!--    image: Innovation-->
<!--  },-->
<!--  {-->
<!--    title:'Proximité',-->
<!--    description: 'Nous valorisons la proximité avec nos clients, en offrant un service personnalisé, humain et réactif pour répondre à leurs attentes',-->
<!--    image: Proximity-->
<!--  },-->
<!--  {-->
<!--    title:'Sécurité',-->
<!--    description: 'Nous assurons une sécurité optimale pour vos transactions et la protection de vos données, afin de garantir votre tranquillité d'esprit.',-->
<!--    image: Security-->
<!--  },-->
<!--  {-->
<!--    title:'Excellence',-->
<!--    description: 'Nous visons l'excellence dans la qualité de nos services et l'efficacité de nos solutions, en plaçant toujours le client au centre de nos préoccupations.',-->
<!--    image: Excellence-->
<!--  },-->
<!--])-->

<!--const locations2 = ref([-->
<!--  {-->
<!--    description:'Notre connaissance fine du terrain nous permet d'offrir des solutions adaptées aux besoins réels des populations et des entrepreneurs.'-->
<!--  },-->
<!--  {-->
<!--    description:'Nous combinons rigueur financière, innovation sociale et engagement humain pour maximiser l'impact de nos interventions.'-->
<!--  },-->
<!--  {-->
<!--    description:'Notre réseau de partenaires locaux et internationaux renforce notre capacité à agir efficacement et durablement.'-->
<!--  },-->
<!--  {-->
<!--    description:'Avec une équipe engagée et des outils flexibles, nous faisons de chaque accompagnement une opportunité de transformation.'-->
<!--  }-->
<!--])-->

<!--const locations3 = ref([-->
<!--  {-->
<!--    description:'Favoriser l'inclusion financière en accompagnant les populations et les acteurs économiques avec des solutions accessibles, adaptées et durables',-->
<!--    bg: 'bg-primary'-->
<!--  },-->
<!--  {-->
<!--    description:'Soutenir l'autonomisation économique à travers des services bancaires responsables, ancrés dans les réalités locales.',-->
<!--    bg: 'bg-secondary'-->
<!--  },-->
<!--  {-->
<!--    description:'Contribuer activement au développement social et économique en Afrique, en plaçant l'humain au cœur de nos priorités',-->
<!--    bg: 'bg-primary'-->
<!--  },-->
<!--  {-->
<!--    description:'Œuvrer chaque jour pour renforcer la capacité d'action des entreprises, entrepreneurs, des jeunes et des communautés',-->
<!--    bg: 'bg-secondary'-->
<!--  },-->
<!--  {-->
<!--    description:' Bâtir une finance plus équitable, au service du progrès collectif grâce à une approche de proximité',-->
<!--    bg: 'bg-primary'-->
<!--  }-->
<!--])-->

<!--const visions = ref([-->
<!--  {-->
<!--    description: 'Nous aspirons à être une force motrice du changement pour transformer et établir le standard du secteur de la microfinance au Cameroun.'-->
<!--  },-->
<!--  {-->
<!--    description: 'Les entrepreneurs sont confrontés à des défis uniques dans leurs activités quotidiennes, notamment le manque de solutions bancaires adaptées à leurs besoins spécifiques.'-->
<!--  },-->
<!--  {-->
<!--    description: 'Nous tirons notre force de notre capacité à répondre à ces défis de manière directe, nous sommes déterminés à apporter des solutions bancaires simples, fiables et accessibles aux entrepreneurs, aux salariés et aux travailleurs indépendants.'-->
<!--  },-->
<!--])-->

<!--// Animations GSAP-->
<!--onMounted(() => {-->
<!--  nextTick(() => {-->
<!--    // Configuration globale GSAP-->
<!--    gsap.defaults({-->
<!--      ease: "power2.out",-->
<!--      duration: 1-->
<!--    });-->

<!--    // 1. Animation de la section Hero-->
<!--    const heroTl = gsap.timeline({-->
<!--      scrollTrigger: {-->
<!--        trigger: ".hero-section",-->
<!--        start: "top 90%",-->
<!--        end: "bottom 20%",-->
<!--        toggleActions: "play none none none"-->
<!--      }-->
<!--    });-->

<!--    heroTl-->
<!--        .fromTo(".hero-title",-->
<!--            { y: 100, opacity: 0 },-->
<!--            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }-->
<!--        )-->
<!--        .fromTo(".hero-description",-->
<!--            { y: 50, opacity: 0 },-->
<!--            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.8"-->
<!--        )-->
<!--        .fromTo(".hero-image",-->
<!--            { x: 100, opacity: 0, scale: 0.9 },-->
<!--            { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, "-=1"-->
<!--        );-->

<!--    // 2. Animation de la section Valeurs-->
<!--    ScrollTrigger.create({-->
<!--      trigger: ".values-section",-->
<!--      start: "top 80%",-->
<!--      onEnter: () => {-->
<!--        const valuesTl = gsap.timeline();-->

<!--        valuesTl-->
<!--            .fromTo(".values-section .section-title",-->
<!--                { y: 80, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }-->
<!--            )-->
<!--            .fromTo(".values-section .section-subtitle",-->
<!--                { y: 50, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"-->
<!--            )-->
<!--            .fromTo(".value-card",-->
<!--                {-->
<!--                  y: 100,-->
<!--                  opacity: 0,-->
<!--                  scale: 0.8,-->
<!--                  rotationY: 15-->
<!--                },-->
<!--                {-->
<!--                  y: 0,-->
<!--                  opacity: 1,-->
<!--                  scale: 1,-->
<!--                  rotationY: 0,-->
<!--                  duration: 0.8,-->
<!--                  stagger: {-->
<!--                    amount: 0.6,-->
<!--                    from: "start"-->
<!--                  },-->
<!--                  ease: "back.out(1.2)"-->
<!--                }, "-=0.4"-->
<!--            );-->
<!--      }-->
<!--    });-->

<!--    // 3. Animation de la section Confiance-->
<!--    ScrollTrigger.create({-->
<!--      trigger: ".trust-section",-->
<!--      start: "top 80%",-->
<!--      onEnter: () => {-->
<!--        const trustTl = gsap.timeline();-->

<!--        trustTl-->
<!--            .fromTo(".trust-section .section-title",-->
<!--                { y: 80, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 1 }-->
<!--            )-->
<!--            .fromTo(".trust-section .section-subtitle",-->
<!--                { y: 50, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"-->
<!--            )-->
<!--            .fromTo(".trust-card",-->
<!--                {-->
<!--                  y: 80,-->
<!--                  opacity: 0,-->
<!--                  scale: 0.9-->
<!--                },-->
<!--                {-->
<!--                  y: 0,-->
<!--                  opacity: 1,-->
<!--                  scale: 1,-->
<!--                  duration: 0.6,-->
<!--                  stagger: 0.15,-->
<!--                  ease: "power3.out"-->
<!--                }, "-=0.4"-->
<!--            )-->
<!--            .fromTo(".trust-icon",-->
<!--                {-->
<!--                  scale: 0,-->
<!--                  rotation: 180-->
<!--                },-->
<!--                {-->
<!--                  scale: 1,-->
<!--                  rotation: 0,-->
<!--                  duration: 0.5,-->
<!--                  stagger: 0.1,-->
<!--                  ease: "back.out(2)"-->
<!--                }, "-=0.8"-->
<!--            );-->
<!--      }-->
<!--    });-->

<!--    // 4. Animation de la section Vision-->
<!--    ScrollTrigger.create({-->
<!--      trigger: ".vision-section",-->
<!--      start: "top 80%",-->
<!--      onEnter: () => {-->
<!--        const visionTl = gsap.timeline();-->

<!--        visionTl-->
<!--            .fromTo(".vision-title",-->
<!--                { x: -100, opacity: 0 },-->
<!--                { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }-->
<!--            )-->
<!--            .fromTo(".vision-card",-->
<!--                {-->
<!--                  x: -80,-->
<!--                  opacity: 0,-->
<!--                  skewX: 5-->
<!--                },-->
<!--                {-->
<!--                  x: 0,-->
<!--                  opacity: 1,-->
<!--                  skewX: 0,-->
<!--                  duration: 0.8,-->
<!--                  stagger: 0.2,-->
<!--                  ease: "power2.out"-->
<!--                }, "-=0.6"-->
<!--            )-->
<!--            .fromTo(".vision-image",-->
<!--                {-->
<!--                  x: 100,-->
<!--                  opacity: 0,-->
<!--                  scale: 0.8-->
<!--                },-->
<!--                {-->
<!--                  x: 0,-->
<!--                  opacity: 1,-->
<!--                  scale: 1,-->
<!--                  duration: 1.2,-->
<!--                  ease: "elastic.out(1, 0.5)"-->
<!--                }, "-=1"-->
<!--            );-->
<!--      }-->
<!--    });-->

<!--    // 5. Animation de la section Mission-->
<!--    ScrollTrigger.create({-->
<!--      trigger: ".mission-section",-->
<!--      start: "top 80%",-->
<!--      onEnter: () => {-->
<!--        const missionTl = gsap.timeline();-->

<!--        missionTl-->
<!--            .fromTo(".mission-section .section-title",-->
<!--                { y: 80, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 1 }-->
<!--            )-->
<!--            .fromTo(".mission-section .section-subtitle",-->
<!--                { y: 50, opacity: 0 },-->
<!--                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"-->
<!--            )-->
<!--            .fromTo(".mission-card",-->
<!--                {-->
<!--                  y: 100,-->
<!--                  opacity: 0,-->
<!--                  scale: 0.8-->
<!--                },-->
<!--                {-->
<!--                  y: 0,-->
<!--                  opacity: 1,-->
<!--                  scale: 1,-->
<!--                  duration: 0.8,-->
<!--                  stagger: {-->
<!--                    amount: 0.8,-->
<!--                    from: "center"-->
<!--                  },-->
<!--                  ease: "back.out(1.3)"-->
<!--                }, "-=0.4"-->
<!--            )-->
<!--            .fromTo(".mission-icon",-->
<!--                {-->
<!--                  scale: 0,-->
<!--                  rotation: -180-->
<!--                },-->
<!--                {-->
<!--                  scale: 1,-->
<!--                  rotation: 0,-->
<!--                  duration: 0.6,-->
<!--                  stagger: 0.1,-->
<!--                  ease: "back.out(2.5)"-->
<!--                }, "-=1.2"-->
<!--            );-->
<!--      }-->
<!--    });-->

<!--    // 6. Effets hover améliorés pour les cartes-->
<!--    document.querySelectorAll('.value-card, .trust-card, .vision-card, .mission-card').forEach(card => {-->
<!--      card.addEventListener('mouseenter', () => {-->
<!--        gsap.to(card, {-->
<!--          y: -10,-->
<!--          scale: 1.02,-->
<!--          duration: 0.3,-->
<!--          ease: "power2.out"-->
<!--        });-->

<!--        const icon = card.querySelector('.card-icon, .trust-icon, .mission-icon');-->
<!--        if (icon) {-->
<!--          gsap.to(icon, {-->
<!--            scale: 1.1,-->


<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="flex flex-col min-h-screen">&ndash;&gt;-->
<!--&lt;!&ndash;    <Header />&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Section Hero &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="px-4 pt-40 pb-12 lg:pt-48 hero-section">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="w-full mx-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start hero-content">&ndash;&gt;-->
<!--&lt;!&ndash;            <h1 class="lg:text-5xl text-3xl text-center montserrat montserrat-700 text-secondary mb-6 hero-title">&ndash;&gt;-->
<!--&lt;!&ndash;              {{service.value}}&ndash;&gt;-->
<!--&lt;!&ndash;            </h1>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="hero-descriptions">&ndash;&gt;-->
<!--&lt;!&ndash;              <h5 class="lg:montserrat montserrat-400 lg:text-xl text-base py-3 lg:leading-relaxed hero-description"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-for="(description, index) in descriptions" :key="index">&ndash;&gt;-->
<!--&lt;!&ndash;                {{description.value}}&ndash;&gt;-->
<!--&lt;!&ndash;              </h5>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="w-full lg:w-6/12 hidden lg:flex hero-image">&ndash;&gt;-->
<!--&lt;!&ndash;            <Image1 />&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Section Valeurs &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="bg-blue-50 lg:px-8 flex flex-col lg:py-12 py-8 justify-center values-section">&ndash;&gt;-->
<!--&lt;!&ndash;      <div id="section1" class="container mx-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center section-title">&ndash;&gt;-->
<!--&lt;!&ndash;          Nos valeurs fondamentales&ndash;&gt;-->
<!--&lt;!&ndash;        </h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p class="text-primary lg:text-xl text-lg lg:py-10 py-5 w-full lg:px-10 px-5 font-primary section-subtitle">&ndash;&gt;-->
<!--&lt;!&ndash;          Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5 lg:px-0 px-5 lg:space-y-0 space-y-5 container mx-auto values-grid">&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-for="(valeur, index) in locations" :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;               class="rounded-lg shadow-lg overflow-hidden flex flex-col h-full value-card"&ndash;&gt;-->
<!--&lt;!&ndash;               :data-index="index">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="relative h-48 card-image-container">&ndash;&gt;-->
<!--&lt;!&ndash;              <img :src="valeur.image" alt="Image de fond" class="w-full h-full object-cover card-image">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-center text-white card-overlay">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="mb-3 card-icon">&ndash;&gt;-->
<!--&lt;!&ndash;                  &lt;!&ndash; Vos icônes SVG existantes &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-if="valeur.title === 'Confiance'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M16 16h6l-9 15-9-15h6v-6h6v6z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="valeur.title === 'Responsabilité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="valeur.title === 'Innovation'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="valeur.title === 'Proximité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                    <circle cx="9" cy="7" r="4"></circle>&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="valeur.title === 'Sécurité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M7 11V7a5 5 0 0110 0v4"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <h2 class="text-2xl font-bold tracking-wider card-title">{{ valeur.title }}</h2>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="p-6 bg-white flex-grow card-content">&ndash;&gt;-->
<!--&lt;!&ndash;              <p class="text-gray-800 leading-relaxed text-lg">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ valeur.description }}&ndash;&gt;-->
<!--&lt;!&ndash;              </p>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Section Confiance &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="lg:px-8 flex flex-col py-12 justify-center trust-section">&ndash;&gt;-->
<!--&lt;!&ndash;      <div id="section2" class="container mx-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center section-title">&ndash;&gt;-->
<!--&lt;!&ndash;          Pourquoi nous faire confiance ?&ndash;&gt;-->
<!--&lt;!&ndash;        </h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p class="text-gray-700 montserrat montserrat-400 text-xl lg:py-8 w-full lg:px-20 p-6 text-center section-subtitle">&ndash;&gt;-->
<!--&lt;!&ndash;          Nous disposons d'actifs de qualité que nous employons au profit de nos clients&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->

<!--&lt;!&ndash;        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-6 lg:space-y-0 space-y-6 container mx-auto trust-grid">&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-for="(raison, index) in locations2" :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;               class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 trust-card"&ndash;&gt;-->
<!--&lt;!&ndash;               :data-index="index">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="h-24 bg-gradient-to-r from-primary to-secondary flex justify-center items-center card-header">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="text-white flex flex-col items-center">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="mb-2 trust-icon">&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                    <polyline points="22 4 12 14.01 9 11.01"></polyline>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                    <circle cx="9" cy="7" r="4"></circle>&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&ndash;&gt;-->
<!--&lt;!&ndash;                    <line x1="12" y1="5" x2="12" y2="19"></line>&ndash;&gt;-->
<!--&lt;!&ndash;                    <line x1="5" y1="12" x2="19" y2="12"></line>&ndash;&gt;-->
<!--&lt;!&ndash;                  </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="p-6 bg-white flex-grow trust-content">&ndash;&gt;-->
<!--&lt;!&ndash;              <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ raison.description }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Section Vision &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="lg:px-8 flex flex-col py-12 bg-primary vision-section">&ndash;&gt;-->
<!--&lt;!&ndash;      <div id="section3" class="container mx-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="flex flex-col vision-content">&ndash;&gt;-->
<!--&lt;!&ndash;            <h1 class="text-white lg:text-5xl text-3xl pb-10 lg:text-left text-center montserrat montserrat-700 w-full vision-title">&ndash;&gt;-->
<!--&lt;!&ndash;              Nous misons sur l'avenir&ndash;&gt;-->
<!--&lt;!&ndash;            </h1>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="md:grid lg:grid-cols-2 grid-cols-1 gap-4 lg:space-y-0 space-y-4 container mx-auto vision-grid">&ndash;&gt;-->
<!--&lt;!&ndash;              <div v-for="(vision, index) in visions" :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;                   class="group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 vision-card"&ndash;&gt;-->
<!--&lt;!&ndash;                   :data-index="index">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="p-6 bg-white flex-grow vision-card-content">&ndash;&gt;-->
<!--&lt;!&ndash;                  <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ vision.description }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="flex w-full h-full max-w-lg py-10 justify-start flex-wrap px-5 lg:px-20 gap-2 vision-image">&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src="girl" alt="image girl" class="object-cover transition-transform duration-500 hover:scale-105">&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Section Mission &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="lg:px-8 flex flex-col py-12 justify-center mission-section">&ndash;&gt;-->
<!--&lt;!&ndash;      <div id="section4" class="container mx-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        <h1 class="text-secondary lg:text-5xl text-3xl montserrat-700 montserrat text-center section-title">&ndash;&gt;-->
<!--&lt;!&ndash;          Créons des opportunités pour tous !&ndash;&gt;-->
<!--&lt;!&ndash;        </h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <p class="text-gray-600 montserrat lg:text-xl text-lg py-8 w-full lg:px-10 px-6 lg:text-center section-subtitle">&ndash;&gt;-->
<!--&lt;!&ndash;          Notre mission, « développer des produits financiers capables de changer l'avenir des entrepreneurs », s'inscrit dans la vision d'entreprise telle qu'énoncée plus haut. À ce titre, les missions de Cresaf S.A peuvent aisément se deviner :&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-2 container mx-auto mission-grid">&ndash;&gt;-->
<!--&lt;!&ndash;          <div v-for="(location3, index) in locations3" :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;               class="group rounded-lg overflow-hidden flex flex-col mission-card"&ndash;&gt;-->
<!--&lt;!&ndash;               :data-index="index">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="lg:pt-10 pt-5 flex justify-center items-center mission-icon-container">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="flex flex-col items-center justify-center border border-gray-200 p-2 rounded-xl mission-icon-bg" :class="location3.bg">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="text-white mission-icon">&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconCreditCard stroke={2} class="h-9 w-12" v-if="index === 0"/>&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconMapPinDollar stroke={2} v-else-if="index === 1" class="h-9 w-12" />&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconUsersPlus stroke={2} v-else-if="index === 2" class="h-9 w-12" />&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconBuildingPlus stroke={2} v-else-if="index === 3" class="h-9 w-12" />&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconBuildingCommunity stroke={2} v-else-if="index === 4" class="h-9 w-12" />&ndash;&gt;-->
<!--&lt;!&ndash;                  <IconDeviceIpadHorizontalPlus stroke={2} v-else class="h-9 w-12" />&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="p-6 bg-white flex-grow text-center mission-content">&ndash;&gt;-->
<!--&lt;!&ndash;              <p class="montserrat montserrat-400 text-gray-700 text-lg">{{ location3.description }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    <Footer />&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script setup>&ndash;&gt;-->
<!--&lt;!&ndash;import {ref, onMounted, nextTick} from "vue";&ndash;&gt;-->
<!--&lt;!&ndash;import { gsap } from 'gsap';&ndash;&gt;-->
<!--&lt;!&ndash;import { ScrollTrigger } from 'gsap/ScrollTrigger';&ndash;&gt;-->
<!--&lt;!&ndash;import Header from "@public/components/header.vue";&ndash;&gt;-->
<!--&lt;!&ndash;import Footer from "@public/components/footer.vue";&ndash;&gt;-->
<!--&lt;!&ndash;import Image1 from "@public/components/image.vue";&ndash;&gt;-->

<!--&lt;!&ndash;// Vos imports d'images existants...&ndash;&gt;-->
<!--&lt;!&ndash;import Valeur from "@/assets/images/cresaf/nos_valeurs_fondamentales.webp"&ndash;&gt;-->
<!--&lt;!&ndash;import Girl from "@/assets/images/girl.webp"&ndash;&gt;-->
<!--&lt;!&ndash;import Sommet from "@/assets/images/sommet.webp"&ndash;&gt;-->
<!--&lt;!&ndash;import Check from"@/assets/images/svg/check-rounded.svg"&ndash;&gt;-->
<!--&lt;!&ndash;import confiance from "@/assets/images/confiance.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import Responsibility from "@/assets/images/responsabilite.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import Innovation from "@/assets/images/innovation.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import Proximity from "@/assets/images/proximity.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import Security from "@/assets/images/security.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import Excellence from "@/assets/images/excellence.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;import ImageValue from "@public/components/imageValue.vue";&ndash;&gt;-->
<!--&lt;!&ndash;import {IconArrowRight} from "@tabler/icons-vue";&ndash;&gt;-->
<!--&lt;!&ndash;import { IconCreditCard } from '@tabler/icons-vue';&ndash;&gt;-->
<!--&lt;!&ndash;import { IconMapPinDollar } from '@tabler/icons-vue';&ndash;&gt;-->
<!--&lt;!&ndash;import { IconUsersPlus } from '@tabler/icons-vue';&ndash;&gt;-->
<!--&lt;!&ndash;import { IconBuildingPlus } from '@tabler/icons-vue';&ndash;&gt;-->
<!--&lt;!&ndash;import { IconBuildingCommunity } from '@tabler/icons-vue';&ndash;&gt;-->
<!--&lt;!&ndash;import { IconDeviceIpadHorizontalPlus } from '@tabler/icons-vue';&ndash;&gt;-->

<!--&lt;!&ndash;// Enregistrement des plugins GSAP&ndash;&gt;-->
<!--&lt;!&ndash;gsap.registerPlugin(ScrollTrigger);&ndash;&gt;-->

<!--&lt;!&ndash;// Vos données existantes...&ndash;&gt;-->
<!--&lt;!&ndash;const valeurs = Valeur&ndash;&gt;-->
<!--&lt;!&ndash;const girl = Girl&ndash;&gt;-->
<!--&lt;!&ndash;const sommet = Sommet&ndash;&gt;-->
<!--&lt;!&ndash;const check = Check&ndash;&gt;-->

<!--&lt;!&ndash;const descriptions = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    value: 'Notre objectif est de répondre aux besoins de tous ceux qui, dans le secteur informel ou non, ont besoin d\'une assistance financière fiable, directe et personnalisée, en devenant le premier pourvoyeur de microcrédits.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    value: 'Le Crédit Solidaire d\'Afrique (CRESAF) est une société anonyme créée par un groupe d\'entrepreneurs locaux désireux de contribuer au progrès économique et social du Cameroun en proposant des solutions de financement adaptées aux besoins des micros, petites et moyennes entreprises.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    value: 'Cresaf s\'appuie sur des valeurs de solidarité, de confiance, de transparence et de responsabilité pour renforcer l\'inclusion financière, soutenir l\'innovation et favoriser le développement durable dans le pays.'&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;const services = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    value: 'Qui sommes-nous ?'&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;const locations = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Confiance',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous bâtissons des relations de confiance avec nos clients, en garantissant la transparence et la sécurité de toutes nos transactions.',&ndash;&gt;-->
<!--&lt;!&ndash;    image: confiance&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Responsabilité',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous agissons de manière responsable, en intégrant les enjeux sociaux et environnementaux dans chacune de nos décisions.',&ndash;&gt;-->
<!--&lt;!&ndash;    image: Responsibility&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Innovation',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous nous engageons à proposer des services bancaires innovants, adaptés aux besoins spécifiques de nos clients et à l'évolution de l'économie.',&ndash;&gt;-->
<!--&lt;!&ndash;    image: Innovation&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Proximité',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous valorisons la proximité avec nos clients, en offrant un service personnalisé, humain et réactif pour répondre à leurs attentes',&ndash;&gt;-->
<!--&lt;!&ndash;    image: Proximity&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Sécurité',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous assurons une sécurité optimale pour vos transactions et la protection de vos données, afin de garantir votre tranquillité d'esprit.',&ndash;&gt;-->
<!--&lt;!&ndash;    image: Security&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    title:'Excellence',&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous visons l'excellence dans la qualité de nos services et l'efficacité de nos solutions, en plaçant toujours le client au centre de nos préoccupations.',&ndash;&gt;-->
<!--&lt;!&ndash;    image: Excellence&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;const locations2 = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Notre connaissance fine du terrain nous permet d'offrir des solutions adaptées aux besoins réels des populations et des entrepreneurs.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Nous combinons rigueur financière, innovation sociale et engagement humain pour maximiser l'impact de nos interventions.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Notre réseau de partenaires locaux et internationaux renforce notre capacité à agir efficacement et durablement.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Avec une équipe engagée et des outils flexibles, nous faisons de chaque accompagnement une opportunité de transformation.'&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;const locations3 = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Favoriser l'inclusion financière en accompagnant les populations et les acteurs économiques avec des solutions accessibles, adaptées et durables',&ndash;&gt;-->
<!--&lt;!&ndash;    bg: 'bg-primary'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Soutenir l'autonomisation économique à travers des services bancaires responsables, ancrés dans les réalités locales.',&ndash;&gt;-->
<!--&lt;!&ndash;    bg: 'bg-secondary'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Contribuer activement au développement social et économique en Afrique, en plaçant l'humain au cœur de nos priorités',&ndash;&gt;-->
<!--&lt;!&ndash;    bg: 'bg-primary'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:'Œuvrer chaque jour pour renforcer la capacité d'action des entreprises, entrepreneurs, des jeunes et des communautés',&ndash;&gt;-->
<!--&lt;!&ndash;    bg: 'bg-secondary'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description:' Bâtir une finance plus équitable, au service du progrès collectif grâce à une approche de proximité',&ndash;&gt;-->
<!--&lt;!&ndash;    bg: 'bg-primary'&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;const visions = ref([&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous aspirons à être une force motrice du changement pour transformer et établir le standard du secteur de la microfinance au Cameroun.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Les entrepreneurs sont confrontés à des défis uniques dans leurs activités quotidiennes, notamment le manque de solutions bancaires adaptées à leurs besoins spécifiques.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  {&ndash;&gt;-->
<!--&lt;!&ndash;    description: 'Nous tirons notre force de notre capacité à répondre à ces défis de manière directe, nous sommes déterminés à apporter des solutions bancaires simples, fiables et accessibles aux entrepreneurs, aux salariés et aux travailleurs indépendants.'&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;])&ndash;&gt;-->

<!--&lt;!&ndash;// Animations GSAP&ndash;&gt;-->
<!--&lt;!&ndash;onMounted(() => {&ndash;&gt;-->
<!--&lt;!&ndash;  nextTick(() => {&ndash;&gt;-->
<!--&lt;!&ndash;    // Configuration globale GSAP&ndash;&gt;-->
<!--&lt;!&ndash;    gsap.defaults({&ndash;&gt;-->
<!--&lt;!&ndash;      ease: "power2.out",&ndash;&gt;-->
<!--&lt;!&ndash;      duration: 1&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 1. Animation de la section Hero&ndash;&gt;-->
<!--&lt;!&ndash;    const heroTl = gsap.timeline({&ndash;&gt;-->
<!--&lt;!&ndash;      scrollTrigger: {&ndash;&gt;-->
<!--&lt;!&ndash;        trigger: ".hero-section",&ndash;&gt;-->
<!--&lt;!&ndash;        start: "top 90%",&ndash;&gt;-->
<!--&lt;!&ndash;        end: "bottom 20%",&ndash;&gt;-->
<!--&lt;!&ndash;        toggleActions: "play none none none"&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    heroTl&ndash;&gt;-->
<!--&lt;!&ndash;        .fromTo(".hero-title",&ndash;&gt;-->
<!--&lt;!&ndash;            { y: 100, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }&ndash;&gt;-->
<!--&lt;!&ndash;        )&ndash;&gt;-->
<!--&lt;!&ndash;        .fromTo(".hero-description",&ndash;&gt;-->
<!--&lt;!&ndash;            { y: 50, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.8"&ndash;&gt;-->
<!--&lt;!&ndash;        )&ndash;&gt;-->
<!--&lt;!&ndash;        .fromTo(".hero-image",&ndash;&gt;-->
<!--&lt;!&ndash;            { x: 100, opacity: 0, scale: 0.9 },&ndash;&gt;-->
<!--&lt;!&ndash;            { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, "-=1"&ndash;&gt;-->
<!--&lt;!&ndash;        );&ndash;&gt;-->

<!--&lt;!&ndash;    // 2. Animation de la section Valeurs&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.create({&ndash;&gt;-->
<!--&lt;!&ndash;      trigger: ".values-section",&ndash;&gt;-->
<!--&lt;!&ndash;      start: "top 80%",&ndash;&gt;-->
<!--&lt;!&ndash;      onEnter: () => {&ndash;&gt;-->
<!--&lt;!&ndash;        const valuesTl = gsap.timeline();&ndash;&gt;-->

<!--&lt;!&ndash;        valuesTl&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".values-section .section-title",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 80, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".values-section .section-subtitle",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 50, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".value-card",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 100,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0.8,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotationY: 15&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotationY: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.8,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: {&ndash;&gt;-->
<!--&lt;!&ndash;                    amount: 0.6,&ndash;&gt;-->
<!--&lt;!&ndash;                    from: "start"&ndash;&gt;-->
<!--&lt;!&ndash;                  },&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "back.out(1.2)"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=0.4"&ndash;&gt;-->
<!--&lt;!&ndash;            );&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 3. Animation de la section Confiance&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.create({&ndash;&gt;-->
<!--&lt;!&ndash;      trigger: ".trust-section",&ndash;&gt;-->
<!--&lt;!&ndash;      start: "top 80%",&ndash;&gt;-->
<!--&lt;!&ndash;      onEnter: () => {&ndash;&gt;-->
<!--&lt;!&ndash;        const trustTl = gsap.timeline();&ndash;&gt;-->

<!--&lt;!&ndash;        trustTl&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".trust-section .section-title",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 80, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 1 }&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".trust-section .section-subtitle",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 50, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".trust-card",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 80,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0.9&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.6,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: 0.15,&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "power3.out"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=0.4"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".trust-icon",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotation: 180&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotation: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.5,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: 0.1,&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "back.out(2)"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=0.8"&ndash;&gt;-->
<!--&lt;!&ndash;            );&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 4. Animation de la section Vision&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.create({&ndash;&gt;-->
<!--&lt;!&ndash;      trigger: ".vision-section",&ndash;&gt;-->
<!--&lt;!&ndash;      start: "top 80%",&ndash;&gt;-->
<!--&lt;!&ndash;      onEnter: () => {&ndash;&gt;-->
<!--&lt;!&ndash;        const visionTl = gsap.timeline();&ndash;&gt;-->

<!--&lt;!&ndash;        visionTl&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".vision-title",&ndash;&gt;-->
<!--&lt;!&ndash;                { x: -100, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".vision-card",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  x: -80,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  skewX: 5&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  x: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  skewX: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.8,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: 0.2,&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "power2.out"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=0.6"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".vision-image",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  x: 100,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0.8&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  x: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 1.2,&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "elastic.out(1, 0.5)"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=1"&ndash;&gt;-->
<!--&lt;!&ndash;            );&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 5. Animation de la section Mission&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.create({&ndash;&gt;-->
<!--&lt;!&ndash;      trigger: ".mission-section",&ndash;&gt;-->
<!--&lt;!&ndash;      start: "top 80%",&ndash;&gt;-->
<!--&lt;!&ndash;      onEnter: () => {&ndash;&gt;-->
<!--&lt;!&ndash;        const missionTl = gsap.timeline();&ndash;&gt;-->

<!--&lt;!&ndash;        missionTl&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".mission-section .section-title",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 80, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 1 }&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".mission-section .section-subtitle",&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 50, opacity: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;                { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".mission-card",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 100,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0.8&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  y: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.8,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: {&ndash;&gt;-->
<!--&lt;!&ndash;                    amount: 0.8,&ndash;&gt;-->
<!--&lt;!&ndash;                    from: "center"&ndash;&gt;-->
<!--&lt;!&ndash;                  },&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "back.out(1.3)"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=0.4"&ndash;&gt;-->
<!--&lt;!&ndash;            )&ndash;&gt;-->
<!--&lt;!&ndash;            .fromTo(".mission-icon",&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotation: -180&ndash;&gt;-->
<!--&lt;!&ndash;                },&ndash;&gt;-->
<!--&lt;!&ndash;                {&ndash;&gt;-->
<!--&lt;!&ndash;                  scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;                  rotation: 0,&ndash;&gt;-->
<!--&lt;!&ndash;                  duration: 0.6,&ndash;&gt;-->
<!--&lt;!&ndash;                  stagger: 0.1,&ndash;&gt;-->
<!--&lt;!&ndash;                  ease: "back.out(2.5)"&ndash;&gt;-->
<!--&lt;!&ndash;                }, "-=1.2"&ndash;&gt;-->
<!--&lt;!&ndash;            );&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 6. Effets hover améliorés pour les cartes&ndash;&gt;-->
<!--&lt;!&ndash;    document.querySelectorAll('.value-card, .trust-card, .vision-card, .mission-card').forEach(card => {&ndash;&gt;-->
<!--&lt;!&ndash;      card.addEventListener('mouseenter', () => {&ndash;&gt;-->
<!--&lt;!&ndash;        gsap.to(card, {&ndash;&gt;-->
<!--&lt;!&ndash;          y: -10,&ndash;&gt;-->
<!--&lt;!&ndash;          scale: 1.02,&ndash;&gt;-->
<!--&lt;!&ndash;          duration: 0.3,&ndash;&gt;-->
<!--&lt;!&ndash;          ease: "power2.out"&ndash;&gt;-->
<!--&lt;!&ndash;        });&ndash;&gt;-->

<!--&lt;!&ndash;        const icon = card.querySelector('.card-icon, .trust-icon, .mission-icon');&ndash;&gt;-->
<!--&lt;!&ndash;        if (icon) {&ndash;&gt;-->
<!--&lt;!&ndash;          gsap.to(icon, {&ndash;&gt;-->
<!--&lt;!&ndash;            scale: 1.1,&ndash;&gt;-->
<!--&lt;!&ndash;            rotation: 5,&ndash;&gt;-->
<!--&lt;!&ndash;            duration: 0.3,&ndash;&gt;-->
<!--&lt;!&ndash;            ease: "power2.out"&ndash;&gt;-->
<!--&lt;!&ndash;          });&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->

<!--&lt;!&ndash;      card.addEventListener('mouseleave', () => {&ndash;&gt;-->
<!--&lt;!&ndash;        gsap.to(card, {&ndash;&gt;-->
<!--&lt;!&ndash;          y: 0,&ndash;&gt;-->
<!--&lt;!&ndash;          scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;          duration: 0.3,&ndash;&gt;-->
<!--&lt;!&ndash;          ease: "power2.out"&ndash;&gt;-->
<!--&lt;!&ndash;        });&ndash;&gt;-->

<!--&lt;!&ndash;        const icon = card.querySelector('.card-icon, .trust-icon, .mission-icon');&ndash;&gt;-->
<!--&lt;!&ndash;        if (icon) {&ndash;&gt;-->
<!--&lt;!&ndash;          gsap.to(icon, {&ndash;&gt;-->
<!--&lt;!&ndash;            scale: 1,&ndash;&gt;-->
<!--&lt;!&ndash;            rotation: 0,&ndash;&gt;-->
<!--&lt;!&ndash;            duration: 0.3,&ndash;&gt;-->
<!--&lt;!&ndash;            ease: "power2.out"&ndash;&gt;-->
<!--&lt;!&ndash;          });&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 7. Animation parallax pour les images de fond&ndash;&gt;-->
<!--&lt;!&ndash;    gsap.utils.toArray('.card-image').forEach(img => {&ndash;&gt;-->
<!--&lt;!&ndash;      gsap.to(img, {&ndash;&gt;-->
<!--&lt;!&ndash;        yPercent: -20,&ndash;&gt;-->
<!--&lt;!&ndash;        ease: "none",&ndash;&gt;-->
<!--&lt;!&ndash;        scrollTrigger: {&ndash;&gt;-->
<!--&lt;!&ndash;          trigger: img.closest('.value-card'),&ndash;&gt;-->
<!--&lt;!&ndash;          start: "top bottom",&ndash;&gt;-->
<!--&lt;!&ndash;          end: "bottom top",&ndash;&gt;-->
<!--&lt;!&ndash;          scrub: true&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 8. Animation de révélation progressive pour les textes longs&ndash;&gt;-->
<!--&lt;!&ndash;    gsap.utils.toArray('.hero-description').forEach((desc, i) => {&ndash;&gt;-->
<!--&lt;!&ndash;      gsap.fromTo(desc,&ndash;&gt;-->
<!--&lt;!&ndash;          {&ndash;&gt;-->
<!--&lt;!&ndash;            opacity: 0,&ndash;&gt;-->
<!--&lt;!&ndash;            y: 30,&ndash;&gt;-->
<!--&lt;!&ndash;            clipPath: "inset(100% 0 0 0)"&ndash;&gt;-->
<!--&lt;!&ndash;          },&ndash;&gt;-->
<!--&lt;!&ndash;          {&ndash;&gt;-->
<!--&lt;!&ndash;            opacity: 1,&ndash;&gt;-->
<!--&lt;!&ndash;            y: 0,&ndash;&gt;-->
<!--&lt;!&ndash;            clipPath: "inset(0% 0 0 0)",&ndash;&gt;-->
<!--&lt;!&ndash;            duration: 1,&ndash;&gt;-->
<!--&lt;!&ndash;            delay: i * 0.3,&ndash;&gt;-->
<!--&lt;!&ndash;            scrollTrigger: {&ndash;&gt;-->
<!--&lt;!&ndash;              trigger: desc,&ndash;&gt;-->
<!--&lt;!&ndash;              start: "top 85%",&ndash;&gt;-->
<!--&lt;!&ndash;              toggleActions: "play none none none"&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;          }&ndash;&gt;-->
<!--&lt;!&ndash;      );&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 9. Animation des overlay sur les cartes valeurs&ndash;&gt;-->
<!--&lt;!&ndash;    gsap.utils.toArray('.card-overlay').forEach(overlay => {&ndash;&gt;-->
<!--&lt;!&ndash;      const card = overlay.closest('.value-card');&ndash;&gt;-->

<!--&lt;!&ndash;      card.addEventListener('mouseenter', () => {&ndash;&gt;-->
<!--&lt;!&ndash;        gsap.to(overlay, {&ndash;&gt;-->
<!--&lt;!&ndash;          backgroundColor: "rgba(59, 130, 246, 0.7)",&ndash;&gt;-->
<!--&lt;!&ndash;          duration: 0.3&ndash;&gt;-->
<!--&lt;!&ndash;        });&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->

<!--&lt;!&ndash;      card.addEventListener('mouseleave', () => {&ndash;&gt;-->
<!--&lt;!&ndash;        gsap.to(overlay, {&ndash;&gt;-->
<!--&lt;!&ndash;          backgroundColor: "rgba(59, 130, 246, 0.5)",&ndash;&gt;-->
<!--&lt;!&ndash;          duration: 0.3&ndash;&gt;-->
<!--&lt;!&ndash;        });&ndash;&gt;-->
<!--&lt;!&ndash;      });&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 10. Animation de compteur/progression (optionnel pour les statistiques)&ndash;&gt;-->
<!--&lt;!&ndash;    const animateCounter = (element, target) => {&ndash;&gt;-->
<!--&lt;!&ndash;      gsap.fromTo(element,&ndash;&gt;-->
<!--&lt;!&ndash;          { innerHTML: 0 },&ndash;&gt;-->
<!--&lt;!&ndash;          {&ndash;&gt;-->
<!--&lt;!&ndash;            innerHTML: target,&ndash;&gt;-->
<!--&lt;!&ndash;            duration: 2,&ndash;&gt;-->
<!--&lt;!&ndash;            snap: { innerHTML: 1 },&ndash;&gt;-->
<!--&lt;!&ndash;            scrollTrigger: {&ndash;&gt;-->
<!--&lt;!&ndash;              trigger: element,&ndash;&gt;-->
<!--&lt;!&ndash;              start: "top 80%",&ndash;&gt;-->
<!--&lt;!&ndash;              toggleActions: "play none none none"&ndash;&gt;-->
<!--&lt;!&ndash;            }&ndash;&gt;-->
<!--&lt;!&ndash;          }&ndash;&gt;-->
<!--&lt;!&ndash;      );&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->

<!--&lt;!&ndash;    // 11. Animation fluide pour les gradients de fond&ndash;&gt;-->
<!--&lt;!&ndash;    gsap.utils.toArray('.card-header').forEach(header => {&ndash;&gt;-->
<!--&lt;!&ndash;      const tl = gsap.timeline({ repeat: -1, yoyo: true });&ndash;&gt;-->
<!--&lt;!&ndash;      tl.to(header, {&ndash;&gt;-->
<!--&lt;!&ndash;        background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",&ndash;&gt;-->
<!--&lt;!&ndash;        duration: 3,&ndash;&gt;-->
<!--&lt;!&ndash;        ease: "power2.inOut"&ndash;&gt;-->
<!--&lt;!&ndash;      })&ndash;&gt;-->
<!--&lt;!&ndash;          .to(header, {&ndash;&gt;-->
<!--&lt;!&ndash;            background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",&ndash;&gt;-->
<!--&lt;!&ndash;            duration: 3,&ndash;&gt;-->
<!--&lt;!&ndash;            ease: "power2.inOut"&ndash;&gt;-->
<!--&lt;!&ndash;          });&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    // 12. Animation de typing effect pour les titres principaux (optionnel)&ndash;&gt;-->
<!--&lt;!&ndash;    const typewriterEffect = (element, text, speed = 50) => {&ndash;&gt;-->
<!--&lt;!&ndash;      element.innerHTML = '';&ndash;&gt;-->
<!--&lt;!&ndash;      let i = 0;&ndash;&gt;-->

<!--&lt;!&ndash;      const timer = setInterval(() => {&ndash;&gt;-->
<!--&lt;!&ndash;        if (i < text.length) {&ndash;&gt;-->
<!--&lt;!&ndash;          element.innerHTML += text.charAt(i);&ndash;&gt;-->
<!--&lt;!&ndash;          i++;&ndash;&gt;-->
<!--&lt;!&ndash;        } else {&ndash;&gt;-->
<!--&lt;!&ndash;          clearInterval(timer);&ndash;&gt;-->
<!--&lt;!&ndash;        }&ndash;&gt;-->
<!--&lt;!&ndash;      }, speed);&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->

<!--&lt;!&ndash;    // 13. Refresh ScrollTrigger après toutes les animations&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.refresh();&ndash;&gt;-->

<!--&lt;!&ndash;    // 14. Animation de nettoyage au démontage&ndash;&gt;-->
<!--&lt;!&ndash;    return () => {&ndash;&gt;-->
<!--&lt;!&ndash;      ScrollTrigger.getAll().forEach(trigger => trigger.kill());&ndash;&gt;-->
<!--&lt;!&ndash;      gsap.killTweensOf("*");&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->
<!--&lt;!&ndash;  });&ndash;&gt;-->
<!--&lt;!&ndash;});&ndash;&gt;-->

<!--&lt;!&ndash;// Fonction utilitaire pour refresh des animations lors de changements dynamiques&ndash;&gt;-->
<!--&lt;!&ndash;const refreshAnimations = () => {&ndash;&gt;-->
<!--&lt;!&ndash;  nextTick(() => {&ndash;&gt;-->
<!--&lt;!&ndash;    ScrollTrigger.refresh();&ndash;&gt;-->
<!--&lt;!&ndash;  });&ndash;&gt;-->
<!--&lt;!&ndash;};&ndash;&gt;-->

<!--&lt;!&ndash;// Exposer les fonctions si nécessaire&ndash;&gt;-->
<!--&lt;!&ndash;defineExpose({&ndash;&gt;-->
<!--&lt;!&ndash;  refreshAnimations&ndash;&gt;-->
<!--&lt;!&ndash;});&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--<style scoped>-->
<!--/* Styles personnalisés pour améliorer les animations */-->
<!--.hero-section {-->
<!--  overflow: hidden;-->
<!--}-->

<!--.value-card,-->
<!--.trust-card,-->
<!--.vision-card,-->
<!--.mission-card {-->
<!--  transform-origin: center;-->
<!--  backface-visibility: hidden;-->
<!--  perspective: 1000px;-->
<!--}-->

<!--.card-image {-->
<!--  will-change: transform;-->
<!--}-->

<!--.card-overlay {-->
<!--  transition: background-color 0.3s ease;-->
<!--}-->

<!--.montserrat {-->
<!--  font-family: 'Montserrat', sans-serif;-->
<!--}-->

<!--.montserrat-400 {-->
<!--  font-weight: 400;-->
<!--}-->

<!--.montserrat-700 {-->
<!--  font-weight: 700;-->
<!--}-->

<!--/* Amélioration des performances pour les animations */-->
<!--* {-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--}-->

<!--.card-icon,-->
<!--.trust-icon,-->
<!--.mission-icon {-->
<!--  will-change: transform;-->
<!--}-->

<!--/* Responsive improvements */-->
<!--@media (max-width: 768px) {-->
<!--  .hero-title {-->
<!--    font-size: 2rem;-->
<!--  }-->

<!--  .section-title {-->
<!--    font-size: 2rem;-->
<!--  }-->
<!--}-->

<!--/* Animation pour les boutons et éléments interactifs */-->
<!--.interactive-element {-->
<!--  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);-->
<!--}-->

<!--.interactive-element:hover {-->
<!--  transform: translateY(-2px);-->
<!--  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);-->
<!--}-->

<!--/* Amélioration des ombres pour un effet de profondeur */-->
<!--.shadow-custom {-->
<!--  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),-->
<!--  0 2px 4px -1px rgba(0, 0, 0, 0.06);-->
<!--}-->

<!--.shadow-custom-hover {-->
<!--  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),-->
<!--  0 10px 10px -5px rgba(0, 0, 0, 0.04);-->
<!--}-->
<!--</style>-->