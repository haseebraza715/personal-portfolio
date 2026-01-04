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

async function init() {
  const app = document.getElementById('app');
  if (!app) return;

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
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => init());
} else {
  init();
}

