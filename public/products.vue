<script setup>
import {ref, onMounted, onUnmounted, nextTick} from 'vue';
import {useRoute} from "vue-router";
import { gsap } from 'gsap';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {IconMoneybagPlus, IconScriptPlus, IconCurrencyDollar, IconCircleCheck, IconPigMoney, IconCalendarDollar, IconReportMoney, IconCreditCardPay, IconTrendingUp, IconFileLike, IconDeviceMobileCheck, IconNetwork, IconWorldCheck } from '@tabler/icons-vue';

gsap.registerPlugin(ScrollTrigger);

import Cheque1 from "@/assets/images/chequeAccount.jpg"
import Argent from "@/assets/images/argent.jpg"
import Argent1 from "@/assets/images/argent1.jpg"
import Received from "@/assets/images/decaissement1.jpg"
import Guichet from "@/assets/images/account/guichet.webp"
import Electronic from "@/assets/images/account/terminaux.webp"
import Order from "@/assets/images/account/autre.webp"
import Refund from "@/assets/images/decaissement.jpg"
import Micro from "@/assets/images/microCredit.jpg"
import Image_compteAss from "@public/components/image_compteAss.vue";
import Epargne1 from "@/assets/images/livret1.jpg"
import Epargne2 from "@/assets/images/livret2.jpg"
import Caisse1 from "@/assets/images/bon1.jpg"
import Caisse2 from "@/assets/images/bon2.jpg"
import Caisse3 from "@/assets/images/bon3.jpg"
import Terme3 from "@/assets/images/depot1.jpg"
import Terme4 from "@/assets/images/depot2.jpg"
import Entreprise1 from "@/assets/images/entreprise1.jpg"
import Entreprise2 from "@/assets/images/entreprise2.jpg"
import Salaire1 from "@/assets/images/salaire1.jpg"
import Salaire2 from "@/assets/images/salaire2.jpg"
import Import1 from "@/assets/images/import1.jpg"
import Import2 from "@/assets/images/import2.jpg"
import Import3 from "@/assets/images/import3.jpg"
import Association1 from "@/assets/images/association.jpg"
import Association2 from "@/assets/images/association1.jpg"
import Association3 from "@/assets/images/association2.jpg"

const Caisse = [Caisse1, Caisse2, Caisse3]
const Terme = [Terme3, Terme4]
const Cheque = [Cheque1]
const Epargne = [Epargne1, Epargne2];
const Entreprise = [Entreprise1, Entreprise2];
const Salaire = [Salaire1, Salaire2];
const Import = [Import1, Import2, Import3];
const Association = [Association1, Association2, Association3];
const Products = [Association1, Salaire1, Entreprise1, Epargne1, Terme3, Caisse1];

const route = useRoute();

const featuresSection = ref(null);
const featureCards = ref([]);
const featureVisas = ref([]);
const heroSection = ref(null);
const heroText = ref(null);
const heroDevice = ref(null);

const products = ref([
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
]);
const collectes = ref([
  {
    title: "Collecte journalière mensuelle",
    contain:[
      {
        image: Argent,
        title: "Minimum d’épargne",
        description: "500 XAF/jour"
      },
      {
        image: Refund,
        title: "Disponible au décaissement",
        description: "fin du mois"
      },
      {
        image: Micro ,
        title: "Possibilité de micro-crédit",
        description: ""
      }
    ]
  },
  {
    title: "Collecte journalière annuelle",
    contain:[
      {
        image: Argent1,
        title: "Minimum d’épargne",
        description: "200 XAF/jour"
      },
      {
        image: Received,
        title: "Disponible au décaissement",
        description: "fin d’année"
      },
      {
        image: Micro,
        title: "Possibilité de micro-crédit",
        description: ""
      }
    ]
  },
]);
const visas = ref([
  {
    image: Guichet,
    description: 'Guichet automatique de banque',
  },
  {
    image: Electronic,
    description: 'Terminaux de paiement électronique',
  },
  {
    image: Order,
    description: 'Autres moyens de payement en ligne',
  }
]);
const Cheques = ref([
  {
    title: "Découvert autorisé",
    description: "Mise en place d'un découvert",
    conclusion: "À la demande du client"
  },
  {
    title: "Dépôt initial",
    description: "Dépôt minimum requis",
    conclusion: "30.000 XAF"
  },
  {
    title: "Transactions rapides",
    description: "Virements instantanés",
    conclusion: "24h/24"
  },
  {
    title: "Sécurité maximale",
    description: "Protection avancée",
    conclusion: "Garantie 100%"
  },
]);
const Caisses = ref([
  {
    title: "Rémunération",
    description: "Taux de rémunération",
    conclusion: "Négociable"
  },
  {
    title: "Mode d’intérêt",
    description: "Précompte ou Postcompte",
    conclusion: "À la demande du client"
  },
]);
const Termes = ref([
  {
    title: "Rémunération",
    description: "Taux de rémunération",
    conclusion: "Négociable"
  },
  {
    title: "Intérêt",
    description: "Taux d’intérêts",
    conclusion: "Allant jusqu’à 5%"
  }
]);

const currentSlide = ref(0);
const autoPlayInterval = ref(null);
const isTransitioning = ref(false);

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

const nextSlide = () => {
  if (isTransitioning.value) return;

  const fromIndex = currentSlide.value;
  const toIndex = (currentSlide.value + 1) % products.value.length;

  currentSlide.value = toIndex;
  animateSlideTransition(fromIndex, toIndex, 'next');
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

// const scrollToSection = (sectionId) => {
//   const section = document.getElementById(`section${sectionId}`);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//     currentSection.value = sectionId;
//   }
// };
const scrollToSection = (sectionId) => {
  const section = document.getElementById(`section${sectionId}`);
  if (section) {
    const offset = section.getBoundingClientRect().top + window.scrollY - 150;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    currentSection.value = sectionId;
  }
};


// Démarrer l'auto-play au montage du composant
onMounted(async () => {
  await nextTick();
  startAutoPlay();

  // Observer pour les sections
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
        threshold: 0.3, // Réduit le seuil pour une meilleure détection
        root: null,
        rootMargin: '-10% 0px' // Ajoute une marge pour éviter les déclenchements prématurés
      }
  );

  // Observer toutes les sections
  document.querySelectorAll('main[id^="section"]').forEach(section => {
    observer.observe(section);
  });

  await nextTick(() => {
    const sectionId = route.query.scrollTo
    if (sectionId) {
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId)
        if (sectionElement) {
          // sectionElement.scrollIntoView({behavior: 'smooth'})
          const offset = sectionElement.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }

      }, 500);
    }
  });

  // CORRECTION PRINCIPALE : Timeline avec ScrollTrigger amélioré
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top 90%", // Démarre plus tôt
      end: "bottom 10%", // Se termine plus tard
      toggleActions: "play none none none", // Supprime le reverse qui causait le problème
      refreshPriority: -1, // Priorité basse pour éviter les conflits
      onUpdate: (self) => {
        // Assure que les éléments restent visibles pendant le scroll
        if (self.progress === 0) {
          // Reset au état initial si on remonte complètement
          gsap.set([".title-main", ".accent-bar", ".description-text", ".image-container", ".floating-badge", ".benefits-title", ".advantage-card", ".cta-section"], {
            opacity: 0,
            y: 50
          });
        }
      }
    }
  });

  // Animation du header avec protection contre la disparition
  tl.fromTo(".title-main",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
  )
      .fromTo(".accent-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out" }, "-=0.8"
      )
      .fromTo(".description-text",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.6"
      );

  // Animation de l'image
  tl.fromTo(".image-container",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.8"
  );

  // Animation du badge flottant
  tl.fromTo(".floating-badge",
      { scale: 0, rotation: 45, opacity: 0 },
      { scale: 1, rotation: 12, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4"
  );

  // Animation des cartes d'avantages avec protection
  tl.fromTo(".advantage-card",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.4"
  );

  // AJOUT : ScrollTrigger séparé pour maintenir la visibilité
  ScrollTrigger.create({
    trigger: "#section1",
    start: "top bottom",
    end: "bottom top",
    onEnter: () => {
      // Assure que tous les éléments sont visibles quand on entre dans la section
      gsap.to([".title-main", ".accent-bar", ".description-text", ".image-container", ".advantage-card"], {
        opacity: 1,
        duration: 0.3
      });
    },
    onLeave: () => {
      // Garde les éléments visibles même en sortant de la section
      gsap.set([".title-main", ".accent-bar", ".description-text", ".image-container", ".advantage-card"], {
        opacity: 1
      });
    },
    onEnterBack: () => {
      // Réactive les éléments quand on revient en scrollant vers le haut
      gsap.to([".title-main", ".accent-bar", ".description-text", ".image-container", ".advantage-card"], {
        opacity: 1,
        y: 0,
        duration: 0.3
      });
    }
  });

  // Animation continue des cercles flottants (inchangée)
  gsap.to(".floating-circle", {
    y: -20,
    duration: 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5
  });

  // Effet hover amélioré pour les cartes (inchangé)
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

  // Animation parallax subtile (améliorée)
  gsap.to(".floating-circle", {
    yPercent: -30, // Réduit l'effet pour éviter les problèmes de disparition
    ease: "none",
    scrollTrigger: {
      trigger: "#section1",
      start: "top bottom",
      end: "bottom top",
      scrub: 1 // Ajoute un peu de lissage
    }
  });

  // Animations pour la collecte journaliere (inchangées mais améliorées)
  ScrollTrigger.create({
    trigger: featuresSection.value,
    start: 'top 80%',
    toggleActions: "play none none none", // Supprime le reverse
    onEnter: () => {
      gsap.fromTo(featureCards.value,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo(featureVisas.value,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
    }
  });

  // AJOUT : Protection globale contre la disparition des éléments
  ScrollTrigger.addEventListener("refresh", () => {
    // Remet tous les éléments principaux à leur état visible
    gsap.set([".title-main", ".accent-bar", ".description-text", ".image-container", ".advantage-card"], {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1
    });
  });

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
    <section class="w-full mx-auto px-4 pt-40 pb-12 lg:pt-40 bg-white" ref="heroSection">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div class="w-full lg:w-6/12 text-center lg:text-left px-4 lg:px-10" ref="heroText">
          <h1 class="text-4xl lg:text-6xl text-left montserrat montserrat-700 text-primary pb-0">
            Vos projets prennent vie, <span class="text-secondary">nous les accompagnons<em class="montserrat montserrat-800 text-italic ms-3">!</em></span>
          </h1>
          <p class="text-primary text-left montserrat montserrat-200 text-2xl my-10 lg:mr-20">
            Soutenir la croissance économique et sociale à travers l’épargne accessible, le financement adapté et un accompagnement financier de proximité.
          </p>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]" ref="heroDevice">
          <Image_compteAss :images="Products" />

          <!-- Decorative overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          <!-- Floating badge -->
<!--          <div class="absolute top-[10%] left-4 floating-badge">-->
<!--            <div class="px-6 py-3 rounded-full text-white font-bold shadow-lg transform rotate-12 bg-primary">-->
<!--              ✨ Nouveau-->
<!--            </div>-->
<!--          </div>-->
        </div>
<!--        <div class="w-full lg:w-6/12 hidden lg:flex" ref="heroDevice">-->
<!--          <Image1 />-->
<!--        </div>-->
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

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Cards -->
                <div class="advantage-card group cursor-pointer" v-for="(cheque, index) in Cheques" :key="index">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconCircleCheck v-if="index === 0" class="h-5 w-5 text-black" />
                          <IconCurrencyDollar v-else-if="index === 1" class="h-5 w-5 text-black" />
                          <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 class="font-semibold text-white">{{ cheque.title }}</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">{{ cheque.description }}</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white" :class="index===1 ? 'text-primary-accent' : ''">{{ cheque.conclusion }}</span>
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
    <!--Bon de caisse-->
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

                <!-- Advantage Cards -->
                <div class="advantage-card group cursor-pointer" v-for="(caisse, index) in Caisses" :key="index">
                  <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconMoneybagPlus v-if="index === 0" class="h-5 w-5 text-black" />
                          <IconScriptPlus v-else class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">{{ caisse.title }}</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">{{ caisse.description }}</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">{{ caisse.conclusion }}</span>
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
    <!--Dépôt à terme-->
    <div class="relative overflow-hidden bg-primary">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-secondary top-[10%] left-[10%]"></div>
        <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-secondary top-[60%] right-[15%]"></div>
        <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-secondary bottom-[20%] left-[70%]"></div>
      </div>

      <div class="relative z-10 lg:px-16 px-8 py-12">
        <div id="section3" class="container mx-auto">

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
              <div class="max-w-xl mx-auto">
                <h3 class="text-xl montserrat montserrat-600 text-gray-50 text-center mb-6 benefits-title">
                  Ce compte propose de nombreux avantages visant à simplifier et optimiser la gestion financière des souscripteurs.
                </h3>
              </div>

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Cards -->
                <div class="advantage-card group cursor-pointer" v-for="(terme, index) in Termes" :key="index">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconMoneybagPlus v-if="index === 0" class="h-5 w-5 text-black" />
                          <IconScriptPlus v-else class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">{{ terme.title }}</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">{{ terme.description }}</p>

                      <div class="flex items-center">
                        <span class="text-lg font-bold text-white">{{ terme.conclusion }}</span>
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

    <!--Compte d’épargne-->
    <div id="section4" class="pb-6 bg-blue-50 py-12 lg:px-8">

      <!--Compte d’épargne association-->
      <div class="relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="floating-circle absolute w-32 h-32 rounded-full opacity-10 bg-primary top-[10%] left-[10%]"></div>
          <div class="floating-circle absolute w-20 h-20 rounded-full opacity-5 bg-primary top-[60%] right-[15%]"></div>
          <div class="floating-circle absolute w-40 h-40 rounded-full opacity-5 bg-primary bottom-[20%] left-[70%]"></div>
        </div>

        <div class="relative z-10 lg:px-16 px-8 pb-12">
          <div id="section2" class="container mx-auto">

            <!-- Header Section with staggered animation -->
            <div class="text-center mb-10">
              <div class="inline-block">
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main md:-mx-0 -mx-10">
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

                  <!-- Advantage Cards -->
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconPigMoney class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconScriptPlus class="h-5 w-5 text-black" />
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
                <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main md:-mx-0 -mx-10">
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
              <div class="relative mb-12 lg:mb-0 image-container place-items-end">
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconPigMoney class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconCalendarDollar class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10 group">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconPigMoney class="h-5 w-5 text-black" />
                          </div>
                          <h4 class="font-semibold text-white">Dépôt initial</h4>
                        </div>

                        <p class="text-gray-300 text-sm mb-3">Dépôt minimum à l’ouverture</p>

                        <div class="flex items-center">
                          <span class="text-lg font-bold text-primary-accent">30.000 XAF</span>
                        </div>
                      </div>

                      <!-- Hover effect border -->
                      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div class="advantage-card group cursor-pointer">
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconMoneybagPlus class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconReportMoney class="h-5 w-5 text-black" />
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
              <div class="relative mb-12 lg:mb-0 image-container place-items-end">
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconCreditCardPay class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconTrendingUp class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconFileLike class="h-5 w-5 text-black" />
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
                    <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                      <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                      <div class="relative z-10">
                        <div class="flex items-center mb-4">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                            <IconDeviceMobileCheck class="h-5 w-5 text-black" />
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
    <div id="section5" class="bg-primary lg:px-16 px-8 py-12 hidden">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-white w-full text-center montserrat montserrat-700 lg:text-4xl text-3xl lg:mb-4 title-main">Collecte journalière</h1>
        <p class="w-full my-6 text-xl montserrat montserrat-400 text-gray-200 leading-relaxed description-text lg:text-start text-center">
          La collecte journalière destinée principalement aux travailleurs indépendants (commerçants ou autre)
          permet de sécuriser l’argent sans avoir à se déplacer.
          Nos agents déployés sur le terrain collectent les fonds et les déposent directement
          sur les comptes de chaque souscripteur.
        </p>
        <div v-for="(collecte, index) in collectes" :key="index">
          <h1 class="text-white w-full montserrat montserrat-600 lg:text-3xl text-2xl text-center lg:text-left pb-4">
            {{ collecte.title }} </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="featuresSection">
            <div
                v-for="(cont, index) in collecte.contain" :key="index"
                ref="featureCards"
                class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img :src="cont.image"
                   alt="Argent"
                   class="w-full object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ cont.title }}</h3>
                <p class="text-gray-600 mb-4">{{ cont.description }}</p>
              </div>
            </div>
          </div>
          <br>
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
        <div id="section5" class="container mx-auto">

          <!-- Header Section with staggered animation -->
          <div class="text-center">
            <div class="inline-block">
              <h2 class="text-white montserrat montserrat-700 text-4xl mb-6 title-main">
                Collecte journalière
              </h2>
              <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-white"></div>
            </div>

            <p class="text-gray-200 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
              La collecte journalière destinée principalement aux travailleurs indépendants (commerçants ou autre)
              permet de sécuriser l’argent sans avoir à se déplacer.
              Nos agents déployés sur le terrain collectent les fonds et les déposent directement
              sur les comptes de chaque souscripteur.
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

            <!-- Image Section -->
            <div class="relative mb-12 lg:mb-0 image-container place-items-end hidden">
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
            <div class="content-section mt-16" v-for="(collecte, index) in collectes" :key="index">
              <div class="max-w-xl pb-2">
                <h2 class="text-3xl montserrat montserrat-600 text-gray-50 mb-6 benefits-title">
                  {{ collecte.title }}
                </h2>
              </div>

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Cards -->
                <div class="advantage-card group cursor-pointer" v-for="(cont, index) in collecte.contain" :key="index">
                  <div class="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: linear-gradient(135deg, #45ab34, transparent);"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconMoneybagPlus v-if="index === 0" class="h-5 w-5 text-black" />
                          <IconScriptPlus v-else class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">{{ cont.title }}</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3" :class="cont.description? ``: `text-transparent`">{{ cont.description? cont.description : `noting description` }}</p>
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

    <!--Carte visa-->
    <div id="section6" class="bg-blue-50 lg:px-16 px-8 py-12">
      <div class="container mx-auto">
        <h2 class="text-secondary montserrat montserrat-700 text-4xl w-full justify-center text-center pb-5 title-main">
          Carte visa
        </h2>
        <p class="text-gray-800 font-primary text-lg lg:text-start text-center w-full justify-center leading-relaxed pb-10 description-text">
          Les cartes VISA du CRESAF offrent une solution sécurisée pour effectuer des retraits aux guichets automatiques
          et régler des achats de biens ou services, que ce soit via des terminaux de paiement électronique (TPE) ou en ligne.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="featuresSection">
          <div
              ref="featureVisas"
              class="bg-white opacity-90 hover:opacity-100 rounded-lg shadow-lg
          overflow-hidden transition-transform duration-300 hover:scale-105 p-2" v-for="(visa, index) in visas" :key="index">
            <img :src="visa.image"
                 alt="Guichet"
                 class="w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ visa.description }}</h3>
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
        <div id="section7" class="container mx-auto">

          <!-- Header Section with staggered animation -->
          <div class="text-center mb-10">
            <div class="inline-block">
              <h2 class="text-secondary montserrat montserrat-700 text-4xl mb-6 title-main">
                Financement Import
              </h2>
              <div class="w-24 h-1 mx-auto mb-8 accent-bar bg-primary"></div>
            </div>

            <p class="text-gray-800 text-xl montserrat montserrat-400 max-w-6xl mx-auto leading-relaxed description-text">
              Nous accompagnons les entrepreneurs dans leurs différentes opérations de vente ou d’achat à l’international
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-16 justify-center">

            <!-- Image Section -->
            <div class="relative mb-12 lg:mb-0 image-container place-items-end">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transform w-full max-w-xl lg:min-h-[32rem]">
                <Image_compteAss :images="Import" />

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
                  Concrétisez vos ambitions
                </h3>
              </div>

              <!-- Advantages Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 advantages-grid">

                <!-- Advantage Card 1 -->
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconWorldCheck class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Expertise internationale</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Maîtrise des opérations d'importations</p>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
                <div class="advantage-card group cursor-pointer">
                  <div class="relative p-6 rounded-xl bg-primary backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary to-primary"></div>

                    <div class="relative z-10">
                      <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-primary-accent">
                          <IconNetwork class="h-5 w-5 text-black" />
                        </div>
                        <h4 class="font-semibold text-white">Réseau global</h4>
                      </div>

                      <p class="text-gray-300 text-sm mb-3">Partenaires dans le monde entier</p>
                    </div>

                    <!-- Hover effect border -->
                    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
              <div class="advantage-card group cursor-pointer py-10">
                <div class="relative p-6 pb-10 rounded-xl bg-primary backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2">

                  <div class="relative z-10">
                    <div class="flex items-center mb-4">
                      <h4 class="montserrat montserrat-600 text-xl text-white">Services proposés</h4>
                    </div>
                    <ul class="space-y-4">

                      <li class="flex items-center text-gray-200 montserrat montserrat-400">
                        <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Garantie régionale
                      </li>
                      <li class="flex items-center text-gray-200 montserrat montserrat-400">
                        <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Préfinancement import
                      </li>
                    </ul>

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
