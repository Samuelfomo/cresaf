<template>
  <div class="min-h-screen">
    <Header />
    <main class="flex flex-col lg:pt-24 pt-32 overflow-hidden">

      <!-- Section Hero avec carrousel d'images -->
      <section class="relative py-20 bg-primary">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contenu textuel -->
            <div class="hero-content place-items-start lg:pt-[20%]">
              <h1 class="text-4xl lg:text-6xl montserrat montserrat-700 text-white mb-6 leading-tight">
                Contactez-nous
              </h1>
              <p class="text-gray-00 mb-8 montserrat montserrat-200 text-2xl text-gray-300">
                Nous sommes là pour vous accompagner dans vos projets.
                Notre équipe d'experts est prête à répondre à vos questions.
              </p>
<!--              <div class="flex flex-wrap gap-4">-->
<!--                <div class="flex items-center bg-white p-4 rounded-lg shadow-sm">-->
<!--                  <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">-->
<!--                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <p class="text-sm text-gray-600">Téléphone</p>-->
<!--                    <p class="font-semibold text-primary">+33 1 23 45 67 89</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
            </div>

            <!-- Carrousel d'images -->
            <div class="image-carousel relative">
              <div class="overflow-hidden rounded-3xl shadow-2xl">
                <div ref="carouselRef" class="flex">
                  <div
                      v-for="(image, index) in carouselImages"
                      :key="index"
                      class="min-w-full"
                  >
                    <img
                        :src="image.src"
                        :alt="image.alt"
                        class="w-full object-cover"
                    />
<!--                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">-->
<!--                      <h3 class="text-white text-lg font-semibold">{{ image.title }}</h3>-->
<!--                    </div>-->
                  </div>
                </div>
              </div>
              <!-- Indicateurs -->
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                    v-for="(_, index) in carouselImages"
                    :key="index"
                    @click="goToSlide(index)"
                    :class="['w-3 h-3 rounded-full transition-colors',
                    currentSlide === index ? 'bg-secondary' : 'bg-white/50']"
                ></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Barre oblique décorative -->
        <div class="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" class="w-full h-16 fill-current text-white">
            <path d="M0,120 L1200,120 L1200,0 L0,90 Z"></path>
          </svg>
        </div>
      </section>

      <!-- Section Agences -->
      <section class="py-20 bg-gradient-to-tr from-white to-primary/10">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-5xl montserrat montserrat-700 text-secondary mb-4">
              Nos Agences
            </h2>
            <p class="text-xl montserrat text-gray-600 max-w-3xl mx-auto">
              Retrouvez-nous dans nos différentes agences à travers le territoire
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                v-for="(agency, index) in agencies"
                :key="index"
                class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">{{ agency.name }}</h3>
              <p class="text-gray-600 mb-4">{{ agency.address }}</p>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {{ agency.phone }}
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span class="text-white bg-white">
                  +237
                  </span>
                  {{ agency.phone.replace('+237', '').trim() }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Barre oblique décorative -->
        <div class="mt-20">
          <svg viewBox="0 0 1200 120" class="w-full h-16 fill-current text-primary/10">
            <path d="M0,0 L1200,90 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      <!-- Section Formulaire de Contact -->
      <section class="py-20 bg-gradient-to-br from-primary to-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl lg:text-5xl montserrat montserrat-700 text-primary-accent mb-4">
                Envoyez-nous un message
              </h2>
              <p class="text-xl montserrat text-gray-800">
                Nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <form @submit.prevent="submitForm" class="contact-form bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="form-group">
                  <label for="firstName" class="block text-base font-semibold text-primary mb-3">
                    Prénom *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                  />
                </div>
                <div class="form-group">
                  <label for="lastName" class="block text-base font-semibold text-primary mb-3">
                    Nom *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="form-group">
                  <label for="email" class="block text-base font-semibold text-primary mb-3">
                    Email *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                  />
                </div>
                <div class="form-group">
                  <label for="phone" class="block text-base font-semibold text-primary mb-3">
                    Téléphone
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="+237 6 78 76 45 43"
                  />
                </div>
              </div>

              <div class="mb-6">
                <label for="subject" class="block text-base font-semibold text-primary mb-3">
                  Sujet *
                </label>
                <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="formation">Formation</option>
                  <option value="consultation">Consultation</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div class="mb-8">
                <label for="message" class="block text-base font-semibold text-primary mb-3">
                  Message *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <div class="text-center">
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl
                     hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50
                      disabled:transform-none  bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l"
                >
                  <span v-if="!isSubmitting">Envoyer le message</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Personnel1 from "@/assets/images/personnel1.jpg"
import Personnel2 from "@/assets/images/personnel2.jpg"
import Personnel3 from "@/assets/images/personnel3.jpg"
import Personnel4 from "@/assets/images/personnel4.jpg"

gsap.registerPlugin(ScrollTrigger);

// Données du carrousel
const carouselImages = ref([
  {
    src: Personnel1,
    alt: "Bureau CRESAF",
    title: "Notre équipe à votre service"
  },
  {
    src: Personnel2,
    alt: "Locaux CRESAF",
    title: "Des espaces modernes et accueillants"
  },
  {
    src: Personnel3,
    alt: "Formation CRESAF",
    title: "Excellence et innovation"
  },
  {
    src: Personnel4,
    alt: "Équipe CRESAF",
    title: "Expertise et accompagnement"
  }
]);

// Données des agences
const agencies = ref([
  {
    name: "Agence d'Akwa",
    address: "Bonakouamouang, Akwa, Face Prudential Beneficial Life",
    phone: "+237 658 794 995"
  },
  {
    name: "Agence Anatole",
    address: "Carrefour Anatole, face la station total",
    phone: "+237 *** *** ***"
  },
  {
    name: "Agence de Yaoundé",
    address: "Descente Mokolo Elobi, batiment Dubaï Market",
    phone: "+237 692 313 295"
  },
  {
    name: "Agence de Bafoussam",
    address: "Montée sens interdit, marché A, avant la direction régionale de la Total",
    phone: "+237 699 477 764"
  }
]);

// État du formulaire
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

const isSubmitting = ref(false);

// Carrousel
const carouselRef = ref(null);
const currentSlide = ref(0);
let carouselInterval = null;

const goToSlide = (index) => {
  currentSlide.value = index;
  const translateX = -index * 100;
  gsap.to(carouselRef.value, {
    x: `${translateX}%`,
    duration: 0.8,
    ease: "power2.out"
  });
};

const nextSlide = () => {
  const nextIndex = (currentSlide.value + 1) % carouselImages.value.length;
  goToSlide(nextIndex);
};

const startCarousel = () => {
  carouselInterval = setInterval(nextSlide, 4000);
};

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
};

// Formulaire
const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset formulaire
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };

    // Animation de succès
    gsap.from(".contact-form", {
      scale: 0.98,
      duration: 0.3,
      ease: "back.out"
    });

    alert("Message envoyé avec succès!");

  } catch (error) {
    alert("Erreur lors de l'envoi du message");
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  // Animations GSAP
  const tl = gsap.timeline();

  // Animation du hero
  tl.from(".hero-content", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  })
      .from(".image-carousel", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");
  // Animation du formulaire
  gsap.from(".contact-form", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%"
    }
  });

  // Animation des champs de formulaire
  gsap.from(".form-group", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 70%"
    }
  });

  // Démarrer le carrousel
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
</style>