<template>
  <div class="flex flex-col min-h-screen">
    <Header />

<!--    <div class="flex-grow px-8 pt-32 lg:mt-0 lg:mb-5 lg:pb-32">-->
<!--      <div class="flex flex-wrap sm:flex-nowrap py-10">-->
<!--        <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start">-->
<!--          <h1 class="lg:text-5xl text-3xl text-center font-primary text-white pb-3">-->
<!--            <span class="text-green-600">{{service.value}}</span>-->
<!--          </h1>-->
<!--          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">-->
<!--            Notre objectif est de répondre aux besoins de tous ceux qui, dans le secteur informel ou non, ont besoin d'une assistance financière fiable, directe et personnalisée, en devenant le premier pourvoyeur de microcrédits.-->
<!--          </h5>-->
<!--          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">-->
<!--            Le Crédit Solidaire d'Afrique (CRESAF) est une société anonyme créée par un groupe d'entrepreneurs locaux désireux de contribuer au progrès économique et social du Cameroun en proposant des solutions de financement adaptées aux besoins des micros, petites et moyennes entreprises.-->
<!--          </h5>-->
<!--          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">-->
<!--            CRESAF s'appuie sur des valeurs de solidarité, de confiance, de transparence et de responsabilité pour renforcer l'inclusion financière, soutenir l'innovation et favoriser le développement durable dans le pays.-->
<!--          </h5>-->
<!--        </div>-->
<!--        <div class="w-full lg:pt-32">-->
<!--          <ImageValue/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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

    <div class="bg-blue-50 lg:px-8 flex flex-col py-12 justify-center ">
      <div id="section1" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-600 text-center">Nos valeurs fondamentales</h1>
        <p class="text-primary text-xl py-10 w-full lg:px-10 px-5 font-primary">
          Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.
        </p>
        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col justify-center items-center py-5 container mx-auto gap-4">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full" v-for="(location, index) in locations" :key="index">
            <!-- Header with icon -->
            <div class="p-6 flex justify-center items-center" :class="location.bg">
              <div class="text-white flex flex-col items-center">
                <div class="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>
                  </svg>
                </div>
                <h2 class="text-xl font-bold tracking-wider">{{location.title}}</h2>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex-grow">
              <p class="text-gray-800 leading-relaxed text-lg">
                  {{location.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:px-8 flex flex-col py-12 justify-center ">
      <div id="section2" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-2xl montserrat montserrat-700 text-center">Pourquoi nous faire confiance ?</h1>
        <p class="text-gray-700 font-sans text-xl py-8 w-full lg:px-20 px-6">
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

    <div class="lg:px-8 flex flex-col py-12 bg-primary">
      <div id="section3" class="container mx-auto">
        <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">
          <div class="flex flex-col w-full h-full items-start justify-between lg:py-0 py-5 lg:px-5">
            <h1 class="text-white lg:text-5xl text-3xl pb-10 lg:text-left text-center montserrat montserrat-700 w-full">Nous misons sur l'avenir</h1>
            <p class="text-white text-xl font-sans lg:py-5 pt-5 w-full text-left">
              Nous aspirons à être une force motrice du changement pour transformer et établir le standard du secteur de la microfinance au Cameroun.
            </p>
            <p class="text-white text-xl font-sans lg:py-5 py-3 w-full text-left">
              Les entrepreneurs sont confrontés à des défis uniques dans leurs activités quotidiennes,
              notamment le manque de solutions bancaires adaptées à leurs besoins spécifiques.
            </p>
            <p class="text-white text-xl font-sans lg:py-5 py-3 w-full text-left">
              Nous tirons notre force de notre capacité à répondre à ces défis de manière directe, nous sommes déterminés à apporter des
              solutions bancaires simples, fiables et accessibles aux entrepreneurs, aux salariés et aux travailleurs indépendants.
            </p>
          </div>

          <div class="flex w-full h-full max-w-lg py-10 justify-start flex-wrap px-5 lg:px-20 gap-2 ">
            <img :src="girl" alt="image girl" class="object-cover transition-transform duration-500 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-8 flex flex-col py-12 justify-center">
      <div id="section4" class="container mx-auto">
          <h1 class="text-secondary lg:text-5xl text-3xl montserrat-700 montserrat text-center">Créons des opportunités pour tous !</h1>
        <!--      <p class="text-gray-500 font-sans text-xl py-8 w-full lg:px-10 px-6">-->
        <!--        Notre mission se traduit par la mise à disposition de services financiers adaptés aux personnes exclues du secteur bancaire.-->
        <!--      </p>-->
        <p class="text-gray-500 font-roboto text-xl py-8 w-full lg:px-10 px-6">
          Notre mission, « développer des produits financiers capables de changer l’avenir des entrepreneurs », s’inscrit dans la vision d’entreprise telle qu’énoncée plus haut. À ce titre, les missions de Cresaf S.A peuvent aisément se deviner :
        </p>
        <div class="w-full h-full flex justify-between gap-2 lg:flex-nowrap flex-wrap">
          <div class="hidden w-full max-w-md lg:flex">
            <img :src="sommet" alt="image secrétaire" class="max-w-md h-full object-cover shadow shadow-blue-200 rounded-lg transition-transform duration-500 hover:scale-105">
          </div>
          <div class="w-full h-full flex flex-col justify-start px-6 py-1">
            <div class="flex justify-between items-stretch w-full py-2 gap-2" v-for="(location3, index) in locations3" :key="index">
              <img :src="check" alt="checked rounded" class="w-8 h-8">
              <h1 class="text-xl w-full leading-relaxed font-sans text-gray-600">
                {{location3.description}}
              </h1>
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
import Confiance from "@/assets/images/cresaf/confiance.webp"
// import Man from "@/assets/images/man.webp"
import Girl from "@/assets/images/girl.webp"
import Sommet from "@/assets/images/sommet.webp"
import Check from"@/assets/images/svg/check-rounded.svg"
import ImageValue from "@public/components/imageValue.vue";
import {IconArrowRight} from "@tabler/icons-vue";


const valeurs = Valeur
const confiance = Confiance
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
    bg: 'bg-secondary',
  },
  {
    title:'Responsabilité',
    description: 'Nous agissons de manière responsable, en intégrant les enjeux sociaux et environnementaux dans chacune de nos décisions.',
    bg: 'bg-primary',
  },
  {
    title:'Innovation',
    description: 'Nous nous engageons à proposer des services bancaires innovants, adaptés aux besoins spécifiques de nos clients et à l’évolution de l’économie.',
    bg: 'bg-primary-accent',
  },
  {
    title:'Proximité',
    description: 'Nous valorisons la proximité avec nos clients, en offrant un service personnalisé, humain et réactif pour répondre à leurs attentes',
    bg: 'bg-secondary-accent',
  },
  {
    title:'Sécurité',
    description: 'Nous assurons une sécurité optimale pour vos transactions et la protection de vos données, afin de garantir votre tranquillité d’esprit.',
    bg: 'bg-secondary',
  },
  {
    title:'Excellence',
    description: 'Nous visons l’excellence dans la qualité de nos services et l’efficacité de nos solutions, en plaçant toujours le client au centre de nos préoccupations.',
    bg: 'bg-primary',
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
    description:'Encourager la collecte de l’épargne,'
  },
  {
    description:'Favoriser le développement des petites et moyennes entreprises à\n' +
        'travers l’octroi des crédits,'
  },
  {
    description:'Faciliter l’accès aux services financiers de proximité et adapté aux\n' +
        'personnes à faibles revenus,'
  },
  {
    description:'Encourager l’entreprenariat féminin,'
  },
  {
    description:'Encourager l’entreprenariat JEUNE,'
  },
  {
    description:'Renforcer de façon continue les capacités des employés,'
  },
  {
    description:'Concevoir des produits financiers (PF) adaptés aux cibles de la\n' +
        'communauté éducative ; du commerce et de l’artisanat,'
  },
  {
    description:'Concevoir les PF pour les professionnels du transport et de\n' +
        'l’informel en général,'
  },
  {
    description:'Renforcer les capacités de ses clients par l’éducation financière,'
  },
  // {
  //   description:'Développer un système de financement qui répond à la réalité entrepreneuriale du contexte économique sous-régional, en encourageant l\'inclusion financière, bancaire et sociale des personnes vulnérables, notamment les femmes, les jeunes, les ruraux et les micro-entrepreneurs.'
  // },
  // {
  //   description:'Contribuer au développement économique et à la réduction de la pauvreté, principalement au Cameroun et dans la sous-région d\'Afrique centrale.'
  // },
  // {
  //   description:'Soutenir l\'action des pouvoirs publics en matière d\'emploi, de promotion de l\'égalité des genres et d\'insertion professionnelle de la femme.'
  // }
])



</script>