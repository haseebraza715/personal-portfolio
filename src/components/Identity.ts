


export function createIdentitySection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'identity';
  section.className = 'flex flex-col px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 md:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-24 xl:px-16 xl:pt-32 xl:pb-28 2xl:px-32 overflow-hidden';

  section.innerHTML = `
    <div class="w-full max-w-6xl mx-auto">
      <!-- Main two-column layout: Responsive grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start">
        
        <!-- LEFT SIDE: Content -->
        <div class="col-span-1 lg:col-span-7 flex flex-col">
          
          <!-- Name -->
          <h1 class="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 sm:mb-3 text-text">
            Haseeb Raza
          </h1>
          
          <!-- Title -->
          <p class="font-body text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-accent mb-3 sm:mb-4 max-w-[65ch]">
            Data Scientist · AI Research Assistant (LLMs & Agentic Systems) · <a href="https://datasciencelte.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-accent/80 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">ELTE DSC Lead</a>
          </p>
          
          <!-- Value Statement -->
          <p class="font-body text-sm sm:text-base md:text-lg text-text/70 mb-4 sm:mb-5 max-w-[60ch] leading-relaxed">
            Building and evaluating large language model–based systems with a focus on production-ready ML solutions, agentic workflows, and retrieval-augmented generation.
          </p>
          
          <!-- Currently Section -->
          <div class="mb-4 sm:mb-5">
            <h2 class="font-body text-xs uppercase tracking-wider text-text/40 mb-2.5 font-medium">Currently</h2>
            <ul class="space-y-2 font-body text-sm sm:text-base text-text/60 max-w-[60ch]">
              <li class="flex items-start gap-2.5">
                <span class="text-accent mt-1.5 shrink-0">•</span>
                <span>Building agentic systems at <a href="https://www.agenticsystemslab.org/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">ETH Zurich Agentic Systems Lab</a></span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-accent mt-1.5 shrink-0">•</span>
                <span>Software Engineer developing LLM-driven systems at <a href="https://www.infineon.com/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">Infineon Technologies</a></span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-accent mt-1.5 shrink-0">•</span>
                <span>Researching multi-agent systems & LLM evaluation at <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">ELTE University</a></span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-accent mt-1.5 shrink-0">•</span>
                <span>Teaching Assistant for Data Structures & Algorithms and Operating Systems at <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">ELTE University</a></span>
              </li>
            </ul>
          </div>
          
          <!-- Separator -->
          <div class="h-px bg-text/10 mb-4 sm:mb-5 max-w-[60ch]"></div>
          
          <!-- Leadership Section -->
          <div class="mb-0">
            <h2 class="font-body text-xs uppercase tracking-wider text-text/40 mb-2.5 font-medium">Leadership</h2>
            <ul class="space-y-2 font-body text-sm sm:text-base text-text/60 max-w-[60ch]">
              <li class="flex items-start gap-2.5">
                <span class="text-accent mt-1.5 shrink-0">•</span>
                <span>Lead <a href="https://datasciencelte.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded-sm">ELTE Data Science Club</a> (70+ members)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- RIGHT SIDE: Photo & CTA Buttons -->
        <div class="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-end mt-4 lg:mt-0">
          <!-- Photo -->
          <div class="w-40 sm:w-48 md:w-56 lg:w-full max-w-xs relative mb-5 sm:mb-6 lg:mb-7">
            <img 
              src="/assets/haseeb.png" 
              alt="Portrait of Haseeb Raza" 
              loading="lazy"
              class="w-full h-auto rounded-xl shadow-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style="aspect-ratio: 3/4; object-fit: cover; object-position: center;"
            />
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-row flex-wrap gap-2.5 sm:gap-3 w-full lg:w-auto justify-center lg:justify-end">
            <a href="#projects" 
               class="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-text text-background font-body text-xs sm:text-sm font-medium rounded-lg hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap">
              Projects
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a href="/Acedemic_CV_Haseeb.pdf" 
               target="_blank"
               rel="noopener noreferrer"
               class="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-text/20 font-body text-xs sm:text-sm font-medium text-text rounded-lg hover:border-accent hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap">
              CV
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <a href="#contact" 
               class="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-text/20 font-body text-xs sm:text-sm font-medium text-text rounded-lg hover:border-accent hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap">
              Contact
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
