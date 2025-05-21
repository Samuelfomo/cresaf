<!-- Section Formulaire de Contact modifiée -->
<template>
  <div>
    <Header />
    <main>
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
                  <label for="firstName" class="block text-sm font-semibold text-primary mb-3">
                    Prénom *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                  />
                </div>
                <div class="form-group">
                  <label for="lastName" class="block text-sm font-semibold text-primary mb-3">
                    Nom *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="form-group">
                  <label for="email" class="block text-sm font-semibold text-primary mb-3">
                    Email *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                  />
                </div>
                <div class="form-group">
                  <label for="phone" class="block text-sm font-semibold text-primary mb-3">
                    Téléphone
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="+237 6 78 76 45 43"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="form-group">
                  <label for="subject" class="block text-sm font-semibold text-primary mb-3">
                    Sélectionnez l'objet de votre demande *
                  </label>
                  <CustomSelect
                      v-model="form.subject"
                      name="subject"
                      :options="subjectOptions"
                      placeholder="Sélectionnez un sujet"
                      required
                  />
                </div>
                <div class="form-group">
                  <label for="agence" class="block text-sm font-semibold text-primary mb-3">
                    Sélectionnez l'agence de réception *
                  </label>
                  <CustomSelect
                      v-model="form.agence"
                      name="agence"
                      :options="agencyOptions"
                      placeholder="Sélectionnez une agence"
                      required
                  />
                </div>
              </div>

              <div class="mb-8">
                <label for="message" class="block text-sm font-semibold text-primary mb-3">
                  Message *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre demande..."
                ></textarea>
              </div>
              <div class="mb-8">
                <label for="source" class="block text-sm font-semibold text-primary mb-3">
                  Comment avez-vous entendu parler de nous ?
                </label>
                <input
                    type="text"
                    id="source"
                    v-model="form.source"
                    class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Ex : partenaire, connaissance, collaborateur Cresaf, publicité, réseaux sociaux..."
                />
              </div>

              <div class="text-center">
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl
                     hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50
                      disabled:transform-none bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l"
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
import CustomSelect from "../components/CustomSelect.vue";
import Personnel1 from "@/assets/images/personnel1.jpg"
import Personnel2 from "@/assets/images/personnel2.jpg"
import Personnel3 from "@/assets/images/personnel3.jpg"
import Personnel4 from "@/assets/images/personnel4.jpg"
import Cresaf from "@/assets/images/cresafStructure.jpg"
import Cresaf1 from "@/assets/images/cresafStructure1.jpg"
import Cresaf2 from "@/assets/images/cresafStructure2.jpg"


gsap.registerPlugin(ScrollTrigger);

// Données du carrousel
const carouselImages = ref([
  {
    src: Personnel1,
    alt: "Bureau CRESAF",
    title: "Notre équipe à votre service"
  },
  {
    src: Cresaf,
    alt: "Locaux CRESAF",
    title: "Des espaces modernes et accueillants"
  },
  {
    src: Cresaf1,
    alt: "Locaux CRESAF",
    title: "Des espaces modernes et accueillants"
  },
  {
    src: Cresaf2,
    alt: "Locaux CRESAF",
    title: "Des espaces modernes et accueillants"
  },
  {
    src: Personnel2,
    alt: "Formation CRESAF",
    title: "Excellence et innovation"
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
    phone: "+237 658 794 995",
    email: "cresaf@douala.net"
  },
  {
    name: "Agence Anatole",
    address: "Carrefour Anatole, face la station total",
    phone: "+237 *** *** ***",
    email: "cresaf@doualana.net"
  },
  {
    name: "Agence de Yaoundé",
    address: "Descente Mokolo Elobi, batiment Dubaï Market",
    phone: "+237 692 313 295",
    email: "cresaf@yaoundé.net"
  },
  {
    name: "Agence de Bafoussam",
    address: "Montée sens interdit, marché A, avant la direction régionale de la Total",
    phone: "+237 699 477 764",
    email: "cresaf@bafoussam.net"
  }
]);

// Options pour les selects personnalisés
const subjectOptions = [
  { value: "information", label: "Demande d'information" },
  { value: "formation", label: "Formation" },
  { value: "consultation", label: "Consultation" },
  { value: "partenariat", label: "Partenariat" },
  { value: "autre", label: "Autre" }
];

const agencyOptions = agencies.value.map(agency => ({
  value: agency.email,
  label: agency.name
}));

// État du formulaire
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  agence: "",
  message: "",
  source: ""
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
    // Construction des données à envoyer
    const formData = {
      ...form.value,
      // Ajoutez des données supplémentaires si nécessaire
      sentAt: new Date().toISOString(),
    };

    // Appel à votre API backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message');
    }

    // Animation de succès
    gsap.from(".contact-form", {
      scale: 0.98,
      duration: 0.3,
      ease: "back.out"
    });

    // Réinitialisation du formulaire
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      agence: "",
      message: "",
      source: ""
    };

    alert("Message envoyé avec succès!");

  } catch (error) {
    console.error('Erreur:', error);
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