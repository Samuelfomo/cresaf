<!-- CustomSelect.vue -->
<template>
  <div
      class="custom-select relative w-full"
      @click="toggleDropdown"
      @blur="closeDropdown"
      tabindex="0"
  >
    <div
        class="select-field flex items-center justify-between w-full p-4 border border-gray-200 rounded-xl bg-white cursor-pointer transition-all"
        :class="{'ring-1 ring-secondary border-transparent': isOpen}"
    >
      <span :class="{'text-gray-400': !selectedValue}">
        {{ selectedLabel || placeholder }}
      </span>
      <svg
          class="h-5 w-5 text-gray-500 transition-transform"
          :class="{'transform rotate-180': isOpen}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>

    <div
        ref="dropdownRef"
        class="dropdown absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        v-show="isOpen"
    >
      <div class="max-h-60 overflow-y-auto py-1">
        <div
            v-for="option in options"
            :key="option.value"
            class="option p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            :class="{'bg-gray-100': option.value === selectedValue}"
            @click.stop="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Sélectionnez une option'
  },
  name: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const dropdownRef = ref(null);
const selectedValue = ref(props.modelValue);

// Obtenir le libellé de l'option sélectionnée
const selectedLabel = computed(() => {
  const selected = props.options.find(option => option.value === selectedValue.value);
  return selected ? selected.label : '';
});

// Ouvrir/fermer le dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    animateOpen();
  } else {
    animateClose();
  }
};

// Fermer le dropdown
const closeDropdown = () => {
  if (isOpen.value) {
    isOpen.value = false;
    animateClose();
  }
};

// Sélectionner une option
const selectOption = (option) => {
  selectedValue.value = option.value;
  emit('update:modelValue', option.value);
  isOpen.value = false;
  animateClose();
};

// Animation d'ouverture avec GSAP
const animateOpen = () => {
  gsap.fromTo(dropdownRef.value,
      { opacity: 0, y: -10, scaleY: 0.9, transformOrigin: 'top' },
      { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease: 'power2.out' }
  );

  // Animer chaque option avec un délai progressif
  const options = dropdownRef.value.querySelectorAll('.option');
  gsap.fromTo(options,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.2, stagger: 0.05, ease: 'power2.out' }
  );
};

// Animation de fermeture avec GSAP
const animateClose = () => {
  gsap.to(dropdownRef.value, {
    opacity: 0,
    y: -10,
    scaleY: 0.9,
    duration: 0.2,
    ease: 'power2.in',
    onComplete: () => {
      if (dropdownRef.value) {
        dropdownRef.value.style.display = 'none';
      }
    }
  });
};

// Gérer les clics à l'extérieur pour fermer le dropdown
const handleClickOutside = (event) => {
  const element = event.target;
  const isInsideSelect = element.closest('.custom-select') === dropdownRef.value.parentNode;

  if (!isInsideSelect && isOpen.value) {
    closeDropdown();
  }
};

// Synchroniser la valeur avec le modèle
watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue;
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>