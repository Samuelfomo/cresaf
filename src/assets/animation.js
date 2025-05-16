<!--
Fichier: animations.js
Description: Module d'animations GSAP pour l'interface i-banking
-->

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Initialisation des animations pour l'ensemble de l'interface i-banking
 */
export function initAnimations() {
    // Animation globale au chargement de la page
    const mainTimeline = gsap.timeline();

    mainTimeline
        .from('header', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            clearProps: 'all'
        });

    // Effet parallaxe pour les sections
    initParallaxEffect();

    // Animation pour les transitions de page
    initPageTransitions();

    // Animation pour les boutons et éléments interactifs
    initButtonAnimations();

    // Animation de scroll fluide pour la navigation
    initSmoothScrolling();
}

/**
 * Animation des cartes de fonctionnalités avec révélation au scroll
 * @param {Array} elements - Les éléments DOM à animer
 */
export function animateFeatureCards(elements, options = {}) {
    const defaults = {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    };

    const settings = { ...defaults, ...options };

    ScrollTrigger.batch(elements, {
        start: 'top 85%',
        onEnter: batch => {
            gsap.from(batch, {
                ...settings
            });
        },
        onEnterBack: batch => {
            gsap.from(batch, {
                ...settings,
                duration: settings.duration / 2
            });
        },
        once: options.once || false
    });
}

/**
 * Animation des compteurs numériques
 * @param {Array} elements - Les éléments DOM contenant les nombres
 * @param {Array} values - Les valeurs finales de chaque compteur
 */
export function animateCounters(elements, values) {
    elements.forEach((counter, index) => {
        const value = values[index];

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: value,
                        duration: 2.5,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        stagger: 0.1
                    }
                );
            },
            once: true
        });
    });
}

/**
 * Effet parallaxe pour créer de la profondeur visuelle
 */
function initParallaxEffect() {
    // Parallaxe pour le fond de la section hero
    gsap.to('.bg-gradient-to-br', {
        backgroundPosition: '0% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.bg-gradient-to-br',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Parallaxe pour les images
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        gsap.from(element, {
            y: '-20%',
            ease: 'none',
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

/**
 * Transitions fluides entre les pages
 */
function initPageTransitions() {
    // Animation de sortie
    function pageTransitionOut() {
        const timeline = gsap.timeline();

        timeline
            .to('.page-transition', {
                scaleY: 1,
                transformOrigin: 'bottom',
                duration: 0.5,
                ease: 'power4.inOut'
            })
            .to('.content-container', {
                y: -30,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut'
            }, '-=0.4');

        return timeline;
    }

    // Animation d'entrée
    function pageTransitionIn() {
        const timeline = gsap.timeline();

        timeline
            .to('.page-transition', {
                scaleY: 0,
                transformOrigin: 'top',
                duration: 0.5,
                ease: 'power4.inOut'
            })
            .from('.content-container', {
                y: 30,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.3');

        return timeline;
    }

    // Gestion des transitions lors des changements de page
    document.querySelectorAll('a[href^="/"]:not([href*="#"])').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');

            pageTransitionOut().then(() => {
                window.location.href = href;
            });
        });
    });

    // Animation d'entrée au chargement de la page
    window.addEventListener('load', () => {
        pageTransitionIn();
    });
}

/**
 * Animation des boutons et éléments interactifs
 */
function initButtonAnimations() {
    // Animation des boutons au survol
    const buttons = document.querySelectorAll('button, .btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mousedown', () => {
            gsap.to(button, {
                scale: 0.98,
                duration: 0.1,
                ease: 'power2.in'
            });
        });

        button.addEventListener('mouseup', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // Animation des cartes au survol
    const cards = document.querySelectorAll('.feature-card, .hover-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Animation de défilement fluide pour la navigation
 */
function initSmoothScrolling() {
    // Navigation fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();

            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

/**
 * Animation spécifique pour la section de l'application mobile
 * @param {HTMLElement} container - Le conteneur de la section
 * @param {HTMLElement} phoneImage - L'élément contenant l'image du téléphone
 * @param {NodeList} featureCards - Les cartes de fonctionnalités flottantes
 */
export function animateMobileAppSection(container, phoneImage, featureCards) {
    // Timeline pour l'animation de la section
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
        }
    });

    // Animation du téléphone avec effet de flottement
    timeline
        .from(phoneImage, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .to(phoneImage, {
            y: '-10px',
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power1.inOut'
        }, '>');

    // Animation des cartes de fonctionnalités flottantes
    featureCards.forEach((card, index) => {
        timeline.from(card, {
            x: index % 2 === 0 ? -30 : 30,
            y: 20,
            opacity: 0,
            rotation: index % 2 === 0 ? -5 : 5,
            duration: 0.7,
            ease: 'back.out(1.5)'
        }, '-=0.4');

        // Animation continue de flottement pour chaque carte
        gsap.to(card, {
            y: index % 2 === 0 ? '-8px' : '-12px',
            rotation: index % 2 === 0 ? '-3deg' : '3deg',
            repeat: -1,
            yoyo: true,
            duration: 2 + (index * 0.2),
            delay: index * 0.1,
            ease: 'power1.inOut'
        });
    });

    return timeline;
}

/**
 * Animation spéciale pour la section FAQ (accordéon)
 * @param {NodeList} faqItems - Les éléments de la FAQ
 */
export function initFaqAccordion(faqItems) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Initialiser tous les panneaux fermés
        gsap.set(answer, { height: 0, opacity: 0 });

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Fermer tous les autres éléments
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');

                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    gsap.to(otherAnswer, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });

            // Ouvrir/fermer l'élément actuel
            if (!isOpen) {
                item.classList.add('active');

                // Mesurer la hauteur naturelle
                gsap.set(answer, { height: 'auto', opacity: 1 });
                const height = answer.offsetHeight;
                gsap.set(answer, { height: 0, opacity: 0 });

                // Animer pour ouvrir
                gsap.to(answer, {
                    height: height,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            } else {
                item.classList.remove('active');

                // Animer pour fermer
                gsap.to(answer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        });
    });
}

// Exportation des fonctions pour utilisation dans les composants Vue
export default {
    initAnimations,
    animateFeatureCards,
    animateCounters,
    animateMobileAppSection,
    initFaqAccordion
};