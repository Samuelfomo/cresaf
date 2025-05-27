<!-- Home.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header/>

    <section class="w-full mx-auto px-4 pt-40 pb-12 lg:pt-48 bg-primary" ref="heroSection">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div class="w-full lg:w-6/12 text-center lg:text-left px-4 lg:px-10" ref="heroText">
          <h1 class="text-4xl lg:text-6xl text-left montserrat montserrat-700 text-white pb-0">
            Vous ambitionnez, <span class="text-primary-accent block">nous finan&ccedil;ons<em class="montserrat montserrat-800 text-italic ms-3">!</em></span>
          </h1>
          <p class="text-white text-left montserrat montserrat-200 text-2xl lg:my-10 my-6 lg:mr-20">
            Favoriser le développement économique par l'épargne, l'octroi de crédits et la facilitation des services financiers
          </p>
          <button
              type="button"
              @click="openWhatsApp"
              class="btn btn-primary-accent m-0"
          >
            <IconBrandWhatsapp class="mr-2" :stroke="2" />
            Parlez à un conseiller
          </button>
        </div>
        <div class="w-full lg:w-6/12 hidden lg:flex" ref="heroDevice">
          <Image1 />
        </div>
      </div>
    </section>

    <section class="bg-white px-8 flex flex-col py-12 z-30" ref="featuresSection">
      <h2 class="text-primary montserrat montserrat-700 lg:text-3xl text-lg uppercase text-center pb-5">
        nos services de transfert d'argent
      </h2>

      <Image2/>

      <div class="w-full h-full flex flex-col justify-end items-center pt-5 border-t lg:border-none">
        <h1 class="lg:text-3xl text-2xl open-sans open-sans-700 text-center text-primary">Un guichet unique pour
          <span class="text-secondary open-sans open-sans-700">vos finances </span>
        </h1>
<!--        <button type="button" @click="openWhatsApp" class="btn btn-primary mt-6 mb-0">-->
<!--          <IconBrandWhatsapp class="mr-2" stroke={2} />-->
<!--          Parlez à un conseiller-->
<!--        </button>-->
        <p class="w-full justify-center items-start lg:text-left text-center max-w-6xl lg:px-10 text-lg py-10">
          Avec le Cresaf, vous bénéficiez d'un compte courant gratuit, d'une carte bancaire personnalisable,
          d'un livret d'épargne rémunéré, d'un crédit à la consommation et bien plus encore !
        </p>
      </div>
      <div class="grid xl:gap-0 lg:gap-3 lg:grid-cols-3 md:grid-cols-2 py-5 container mx-auto lg:gap-y-10 gap-y-5 max-w-7xl">

        <div v-for="(location, index) in locations" :key="index"
             class="group h-full w-full max-w-sm border rounded-lg bg-blue-50 hover:bg-primary  cursor-pointer"
             ref="featureCards"
        >

          <img :src="location.icon" alt="'location.alt'">
          <div class="py-6 px-6 group-hover:text-white">
            <h2 class="text-xl open-sans open-sans-700 open-sans mb-4 text-left">
              {{ location.titre }}
            </h2>
            <p class="open-sans open-sans-400 text-primary text-base mb-4 group-hover:text-white ">{{ location.description }}</p>
            <a
                @click="openPdf(location.pdfContent)"
                class="gap-x-2 flex justify-end items-center montserrat montserrat-600 text-lg text-secondary group-hover:text-primary-accent">
              {{ location.suite }}
              <IconArrowRight stroke={2} class="transition-transform"/>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue-50 flex flex-col h-full py-12">
      <h1 class="text-primary lg:text-4xl text-3xl montserrat montserrat-700 text-center">
        Nos produits
      </h1>
      <p class="flex w-full justify-center items-center montserrat lg:text-xl text-base px-5 lg:my-6 my-4">
        Nos produits sont conc&ccedil;us pour les entreprises de toutes les tailles
      </p>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-3 xl:gap-x-0 grid-cols-1 py-5 container mx-auto lg:gap-y-10 gap-y-5 lg:px-0 px-5 max-w-7xl">

        <div v-for="(location1, index) in locations1" :key="index"
             class="group h-full w-full max-w-sm border rounded-lg bg-white cursor-pointer transition hover:scale-105 duration-500"
        >

          <img :src="location1.icon" :alt="location1.alt" @click="goToSection(location1.section)">
          <div class="py-6 px-6">
            <h2 class="text-xl montserrat montserrat-700 open-sans mb-4 text-left">
              {{ location1.titre }}
            </h2>
            <p class="montserrat montserrat-400 text-primary text-base mb-4">{{ location1.description }}</p>
            <a  @click="goToSection(location1.section)"
                @mouseenter="animateArrow(index, true)"
                @mouseleave="animateArrow(index, false)"
                class="gap-x-2 flex justify-end items-center montserrat montserrat-600 text-lg text-secondary">
              {{ location1.suite }}
              <IconArrowRight stroke={2} :ref="el => { if (el) arrowRefs[index] = el }" class="transition-transform"/>
            </a>
          </div>

        </div>

      </div>

    </section>

    <Footer/>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import {gsap} from "gsap";

import cheque from "@/assets/images/cheque.jpg"
import caisse from "@/assets/images/caisse.jpg"
import collecte from "@/assets/images/collecte.jpg"
import carte from "@/assets/images/carte.jpg"
import investissement from "@/assets/images/investissement.jpg"
import depot from "@/assets/images/depot.jpg"
import epargne from "@/assets/images/epargne.jpg"
import visa from "@/assets/images/visa.jpg"
import condition from "@/assets/images/condition.jpg"
import Image2 from "@public/components/image2.vue";
import { IconBrandWhatsapp, IconArrowRight } from '@tabler/icons-vue';

import Pdf from "@/assets/pdf/account-condition.pdf"
import Image1 from "@public/components/image.vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const heroSection = ref(null);
const heroText = ref(null);
const heroDevice = ref(null);
const featuresSection = ref(null);
const featureCards = ref([]);

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

// Crée un tableau pour stocker les références des icônes de flèches
const arrowRefs = ref([]);
const arrowAnimations = ref({});
const router = useRouter();

const locations = ref([
  {
    icon: condition,
    titre: 'Ouverture d\'un compte',
    description: 'Simplifiez-vous la vie avec nos services personnalisés et notre soutien pour tous vos projets',
    suite: 'Voir conditions',
    pdfContent: Pdf,
  },
  {
    icon: carte,
    titre: 'Cartes Bancaire',
    description: 'Choisissez une carte bancaire qui vous offre plus de liberté, de sécurité et de fonctionnalités',
    suite: 'Demander une carte',
    pdfContent: null,
  },
  {
    icon: investissement,
    titre: 'Investissement',
    description: 'Profiter d\'un suivi et d\'un accompagnement de qualité, de la définition de votre stratégie à sa mise en œuvre',
    suite: 'Démarrer un investissement',
    pdfContent: null,
  }
])
const locations1 = ref([
  {
    icon: cheque,
    titre: 'Compte Chèque',
    description: 'Un compte courant flexible pour gérer vos opérations quotidiennes avec simplicité. Idéal pour vos retraits, paiements et virements.',
    suite: 'En savoir plus',
    section: 'section1',
    alt: 'Image Compte Chèque'
  },
  {
    icon: caisse,
    titre: 'Bon de caisse',
    description: 'Solution d\'épargne à court terme avec un rendement fixe et garanti. Faites fructifier votre argent en toute sécurité.',
    suite: 'En savoir plus',
    section: 'section2',
    alt: 'Image Bon de caisse'
  },
  {
    icon: depot,
    titre: 'Dépôt à terme',
    description: 'Placement à échéance fixe offrant un taux d\'intérêt garanti. Plus la durée est longue, plus le rendement est avantageux.',
    suite: 'En savoir plus',
    section: 'section3',
    alt: 'Image Dépôt à terme'
  },
  {
    icon: epargne,
    titre: 'Compte d\'épargne',
    description: 'Solution d\'épargne flexible et sécurisée avec disponibilité permanente des fonds et rémunération progressive selon votre encours.',
    suite: 'En savoir plus',
    section: 'section4',
    alt: 'Image Compte d\'épargne'
  },
  {
    icon: collecte,
    titre: 'Collecte journalière',
    description: 'Service destiné aux travailleurs indépendants pour sécuriser vos recettes quotidiennes sans avoir à vous déplacer en agence.',
    suite: 'En savoir plus',
    section: 'section5',
    alt: 'Image Collecte journalière'
  },
  {
    icon: visa,
    titre: 'Carte visa',
    description: 'Moyen de paiement international accepté chez des millions de commerçants. Retirez de l\'argent et effectuez vos achats partout dans le monde.',
    suite: 'En savoir plus',
    section: 'section6',
    alt: 'Image Carte visa'
  },
])

const openWhatsApp = () => {
  window.open("https://api.whatsapp.com/send/?phone=23799623303&text&type=phone_number&app_absent=0", "_blank");
}

// Initialiser le tableau avec assez d'éléments null
onMounted(() => {
  arrowRefs.value = new Array(locations1.value.length).fill(null);

  // Animations pour la section Hero
  const heroTimeline = gsap.timeline();
  heroTimeline
      .from(heroText.value, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from(heroDevice.value, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, "-=0.5");

  ScrollTrigger.create({
    trigger: featuresSection.value,
    start: 'top 80%',
    onEnter: () => {
      gsap.from(featureCards.value, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }
  });

});
// Fonction pour animer la flèche
const animateArrow = (index, isEnter) => {
  const arrowElement = arrowRefs.value[index];

  if (!arrowElement) return;

  // // Si une animation existe déjà, on la tue
  if (arrowAnimations.value[index]) {
    arrowAnimations.value[index].kill();
  }

  if (isEnter) {
    // Animation quand la souris entre
    arrowAnimations.value[index] = gsap.to(arrowElement, {
      x: 10,
      duration: 0.3,
      yoyo: true,
      repeat: 100,
      ease: 'power1.out'
    });
  } else {
    // Animation quand la souris quitte
    arrowAnimations.value[index] = gsap.to(arrowElement, {
      x: 0,
      duration: 0.3,
      ease: 'power1.in'
    });
  }
};

const goToSection = async (section) => {
  await router.push({ path: '/products', query: { scrollTo: section } });
  await router.replace({query: null})
}

</script>

<style scoped>

</style>

