<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <div class="flex-grow px-8 pt-32 lg:mt-0 lg:mb-5 lg:pb-32">
      <div class="flex flex-wrap sm:flex-nowrap py-10">
        <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start">
          <h1 class="lg:text-5xl text-3xl text-center font-primary text-white pb-3">
            <span class="text-green-600">{{service.value}}</span>
          </h1>
          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">
            Notre objectif est de répondre aux besoins de tous ceux qui, dans le secteur informel ou non, ont besoin d'une assistance financière fiable, directe et personnalisée, en devenant le premier pourvoyeur de microcrédits.
          </h5>
          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">
            Le Crédit Solidaire d'Afrique (CRESAF) est une société anonyme créée par un groupe d'entrepreneurs locaux désireux de contribuer au progrès économique et social du Cameroun en proposant des solutions de financement adaptées aux besoins des micros, petites et moyennes entreprises.
          </h5>
          <h5 class="text-gray-700 font-primary text-xl py-3 leading-relaxed">
            CRESAF s'appuie sur des valeurs de solidarité, de confiance, de transparence et de responsabilité pour renforcer l'inclusion financière, soutenir l'innovation et favoriser le développement durable dans le pays.
          </h5>
        </div>
        <div class="w-full lg:pt-32">
          <ImageValue />
        </div>
      </div>
    </div>
    <div id="section1" class="bg-blue-50 opacity-90 lg:px-8 flex flex-col py-12  justify-start ">
      <h1 class="text-green-600 lg:text-5xl text-3xl font-primary text-center">Nos valeurs fondamentales</h1>
      <p class="text-black text-xl py-10 w-full lg:px-10 px-5 font-primary">
        Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.
      </p>
     <div class="w-full h-full flex justify-between gap-2 lg:flex-nowrap flex-wrap">
       <div class="hidden w-full max-w-md lg:flex">
<!--       <div class="hidden w-full h-full max-w-lg lg:flex justify-center items-center lg:pb-10">-->
         <img :src="valeurs" alt="image secrétaire" class="object-cover rounded-lg transition-transform duration-500 hover:scale-105">
       </div>
       <div class="w-full h-full flex flex-col justify-start px-6 py-1">
         <h3 class="text-2xl pb-4 text-gray-800 font-roboto">
           Ces valeurs sont les suivantes :
         </h3>
         <div class="flex justify-between items-start w-full py-2" v-for="(location, index) in locations" :key="index">
           <h1 class="text-xl font-semibold font-roboto leading-relaxed text-gray-950 w-full">{{ location.titre }}
           <span class="font-serif">
            {{location.description}}
           </span>
           </h1>
         </div>
       </div>
     </div>
    </div>
    <div id="section2" class="lg:px-8 flex flex-col py-12 justify-start ">
      <h1 class="text-green-600 lg:text-5xl text-2xl font-primary text-center">Pourquoi nous faire confiance ?</h1>
      <p class="text-gray-500 font-sans text-xl py-8 w-full lg:px-20 px-6">
        Nous disposons d'actifs de qualité que nous employons au profit de nos clients
      </p>
     <div class="w-full h-full flex justify-between gap-2 lg:flex-nowrap flex-wrap">
       <div class="hidden w-full max-h-[450px] max-w-md lg:flex">
         <img :src="confiance" alt="image secrétaire" class="w-full h-full rounded-lg object-cover transition-transform duration-500 hover:scale-105">
       </div>
       <div class="w-full h-full flex flex-col justify-start px-6 py-6">
         <div class="flex justify-between items-stretch w-full py-2 gap-2" v-for="(location2, index) in locations2" :key="index">
           <img :src="check" alt="checked rounded" class="w-8 h-8">
           <h1 class="text-xl w-full leading-10 font-light">
            {{location2.description}}
           </h1>
         </div>
       </div>
     </div>
    </div>
    <div id="section3" class="min-h-full flex justify-between items-center w-full flex-wrap lg:px-8 px-1 bg-blue-950 py-5">
      <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">
        <div class="flex flex-col w-full h-full items-start justify-between py-5 lg:px-5">
          <h1 class="text-white lg:text-5xl text-3xl lg:text-left text-center font-primary w-full">Nous misons sur l'avenir</h1>
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

    <div id="section4" class="lg:px-8 flex flex-col py-12 justify-center lg:justify-normal items-center">
      <h1 class="text-green-600 lg:text-5xl text-3xl font-primary text-center">Créons des opportunités pour tous !</h1>
<!--      <p class="text-gray-500 font-sans text-xl py-8 w-full lg:px-10 px-6">-->
<!--        Notre mission se traduit par la mise à disposition de services financiers adaptés aux personnes exclues du secteur bancaire.-->
<!--      </p>-->
      <p class="text-gray-500 font-roboto text-xl py-8 w-full lg:px-10 px-6">
        Notre mission, « développer des produits financiers capables de changer l’avenir des entrepreneurs », s’inscrit dans la vision d’entreprise telle qu’énoncée plus haut. À ce titre, les missions de CRESAF S.A peuvent aisément se deviner :
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

const valeurs = Valeur
const confiance = Confiance
const girl = Girl
const sommet = Sommet
const check = Check

const services =ref( [
  {
    value: 'Qui sommes-nous ?'
  }
])
const locations = ref([
  {
    titre: 'La responsabilité :',
    description:'La responsabilité vis-à-vis des engagements pris\n' +
        'et dans la conduite des projets.'
  },
  {
    titre: 'L\'excellence :',
    description:'La recherche constante de l\'excellence à travers la\n' +
        'qualité des services rendus.'
  },
  {
    titre: 'La Sécurité :',
    description:'Fort de notre esprit de conquérant, nous ne ménageons\n' +
        'aucun effort en vue de fournir à nos membres des services et des\n' +
        'solutions de qualité, dans un esprit de confiance mutuelle et de\n' +
        'sécurité des transactions.'
  },
  {
    titre: 'La Confidentialité :',
    description:'Nous reconnaissons que le client qui domicilie une\n' +
        'partie de son patrimoine nous fait confiance. En retour nous lui\n' +
        'garantissons la protection de ce patrimoine en toute confidentialité\n' +
        'grâce à notre professionnalisme.'
  },
  {
    titre: 'La Fiabilité :',
    description:'Valeurs personnelles de toutes les personnes exerçant\n' +
        'dans notre entreprise en vue d’une conduite et d’un caractère\n' +
        'professionnel irréprochable. Nous sommes loyaux vis-à-vis de notre\n' +
        'entreprise ainsi que toutes les parties prenantes.'
  },
  // {
  //   titre: 'L\'excellence :',
  //   description:'Nous visons à dépasser les attentes de nos clients et partenaires en leur offrant des solutions innovantes, personnalisées et de qualité.'
  // },
  // {
  //   titre: 'L\'intégrité :',
  //   description:'Nous agissons avec honnêteté, transparence et respect envers nos clients, partenaires, collègues et l\'environnement.'
  // },
  // {
  //   titre: 'La collaboration :',
  //   description:'Nous favorisons la coopération, la communication et la confiance au sein de nos équipes et avec nos clients et partenaires.'
  // },
  // {
  //   titre: 'La diversité :',
  //   description:'Nous reconnaissons et valorisons la richesse des différences culturelles, professionnelles et personnelles de nos employés, clients et partenaires.'
  // },
  // {
  //   titre: 'La passion :',
  //   description:'Nous nous impliquons pleinement dans notre travail et nous nous efforçons de créer de la valeur ajoutée pour nos clients et partenaires.'
  // },
])
const locations2 = ref([
  {
    description:'Nous garantissons et protégeons les intérêts financiers de nos épargnants et investisseurs.'
  },
  {
    description:'Nous recrutons des personnes talentueuses sur la base de leurs compétences avérées et de leur adhésion à nos valeurs et à notre éthique.'
  },
  {
    description:'Notre priorité est d\'assurer la satisfaction de nos clients en simplifiant les opérations bancaires et en mettant à leur disposition une équipe de service à la clientèle toujours à l\'écoute.'
  },
  {
    description:'Nous apportons différents services qui répondent aux besoins de tous les clients, quel que soit leur secteur d\'activité.'
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