/**
 * Personal Positioning Website - Main JavaScript
 * Handles navigation, scroll animations, and interactivity
 */

(function() {
  'use strict';

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');

      // Animate hamburger to X
      if (!isExpanded) {
        navToggle.classList.add('active');
      } else {
        navToggle.classList.remove('active');
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==========================================================================
  // Scroll-triggered Animations (Intersection Observer)
  // ==========================================================================

  const observeElements = document.querySelectorAll('.observe-animation');

  if (observeElements.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          // Stagger reveal slightly based on order within this batch
          const delay = index * 80;

          setTimeout(function() {
            // Hidden/visible state is driven entirely by the `.visible` class
            // (which animates `opacity` + `translate`), leaving `transform`
            // free for hover lifts on interactive cards.
            entry.target.classList.add('visible');
          }, delay);

          // Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observeElements.forEach(function(element) {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    observeElements.forEach(function(element) {
      element.classList.add('visible');
    });
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        const navHeight = document.querySelector('.nav')?.offsetHeight || 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ==========================================================================
  // Active Navigation State
  // ==========================================================================

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    // On the homepage, no nav item applies — mark the logo so the user still
    // has a sense of location.
    const onHome = currentPath === '/' ||
      /\/(index\.html)?$/.test(currentPath) && !currentPath.includes('/pages/');
    const logo = document.querySelector('.nav-logo');
    if (logo && onHome) {
      logo.classList.add('active');
    }

    navLinks.forEach(function(link) {
      link.classList.remove('active');

      const linkPath = link.getAttribute('href');

      // Check for exact match or if current path ends with the link path
      if (currentPath === linkPath ||
          currentPath.endsWith(linkPath) ||
          (linkPath !== '/' && currentPath.includes(linkPath.replace('/pages/', '').replace('.html', '')))) {
        link.classList.add('active');
      }
    });
  }

  setActiveNavLink();

  // ==========================================================================
  // Navigation Background on Scroll
  // ==========================================================================

  const nav = document.querySelector('.nav');

  if (nav) {
    window.addEventListener('scroll', function() {
      // Add shadow when scrolled
      if (window.pageYOffset > 10) {
        nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ==========================================================================
  // Keyboard Accessibility
  // ==========================================================================

  // Handle keyboard navigation for interactive elements
  document.addEventListener('keydown', function(event) {
    // Escape key closes mobile menu
    if (event.key === 'Escape' && navLinks?.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.focus();
    }
  });

  // ==========================================================================
  // Reduced Motion Support
  // ==========================================================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');

    // Immediately reveal all scroll-animated elements
    observeElements.forEach(function(element) {
      element.classList.add('visible');
    });
  }

  // ==========================================================================
  // Page Load Animation
  // ==========================================================================

  window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero .animate-in');
    heroElements.forEach(function(element) {
      element.style.opacity = '1';
    });
  });

})();
