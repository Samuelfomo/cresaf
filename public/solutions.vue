<script setup>
import { ref, onMounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import CresafSolution from "@/assets/images/solution/solutions.webp"
import Finance from "@/assets/images/cresaf/financement_projets.webp"
import Tresorerie from "@/assets/images/solution/tresorerie.webp"
import Exp_Imp from "@/assets/images/solution/export_import.webp"

const solutions = ref([
  {
    id: 'presentation',
    title: "Solutions CRESAF",
    subtitle: "Des solutions adaptées à vos besoins",
    image:CresafSolution,
    stats: [
      { value: "5M+", label: "Clients satisfaits" },
      { value: "10+", label: "Années d'expérience" },
      { value: "95%", label: "Taux de satisfaction" }
    ],
  },

  {
    id: 'projets',
    title: "Financement de projets",
    description:'Nous accompagnons les entrepreneurs en général dans le financement de leurs projets à travers' +
        ' la mise à disposition de fonds de roulement et le suivi de leurs activités.',
    subtitle: "Concrétisez vos ambitions",
    image: Finance,
    // image: "https://picsum.photos/id/1020/800/600",
    features: [
      { title: "Analyse approfondie", description: "Étude détaillée de votre projet" },
      { title: "Accompagnement", description: "Suivi personnalisé tout au long du financement" },
      { title: "Flexibilité", description: "Solutions adaptées à votre secteur d'activité" }
    ],
    process: [
      "Soumission du projet",
      "Étude de faisabilité",
      "Proposition de financement",
      "Mise en place"
    ],
    class:'bg-primary',
    font:'text-white',
    section : 'section1'
  },
  {
    id: 'tresorerie',
    title: "Financement de la trésorerie",
    description: 'Nous aidons nos entreprises partenaires à faire face aux différentes crises liées aux tensions' +
        ' de trésorerie (règlement des fournisseurs, paiement des salaires…)',
    subtitle: "Optimisez votre flux de trésorerie",
    image: Tresorerie,
    // image: "https://picsum.photos/id/1015/800/600",
    features: [
      { title: "Réactivité", description: "Réponse rapide à vos besoins" },
      { title: "Solutions sur mesure", description: "Adaptées à votre cycle d'exploitation" },
      { title: "Gestion optimisée", description: "Outils de suivi performants" }
    ],
    tools: [
      "Découvert autorisé",
      "Ligne de crédit",
      "Escompte commercial",
      "Affacturage"
    ],
    class:'bg-blue-50',
    section : 'section2'
  },
  {
    id: 'importexport',
    title: "Financement Import",
    description: 'Nous accompagnons les entrepreneurs dans leurs différentes opérations de vente ou d’achat' +
        ' à l’international',
    subtitle: "Concrétisez vos ambitions",
    // subtitle: "Développez votre activité internationale",
    image: Exp_Imp,
    // image: "https://picsum.photos/id/1015/800/600",
    features: [
      { title: "Expertise internationale", description: "Maîtrise des opérations d'importations ou de dédouanements" },
      // { title: "Sécurisation", description: "Garantie des transactions internationales" },
      { title: "Réseau global", description: "Partenaires dans le monde entier" }
    ],
    services: [
      // "Crédit documentaire",
      "Garantie régionale",
      "Préfinancement import",
      // "Remise documentaire"
    ],
    class: "bg-primary",
    font:'text-white',
    section : 'section3'
  }
]);

const isIntersecting = ref({});
const activeSection = ref('presentation');

const observerCallback = (entries) => {
  entries.forEach(entry => {
    isIntersecting.value[entry.target.id] = entry.isIntersecting;
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
  });

  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
});

const scrollToSection = (sectionId) => {
  const section = document.getElementById(`${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex flex-col min-h-screen pt-[4rem]">
      <!-- Section Présentation -->
      <section id="presentation" class="relative min-h-screen flex items-center">
        <div class="absolute inset-0">
          <img :src="solutions[0].image" alt="Background" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-primary bg-opacity-40"></div>
        </div>

        <div class="relative container mx-auto lg:px-8 py-32">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-white">
              <h1 class="text-5xl lg:px-0 px-8 font-accent mb-6">{{ solutions[0].title }}</h1>
              <p class="text-xl lg:px-0 px-8 mb-12">{{ solutions[0].subtitle }}</p>
              <div class="grid grid-cols-3 lg:gap-8 gap-2 lg:px-0 px-2 ">
                <div v-for="stat in solutions[0].stats" :key="stat.label"
                     class="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                  <div class="text-3xl font-bold mb-2">{{ stat.value }}</div>
                  <div class="text-sm">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sections Solutions -->
      <section v-for="(solution, index) in solutions.slice(1)" :key="solution.id"
               :id="solution.id"
               class="relative min-h-screen flex items-center" :class="solution.class">
        <div :id="solution.section" class="container mx-auto px-8 pb-32 ">
          <h2 class="text-4xl font-accent text-center pt-14 pb-5"
              :class="{ [solution.font]: solution.font, 'text-green-600': !solution.font }">
            {{ solution.title }}
          </h2>
          <p class="lg:pb-14 pb-5 lg:text-xl text-lg font-sans"
             :class="{ 'text-white text-opacity-70': solution.font, 'text-gray-700': !solution.font, 'text-center':solution.id === 'importexport'}">
            {{solution.description}}
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <!-- Conteneur pour petit écran -->
            <div class="contents lg:hidden">
              <!-- Image en premier (indépendamment de index) -->
              <div class="relative h-96 overflow-hidden rounded-lg">
                <img :src="solution.image" :alt="solution.title"
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <!-- Contenu en second -->
              <div :class="[solution.font]">
                <!-- Le reste du contenu... -->
                <p class="lg:text-2xl text-xl font-sans lg:mb-12 mb-3" >{{ solution.subtitle }}</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
                  <div v-for="feature in solution.features" :key="feature.title"
                       class="p-6 rounded-lg backdrop-blur-sm flex flex-col justify-between"
                       :class="{ 'bg-white bg-opacity-10': solution.font, 'bg-primary bg-opacity-90 text-white': !solution.font }"
                  >
                    <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                    <p>{{ feature.description }} </p>
                  </div>
                </div>

                <!-- Process/Tools/Services -->
                <div class="rounded-lg backdrop-blur-sm p-8"
                     :class="{ 'bg-white bg-opacity-10': solution.font, 'bg-primary bg-opacity-90 text-white': !solution.font }"
                >
                  <h3 class="text-xl font-semibold mb-6">
                    {{ solution.process ? 'Processus' :
                      solution.tools ? 'Outils disponibles' :
                          'Services proposés' }}
                  </h3>
                  <ul class="space-y-4">
                    <li v-for="item in (solution.process || solution.tools || solution.services)"
                        :key="item"
                        class="flex items-center">
                      <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Conteneur pour grand écran -->
            <div class="hidden lg:contents">
              <!-- Ordre alterné en fonction de index -->
              <div :class="{ 'order-2 col-start-2': index % 2 === 0, [solution.font]:true }">
                <!-- Le reste du contenu... -->
                <p class="lg:text-2xl text-xl font-sans lg:mb-12 mb-3" >{{ solution.subtitle }}</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
                  <div v-for="feature in solution.features" :key="feature.title"
                       class="p-6 rounded-lg backdrop-blur-sm flex flex-col justify-between"
                       :class="{ 'bg-white bg-opacity-10': solution.font, 'bg-primary bg-opacity-90 text-white': !solution.font }"
                  >
                    <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                    <p>{{ feature.description }} </p>
                  </div>
                </div>

                <!-- Process/Tools/Services -->
                <div class="rounded-lg backdrop-blur-sm p-8"
                     :class="{ 'bg-white bg-opacity-10': solution.font, 'bg-primary bg-opacity-90 text-white': !solution.font }"
                >
                  <h3 class="text-xl font-semibold mb-6">
                    {{ solution.process ? 'Processus' :
                      solution.tools ? 'Outils disponibles' :
                          'Services proposés' }}
                  </h3>
                  <ul class="space-y-4">
                    <li v-for="item in (solution.process || solution.tools || solution.services)"
                        :key="item"
                        class="flex items-center">
                      <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
              <div :class="{ 'order-1 col-start-1 row-start-1': index % 2 === 0 }"
                   class="relative h-[600px] overflow-hidden rounded-lg">
                <img :src="solution.image" :alt="solution.title"
                     class="h-full w-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>

    <!-- Navigation latérale -->
    <div class="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      <a v-for="solution in solutions" :key="solution.id"
         :href="`#${solution.id}`"
         :class="[
           'block w-3 h-3 rounded-full transition-all duration-300',
           activeSection === solution.id ? 'bg-green-600 scale-125' : 'bg-gray-400 hover:bg-white'
         ]"
         @click.prevent="scrollToSection(solution.id)">
<!--        activeSection === solution.id ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'-->
        <span class="sr-only">{{ solution.title }}</span>
      </a>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

main {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>

<!--<script setup>-->
<!--import { ref, onMounted, onUnmounted } from 'vue';-->
<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->

<!--const solutions = ref([-->
<!--  {-->
<!--    id: 'presentation',-->
<!--    title: 'Nos Solutions Financières',-->
<!--    subtitle: 'Des solutions adaptées à vos besoins',-->
<!--    description: 'CRESAF vous accompagne dans tous vos projets avec des solutions de financement sur mesure.',-->
<!--    image: 'https://picsum.photos/id/1018/800/600',-->
<!--  },-->
<!--  {-->
<!--    id: 'projets',-->
<!--    title: 'Financement de Projets',-->
<!--    subtitle: 'Concrétisez vos ambitions',-->
<!--    description: 'Nous accompagnons le développement de vos projets avec des solutions de financement adaptées.',-->
<!--    features: [-->
<!--      'Financement d\'équipements',-->
<!--      'Financement immobilier',-->
<!--      'Crédit d\'investissement'-->
<!--    ],-->
<!--    image: 'https://picsum.photos/id/1015/800/600',-->
<!--  },-->
<!--  {-->
<!--    id: 'tresorerie',-->
<!--    title: 'Financement de la Trésorerie',-->
<!--    subtitle: 'Optimisez votre gestion financière',-->
<!--    description: 'Des solutions pour maintenir une trésorerie saine et faire face à vos besoins de fonctionnement.',-->
<!--    features: [-->
<!--      'Facilité de caisse',-->
<!--      'Découvert autorisé',-->
<!--      'Escompte commercial'-->
<!--    ],-->
<!--    image: 'https://picsum.photos/id/1016/800/600',-->
<!--  },-->
<!--  {-->
<!--    id: 'import-export',-->
<!--    title: 'Financement Import/Export',-->
<!--    subtitle: 'Développez votre activité internationale',-->
<!--    description: 'Accompagnement dans vos opérations de commerce international avec des solutions spécialisées.',-->
<!--    features: [-->
<!--      'Crédit documentaire',-->
<!--      'Remise documentaire',-->
<!--      'Garantie internationale'-->
<!--    ],-->
<!--    image: 'https://picsum.photos/id/1020/800/600',-->
<!--  }-->
<!--]);-->

<!--const activeSection = ref(0);-->

<!--const handleScroll = () => {-->
<!--  const sections = document.querySelectorAll('.section');-->
<!--  sections.forEach((section, index) => {-->
<!--    const rect = section.getBoundingClientRect();-->
<!--    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {-->
<!--      activeSection.value = index;-->
<!--    }-->
<!--  });-->
<!--};-->

<!--onMounted(() => {-->
<!--  window.addEventListener('scroll', handleScroll);-->
<!--});-->

<!--onUnmounted(() => {-->
<!--  window.removeEventListener('scroll', handleScroll);-->
<!--});-->

<!--const scrollToSection = (index) => {-->
<!--  const sections = document.querySelectorAll('.section');-->
<!--  sections[index].scrollIntoView({ behavior: 'smooth' });-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="relative">-->
<!--    <Header />-->

<!--    &lt;!&ndash; Navigation latérale &ndash;&gt;-->
<!--    <nav class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">-->
<!--      <ul class="space-y-4">-->
<!--        <li v-for="(solution, index) in solutions" :key="index">-->
<!--          <button-->
<!--              @click="scrollToSection(index)"-->
<!--              :class="[-->
<!--              'w-3 h-3 rounded-full transition-all duration-300',-->
<!--              activeSection === index ? 'bg-white scale-150' : 'bg-gray-400 hover:bg-white'-->
<!--            ]"-->
<!--              :aria-label="`Section ${solution.title}`"-->
<!--          ></button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->

<!--    <main class="relative">-->
<!--      &lt;!&ndash; Sections &ndash;&gt;-->
<!--      <section-->
<!--          v-for="(solution, index) in solutions"-->
<!--          :key="index"-->
<!--          :id="solution.id"-->
<!--          class="section relative min-h-screen flex items-center transition-all duration-700"-->
<!--          :class="{ 'opacity-100': activeSection === index, 'opacity-90': activeSection !== index }"-->
<!--      >-->
<!--        &lt;!&ndash; Arrière-plan avec effet parallaxe &ndash;&gt;-->
<!--        <div class="absolute inset-0 overflow-hidden">-->
<!--          <img-->
<!--              :src="solution.image"-->
<!--              :alt="solution.title"-->
<!--              class="w-full h-full object-cover transform scale-110"-->
<!--              :style="`transform: translateY(${activeSection === index ? '-5%' : '0'})`"-->
<!--          >-->
<!--          <div class="absolute inset-0 bg-primary bg-opacity-75"></div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Contenu de la section &ndash;&gt;-->
<!--        <div class="container mx-auto px-8 relative z-10">-->
<!--          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">-->
<!--            <div class="text-white space-y-6"-->
<!--                 :class="{ 'translate-x-0 opacity-100': activeSection === index, '-translate-x-full opacity-0': activeSection !== index }"-->
<!--            >-->
<!--              <h2 class="text-5xl font-bold mb-4">{{ solution.title }}</h2>-->
<!--              <p class="text-2xl text-gray-300 mb-6">{{ solution.subtitle }}</p>-->
<!--              <p class="text-lg text-gray-200">{{ solution.description }}</p>-->

<!--              <ul v-if="solution.features" class="space-y-4 mt-8">-->
<!--                <li v-for="feature in solution.features"-->
<!--                    :key="feature"-->
<!--                    class="flex items-center text-lg">-->
<!--                  <span class="mr-3 text-2xl">•</span>-->
<!--                  {{ feature }}-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->

<!--            &lt;!&ndash; Zone interactive ou illustration &ndash;&gt;-->
<!--            <div class="hidden lg:block"-->
<!--                 :class="{ 'translate-x-0 opacity-100': activeSection === index, 'translate-x-full opacity-0': activeSection !== index }"-->
<!--            >-->
<!--              &lt;!&ndash; Ici vous pouvez ajouter des éléments interactifs spécifiques à chaque solution &ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
<!--    </main>-->

<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.section {-->
<!--  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);-->
<!--}-->

<!--/* Transitions pour les éléments de contenu */-->
<!--.translate-x-0 {-->
<!--  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;-->
<!--}-->

<!--.section img {-->
<!--  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);-->
<!--}-->
<!--</style>-->
