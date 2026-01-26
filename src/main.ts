import './styles.css';
import { createNavbar } from './components/Navbar';
import { createIdentitySection } from './components/Identity';
import { createExperienceSection, createProjectsSection } from './components/Focus';
import { createToolkitSection } from './components/Toolkit';
import { createConnectionSection } from './components/Connection';

function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    progressBar.style.transform = `scaleX(${Math.min(scrollPercent / 100, 1)})`;
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

function initMagneticLinks() {
  const links = document.querySelectorAll('.magnetic-link') as NodeListOf<HTMLElement>;
  
  links.forEach(link => {
    link.addEventListener('mousemove', (e) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 50;
      const strength = Math.min(distance / maxDistance, 1);
      
      const moveX = x * (1 - strength) * 0.3;
      const moveY = y * (1 - strength) * 0.3;
      
      link.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translate(0, 0)';
    });
  });
}

function initGrainOverlay() {
  const grain = document.createElement('div');
  grain.className = 'grain-overlay';
  document.body.appendChild(grain);
}

function initScrollToTop() {
  const scrollButton = document.createElement('button');
  scrollButton.className = 'fixed bottom-8 right-8 z-50 w-12 h-12 bg-text text-background rounded-full shadow-lg hover:bg-accent transition-all duration-300 opacity-0 pointer-events-none flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  scrollButton.setAttribute('aria-label', 'Scroll to top');
  scrollButton.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  `;
  
  document.body.appendChild(scrollButton);

  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollButton.classList.remove('opacity-0', 'pointer-events-none');
      scrollButton.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      scrollButton.classList.add('opacity-0', 'pointer-events-none');
      scrollButton.classList.remove('opacity-100', 'pointer-events-auto');
    }
  }

  window.addEventListener('scroll', toggleScrollButton);
  toggleScrollButton();

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

async function init() {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    // Create navbar
    document.body.insertBefore(createNavbar(), document.body.firstChild);

    // Create sections
    app.appendChild(createIdentitySection());
    app.appendChild(await createExperienceSection());
    app.appendChild(await createProjectsSection());
    app.appendChild(createToolkitSection());
    app.appendChild(createConnectionSection());

    // Initialize interactions
    initScrollProgress();
    initMagneticLinks();
    initGrainOverlay();
    initScrollToTop();
  } catch (error) {
    console.error('Error initializing application:', error);
    app.innerHTML = `
      <div class="min-h-screen flex items-center justify-center px-6">
        <div class="text-center">
          <h1 class="font-header text-2xl font-bold text-text mb-4">Something went wrong</h1>
          <p class="font-body text-text/60 mb-6">Unable to load the portfolio. Please refresh the page.</p>
          <button onclick="location.reload()" class="px-6 py-3 bg-accent text-background rounded-full font-body font-medium hover:bg-accent/90 transition-colors">
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => init());
} else {
  init();
}

