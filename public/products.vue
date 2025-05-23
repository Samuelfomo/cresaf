<script setup>
import {ref, onMounted, onUnmounted, nextTick} from 'vue';
import {useRoute} from "vue-router";
import { gsap } from 'gsap';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconMoneybagPlus, IconScriptPlus, IconCurrencyDollar } from '@tabler/icons-vue';

gsap.registerPlugin(ScrollTrigger);


import Cheque1 from "@/assets/images/chequeAccount.jpg"
import Argent from "@/assets/images/account/argent.webp"
import Argent1 from "@/assets/images/account/argent1.webp"
import Received from "@/assets/images/account/received.webp"
import Guichet from "@/assets/images/account/guichet.webp"
import Electronic from "@/assets/images/account/terminaux.webp"
import Order from "@/assets/images/account/autre.webp"
import Refund from "@/assets/images/account/refund.webp"
import Micro from "@/assets/images/account/micro.webp"
import Image_compteAss from "@public/components/image_compteAss.vue";
import Epargne1 from "@/assets/images/cresaf/compte_epargne.webp"
import Epargne2 from "@/assets/images/cresaf/compte_epargne1.webp"
import Caisse1 from "@/assets/images/cresaf/bon_caisse.webp"
import Caisse2 from "@/assets/images/cresaf/bon_caisse2.webp"
import Terme1 from "@/assets/images/cresaf/depot_terme.webp"
import Terme2 from "@/assets/images/cresaf/depot_terme2.webp"
import Collecte1 from "@/assets/images/cresaf/collecte3.webp"
import Entreprise1 from "@/assets/images/cresaf/compte_entreprise.webp"
import Entreprise2 from "@/assets/images/cresaf/compte_entreprise2.webp"
import Salaire1 from "@/assets/images/cresaf/compte_salaire1.webp"
import Salaire2 from "@/assets/images/cresaf/compte_salaire2.webp"
import Association1 from "@/assets/images/cresaf/association1.webp"
import Association2 from "@/assets/images/cresaf/association2.webp"

const Caisse = [Caisse1, Caisse2]
const Terme = [Terme1, Terme2]
const Cheque = [Cheque1]
const Epargne = [Epargne1, Epargne2];
const Entreprise = [Entreprise1, Entreprise2];
const Salaire = [Salaire1, Salaire2];
const Association = [Association1, Association2];

const route = useRoute();

const products = ref([
  {
    id: 1,
    title: "Compte chèque",
    subtitle: "Particulier, entreprise & salaire",
    subtitle2: "✅ Gérez vos finances au quotidien avec facilité et rapidité ",
    description: "Description du compte chèque...",
    image: Cheque1
  },
  {
    id: 2,
    title: "Bon de caisse",
    subtitle: "Bon plan pour votre épargne",
    subtitle2: "💰 Investissez en toute sécurité avec un rendement garanti chez CRESAF !",
    description: "Description du Bon de caisse...",
    image: Caisse2
  },
  {
    id: 3,
    title: "Dépôt à terme",
    description: "Description du dépôt à terme...",
    subtitle: "Fructifier votre argent",
    subtitle2: "🤑 Faites fructifier votre argent avec des taux avantageux et sans risque !",
    image: Terme1
  },
  {
    id: 4,
    title: "Compte d'épargne",
    subtitle: "Livret & Association",
    subtitle2: "💳 Épargnez sereinement et faites grandir vos projets avec CRESAF !",
    description: "Description du compte d'épargne...",
    image: Epargne1
  },
  {
    id: 5,
    title: "Collecte journalière",
    subtitle: "Vous suivre au quotidien",
    subtitle2: "📥 Sécurisez vos revenus quotidiens sans vous déplacer",
    description: "Description de la collecte journalière...",
    image: Collecte1
  }
]);

const currentSlide = ref(0);
const autoPlayInterval = ref(null);
const isTransitioning = ref(false);

// Fonction pour animer la transition entre les slides
// const animateSlideTransition = (fromIndex, toIndex, direction = 'next') => {
//   if (isTransitioning.value) return;
//
//   isTransitioning.value = true;
//
//   const currentSlideEl = document.querySelector(`[data-slide="${fromIndex}"]`);
//   const nextSlideEl = document.querySelector(`[data-slide="${toIndex}"]`);
//   const currentContent = document.querySelector(`[data-content="${fromIndex}"]`);
//   const nextContent = document.querySelector(`[data-content="${toIndex}"]`);
//
//   if (!currentSlideEl || !nextSlideEl || !currentContent || !nextContent) {
//     isTransitioning.value = false;
//     return;
//   }
//
//   // Configuration de la direction
//   const moveDistance = direction === 'next' ? '100%' : '-100%';
//   const startDistance = direction === 'next' ? '-100%' : '100%';
//
//   // Timeline GSAP pour orchestrer l'animation
//   const tl = gsap.timeline({
//     onComplete: () => {
//       isTransitioning.value = false;
//     }
//   });
//
//   // Position initiale de la nouvelle slide (hors écran)
//   gsap.set(nextSlideEl, {
//     x: startDistance,
//     zIndex: 2
//   });
//   gsap.set(nextContent, {
//     x: startDistance,
//     opacity: 0
//   });
//
//   // Animation simultanée
//   tl.to(currentSlideEl, {
//     x: moveDistance,
//     duration: 1.2,
//     ease: "power2.inOut"
//   })
//       .to(currentContent, {
//         x: moveDistance,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power2.inOut"
//       }, 0) // Démarre en même temps que l'animation précédente
//       .to(nextSlideEl, {
//         x: 0,
//         duration: 1.2,
//         ease: "power2.inOut"
//       }, 0)
//       .to(nextContent, {
//         x: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.inOut"
//       }, 0.2); // Légèrement décalé pour un effet plus naturel
//
//   // Réinitialiser la position de l'ancienne slide après l'animation
// //   tl.set(currentSlideEl, {
//   x: 0,
//   zIndex: 1
// });

// Dans la fonction animateSlideTransition, modifiez la configuration de zIndex et assurez-vous que les éléments restent visibles.
const animateSlideTransition = (fromIndex, toIndex, direction = 'next') => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;

  const currentSlideEl = document.querySelector(`[data-slide="${fromIndex}"]`);
  const nextSlideEl = document.querySelector(`[data-slide="${toIndex}"]`);
  const currentContent = document.querySelector(`[data-content="${fromIndex}"]`);
  const nextContent = document.querySelector(`[data-content="${toIndex}"]`);

  if (!currentSlideEl || !nextSlideEl || !currentContent || !nextContent) {
    isTransitioning.value = false;
    return;
  }

  // Configuration de la direction
  const moveDistance = direction === 'next' ? '100%' : '-100%';
  const startDistance = direction === 'next' ? '-100%' : '100%';

  // Timeline GSAP pour orchestrer l'animation
  const tl = gsap.timeline({
    onComplete: () => {
      isTransitioning.value = false;
    }
  });

  // Position initiale de la nouvelle slide (hors écran)
  gsap.set(nextSlideEl, {
    x: startDistance,
    zIndex: 2
  });
  gsap.set(nextContent, {
    x: startDistance,
    opacity: 0
  });

  // Animation simultanée
  tl.to(currentSlideEl, {
    x: moveDistance,
    duration: 1.2,
    ease: "power2.inOut"
  })
      .to(currentContent, {
        x: moveDistance,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0)
      .to(nextSlideEl, {
        x: 0,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0)
      .to(nextContent, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0.2);

  // Réinitialiser la position de l'ancienne slide après l'animation
  tl.set(currentSlideEl, {
    x: 0,
    zIndex: 1
  });
  tl.set(currentContent, {
    x: 0,
    opacity: 1 // Assurez-vous que l'opacité soit 1 pour éviter la disparition
  });
  tl.set(nextContent, {
    opacity: 1
  });
};
//   tl.set(currentSlideEl, {
//     x: 0,
//     zIndex: 1
//   });
//   tl.set(currentContent, {
//     x: 0,
//     opacity: 0
//   });
//   tl.set(nextContent, {
//     opacity: 1
//   });
// };

const nextSlide = () => {
  if (isTransitioning.value) return;

  const fromIndex = currentSlide.value;
  const toIndex = (currentSlide.value + 1) % products.value.length;

  currentSlide.value = toIndex;
  animateSlideTransition(fromIndex, toIndex, 'next');
};

const prevSlide = () => {
  if (isTransitioning.value) return;

  const fromIndex = currentSlide.value;
  const toIndex = currentSlide.value === 0 ? products.value.length - 1 : currentSlide.value - 1;

  currentSlide.value = toIndex;
  animateSlideTransition(fromIndex, toIndex, 'prev');
};

const goToSlide = (index) => {
  if (isTransitioning.value || index === currentSlide.value) return;

  const fromIndex = currentSlide.value;
  const direction = index > currentSlide.value ? 'next' : 'prev';

  currentSlide.value = index;
  animateSlideTransition(fromIndex, index, direction);
};

// Auto-play du slider
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
};

const currentSection = ref(1);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(`section${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    currentSection.value = sectionId;
  }
};

// Démarrer l'auto-play au montage du composant
onMounted(() => {
  startAutoPlay();

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.id.replace('section', ''));
            if (!isNaN(sectionId)) {
              currentSection.value = sectionId;
            }
          }
        });
      },
      {
        threshold: 0.5,
        root: null,
        rootMargin: '0px'
      }
  );

  // Observer toutes les sections
  document.querySelectorAll('main[id^="section"]').forEach(section => {
    observer.observe(section);
  });

  nextTick(() => {
    const sectionId = route.query.scrollTo
    if (sectionId) {
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId)
        if (sectionElement) {
          sectionElement.scrollIntoView({behavior: 'smooth'})
        }
      }, 500);
    }
  });

  // Timeline principale pour l'animation d'entrée
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Animation du header avec effet de révélation
  tl.from(".title-main", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
      .from(".accent-bar", {
        scaleX: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8")
      .from(".description-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.6");

  // Animation de l'image avec parallax subtile
  tl.from(".image-container", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.8");

  // Animation du badge flottant
  tl.from(".floating-badge", {
    scale: 0,
    rotation: 45,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "-=0.4");

  // Animation du titre des avantages
  tl.from(".benefits-title", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6");

  // Animation des cartes d'avantages avec stagger
  tl.from(".advantage-card", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=0.4");

  // Animation du CTA
  tl.from(".cta-section", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.2");

  // Animation continue des cercles flottants
  gsap.to(".floating-circle", {
    y: -20,
    duration: 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5
  });

  // Animation de révélation de la ligne sous "avantages"
  ScrollTrigger.create({
    trigger: ".benefits-title",
    start: "top 80%",
    onEnter: () => {
      gsap.to(".benefits-title .absolute", {
        scaleX: 1,
        duration: 1,
        ease: "power2.out"
      });
    }
  });

  // Effet hover amélioré pour les cartes
  document.querySelectorAll('.advantage-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.relative'), {
        y: -8,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.relative'), {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animation parallax subtile au scroll
  gsap.to(".floating-circle", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Effet de brillance sur le bouton CTA
  const button = document.querySelector('.cta-section button');
  if (button) {
    const shine = gsap.timeline({ paused: true });
    shine.to(button, {
      boxShadow: "0 0 30px rgba(69, 171, 52, 0.5)",
      duration: 0.3
    });

    button.addEventListener('mouseenter', () => shine.play());
    button.addEventListener('mouseleave', () => shine.reverse());
  }
});

// Nettoyer l'intervalle lors du démontage
onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Hero Section avec slider GSAP -->
    <section class="relative h-screen overflow-hidden">
      <div class="relative w-full h-full">
        <!-- Toutes les slides sont présentes dans le DOM -->
        <div v-for="(product, index) in products"
             :key="product.id"
             :data-slide="index"
             class="absolute inset-0 cursor-pointer"
             :class="{ 'z-10': index === currentSlide, 'z-0': index !== currentSlide }"
             @click="stopAutoPlay(); startAutoPlay()">
          <img :src="product.image"
               :alt="product.title"
               class="w-full h-full object-cover lg:mt-10 mt-20">
          <div class="absolute inset-0 bg-blue-700 bg-opacity-30">
            <div class="container mx-auto px-6 h-full flex items-center">
              <div :data-content="index"
                   class="text-white max-w-lg"
                   :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }">
                <h1 class="text-5xl montserrat montserrat-700 mb-4">{{ product.title }}</h1>
                <p class="text-xl montserrat">{{ product.subtitle2 }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contrôles du slider -->
        <button
            @click="prevSlide"
            :disabled="isTransitioning"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40"
            aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-8-8 8-8"/>
          </svg>
        </button>

        <button
            @click="nextSlide"
            :disabled="isTransitioning"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40"
            aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l8 8-8 8"/>
          </svg>
        </button>

        <!-- Indicateurs de slides -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
          <button v-for="(product, index) in products"
                  :key="`indicator-${product.id}`"
                  @click="goToSlide(index)"
                  :disabled="isTransitioning"
                  :class="[
                    'w-3 h-3 rounded-full transition-all duration-300',
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  ]"
                  :aria-label="`Aller à la slide ${index + 1}`">
          </button>
        </div>
      </div>
    </section>

    <!-- Sections des produits -->
    <!--Compte chèque particulier-->
    <div class="relative overflow-hidden bg-primary">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-secondary top-[10%] left-[10%]"></div>
        <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-secondary top-[60%] right-[15%]"></div>
        <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-secondary bottom-[20%] left-[70%]"></div>
      </div>

      <div class="relative z-10 lg:px-16 px-8 py-12">
        <div id="section1" class="container mx-auto">

          <!-- Header Section with staggered animation -->
          <div class="text-center mb-10">
            <div class="inline-block">
              <h2 class="text-white montserrat montserrat-700 text-4xl mb-6 title-main">
                Compte chèque
                <span class="text-white montserrat montserrat-700">particulier</span>
              </h2>
              <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-white"></div>
            </div>

              <p class="text-gray-200 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
              Le compte chèque à destination des <span class="montserrat text-white">entrepreneurs</span>
              quel que soit le secteur d'activité, permettra d'effectuer les
              <span class="montserrat montserrat-600 text-white">transactions bancaires courantes</span>
              liées à leurs activités.
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 items-center">

            <!-- Image Section -->
            <div class="relative mb-12 lg:mb-0 image-container place-items-end">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                <!-- Placeholder for actual image -->
                  <Image_compteAss :images="Cheque" />
<!--                <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">-->
<!--                  <div class="text-center">-->
<!--                    <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-secondary">-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                      <Image_compteAss :images="Cheque" />-->
<!--                    <p class="text-gray-600 font-medium">Image du compte chèque</p>-->
<!--                  </div>-->
<!--                </div>-->

                <!-- Decorative overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <!-- Floating badge -->
                <div class="absolute top-0 -right-4 floating-badge">
                  <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-secondary">
                    ✨ Nouveau
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="content-section">
<!--              <div class="mb-12">-->
<!--                <h3 class="text-2xl lg:text-3xl montserrat text-white mb-6 benefits-title">-->
<!--                  Ce compte offre plusieurs-->
<!--                  <span class="text-green-300">avantages</span>-->
<!--                  <br>qui facilitent la gestion financière-->
<!--                </h3>-->
<!--              </div>-->

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Card 1 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 class="font-semibold text-white">Découvert autorisé</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Mise en place d'un découvert</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">À la demande du client</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>

                <!-- Advantage Card 2 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />-->
<!--                          </svg>-->
                          <IconCurrencyDollar class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Dépôt initial</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Dépôt minimum requis</p>

                      <div class="flex items-center">
                        <span class="text-2xl font-bold text-primary-accent">30.000 XAF</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>

                <!-- Additional Feature Cards -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 class="font-semibold text-white">Transactions rapides</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Virements instantanés</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">24h/24</span>
                      </div>
                    </div>

                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>

                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 class="font-semibold text-white">Sécurité maximale</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Protection avancée</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">Garantie 100%</span>
                      </div>
                    </div>

                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              <!-- Call to Action -->
<!--              <div class="mt-12 text-center cta-section">-->
<!--                <button class="group relative px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"-->
<!--                        style="background: linear-gradient(135deg, #45ab34, #5bc446);">-->
<!--                  <span class="relative z-10">Ouvrir un compte</span>-->
<!--                  <div class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />-->
<!--                  </svg>-->
<!--                </button>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden bg-blue-50">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
        <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
        <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
      </div>

      <div class="relative z-10 lg:px-16 px-8 py-12">
        <div id="section2" class="container mx-auto">

          <!-- Header Section with staggered animation -->
          <div class="text-center mb-10">
            <div class="inline-block">
              <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                Bon de caisse
              </h2>
              <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
            </div>

              <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
                Le bon de caisse permet aux entreprises et aux investisseurs d’effectuer des placements de fonds en toute sécurité
                sur une période minimale d’un an. Le placement a pour vocation à terme de générer d’importants bénéfices grâce à des taux
                d’intérêts négociables.
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

            <!-- Image Section -->
            <div class="relative mb-12 lg:mb-0 image-container order-2">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                <Image_compteAss :images="Caisse" />

                <!-- Decorative overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <!-- Floating badge -->
                <div class="absolute top-0 -right-4 floating-badge">
                  <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">
                    ✨ Nouveau
                  </div>
                </div>
              </div>
            </div>


            <!-- Content Section -->
            <div class="content-section mt-16">
              <div class="max-w-xl mx-auto">
                <h3 class="text-xl montserrat montserrat-600 text-gray-600 text-center mb-6 benefits-title">
                  Les placements en bon de caisse offrent les conditions suivantes
                </h3>
              </div>

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Card 1 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--                          </svg>-->
                          <IconMoneybagPlus class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Rémunération</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Taux de rémunération</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">Négociable</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--                          </svg>-->
                          <IconScriptPlus class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Mode d’intérêt</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Précompte ou Postcompte</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">À la demande du client</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden bg-primary">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-secondary top-[10%] left-[10%]"></div>
        <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-secondary top-[60%] right-[15%]"></div>
        <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-secondary bottom-[20%] left-[70%]"></div>
      </div>

      <div class="relative z-10 lg:px-16 px-8 py-12">
        <div id="section1" class="container mx-auto">

          <!-- Header Section with staggered animation -->
          <div class="text-center mb-10">
            <div class="inline-block">
              <h2 class="text-white montserrat montserrat-700 text-4xl mb-6 title-main">
                Dépôt à terme
              </h2>
              <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-white"></div>
            </div>

            <p class="text-gray-200 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
              Le dépôt à terme permet au souscripteur de déposer des fonds sur un compte bloqué afin de bénéficier d’intérêts supérieurs au taux applicable sur un compte d’épargne classique. Le souscripteur pouvant à tout moment disposer des intérêts générés par le compte.
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

            <!-- Image Section -->
            <div class="relative mb-12 lg:mb-0 image-container place-items-end">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                <!-- Placeholder for actual image -->
                <Image_compteAss :images="Terme" />

                <!-- Decorative overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <!-- Floating badge -->
                <div class="absolute top-0 -right-4 floating-badge">
                  <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-secondary">
                    ✨ Nouveau
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="content-section mt-16">
              <div class="mb-12">
                <h3 class="text-2xl montserrat montserrat-600 text-gray-50 mb-6 benefits-title text-center">
                  Ce compte propose de nombreux avantages visant à simplifier et optimiser la gestion financière des souscripteurs.
                </h3>
              </div>

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Card 1 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 class="font-semibold text-white">Rémunération</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Taux de rémunération</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">Négociable</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>

                <!-- Advantage Card 2 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />-->
<!--                          </svg>-->
                          <IconCurrencyDollar class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Intérêt</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Taux d’intérêts</p>

                      <div class="flex items-center">
                        <span class="text-2xl font-bold text-white"> Allant jusqu’à 5%</span>
                      </div>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              <!-- Call to Action -->
              <!--              <div class="mt-12 text-center cta-section">-->
              <!--                <button class="group relative px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"-->
              <!--                        style="background: linear-gradient(135deg, #45ab34, #5bc446);">-->
              <!--                  <span class="relative z-10">Ouvrir un compte</span>-->
              <!--                  <div class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>-->
              <!--                  <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
              <!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />-->
              <!--                  </svg>-->
              <!--                </button>-->
              <!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Compte d’épargne association-->
    <div id="section4" class="pb-6 bg-blue-50 py-12 lg:px-8 px-5">

      <div class="relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
          <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
          <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
        </div>

        <div class="relative z-10 lg:px-16 px-8 py-12">
          <div id="section2" class="container mx-auto">

            <!-- Header Section with staggered animation -->
            <div class="text-center mb-10">
              <div class="inline-block">
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                  Compte d’épargne association
                </h2>
                <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
              </div>

              <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
                Le compte d’épargne association a été mis sur pied afin de permettre aux associations de protéger leurs finances grâce à des comptes d’épargne fiables et sécurisés.
              </p>
            </div>

            <!-- Main Content Grid -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

              <!-- Image Section -->
              <div class="relative mb-12 lg:mb-0 image-container order-2">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                  <Image_compteAss :images="Association" />

                  <!-- Decorative overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <!-- Floating badge -->
                  <div class="absolute top-0 -right-4 floating-badge">
                    <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">
                      ✨ Nouveau
                    </div>
                  </div>
                </div>
              </div>


              <!-- Content Section -->
              <div class="content-section mt-16">
                <div class="max-w-xl mx-auto">
                  <h3 class="text-xl montserrat montserrat-600 text-gray-600 text-center mb-6 benefits-title">
                    Les associations bénéficient des avantages et conditions suivantes pour leur compte d’épargne
                  </h3>
                </div>

                <!-- Advantages Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                  <!-- Advantage Card 1 -->
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--                            </svg>-->
                            <IconCurrencyDollar class="h-5 w-5 text-black" />
                          </div>
                          <h4 class="font-semibold text-white">Dépôt initial</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Dépôt minimum requis</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">50.000 XAF</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white">Intérêt</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Taux d’intérêt</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">4% sur l’année</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden bg-white">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
          <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
          <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
        </div>

        <div class="relative z-10 lg:px-16 px-8 py-12">
          <div id="section2" class="container mx-auto">

            <!-- Header Section with staggered animation -->
            <div class="text-center mb-10">
              <div class="inline-block">
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                  Compte d’épargne sur livret
                </h2>
                <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
              </div>

              <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
                Le compte d’épargne sur livret est destiné à sécuriser les économies de nos clients. Le client pourra ainsi faire fructifier l’argent déposé grâce à des taux d’intérêts les plus intéressants du marché.
              </p>
            </div>

            <!-- Main Content Grid -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

              <!-- Image Section -->
              <div class="relative mb-12 lg:mb-0 image-container">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                  <Image_compteAss :images="Epargne" />

                  <!-- Decorative overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <!-- Floating badge -->
                  <div class="absolute top-0 -right-4 floating-badge">
                    <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">
                      ✨ Nouveau
                    </div>
                  </div>
                </div>
              </div>


              <!-- Content Section -->
              <div class="content-section mt-16">
                <div class="max-w-xl mx-auto">
                  <h3 class="text-xl montserrat montserrat-600 text-gray-600 text-center mb-6 benefits-title">
                    Les conditions d'ouverture d'un compte d'épargne sur livret sont les suivantes :
                  </h3>
                </div>

                <!-- Advantages Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                  <!-- Advantage Card 1 -->
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--                            </svg>-->
                            <IconCurrencyDollar class="h-5 w-5 text-black" />
                          </div>
                          <h4 class="font-semibold text-white">Dépôt initial</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Dépôt minimum requis à l’ouverture</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">16.000 XAF TTC</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white">Solde minimum</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Solde minimum permanent en compte</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">10.000 XAF</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
          <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
          <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
        </div>

        <div class="relative z-10 lg:px-16 px-8 py-12">
          <div id="section2" class="container mx-auto">

            <!-- Header Section with staggered animation -->
            <div class="text-center mb-10">
              <div class="inline-block">
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                  Compte courant entreprise
                </h2>
                <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
              </div>

              <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
                Le compte courant entreprise permet aux entrepreneurs ou aux entreprises clientes d’avoir leurs fonds à disposition
                et de bénéficier à tout moment des avantages liés à celui-ci. Les entreprises clientes pourront effectuer
                toutes les transactions financières courantes liées à leur fonctionnement grâce à un service simplifié.
              </p>
            </div>

            <!-- Main Content Grid -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

              <!-- Image Section -->
              <div class="relative mb-12 lg:mb-0 image-container order-2">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                  <Image_compteAss :images="Entreprise" />

                  <!-- Decorative overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <!-- Floating badge -->
                  <div class="absolute top-0 -right-4 floating-badge">
                    <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">
                      ✨ Nouveau
                    </div>
                  </div>
                </div>
              </div>


              <!-- Content Section -->
              <div class="content-section mt-16">
                <div class="max-w-xl mx-auto">
                  <h3 class="text-xl montserrat montserrat-600 text-gray-600 text-center mb-6 benefits-title">
                    Les entreprises bénéficient des avantages et conditions suivantes pour leur compte courant entreprise
                  </h3>
                </div>

                <!-- Advantages Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                  <!-- Advantage Card 1 -->
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10 group">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
<!--                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--                            </svg>-->
                            <IconCurrencyDollar class="h-5 w-5 text-black" />
                          </div>
                          <h4 class="font-semibold text-white">Dépôt initial</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Dépôt minimum à l’ouverture</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white group-hover:text-secondary">30.000 XAF</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white"> Compensation</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Facilité de compensation chèque</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-transparent opacity-95">Selon l'accord initié</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white"> Préfinancement</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3"> Possibilité de préfinancer les salaires</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-transparent opacity-95">À la demande de l’entreprise</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden bg-white">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
          <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
          <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
        </div>

        <div class="relative z-10 lg:px-16 px-8 py-12">
          <div id="section2" class="container mx-auto">

            <!-- Header Section with staggered animation -->
            <div class="text-center mb-10">
              <div class="inline-block">
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                  Compte virement salaire
                </h2>
                <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
              </div>

              <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
                Le compte virement salaire permet de recevoir son salaire mensuel,
                mais aussi d’effectuer ses transactions banquières courantes.
                Il donne droit à un découvert permanent, ainsi qu’à des crédits de plusieurs sortes.
              </p>
            </div>

            <!-- Main Content Grid -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

              <!-- Image Section -->
              <div class="relative mb-12 lg:mb-0 image-container">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                  <Image_compteAss :images="Salaire" />

                  <!-- Decorative overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <!-- Floating badge -->
                  <div class="absolute top-0 -right-4 floating-badge">
                    <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">
                      ✨ Nouveau
                    </div>
                  </div>
                </div>
              </div>


              <!-- Content Section -->
              <div class="content-section mt-16">
                <div class="max-w-xl mx-auto">
                  <h3 class="text-xl montserrat montserrat-600 text-gray-600 text-center mb-6 benefits-title">
                    Bien plus qu’un simple outil de réception de salaire, notre compte virement salaire vous offre de nombreux avantages
                  </h3>
                </div>

                <!-- Advantages Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                  <!-- Advantage Card 1 -->
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white">Virement de salaire</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Réception automatique du salaire</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">Chaque fin de mois</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white">Opérations courantes</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Dépôts, retraits, virements</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">Sans contraintes</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white">Découvert autorisé</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Accès à un découvert permanent</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">Selon votre profil</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary/70 opacity-95 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 class="font-semibold text-white"> Accès au crédit</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Prêts consommation, équipement, etc.</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-white">Sur demande</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Collecte journalière-->
    <div id="section5" class="bg-primary lg:px-16 px-8 py-12">
      <div class="container mx-auto">
        <h1 class="text-white w-full text-center montserrat montserrat-700 lg:text-4xl text-3xl lg:pb-4">Collecte journalière</h1>
        <p class="w-full py-6 text-lg text-gray-200">
          La collecte journalière destinée principalement aux travailleurs indépendants (commerçants ou autre)
          permet de sécuriser l’argent sans avoir à se déplacer.
          Nos agents déployés sur le terrain collectent les fonds et les déposent directement
          sur les comptes de chaque souscripteur.
        </p>
        <h1 class="text-white w-full montserrat montserrat-600 lg:text-3xl text-2xl text-center lg:text-left pb-4">Collecte journalière mensuelle </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Argent"
                 alt="Argent"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Minimum d’épargne</h3>
              <p class="text-gray-600 mb-4">500 XAF/jour</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Refund"
                 alt="Refund"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Disponible au décaissement</h3>
              <p class="text-gray-600 mb-4">fin du mois</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Micro"
                 alt="Micro"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Possibilité de micro-crédit </h3>
            </div>
          </div>
        </div>
        <br>
        <h1 class="text-white w-full montserrat montserrat-600 lg:text-3xl text-2xl text-center lg:text-left pb-4">Collecte journalière annuelle </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Argent1"
                 alt="Argent"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Minimum d’épargne</h3>
              <p class="text-gray-600 mb-4">200 XAF/jour</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Received"
                 alt="Refund"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Disponible au décaissement</h3>
              <p class="text-gray-600 mb-4"> fin d’année</p>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Micro"
                 alt="Micro"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Possibilité de micro-crédit </h3>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!--Carte visa-->
    <div id="section6" class="bg-blue-50 lg:px-16 px-8 py-12">
      <div class="container mx-auto">
        <h2 class="text-secondary montserrat montserrat-700 text-4xl w-full justify-center text-center pb-5">
          Carte visa
        </h2>
        <p class="text-gray-800 font-primary text-lg w-full justify-center leading-relaxed pb-10">
          Les cartes VISA du CRESAF offrent une solution sécurisée pour effectuer des retraits aux guichets automatiques
          et régler des achats de biens ou services, que ce soit via des terminaux de paiement électronique (TPE) ou en ligne.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white opacity-90 hover:opacity-100 rounded-lg shadow-lg
          overflow-hidden transition-transform duration-300 hover:scale-105 p-2">
            <img :src="Guichet"
                 alt="Guichet"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Guichet automatique de banque</h3>
            </div>
          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="Electronic"
                 alt="Electronic"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Terminaux de paiement électronique </h3>
            </div>

          </div>
          <div
              class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">

            <img :src="Order"
                 alt="Order"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Autres moyens de payement en ligne</h3>
            </div>
          </div>
        </div>
      </div>

      <!--      <div class="absolute inset-0 bg-blue-700 bg-opacity-30">-->
      <!--      </div>-->
    </div>

    <!-- Navigation latérale -->
    <div class="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      <a v-for="product in products" :key="product.id"
         :href="`#section${product.id}`"
         :class="[
           'block w-3 h-3 rounded-full transition-all duration-300',
           currentSection === product.id ? 'bg-green-600 scale-125' : 'bg-gray-400 hover:bg-white'
         ]"
         @click.prevent="scrollToSection(product.id)">
        <span class="sr-only">{{ product.title }}</span>
      </a>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
/* Assurer que les images couvrent bien tout l'espace */
.absolute.inset-0 img {
  transform: translateZ(0); /* Force hardware acceleration */
}

/* Optimisation des performances pour les animations */
.absolute.inset-0 {
  will-change: transform;
}

/* Styles pour les animations et effets */
.floating-badge {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(12deg); }
}

/* Effet de backdrop blur personnalisé */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>
