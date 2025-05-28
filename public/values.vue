<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Section Hero -->
    <div class="px-4 pt-40 pb-12 lg:pt-48" ref="heroSection">
      <div class="w-full mx-auto">
        <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div v-for="(service, index) in services" :key="index" class="w-full flex flex-col lg:px-10 lg:text-start text-start lg:justify-normal justify-center lg:items-start" ref="heroTextElements">
            <h1 class="lg:text-5xl text-3xl text-center montserrat montserrat-700 text-secondary mb-6">
              {{service.value}}
            </h1>
            <h5 class="lg:montserrat montserrat-400 lg:text-xl text-base py-3 lg:leading-relaxed" v-for="(description, index) in descriptions" :key="index">
              {{description.value}}
            </h5>
          </div>
          <div class="w-full lg:w-6/12 hidden lg:flex" ref="heroImage">
            <Image1 />
          </div>
        </div>
      </div>
    </div>

    <!-- Section Valeurs -->
    <div class="bg-blue-50 lg:px-8 flex flex-col lg:py-12 py-8 justify-center" ref="valeursSection">
      <div id="section1" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat montserrat-700 text-center" ref="valeursTitle">
          Nos valeurs fondamentales
        </h1>
        <p class="text-primary lg:text-xl text-lg lg:py-10 py-5 w-full lg:px-10 px-5 font-primary" ref="valeursSubtitle">
          Nos employés partagent des valeurs fortes qui sous-tendent notre engagement et notre responsabilité de fournir à nos clients et partenaires une expérience enrichissante.
        </p>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5 lg:px-0 px-5 lg:space-y-0 space-y-5 container mx-auto" ref="valeursCards">
          <div v-for="(valeur, index) in locations" :key="index"
               class="valeur-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
          >
            <div class="relative h-48">
              <img :src="valeur.image" alt="Image de fond" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-center text-white">
                <div class="mb-3">
                  <svg v-if="valeur.title === 'Confiance'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 16h6l-9 15-9-15h6v-6h6v6z"></path>
                  </svg>
                  <svg v-else-if="valeur.title === 'Responsabilité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <svg v-else-if="valeur.title === 'Innovation'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <svg v-else-if="valeur.title === 'Proximité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <svg v-else-if="valeur.title === 'Sécurité'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold tracking-wider">{{ valeur.title }}</h2>
              </div>
            </div>
            <div class="p-6 bg-white flex-grow">
              <p class="text-gray-800 leading-relaxed text-lg">
                {{ valeur.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Confiance -->
<!--    <div class="lg:px-8 flex flex-col py-12 justify-center bg-primary" ref="confianceSection">-->
<!--      <div id="section2" class="container mx-auto">-->
<!--        <h1 class="text-white lg:text-5xl text-3xl montserrat montserrat-700 text-center" ref="confianceTitle">-->
<!--          Pourquoi nous faire confiance ?-->
<!--        </h1>-->
<!--        <p class="text-gray-200 montserrat montserrat-400 text-xl lg:py-8 w-full lg:px-20 p-6 text-center" ref="confianceSubtitle">-->
<!--          Nous disposons d'actifs de qualité que nous employons au profit de nos clients-->
<!--        </p>-->
<!--        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-6 lg:space-y-0 space-y-6 container mx-auto" ref="confianceCards">-->
<!--          <div v-for="(raison, index) in locations2" :key="index"-->
<!--               class="confiance-card group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"-->
<!--          >-->
<!--            <div class="h-full bg-gradient-to-br from-primary to-white/80 flex justify-center items-center">-->
<!--              <div class="p-6 flex-grow">-->
<!--                <p class="montserrat text-white text-lg leading-relaxed">{{ raison.description }}</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="lg:px-8 flex flex-col py-12 justify-center bg-primary" ref="confianceSection">
      <div id="section2" class="container mx-auto">
        <h1 class="text-white lg:text-5xl text-3xl montserrat montserrat-700 text-center" ref="confianceTitle">
          Ensemble, construisons un avenir durable
        </h1>
        <p class="text-gray-200 montserrat montserrat-400 text-xl lg:py-8 w-full lg:px-20 p-6 text-center" ref="confianceSubtitle">
          Chez Cresaf, notre vision ne se limite pas à offrir des services financiers.
          Elle s’incarne dans un engagement profond envers les personnes, les territoires et le progrès partagé.
        </p>
        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-6 lg:space-y-0 space-y-6 container mx-auto" ref="confianceCards">
          <div v-for="(raison, index) in locations2" :key="index"
               class="confiance-card group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="h-full bg-gradient-to-br from-primary to-white/80 flex justify-center items-center">
              <div class="p-6 flex-grow">
                <p class="montserrat text-white text-lg leading-relaxed">{{ raison.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Avenir -->
<!--    <div class="lg:px-8 flex flex-col py-12 bg-primary " ref="avenirSection">-->
<!--      <div id="section3" class="container mx-auto">-->
<!--        <div class="flex lg:flex-nowrap flex-wrap px-5 h-full justify-between items-center w-full gap-2">-->
<!--          <div class="flex flex-col" ref="avenirContent">-->
<!--            <h1 class="text-white lg:text-5xl text-3xl pb-10 lg:text-left text-center montserrat montserrat-700 w-full">-->
<!--              Nous misons sur l'avenir-->
<!--            </h1>-->
<!--            <div class="md:grid lg:grid-cols-2 grid-cols-1 gap-4 lg:space-y-0 space-y-4 container mx-auto" ref="avenirCards">-->
<!--              <div v-for="(vision, index) in visions" :key="index"-->
<!--                   class="avenir-card group rounded-lg overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">-->
<!--                <div class="p-6 bg-white flex-grow">-->
<!--                  <p class="montserrat text-gray-700 text-lg leading-relaxed">{{ vision.description }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex w-full h-full max-w-lg py-10 justify-start flex-wrap px-5 lg:px-20 gap-2" ref="avenirImage">-->
<!--            <img :src="girl" alt="image girl" class="object-cover transition-transform duration-500 hover:scale-105">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <!-- Section Opportunités -->
    <div class="lg:px-8 flex flex-col py-12 justify-center bg-white" ref="opportunitySection">
      <div id="section4" class="container mx-auto">
        <h1 class="text-secondary lg:text-5xl text-3xl montserrat-700 montserrat text-center" ref="opportunityTitle">
          Créons des opportunités pour tous !
        </h1>
        <p class="text-gray-600 montserrat text-xl py-8 w-full lg:px-10 px-6 lg:text-center" ref="opportunitySubtitle">
          Notre mission, « développer des produits financiers capables de changer l'avenir des entrepreneurs », s'inscrit dans la vision d'entreprise telle qu'énoncée plus haut. À ce titre, les missions de Cresaf S.A peuvent aisément se deviner :
        </p>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-6 lg:px-0 px-2 container mx-auto" ref="opportunityCards">
          <div v-for="(location3, index) in locations3" :key="index"
               class="opportunity-card group rounded-lg overflow-hidden flex flex-col">
            <div class="lg:pt-10 pt-5 flex justify-center items-center">
              <div class="flex flex-col items-center justify-center border border-gray-200 p-2 rounded-xl" :class="location3.bg">
                <div class="text-white">
                  <IconCreditCard stroke={2} class="h-9 w-12" v-if="index === 0"/>
                  <IconMapPinDollar stroke={2} v-else-if="index === 1" class="h-9 w-12" />
                  <IconUsersPlus stroke={2} v-else-if="index === 2" class="h-9 w-12" />
                  <IconBuildingPlus stroke={2} v-else-if="index === 3" class="h-9 w-12" />
                  <IconBuildingCommunity stroke={2} v-else-if="index === 4" class="h-9 w-12" />
                  <IconDeviceIpadHorizontalPlus stroke={2} v-else class="h-9 w-12" />
                </div>
              </div>
            </div>
            <div class="p-6 flex-grow text-center bg-white">
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
import {ref, onMounted, nextTick, onUnmounted} from "vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Image1 from "@public/components/image.vue";

// import Girl from "@/assets/images/girl.webp"
import confiance from "@/assets/images/confiance.jpg"
import Responsibility from "@/assets/images/responsabilite.jpg"
import Innovation from "@/assets/images/innovation.jpg"
import Proximity from "@/assets/images/proximity.jpg"
import Security from "@/assets/images/security.jpg"
import Excellence from "@/assets/images/excellence.jpg"
import { IconCreditCard, IconDeviceIpadHorizontalPlus, IconBuildingCommunity, IconBuildingPlus, IconUsersPlus, IconMapPinDollar } from '@tabler/icons-vue';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// const girl = Girl;

// Refs pour les éléments
const heroSection = ref(null);
const heroTextElements = ref([]);
const heroImage = ref(null);

const valeursSection = ref(null);
const valeursTitle = ref(null);
const valeursSubtitle = ref(null);
const valeursCards = ref(null);

const confianceSection = ref(null);
const confianceTitle = ref(null);
const confianceSubtitle = ref(null);
const confianceCards = ref(null);

const avenirSection = ref(null);
const avenirContent = ref(null);
const avenirCards = ref(null);
const avenirImage = ref(null);

const opportunitySection = ref(null);
const opportunityTitle = ref(null);
const opportunitySubtitle = ref(null);
const opportunityCards = ref(null);

// Données
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
]);

const services = ref([
  {
    value: 'Qui sommes-nous ?'
  }
]);

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
    description: 'Nous nous engageons à proposer des services bancaires innovants, adaptés aux besoins spécifiques de nos clients et à l\'évolution de l\'économie.',
    image: Innovation
  },
  {
    title:'Proximité',
    description: 'Nous valorisons la proximité avec nos clients, en offrant un service personnalisé, humain et réactif pour répondre à leurs attentes',
    image: Proximity
  },
  {
    title:'Sécurité',
    description: 'Nous assurons une sécurité optimale pour vos transactions et la protection de vos données, afin de garantir votre tranquillité d\'esprit.',
    image: Security
  },
  {
    title:'Excellence',
    description: 'Nous visons l\'excellence dans la qualité de nos services et l\'efficacité de nos solutions, en plaçant toujours le client au centre de nos préoccupations.',
    image: Excellence
  },
]);

const locations2 = ref([
  {
    description:'Nous croyons en une croissance inclusive où la technologie reste au service de l’humain.'
  },
  {
    description:'Chaque relation que nous construisons repose sur l’écoute, l’éthique et la proximité.'
  },
  {
    description:'Engagés pour l’excellence et le progrès social, nous accompagnons le développement économique des territoires que nous servons.'
  },
  {
    description:'Plus qu’un établissement financier, nous sommes un partenaire de confiance à vos côtés, pour bâtir ensemble un avenir durable.'
  }
]);
// const locations2 = ref([
//   {
//     description:'Notre connaissance fine du terrain nous permet d\'offrir des solutions adaptées aux besoins réels des populations et des entrepreneurs.'
//   },
//   {
//     description:'Nous combinons rigueur, innovation et engagement humain pour maximiser l\'impact de nos interventions.'
//   },
//   {
//     description:'Notre réseau de partenaires locaux et internationaux renforce notre capacité à agir efficacement et durablement.'
//   },
//   {
//     description:'Avec une équipe engagée et des outils flexibles, nous faisons de chaque accompagnement une opportunité de transformation.'
//   }
// ]);

const locations3 = ref([
  {
    description:'Favoriser l\'inclusion financière en accompagnant les populations et les acteurs économiques avec des solutions accessibles, adaptées et durables',
    bg: 'bg-primary'
  },
  {
    description:'Soutenir l\'autonomisation économique à travers des services bancaires responsables, ancrés dans les réalités locales.',
    bg: 'bg-secondary'
  },
  {
    description:'Contribuer activement au développement social et économique en Afrique, en plaçant l\'humain au cœur de nos priorités',
    bg: 'bg-primary'
  },
  {
    description:'Œuvrer chaque jour pour renforcer la capacité d\'action des entreprises, entrepreneurs, des jeunes et des communautés',
    bg: 'bg-secondary'
  },
  {
    description:' Bâtir une finance plus équitable, au service du progrès collectif grâce à une approche de proximité',
    bg: 'bg-primary'
  }
]);

// const visions = ref([
//   {
//     description: 'Nous aspirons à être une force motrice du changement pour transformer et établir le standard du secteur de la microfinance au Cameroun.'
//   },
//   {
//     description: 'Les entrepreneurs sont confrontés à des défis uniques dans leurs activités quotidiennes, notamment le manque de solutions bancaires adaptées à leurs besoins spécifiques.'
//   },
//   {
//     description: 'Nous tirons notre force de notre capacité à répondre à ces défis de manière directe, nous sommes déterminés à apporter des solutions bancaires simples, fiables et accessibles aux entrepreneurs, aux salariés et aux travailleurs indépendants.'
//   },
// ]);

onMounted(async () => {
  await nextTick();

  // Vérifier que GSAP et ScrollTrigger sont disponibles
  if (!gsap || !ScrollTrigger) {
    console.warn('GSAP ou ScrollTrigger non disponible');
    return;
  }

  // Animation de la section Hero (au chargement)
  const heroTimeline = gsap.timeline();

  // Vérifier l'existence des éléments avant d'animer
  if (heroTextElements.value && heroTextElements.value.length > 0) {
    // Initialiser l'état initial sans animation
    gsap.set(heroTextElements.value, { x: -60, opacity: 0 });

    heroTimeline.to(heroTextElements.value, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    });
  }

  if (heroImage.value) {
    gsap.set(heroImage.value, { x: 60, opacity: 0 });

    heroTimeline.to(heroImage.value, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    }, "-=0.8");
  }

  // Animation de la section Valeurs avec protection
  if (valeursSection.value) {
    ScrollTrigger.create({
      trigger: valeursSection.value,
      start: 'top 80%',
      once: true, // S'assurer que l'animation ne se répète pas
      onEnter: () => {
        const tl = gsap.timeline();

        if (valeursTitle.value) {
          gsap.set(valeursTitle.value, { y: 40, opacity: 0 });
          tl.to(valeursTitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        }

        if (valeursSubtitle.value) {
          gsap.set(valeursSubtitle.value, { y: 30, opacity: 0 });
          tl.to(valeursSubtitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          }, "-=0.4");
        }

        if (valeursCards.value) {
          const cards = valeursCards.value.querySelectorAll('.valeur-card');
          if (cards.length > 0) {
            gsap.set(cards, { y: 50, opacity: 0 });
            tl.to(cards, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out'
            }, "-=0.4");
          }
        }
      }
    });
  }

  // Animation de la section Confiance
  if (confianceSection.value) {
    ScrollTrigger.create({
      trigger: confianceSection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        if (confianceTitle.value) {
          gsap.set(confianceTitle.value, { y: 40, opacity: 0 });
          tl.to(confianceTitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        }

        if (confianceSubtitle.value) {
          gsap.set(confianceSubtitle.value, { y: 30, opacity: 0 });
          tl.to(confianceSubtitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          }, "-=0.4");
        }

        if (confianceCards.value) {
          const cards = confianceCards.value.querySelectorAll('.confiance-card');
          if (cards.length > 0) {
            gsap.set(cards, { scale: 0.9, opacity: 0 });
            tl.to(cards, {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'back.out(1.7)'
            }, "-=0.4");
          }
        }
      }
    });
  }

  // Animation de la section Avenir
  if (avenirSection.value) {
    ScrollTrigger.create({
      trigger: avenirSection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        if (avenirContent.value) {
          const title = avenirContent.value.querySelector('h1');
          if (title) {
            gsap.set(title, { x: -50, opacity: 0 });
            tl.to(title, {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out'
            });
          }
        }

        if (avenirCards.value) {
          const cards = avenirCards.value.querySelectorAll('.avenir-card');
          if (cards.length > 0) {
            gsap.set(cards, { y: 40, opacity: 0 });
            tl.to(cards, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power3.out'
            }, "-=0.5");
          }
        }

        if (avenirImage.value) {
          gsap.set(avenirImage.value, { x: 50, opacity: 0 });
          tl.to(avenirImage.value, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          }, "-=0.8");
        }
      }
    });
  }

  // Animation de la section Opportunités
  if (opportunitySection.value) {
    ScrollTrigger.create({
      trigger: opportunitySection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        if (opportunityTitle.value) {
          gsap.set(opportunityTitle.value, { y: 40, opacity: 0 });
          tl.to(opportunityTitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        }

        if (opportunitySubtitle.value) {
          gsap.set(opportunitySubtitle.value, { y: 30, opacity: 0 });
          tl.to(opportunitySubtitle.value, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
          }, "-=0.4");
        }

        if (opportunityCards.value) {
          const cards = opportunityCards.value.querySelectorAll('.opportunity-card');
          if (cards.length > 0) {
            gsap.set(cards, { y: 60, opacity: 0 });
            tl.to(cards, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out'
            }, "-=0.4");
          }
        }
      }
    });
  }

  // Refresh ScrollTrigger après toutes les animations
  ScrollTrigger.refresh();
});

// Nettoyage des ScrollTriggers au démontage
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>