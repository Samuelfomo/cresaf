<!-- Home.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header/>

    <div class="w-full mx-auto px-4 pt-52 pb-24 lg:py-80 bg-primary">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 md:px-10 lg:px-32">
          <h1 class="text-4xl lg:text-6xl text-left montserrat montserrat-700 text-white pb-0">
            Vous ambitionnez,<span class="text-primary-accent montserrat montserrat-700 block my-0">nous finan&ccedil;ons<em
                class="montserrat montserrat-800 text-italic ms-3">!</em></span>
          </h1>
          <p class="text-white text-left montserrat montserrat-200 text-2xl my-10 lg:mr-20" style="font-weight: 300">
            Favoriser le développement économique par l'épargne, l'octroi de crédits et la facilitation des services
            financiers
          </p>
          <button type="button" @click="openWhatsApp" class="btn btn-primary-accent mt-0 mb-0">
            <IconBrandWhatsapp class="mr-2" stroke={2} />Parlez à un conseiller
          </button>
        </div>
        <div class="w-full lg:w-4/12">
        </div>
      </div>
    </div>

    <div class="bg-white px-8 flex flex-col min-h-screen py-12 z-30">
      <h2 class="text-blue-950 font-semibold text-3xl uppercase text-center pb-5">nos services de transfert
        d'argent</h2>

      <Image2/>

      <div class="w-full h-full flex flex-col justify-end items-center mt-auto lg:pt-16 pt-10 border-t lg:border-none">
        <h1 class="text-3xl font-semibold text-center text-black">Un guichet unique pour
          <span class="text-green-600 font-semibold">vos finances </span>
        </h1>
<!--        <button type="button" @click="openWhatsApp" class="btn btn-primary mt-6 mb-0">-->
<!--          <IconBrandWhatsapp class="mr-2" stroke={2} />-->
<!--          Parlez à un conseiller-->
<!--        </button>-->
        <p class="w-full justify-center items-start max-w-6xl lg:px-10 text-lg py-10">
          Avec le CRESAF, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
          d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
        </p>
      </div>

      <div class="flex w-full h-full py-5 justify-center flex-wrap gap-5">
        <div v-for="(location, index) in locations" :key="index" class="group h-full w-full min-h-80 max-w-sm
         border rounded-lg p-8 bg-blue-50  hover:bg-blue-950 hover:bg-opacity-90 group-hover:text-white hover:text-white">
          <div class="flex justify-start items-center mb-7">
            <img :src="location.icon" alt="img" class="h-20 w-20 rounded-full border-2 border-white">
            <!--            <p class="text-red-500 w-full flex justify-end font-light text-lg animate-blink">Bientôt disponible...</p>-->
          </div>
          <div class="justify-between items-start mb-7 hidden">
            <img :src="location.icon" alt="img" class="h-20 w-20 rounded-full border-2 border-white">
            <p class="text-red-500 w-full flex justify-end font-light text-lg animate-blink">Bientôt disponible...</p>
          </div>
          <p class="py-1 text-xl font-semibold">
            {{ location.titre }}
          </p>
          <h3 class="font-sans py-2">{{ location.description }}</h3>
          <div
              class="flex text-lg font-primary justify-start items-center pt-5 text-green-600 group-hover:text-white cursor-pointer"
              @click="openPdf(location.pdfContent)">
            {{ location.suite }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l14 0"/>
              <path d="M13 18l6 -6"/>
              <path d="M13 6l6 6"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex lg:justify-center justify-between items-center w-full flex-wrap my-5">
        <div class="flex p-2 items-center gap-2" v-for="(location2, index) in locations2" :key="index">
          <div class="rounded-full h-4 w-4 flex justify-center items-center bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="text-white">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l5 5l10 -10"/>
            </svg>
          </div>
          <h3 class="text-lg text-black">{{ location2.titre }}</h3>
        </div>
      </div>
    </div>
    <div class="bg-blue-950  lg:px-8 flex flex-col h-full py-12 items-center">
      <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">Pourquoi plus de 5 millions de membres
        aiment-ils ?</h1>
      <p class="text-gray-300 text-lg p-5 w-full lg:text-start text-center lg:px-10">
        Chez CRESAF, plus de 5 millions de membres nous font confiance grâce à nos solutions financières adaptées,
        notre accès facilité au crédit avec des conditions souples, des taux compétitifs et un accompagnement
        personnalisé.
      </p>
      <div class="container mx-auto py-8 px-4 md:px-0">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div class="flex flex-col p-2 max-w-lg" v-for="(location3, index) in locations3" :key="index">
            <h3 class="text-2xl font-bold text-white text-center md:text-start ">{{ location3.titre }}</h3>
            <p class="text-gray-300 text-lg text-center md:text-start">{{ location3.description }}</p>
          </div>
        </div>
      </div>
      <!--      <div class="flex w-full lg:justify-start md:justify-center justify-center flex-wrap lg:mt-5 lg:px-8">-->
      <!--        <div class="flex flex-col p-2 max-w-sm"  v-for="(location3, index) in locations3" :key="index">-->
      <!--          <h3 class="text-2xl font-bold text-white text-center lg:text-start">{{ location3.titre }}</h3>-->
      <!--          <p class="text-gray-300 text-lg text-center lg:text-start">{{location3.description}}</p>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="min-h-full flex justify-between items-center w-full flex-wrap lg:px-8 px-1 bg-blue-950 pb-2">
      <table class="w-full border-t-2 border-white">
        <thead>
        <tr class="flex w-full flex-wrap justify-between lg:flex-nowrap lg:gap-0 gap-8 lg:pt-0 py-10">
          <th class="lg:border-r-2 justify-start flex lg:w-full w-36 lg:p-8 border-white">
            <div class="flex flex-col lg:items-start items-center gap-1 w-full">
              <h1 class="text-4xl font-bold text-white">5M+</h1>
              <p class="text-lg text-gray-400 font-roboto">Membres</p>
            </div>
          </th>
          <th class="lg:border-r-2 justify-start flex lg:w-full w-44 lg:p-8 border-white">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">95%</h1>
              <p class="text-lg text-gray-400 font-roboto">Satisfaction des clients</p>
            </div>
          </th>
          <th class="lg:border-r-2 justify-start flex lg:w-full w-40 lg:p-8 border-white">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">73%</h1>
              <p class="text-lg text-gray-400 font-roboto">Croissance annuelle</p>
            </div>
          </th>
          <th class="justify-start flex lg:w-full w-40 lg:p-8">
            <div class="flex flex-col lg:items-start items-center gap-1">
              <h1 class="text-4xl font-bold text-white">250B</h1>
              <p class="text-lg text-gray-400 font-roboto">Gestion des fonds</p>
            </div>
          </th>
        </tr>
        </thead>
      </table>

      <div class="lg:px-8 flex flex-col h-full py-12 items-center w-full">
        <h1 class="text-white lg:text-4xl text-3xl text-center font-bold">Produits conçus pour les entreprises de toutes
          tailles.</h1>
        <p class="text-gray-400 text-lg py-5 w-full text-start">
          Que vous soyez une petite startup, une PME ou une grande entreprise, nous offrons des solutions
          financières adaptées à vos besoins :
        </p>
        <div class="container mx-auto py-8 px-4 md:px-6 lg:px-0">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div
                v-for="(location4, index) in locations4"
                :key="index"
                class="bg-blue-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div class="p-6 flex space-x-4">
                <div class="flex-shrink-0">
                  <div class="flex w-full min-h-10 min-w-16 items-center justify-center shadow-sm">
                    <img :src="location4.icon" alt="Icon" class="object-contain rounded-full h-16 w-16 ">
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 text-lg font-medium leading-relaxed">
                    {{ location4.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:px-8 flex flex-col h-full py-12 items-center">
        <h1 class="text-white lg:text-4xl text-3xl font-bold text-center">Comment obtenir une carte de bloc en 3 étapes
          simples</h1>
        <p class="text-gray-300 text-lg p-5 w-full text-start">
          La carte Bloc permet de suivre, de sécuriser et de gérer les comptes de nos clients,
          de faciliter les opérations financières et de garantir la traçabilité des transactions.
        </p>

        <div class="flex items-center w-full flex-row py-5 px-1 justify-between">
          <div class="flex p-2 justify-between items-center w-full max-w-xs gap-2"
               v-for="(location6, index) in locations5" :key="index">
            <div
                class="rounded-full h-12 w-12 flex justify-center items-center bg-green-600 border-4 border-white border-opacity-80 hover:border-white">
              <h1 class="text-white font-bold text-xl">
                {{ index + 1 }}
              </h1>
            </div>
            <img :src="location6.icon" class="flex-" alt="any">
          </div>
          <div class="rounded-full h-8 w-8 flex justify-center items-center bg-green-500 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="text-white">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l5 5l10 -10"/>
            </svg>
          </div>
        </div>
        <div class="container mx-auto py-8 px-4 md:px-6 lg:px-0 ">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            <div class="flex flex-col p-2 max-w-lg" v-for="(location6, index) in locations5" :key="index">
              <h3 class="text-2xl font-bold text-white text-center lg:text-start">{{ location6.titre }}</h3>
              <p class="text-gray-400 text-lg text-center lg:text-start">{{ location6.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center p-2 mb-20">
        <button type="button" @click="openWhatsApp" class="text-white text-lg font-semibold border border-white rounded-lg p-2
         flex justify-center items-center capitalize hover:text-green-600 hover:border-green-500">
          Ouvrir un compte
        </button>
      </div>

    </div>

    <Scroll/>

    <Footer/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Image from "@public/components/image.vue";

import Icon from "@/assets/images/logo-cref.webp"
import Arrow from "@/assets/images/svg/arow.svg"
import Image2 from "@public/components/image2.vue";
import Scroll from "@public/components/scroll.vue";
import { IconBrandWhatsapp } from '@tabler/icons-vue';

import Pdf from "@/assets/pdf/account-condition.pdf"
import Image1 from "@public/components/image.vue";
// import Pdf1 from "@/assets/pdf/request-card.pdf"
// import Pdf2 from "@/assets/pdf/start-investment.pdf"

const openPdf = async (pdf) => {
  try {
    if (pdf) {
      window.open(pdf, '_blank')
    } else {
      console.log('le document est en cours de production et sera bientôt a votre disposition');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ouverture du PDF:', error)
  }
}

const icon = Icon
const arrow = Arrow

const services = ref([
  {
    value: 'nous finançons'
  }
])
const locations = ref([
  {
    icon: icon,
    titre: 'Ouverture d\'un compte',
    description: 'Simplifiez-vous la vie avec nos services personnalisés et notre soutien pour tous vos projets',
    suite: 'Voir conditions',
    pdfContent: Pdf,
  },
  {
    icon: icon,
    titre: 'Cartes Bancaire',
    description: 'Choisissez une carte bancaire qui vous offre plus de liberté, de sécurité et de fonctionnalités',
    suite: 'Demander une carte',
    pdfContent: null,
  },
  {
    icon: icon,
    titre: 'Investissement',
    description: 'Profiter d\'un suivi et d\'un accompagnement de qualité, de la définition de votre stratégie à sa mise en œuvre',
    suite: 'Démarrer un investissement',
    pdfContent: null,
  },
])
const locations2 = ref([
  {
    titre: '24/7 Surveillance du compte'
  },
  {
    titre: 'Protection & tranquillité d\'esprit'
  },
  {
    titre: 'Assistance à tout moment et en tout lieu'
  },
  {
    titre: 'Sécurité sérieuse'
  },
])
const locations3 = ref([
  {
    titre: 'Paiements Flexibles',
    description: 'Vous êtes en mesure de gérer votre entreprise en douceur, de faire face à vos dépenses quotidiennes et d\'assurer votre trésorerie.'
  },
  {
    titre: 'Paiements Intelligents',
    description: 'Profitez de solutions de paiement adaptées à vos revenus, avec des options de remboursement automatisé, mobile et sécurisé, pour une gestion simplifiée et efficace de vos finances.'
  },
  {
    titre: 'Administration Aisée',
    description: 'Suivez vos transactions en toute transparence grâce à une gestion simplifiée de votre compte, avec un accès en ligne et un accompagnement personnalisé pour optimiser vos finances.'
  },
])
const locations4 = ref([
  {
    icon: icon,
    description: 'Accédez à nos solutions financières adaptées aux besoins de votre entreprise.' +
        ' Nos produits sont conçus pour soutenir chaque étape de votre développement.',

  },
  {
    icon: icon,
    description: 'Notre équipe vous offre des conseils personnalisés pour optimiser votre gestion financière et' +
        ' vous aider à réaliser vos projets. Chaque solution est conçue pour répondre à vos besoins spécifiques.',
  },
  {
    icon: icon,
    description: 'Que vous ayez besoin de financer un projet, de gérer votre trésorerie ou d\'investir' +
        ' dans de nouveaux équipements, CRESAF est à vos côtés avec des offres flexibles et abordables.',
  },
])
const locations5 = ref([
  {
    icon: arrow,
    titre: 'Créer un compte gratuit',
    description: 'Postulez en ligne sur le site web du bloc et remplissez le formulaire en nous indiquant votre nom,' +
        ' votre adresse et votre date de naissance.'
  },
  {
    icon: arrow,
    titre: 'Renseignez vos coordonnées',
    description: 'Commencez en bloc ou connectez-vous à l\'application mobile. Compte bancaire pour transférer' +
        ' de l\'argent sur votre carte de débit.'
  },
  {
    icon: arrow,
    titre: 'Démarrer la conversion !',
    description: 'Mettez en place un dépôt direct ou connectez votre compte bancaire actuel pour transférer ' +
        'de l\'argent sur votre carte de débit.'
  },
])

const openWhatsApp = () => {
  window.open("https://api.whatsapp.com/send/?phone=23799623303&text&type=phone_number&app_absent=0", "_blank");
}


</script>

<style scoped>

</style>

