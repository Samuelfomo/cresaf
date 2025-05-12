<template>
  <div class="w-full relative">
    <!-- Carousel wrapper -->
    <div
        v-for="(image, index) in images"
        :key="index"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center"
        :class="{'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index}"
    >
      <img
          :src="image"
          class="rounded-xl object-cover object-center"
          alt="Carousel Image"
      />
    </div>

    <!-- Slider indicators -->
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
      <button
          v-for="(image, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
        aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-Linecap="round" stroke-linejoin="round" stroke-width="{2}" d="M15 19l-8-8 8-8"/>
      </svg>
    </button>
    <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
        aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M9 5l8 8-8 8"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import Image from "@/assets/images/woman3.webp";
import Image1 from "@/assets/images/woman2.webp";
import Image2 from "@/assets/images/woman1.webp";

const images = ref([Image, Image1, Image2]);
const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
      (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-slide every 3 seconds
onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>