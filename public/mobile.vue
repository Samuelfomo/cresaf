<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="pt-44 pb-20 bg-primary" ref="heroSection">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0 lg:px-10" ref="heroText">
          <h1 class="text-4xl lg:text-6xl text-left montserrat montserrat-700 text-white pb-0">
            Gérez vos finances simplement avec notre solution
            <span class="text-primary-accent block">m-Banking<em class="montserrat montserrat-800 text-italic ms-3">!</em></span>
          </h1>

          <p class="text-white text-left montserrat montserrat-200 text-2xl my-10 lg:mr-20">
            Profitez d'une expérience bancaire innovante, sécurisée et accessible partout, à tout moment.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<!--            <button class="bg-secondary hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-medium transform transition-all hover:scale-105 flex items-center justify-center">-->
<!--              <span>Commencer maintenant</span>-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">-->
<!--                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />-->
<!--              </svg>-->
<!--            </button>-->
            <button
                type="button"
                class="btn btn-primary-accent m-0 montserrat montserrat-600"
            >
              Commencer maintenant
              <IconArrowRight stroke={2} class="ml-2" />
            </button>
            <button class="border border-white text-white px-8 py-3 rounded-md font-medium transition-transform duration-500 hover:scale-105 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <span>Voir la démo</span>
            </button>
          </div>
        </div>

        <div class="md:w-1/2 relative" ref="heroDevice">
          <div class="relative z-10 transform transition-all">
            <img :src="cresafApp" alt="Interface i-Banking" class=" w-full max-w-xl mx-auto rounded-md shadow-sm shadow-white" />
            <img :src="App" alt="App Mobile" class="absolute -bottom-10 -right-10 w-40 md:w-44 shadow-lg rounded-full shadow-white" />
          </div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="section1" class="py-20 bg-gray-50" ref="featuresSection">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-montserrat montserrat-700 text-primary mb-6">Fonctionnalités principales</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-base">
            Notre solution i-Banking propose des fonctionnalités innovantes pour simplifier la gestion de vos finances au quotidien.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
               ref="featureCards"
          >
            <div class="bg-primary text-primary bg-opacity-10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
<!--              <component :is="feature.icon" class="w-8 h-8 text-primary" />-->
              <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>

              <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>

              <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>

              <svg v-else-if="index === 3" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>

              <svg v-else-if="index === 4" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>

              <svg v-else-if="index === 5" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>

              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>

            </div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8 bg-blue-50 px-10 overflow-hidden hidden" ref="mobileAppSection">
<!--              <div class="w-full py-16 bg-gradient-to-b from-blue-50 to-white">-->
      <div class="mx-auto container">
        <div ref="mobileAppText">
          <div class="flex items-center space-x-2 mb-4">
                <div class="bg-secondary h-1 w-12 rounded-full"></div>
                <span class="text-secondary montserrat montserrat-700">Application Mobile</span>
              </div>
          <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl montserrat montserrat-700 text-primary mb-6">
                  Votre banque dans votre poche
                </h2>
                <p class="text-gray-600 max-w-4xl mx-auto text-base">
                  L'application mobile Cresaf vous offre une expérience bancaire complète, intuitive et sécurisée. Accédez à vos comptes, effectuez des transactions et gérez vos finances où que vous soyez, à tout moment.
                </p>
              </div>
        </div>
        <div class="grid grid-cols-1">

            <!-- Features -->
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6" ref="mobileFeatureItems">
              <div
                  v-for="feature in features"
                  :key="feature.title"
                  class="flex items-start gap-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-500"
              >
                <div>
                  <h3 class="montserrat-800 text-center text-xl text-primary mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600 montserrat-400 text-base">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          <div class="flex justify-end space-x-8">
            <!-- Bouton de téléchargement -->
            <div class="flex justify-center lg:justify-normal items-center">
              <div class="flex w-full justify-start items-center gap-1 border max-w-[15rem] rounded-xl bg-primary
                 px-4 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer hover:bg-secondary"
                   @click="openPlaystore"
              >
                <a
                    class="inline-block"
                >
                  <img
                      :src="PlayStore"
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
              </div>
            </div>

            <!-- Image de l'application -->
            <div class="flex justify-center lg:justify-end" >
              <div class="relative" ref="mobileAppImage">
                <!-- Effet de brillance -->
                <div class="absolute -inset-4 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 opacity-30 blur-xl rounded-full"></div>
                <!-- Mockup de l'application -->
                <img
                    @click="openPlaystore"
                    :src="App"
                    alt="CRESAF Mobile App"
                    class="relative w-64 rounded-3xl shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>

    <section id="section2" class="py-20 bg-blue-50 overflow-hidden" ref="mobileAppSection">
      <div class="container mx-auto px-6">
        <!-- Header de la section -->
        <div class="text-center mb-16" ref="mobileAppText">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div class="bg-secondary h-0.5 w-10 rounded-full"></div>
            <span class="text-secondary montserrat montserrat-400 uppercase tracking-wide text-sm">Application Mobile</span>
            <div class="bg-secondary h-0.5 w-10 rounded-full"></div>
          </div>
          <h2 class="text-3xl md:text-5xl montserrat montserrat-700 text-secondary mb-6">
            Votre banque dans votre poche
            <span class="block mt-4">CRESAF Online</span>
          </h2>
          <p class="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            L'application mobile Cresaf vous offre une expérience bancaire complète, intuitive et sécurisée.
            Accédez à vos comptes, effectuez des transactions et gérez vos finances où que vous soyez, à tout moment.
          </p>
        </div>

        <!-- Contenu principal avec mise en page améliorée -->
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Colonne gauche : Features -->
          <div class="order-2 lg:order-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10" ref="mobileFeatureItems">
              <div
                  v-for="mobileFeature in mobileFeatures"
                  :key="mobileFeature.title"
                  class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <h3 class="montserrat montserrat-700 text-lg text-primary mb-3">{{ mobileFeature.title }}</h3>
                <p class="text-gray-600 montserrat text-sm leading-relaxed">{{ mobileFeature.description }}</p>
              </div>
            </div>

            <!-- Bouton de téléchargement repositionné -->
            <div class="flex justify-center sm:justify-start">
              <div
                  class="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary rounded-2xl px-6 py-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  @click="openPlaystore"
              >
                <img
                    :src="PlayStore"
                    alt="Icône Google Play"
                    class="h-8 w-8"
                />
                <div class="flex flex-col">
              <span class="text-white text-xs font-medium opacity-90">
                Téléchargez sur
              </span>
                  <span class="text-white text-lg font-bold">
                Google Play
              </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne droite : Image de l'app -->
          <div class="order-1 lg:order-2 flex justify-center">
            <div class="relative" ref="mobileAppImage">
              <!-- Effet de fond décoratif -->
              <div class="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>

              <!-- Cercles décoratifs -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full"></div>
              <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>

              <!-- Image principale -->
              <div class="relative z-10 group">
                <img
                    @click="openPlaystore"
                    :src="App"
                    alt="CRESAF Mobile App"
                    class="w-80 max-w-sm rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
                />

                <!-- Badge "Gratuit" -->
                <div class="absolute -top-4 -left-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Gratuit
                </div>

                <!-- Badge de rating -->
                <div class="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div class="flex items-center gap-2">
                    <div class="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span class="text-gray-700 font-bold text-sm">4.9</span>
                  </div>
                  <p class="text-gray-500 text-xs">+10k téléchargements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  Avantages supplémentaires -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm" v-for="(moreFeature, index) in moreFeatures" :key="index"
               ref="featureCards"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg v-if="index === 0" class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <svg v-else-if="index === 1" class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <svg v-else class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-primary mb-2">{{moreFeature.title}}</h3>
            <p class="text-gray-600 text-sm">{{ moreFeature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer basique -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "@public/components/footer.vue";
import Header from "@public/components/header.vue";
import {IconArrowRight} from '@tabler/icons-vue';
import cresafApp from "@/assets/images/cresafApp.jpg"
import App from "@/assets/images/logo-cref.webp"
import PlayStore from "@/assets/images/svg/social/playstore.svg"
gsap.registerPlugin(ScrollTrigger);

    // Références pour les animations GSAP
    const heroSection = ref(null);
    const heroText = ref(null);
    const heroDevice = ref(null);

    const featuresSection = ref(null);
    const featureCards = ref([]);

    const mobileAppSection = ref(null);
    const mobileAppImage = ref(null);
    const mobileAppText = ref(null);
    const mobileFeatureItems = ref([]);

    // Données des fonctionnalités
    const features = [
      {
        title: 'Suivi des comptes',
        description: 'Consultez en temps réel le solde et les mouvements de tous vos comptes bancaires en un seul endroit.'
      },
      {
        title: 'Paiements sécurisés',
        description: 'Effectuez vos paiements en ligne en toute sécurité avec notre système de validation à double facteur.'
      },
      {
        title: 'Virements instantanés',
        description: 'Transférez de l\'argent vers n\'importe quel compte en quelques secondes, sans frais supplémentaires.'
      },
      {
        title: 'Rapport financier',
        description: 'Générez des rapports détaillés pour suivre et analyser vos dépenses et revenus mensuels.'
      },
      {
        title: 'Notifications personnalisées',
        description: 'Configurez des alertes pour être informé des mouvements sur vos comptes selon vos critères.'
      },
      {
        title: 'Support client 24/7',
        description: 'Bénéficiez d\'une assistance personnalisée à tout moment via chat ou appel vidéo sécurisé.'
      }
    ];
// Données des fonctionnalités mobiles
const mobileFeatures = [
  {
    title: 'Consultation de comptes simplifiée',
    description: 'Accédez à tous vos comptes en un clin d\'œil avec notre interface intuitive.'
  },
  {
    title: 'Authentification biométrique',
    description: 'Connectez-vous rapidement et en toute sécurité avec la reconnaissance faciale ou digitale.'
  },
  {
    title: 'Paiement mobile',
    description: 'Réglez vos achats directement depuis votre téléphone avec notre solution de paiement sans contact.'
  },
  {
    title: 'Gestion de budget intégrée',
    description: 'Suivez vos dépenses par catégorie et fixez des objectifs d\'épargne personnalisés.'
  }
];
const moreFeatures = [
  {
    title: '100% Sécurisé',
    description:'Chiffrement bancaire de haut niveau'
  },
  {
    title: 'Ultra Rapide',
    description:'Transactions en temps réel'
  },
  {
    title: 'Interface Intuitive',
    description:'Conçue pour tous les utilisateurs'
  }
]

const openPlaystore = () => {
  window.open('https://play.google.com/store/apps/details?id=net.betterplanning.mobileBanking.cresaf&hl=fr','_blank' )
}

    onMounted(() => {
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

      // Animations pour la section des fonctionnalités
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

      // Animations pour la section App Mobile
      const mobileAppTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mobileAppSection.value,
          start: 'top 70%'
        }
      });

      mobileAppTimeline
          .from(mobileAppImage.value, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          })
          .from(mobileAppText.value, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          }, "-=0.7")
          // .to([featureCard1.value, featureCard2.value, featureCard3.value], {
          //   opacity: 1,
          //   stagger: 0.2,
          //   duration: 0.5,
          //   ease: 'power2.out'
          // })
          .from(mobileFeatureItems.value, {
            x: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: 'power2.out'
          }, "-=0.5");

      // // Animation des compteurs de statistiques
      // ScrollTrigger.create({
      //   trigger: statItems.value,
      //   start: 'top 80%',
      //   onEnter: () => {
      //     statCounters.value.forEach((counter, index) => {
      //       const value = stats[index].value;
      //       gsap.to(counter, {
      //         innerHTML: value,
      //         duration: 2,
      //         ease: 'power2.out',
      //         snap: { innerHTML: 1 }
      //       });
      //     });
      //
      //     gsap.from(statItems.value, {
      //       y: 30,
      //       opacity: 0,
      //       duration: 1,
      //       stagger: 0.15,
      //       ease: 'power3.out'
      //     });
      //   }
      // });
    });

</script>