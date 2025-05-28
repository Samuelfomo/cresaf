<template>
  <header class="fixed w-full z-50 flex flex-col">
    <div class="bg-primary flex justify-between lg:px-14 px-5 items-center py-1">
      <div class="flex lg:space-x-4 space-x-1">
        <div class="flex justify-center py-3 hover:bg-secondary items-center h-6 w-6 cursor-pointer transition-transform duration-500 hover:scale-105"
             v-for="(logo , index) in logos" :key="index"
             @click="openSocial(logo.link)"
        >
          <img :src="logo.name" :alt="logo.title" class=" object-cover h-4 w-4">
        </div>
      </div>
      <div class="flex space-x-1 cursor-pointer group">
        <div class="flex justify-center items-center h-6 w-6 cursor-pointer transition-transform duration-200
         hover:scale-105 group-hover:text-primary-accent text-white order-2"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"
                stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </div>
        <a class="group-hover:text-primary-accent text-white hover:underline hover:underline-offset-2 transition" @click="goToForm">Nous écrire</a>
      </div>
      <div class="hidden space-x-1 cursor-pointer group">
        <div class="flex justify-center items-center h-6 w-6 cursor-pointer transition-transform duration-200
         hover:scale-105 group-hover:text-green-500 text-white"
        >
          <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="m8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.2 5.3c.4
            0 .7.3 1.1.3-.3.4-1.6.4-2-.1.3-.1.5-.2.9-.2zm-12.2 2.7c0-.4 0-.8.1-1.3.1 0
            .2.1.3.1 0 0 .1.1.1.2 0 .3.3.5.5.5.8.1 1.1.8 1.8 1 .2.1.1.3 0 .5-.6.8-.1 1.4.4 1.9.5.4.5.8.6 1.4 0
             .7.1 1.5.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zm7 7c-.7 0-1.5-.1-2.1-.3-.1-.2-.1-.4 0-.6.4-.8.8-1.5 1.3-2.2.2-.2.4-.4.4-.7
              0-.2.1-.5.2-.7.3-.5.2-.8-.2-.9-.8-.2-1.2-.9-1.8-1.2s-1.2-.5-1.7-.2c-.2.1-.5.2-.5-.1
              0-.4-.5-.7-.4-1.1-.1 0-.2 0-.3.1s-.2.2-.4.1c-.2-.2-.1-.4-.1-.6.1-.2.2-.3.4-.4.4-.1.8-.1 1
              .4.3-.9.9-1.4 1.5-1.8 0 0 .8-.7.9-.7s.2.2.4.3c.2 0 .3 0 .3-.2.1-.5-.2-1.1-.6-1.2 0-.1.1-.1.1-.1.3-.1.7-.3.6-.6
              0-.4-.4-.6-.8-.6-.2 0-.4 0-.6.1-.4.2-.9.4-1.5.4 1.1-.8 2.5-1.2 3.9-1.2h.8c-.6.1-1.2.3-1.6.5.6.1.7.4.5.9-.1.2 0
              .4.2.5s.4.1.5-.1c.2-.3.6-.4.9-.5.4-.1.7-.3 1-.7 0-.1.1-.1.2-.2.6.2 1.2.6 1.8 1-.1 0-.1.1-.2.1-.2.2-.5.3-.2.7.1.2 0
               .3-.1.4-.2.1-.3 0-.4-.1s-.1-.3-.4-.3c-.1.2-.4.3-.4.6.5 0 .4.4.5.7-.6.1-.8.4-.5.9.1.2-.1.3-.2.4-.4.6-.8 1-.8 1.7s.5
               1.4 1.3 1.3c.9-.1.9-.1 1.2.7 0 .1.1.2.1.3.1.2.2.4.1.6-.3.8.1 1.4.4 2 .1.2.2.3.3.4-1.3 1.4-3 2.2-5 2.2z" fill="white"/>
          </svg>
        </div>
        <select
            v-model="selectedLanguage"
            class="group-hover:text-green-500 hover:underline hover:underline-offset-2 transition"
        >
          <option  v-for="(language, index) in languages" :key="index" :value="language">{{language}}</option>
        </select>
      </div>
    </div>
    <div class="bg-white px-5 py-10 lg:px-14 flex justify-between items-center w-full flex-row border-b h-16">
      <div class="relative lg:flex hidden">
        <div class="absolute left-0 cursor-pointer z-50" @click="router.push('/')">
          <div class="bg-white py-2 px-4 rounded-b-lg">
            <img :src="logo" alt="Logo" class="h-28 object-contain">
          </div>
        </div>
        <!-- Espace réservé pour le logo -->
        <div class="w-40 h-10 invisible"></div>
      </div>
      <div class="relative lg:hidden flex justify-center items-center">
        <div class="absolute left-0 cursor-pointer z-50" @click="router.push('/')">
          <div class="">
            <img :src="logo" alt="Logo" class="h-16 object-contain">
          </div>
        </div>
        <!-- Espace réservé pour le logo -->
        <div class="w-40 h-10 invisible"></div>
      </div>

      <!-- Bouton pour afficher le menu mobile -->
      <button class="lg:hidden text-gray-700" @click="isDrawerOpen = !isDrawerOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>

      <div class="hidden lg:flex justify-between w-full max-w-3xl lg:pr-5">
        <div class="text-gray-700 flex relative">
          <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownAboutUs" @mouseleave="closeDropdown1">
            <h2 class="relative hover:text-secondary xl:text-lg lg:text-base text-xs flex group"
                :class="[$route.name === 'values' ? activeClass : inactiveClass]"
                @click="router.push('/values')"
            >
              Qui sommes-nous ?
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="open" d="M9 9l6 8l7 -8" />
                <path v-if="close" d="M9 18l6 -8l7 8" />
              </svg>
              <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>

          <!-- Menu déroulant -->
          <div v-if="isDropdownOpen1" class="absolute right-0 mt-12 min-w-72 bg-white rounded-lg shadow-lg p-5 border z-50"
               @mouseenter="toggleDropdownAboutUs"
               @mouseleave="closeDropdown1"
          >
            <div class="py-1">
              <div class="flex items-center hover:text-secondary"   :class="[$route.name === '#' ? activeClass : inactiveClass]">
                <h1 class="text-2xl">🤍</h1>
                <router-link to="/values" class="flex flex-col font-semibold text-lg px-5 pb-2"
                             @click="closeAndScroll1"
                >
                  <h2 class="group relative">Nos valeurs
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Confiance, Intégrité et solidarité </span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary"  :class="[$route.name === '#' ? activeClass : inactiveClass]">
                <img :src="briefcase" alt="briefcase" class="h-5 w-5">

                <router-link to="values" class="flex flex-col font-semibold text-lg px-5 py-2"
                             @click="closeAndScroll2"
                >
                  <h2 class="relative group">Nos atouts
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Culture de la performance </span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary" :class="[$route.name === '#' ? activeClass : inactiveClass]">
                <img :src="graphUp" alt="graphUp" class="h-5 w-5">
                <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             @click="closeAndScroll3"
                >
                  <h2 class="group relative">Notre vision
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Miser sur l'avenir </span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary" :class="[$route.name === '#' ? activeClass : inactiveClass]">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                      class="text-gray-400">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <router-link to="/values" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             @click="closeAndScroll4"
                >
                  <h2 class="relative group">Notre mission
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Renforcer la solidarité</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="text-gray-700 flex relative">
          <div class="flex items-center space-x-2 cursor-pointer" @mouseover=toggleDropdownProducts @mouseleave="closeDropdown2">
            <h2 class="relative hover:text-secondary xl:text-lg lg:text-base text-xs flex group"
                :class="[$route.name === 'products' ? activeClass : inactiveClass]"
                @click="router.push('/products')"
            >
              Nos offres financières
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="open2" d="M9 9l6 8l7 -8" />
                <path v-if="close2" d="M9 18l6 -8l7 8" />
              </svg>
              <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>

          <!-- Menu déroulant -->
          <div v-if="isDropdownOpen2" class="absolute right-0 mt-12 min-w-[22rem] bg-white rounded-md shadow-lg border p-5 z-50"
               @mouseenter="toggleDropdownProducts"
               @mouseleave="closeDropdown2"
          >
            <div class="py-1">
              <div class="flex items-center hover:text-secondary">
                <img :src="personCircle" alt="personCircle" class="h-5 w-5">
                <router-link to="products" class="flex flex-col font-semibold text-lg px-5 pb-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts1"
                >
                  <h2 class="group relative">Compte chèque
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Particulier, entreprise & salaire</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <img :src="wallet2" alt="wallet2" class="h-5 w-5">
                <router-link to="products" class="flex flex-col font-semibold text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts2"
                >
                  <h2 class="relative group">Bons de caisse
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Bon plan pour votre épargne</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <img :src="database" alt="database-up" class="h-5 w-5">
                <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts3"
                >
                  <h2 class="group relative">Dépôt à terme
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Fructifier votre argent</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <img :src="collection" alt="collection" class="h-5 w-5">
                <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts4"
                >
                  <h2 class="relative group">Compte d'épargne
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Livret & Association</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <img :src="piggy" alt="piggy" class="h-5 w-5">
                <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts5"
                >
                  <h2 class="group relative">Collecte journalière
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Nous suivre au quotidien</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <img :src="personCard" alt="personCard" class="h-5 w-5">
                <router-link to="products" class="flex flex-col justify-start font-semibold text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollProducts6"
                >
                  <h2 class="relative group">Carte VISA
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Vous ouvrir au monde</span>
                </router-link>
              </div>
            </div>
            <div class="py-1">
              <div class="flex items-center hover:text-secondary">
                <img :src="sunglasses" alt="sunglasses emoji" class="h-5 w-5">
                <router-link to="products" class="flex flex-col font-semibold text-lg px-5 pb-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollSolutions3"
                >
                  <h2 class="group relative">Financement Import/Export
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Financer votre développement international</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="text-gray-700 flex relative">
          <div class="flex items-center space-x-2 cursor-pointer" @mouseover="toggleDropdownBanking" @mouseleave="closeDropdown4">
            <h2 class="relative hover:text-secondary xl:text-lg lg:text-base text-xs flex group"
                :class="[$route.name === 'mobile' ? activeClass : inactiveClass]"
                @click="router.push('/mobile')"
            >
              Cresaf sur mobile
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round"
                    stroke-linejoin="round">
                <path v-if="open4" d="M9 9l6 8l7 -8" />
                <path v-if="close4" d="M9 18l6 -8l7 8" />
              </svg>
              <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>

          <!-- Menu déroulant -->
          <div v-if="isDropdownOpen4" class="absolute right-0 mt-12 min-w-[22rem] bg-white rounded-md shadow-lg border p-5 z-50"
               @mouseenter="toggleDropdownBanking"
               @mouseleave="closeDropdown4"
          >
            <div class="py-1">
              <div class="flex items-center hover:text-secondary">
                <IconCalendarPin stroke={2} class="h-8 w-8 text-black" />
                <router-link to="mobile" class="flex flex-col font-medium text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollBanking1"
                >
                  <h1 class="relative group">Fonctionnalités principales
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h1>
                  <span class="text-xs text-gray-500">Essentiel, efficace, adapté.</span>
                </router-link>
              </div>
              <div class="flex items-center hover:text-secondary">
                <IconHandFingerRight stroke={2} class="h-8 w-8 text-black" />
                <router-link to="mobile" class="flex flex-col justify-start font-medium text-lg px-5 py-2"
                             :class="[$route.name === '#' ? activeClass : inactiveClass]"
                             @click="closeAndScrollBanking2"
                >
                  <h2 class="group relative">Accéder maintenant
                    <span class="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </h2>
                  <span class="text-xs text-gray-500">Solution rapide pour vos besoins urgents.</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" hidden lg:flex justify-between space-x-2">
        <button type="button"
                class="flex justify-center items-center xl:text-lg  px-3 py-2 font-semibold border rounded-lg hover:border-blue-950"
                :class="[$route.name === 'contact' ? activeContact : 'bg-gray-100']"
                @click="router.push('/contact')">
          Contact
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5
           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
          </svg>
        </button>
        <button type="button"
                class="xl:text-lg bg-secondary px-3 py-2 text-white font-semibold border border-white rounded-lg
               hover:bg-primary"
                @click="contact"
        >
          Ouvrir un compte
        </button>
      </div>

      <!-- Drawer (Menu latéral pour mobile) -->
      <transition name="slide">
        <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div class="w-full max-w-[300px] p-5 shadow-lg transform transition-all bg-primary border-r border-white">
            <button class="py-2 text-gray-700 w-full flex justify-between items-center" @click="isDrawerOpen = false">
              <img :src="logoDrewa" alt="logo Cresaf drewa" class="w-16">
              <span class="drop-shadow-[0_0_2px_blue] uppercase font-bold text-3xl text-white">cresaf</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="text-white hover:text-black">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
            <nav class="flex flex-col space-y-4 py-5">
              <router-link to="values" class="w-full h-full text-lg font-bold hover:text-secondary flex justify-between py-3
            border-b items-center"
                           :class="[$route.name === 'values' ? activeDrawerClass : 'text-white']"
                           @click="OpenAboutUs"
              >
                <span>Qui sommes-nous ?</span>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                  <path v-if="viewAboutUs" d="M3 16l10 -10l10 10" />
                  <path v-if="viewAboutUs2" d="M2 9l10 11l10 -12" />
                </svg>
              </router-link>
              <div v-if="aboutUs" class="w-full flex flex-col">
                <div class="w-full flex items-center">
                  <h1 class="text-2xl">🤍</h1>
                  <router-link to="/values" class="flex flex-col text-white font-semibold hover:text-green-500 text-base px-5 pb-2"
                               @click="closeDrawerAndScroll1"
                  >
                    <h1>Nos valeurs</h1>
                    <span class="text-xs text-gray-400">Confiance, Intégrité et solidarité </span>
                  </router-link>
                </div>
                <div class="w-full flex items-center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
                  </svg>
                  <router-link to="values" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"
                               @click="closeDrawerAndScroll2"
                  >
                    <h1>Nos atouts</h1>
                    <span class="text-xs text-gray-400">Culture de la performance </span>
                  </router-link>
                </div>
                <div class="w-full flex items-center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l17 -17" /><path d="M3 3v18h18" />
                  </svg>
                  <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                               @click="closeDrawerAndScroll3"
                  >
                    <h1>Notre vision</h1>
                    <span class="text-xs text-gray-400">Miser sur l'avenir </span>
                  </router-link>
                </div>
                <div class="w-full flex items-center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                  </svg>
                  <router-link to="/values" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                               @click="closeDrawerAndScroll4"
                  >
                    <h1>Notre mission</h1>
                    <span class="text-xs text-gray-400">Renforcer la solidarité</span>
                  </router-link>
                </div>
              </div>

              <router-link to="products" class="w-full h-full text-lg font-bold hover:text-secondary flex justify-between py-3 border-b
            items-center"
                           :class="[$route.name === 'products' ? activeDrawerClass : 'text-white']"
                           @click="OpenProducts"
              >
                <span>Nos offres financières</span>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                  <path v-if="viewProducts" d="M3 16l10 -10l10 10" />
                  <path v-if="viewProducts2" d="M2 9l10 11l10 -12" />
                </svg>
              </router-link>
              <div v-if="products" class="w-full flex flex-col">
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts1"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                  <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 pb-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Compte chèque</h2>
                    <span class="text-xs text-gray-400">Particulier, entreprise & salaire</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts2"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                        stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" />
                  </svg>
                  <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-base text-white px-5 py-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Bon de caisse</h2>
                    <span class="text-xs text-gray-400">Bon plan pour votre épargne</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts3"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                  </svg>
                  <router-link to="#" class="flex flex-col justify-start text-white font-semibold hover:text-green-500 text-base px-5 py-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Dépôt à terme</h2>
                    <span class="text-xs text-gray-400">Fructifier votre argent</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts4"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                  </svg>
                  <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Compte d'épargne</h2>
                    <span class="text-xs text-gray-400">Livret & Association</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts5"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-white opacity-60">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" />
                    <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008
              6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1
             -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />
                  </svg>
                  <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Collecte journalière</h2>
                    <span class="text-xs text-gray-400">Nous suivre au quotidien</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollProducts6"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                  </svg>
                  <router-link to="#" class="flex flex-col text-white justify-start font-semibold hover:text-green-500 text-base px-5 py-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Carte VISA</h2>
                    <span class="text-xs text-gray-400">Vous ouvrir au monde</span>
                  </router-link>
                </div>
              </div>
              <div v-if="products" class="w-full flex flex-col">
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollSolutions3"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                        class="text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1
               .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428
             .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                  </svg>
                  <router-link to="#" class="flex flex-col font-semibold hover:text-green-500 text-sm text-white px-5 pb-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h2>Financement Import/Export</h2>
                    <span class="text-xs text-gray-400">Financer votre développement international</span>
                  </router-link>
                </div>
              </div>
              <router-link to="mobile" class="w-full h-full text-lg font-bold hover:text-secondary flex justify-between py-3 border-b
            items-center"
                           :class="[$route.name === 'mobile' ? activeDrawerClass : 'text-white']"
                           @click="OpenMobile"
              >
                <span>Cresaf sur mobile</span>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" viewBox="0 0 24 24"  fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                  <path v-if="viewMobile" d="M3 16l10 -10l10 10" />
                  <path v-if="viewMobile2" d="M2 9l10 11l10 -12" />
                </svg>
              </router-link>
              <div v-if="mobile" class="w-full flex flex-col">
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollMobile"
                >
                  <IconCalendarPin stroke={2} class="h-8 w-8 text-gray-400" />
                  <router-link to="#" class="flex flex-col text-white font-bold text-base hover:text-green-500 p-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h1>Fonctionnalités principales</h1>
                    <span class="text-xs text-gray-400">Essentiel, efficace, adapté.</span>
                  </router-link>
                </div>
                <div class="w-full flex items-center"
                     @click="closeDrawerAndScrollMobile2"
                >
                  <IconHandFingerRight stroke={2} class="h-8 w-8 text-gray-400" />
                  <router-link to="#" class="flex flex-col text-white justify-start font-bold text-base hover:text-green-500 p-2"
                               :class="[$route.name === '#' ? activeClass : inactiveClass]"
                  >
                    <h1>Accéder maintenant</h1>
                    <span class="text-xs text-gray-400">Solution rapide pour vos besoins urgents.</span>
                  </router-link>
                </div>
              </div>
            </nav>
            <button type="button"
                    class="flex justify-center items-center gap-2 text-lg bg-primary p-2 mt-2 font-semibold border border-white rounded-lg hover:text-secondary hover:border-green-500"
                    :class="[$route.name === 'contact' ? 'border-green-600 text-secondary' : 'text-white']"
                    @click="router.push('/contact')"
            >
              Contactez-nous
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5
           4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
              </svg>
            </button>

          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, nextTick, onMounted} from 'vue';
import {useRouter} from "vue-router"
import { IconCalendarPin, IconHandFingerRight } from '@tabler/icons-vue';
const router = useRouter()
import Logo from "@/assets/images/cresaf.png"
import LogoDrewa from "@/assets/images/logo-cresaf.png";

import database from "@/assets/images/svg/database-up.svg"
import briefcase from "@/assets/images/svg/briefcase.svg"
import graphUp from "@/assets/images/svg/graph-up-arrow.svg"
import personCircle from "@/assets/images/svg/person-circle.svg"
import wallet2 from "@/assets/images/svg/wallet2.svg"
import collection from "@/assets/images/svg/collection.svg"
import piggy from "@/assets/images/svg/piggy-bank.svg"
import personCard from "@/assets/images/svg/person-vcard.svg"
import sunglasses from "@/assets/images/svg/emoji-sunglasses.svg"
import FaceBook from "@/assets/images/svg/social/facebook.svg"
import Youtube from "@/assets/images/svg/social/youtube.svg"
import Twitter from "@/assets/images/svg/social/twitter.svg"
import Linkedin from "@/assets/images/svg/social/linkedin.svg"

const isDropdownOpen1 = ref(false)
const isDropdownOpen2 = ref(false)
const isDropdownOpen3 = ref(false)
const isDropdownOpen4 = ref(false)
const aboutUs = ref(false)
const products = ref(false)
const solutions = ref(false)
const mobile = ref(false)
const viewAboutUs = ref(false)
const viewAboutUs2 = ref(true);
const viewProducts = ref(false)
const viewProducts2 = ref(true);
const viewMobile = ref(false)
const viewMobile2 = ref(true)
const open = ref(true);
const open2 = ref(true);
const open3 = ref(true);
const open4 = ref(true);
const close = ref(false);
const close2 = ref(false);
const close3 = ref(false);
const close4 = ref(false);
const languages = ref([
  'french', 'english'
]);
let selectedLanguage = ref('');

let timeout = null;
const logo = Logo;
const logoDrewa = LogoDrewa;

const logos = ref([
  {
    name :FaceBook,
    title: "logo Facebook",
    link: "https://www.facebook.com/cresaf.sa"
  },
  {
    name :Youtube,
    title: "logo Youtube",
    link: ""
  },
  {
    name :Twitter,
    title: "logo Twitter",
    link: ""
  },
  {
    name :Linkedin,
    title: "logo Linkedin",
    link: "https://cm.linkedin.com/company/cr%C3%A9saf-credit-solidaire-d-afrique"
  },
]);
const openSocial = (link : any) =>{
  if (link) {
    window.open(link, "_blank");
  } else {
    console.log("Réseau social non disponible !");
  }
};

const closeDrawerAndScroll1 = () =>{
  isDrawerOpen.value = false
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScroll2 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeDrawerAndScroll3 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeDrawerAndScroll4 = () =>{
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section4'})
    }, 100)
  })
}

const closeDrawerAndScrollProducts1 = () => {
  router.push('products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts2 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts3 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts4 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section4'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts5 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section5'})
    }, 100)
  })
}
const closeDrawerAndScrollProducts6 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section6'})
    }, 100)
  })
}

const closeDrawerAndScrollSolutions3 = () => {
  router.push('/products')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section7'})
    }, 100)
  })
}

const closeDrawerAndScrollMobile = () => {
  router.push('/mobile')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeDrawerAndScrollMobile2 = () => {
  router.push('/mobile')
  isDrawerOpen.value = false
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}

const closeAndScroll1 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() => {
      scrollTo({id: 'section1'})
    },100)
  })
}
const closeAndScroll2 = () =>{
  closeDropdown1()
  nextTick(() => {
    setTimeout(() =>{
      scrollTo({id : 'section2'})
    }, 100)
  })
}
const closeAndScroll3 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id : 'section3'})
    }, 100)
  })
}
const closeAndScroll4 = () =>{
  closeDropdown1()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id : 'section4'})
    }, 100)
  })
}

const closeAndScrollProducts1 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section1'})
    }, 100)
  })
}
const closeAndScrollProducts2 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section2'})
    }, 100)
  })
}
const closeAndScrollProducts3 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section3'})
    }, 100)
  })
}
const closeAndScrollProducts4 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section4'})
    }, 100)
  })
}
const closeAndScrollProducts5 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section5'})
    }, 100)
  })
}
const closeAndScrollProducts6 = () =>{
  closeDropdown2()
  nextTick(() =>{
    setTimeout(() =>{
      scrollTo({id: 'section6'})
    }, 100)
  })
}

const closeAndScrollSolutions3 = () => {
  closeDropdown2()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section7'})
    }, 100)
  })
}
const closeAndScrollBanking1 = () => {
  closeDropdown4()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section1'})
    }, 100)
  })
}
const closeAndScrollBanking2 = () => {
  closeDropdown4()
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section2'})
    }, 100)
  })
}

const goToForm = () => {
  router.push('/contact');
  nextTick(() => {
    setTimeout(() => {
      scrollTo({id : 'section3'})
    }, 100)
  })
}

const toggleDropdownAboutUs = () => {
  clearTimeout(timeout);
  isDropdownOpen1.value = true
  isDropdownOpen2.value = false
  isDropdownOpen3.value = false
  isDropdownOpen4.value = false
  close.value = true
  close2.value = false
  close3.value = false
  close4.value = false
  open.value = false
  open2.value = true
  open3.value = true
  open4.value = true
}
const toggleDropdownProducts = () => {
  clearTimeout(timeout);
  isDropdownOpen2.value = true
  isDropdownOpen1.value = false
  isDropdownOpen3.value = false
  isDropdownOpen4.value = false
  open2.value = false
  open.value = true
  open3.value = true
  open4.value = true
  close2.value = true
  close.value = false
  close3.value = false
  close4.value = false
}
const toggleDropdownBanking = () => {
  clearTimeout(timeout)
  isDropdownOpen4.value = true
  isDropdownOpen3.value = false
  isDropdownOpen1.value = false
  isDropdownOpen2.value = false
  open4.value = false
  open3.value = true
  open.value = true
  open2.value = true
  close4.value = true
  close3.value = false
  close.value = false
  close2.value = false
}

const closeDropdown1 = () =>{
  timeout = setTimeout( ()=>{
    isDropdownOpen1.value = false
    open.value = true
    close.value = false
  }, 100);
}
const closeDropdown2 = () =>{
  timeout = setTimeout(() =>{
    isDropdownOpen2.value = false
    open2.value = true
    close2.value = false
  }, 100);

}
const closeDropdown4 = () =>{
  timeout = setTimeout(() => {
    isDropdownOpen4.value = false
    open4.value = true
    close4.value = false
  }, 100);

}

const isDrawerOpen = ref(false);

const activeClass = ref(' border-b border-blue-950',)
const activeContact = ref('border-2 border-blue-950',)
const activeDrawerClass = ref('text-secondary')
const inactiveClass = ref('',)

const OpenAboutUs = () => {
  aboutUs.value = !aboutUs.value
  products.value = false
  solutions.value = false
  viewAboutUs.value = !viewAboutUs.value
  viewAboutUs2.value = !viewAboutUs2.value
}
const OpenProducts = () => {
  products.value = !products.value
  aboutUs.value = false
  solutions.value = false
  viewProducts.value = !viewProducts.value
  viewProducts2.value = !viewProducts2.value
}
const OpenMobile = () => {
  mobile.value = !mobile.value
  solutions.value = false
  aboutUs.value = false
  products.value = false
  viewMobile.value = !viewMobile.value
  viewMobile2.value = !viewMobile2.value
}

const scrollTo = ({id}: { id: any })=> {

  const section = document.getElementById(id);
  if (section) {
    const offset = section.getBoundingClientRect().top + window.scrollY - 150;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
  // document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}

const contact = () => {
  const contactValue = 237658794995
  window.open(`https://api.whatsapp.com/send/?phone=${contactValue}&text&type=phone_number&app_absent=0`, "_blank");
};
onMounted(() =>{
  selectedLanguage.value = languages.value[0];
})

</script>