
export function createNavbar(): HTMLElement {
  const nav = document.createElement('nav');
  // Clean, white background, fixed top, high z-index
  nav.className = 'fixed top-0 left-0 right-0 z-[1000] bg-[#F5F5F5] border-b border-text/5 transition-all duration-300';

  // Mobile menu state
  let isMenuOpen = false;

  nav.innerHTML = `
    <!-- Container -->
    <div class="px-6 h-16 md:px-12 lg:px-32 flex items-center justify-between max-w-7xl mx-auto relative content-center">
      
      <!-- Logo / Brand -->
      <!-- Logo / Brand -->
      <a href="#identity" class="nav-brand text-text hover:text-accent transition-colors duration-200 z-[1002] relative flex items-center" aria-label="Home">
        <svg viewBox="0 0 512 512" class="w-8 h-8 md:w-9 md:h-9" fill="currentColor">
          <path d="M140 100H210V225H302V100H372V412H302V285H210V412H140V100Z" />
        </svg>
      </a>
      
      <!-- Desktop Menu (Hidden on Mobile) -->
      <div class="hidden lg:flex items-center gap-12">
        <a href="#experience" class="nav-link font-body text-sm font-medium text-text/70 hover:text-text transition-colors duration-200">Experience</a>
        <a href="#projects" class="nav-link font-body text-sm font-medium text-text/70 hover:text-text transition-colors duration-200">Projects</a>
        <a href="#skills" class="nav-link font-body text-sm font-medium text-text/70 hover:text-text transition-colors duration-200">Skills</a>
        <a href="#contact" class="nav-link font-body text-sm font-medium text-text/70 hover:text-text transition-colors duration-200">Contact</a>
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button class="lg:hidden z-[1002] relative w-10 h-10 flex items-center justify-center -mr-2 text-text focus:outline-none" aria-label="Toggle Menu" id="menu-toggle">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left" id="line1"></span>
          <span class="w-full h-0.5 bg-current transition-all duration-300" id="line2"></span>
          <span class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left" id="line3"></span>
        </div>
      </button>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 bg-[#F5F5F5] z-[1001] flex flex-col items-center justify-center gap-8 transition-all duration-300 opacity-0 pointer-events-none" id="mobile-overlay">
        <a href="#experience" class="mobile-link font-header text-3xl font-medium text-text hover:text-accent transition-colors">Experience</a>
        <a href="#projects" class="mobile-link font-header text-3xl font-medium text-text hover:text-accent transition-colors">Projects</a>
        <a href="#skills" class="mobile-link font-header text-3xl font-medium text-text hover:text-accent transition-colors">Skills</a>
        <a href="#contact" class="mobile-link font-header text-3xl font-medium text-text hover:text-accent transition-colors">Contact</a>
      </div>

    </div>
  `;

  // Logic
  const toggleBtn = nav.querySelector('#menu-toggle') as HTMLElement;
  const overlay = nav.querySelector('#mobile-overlay') as HTMLElement;
  const line1 = nav.querySelector('#line1') as HTMLElement;
  const line2 = nav.querySelector('#line2') as HTMLElement;
  const line3 = nav.querySelector('#line3') as HTMLElement;
  const mobileLinks = nav.querySelectorAll('.mobile-link');
  const navBrand = nav.querySelector('.nav-brand') as HTMLElement;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Show Menu
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100', 'pointer-events-auto');

      // Animate Hamburger to X
      line1.classList.add('rotate-45');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45');

      document.body.style.overflow = 'hidden';
    } else {
      // Hide Menu
      overlay.classList.remove('opacity-100', 'pointer-events-auto');
      overlay.classList.add('opacity-0', 'pointer-events-none');

      // Reset Hamburger
      line1.classList.remove('rotate-45');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45');

      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  // Close menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  navBrand.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return nav;
}
