
export function createIdentitySection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'identity';
  // Optimized padding for a cleaner vertical rhythm
  section.className = 'flex flex-col px-6 pt-20 pb-0 md:px-12 md:pt-28 lg:px-32 lg:pt-24 lg:pb-32 overflow-hidden';

  // SVG Icons
  const githubIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  `;

  const linkedinIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  `;

  const emailIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  `;

  const twitterIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.6 9 5-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  `;

  const socialLinks = `
    <a href="https://github.com/haseebraza715" target="_blank" rel="noopener noreferrer" 
       class="text-text/40 hover:text-accent hover:scale-110 transition-all duration-300 transform" aria-label="GitHub">
      ${githubIcon}
    </a>
    <a href="https://www.linkedin.com/in/haseebraza715/" target="_blank" rel="noopener noreferrer" 
       class="text-text/40 hover:text-accent hover:scale-110 transition-all duration-300 transform" aria-label="LinkedIn">
      ${linkedinIcon}
    </a>
    <a href="https://twitter.com/haseebraza715" target="_blank" rel="noopener noreferrer" 
       class="text-text/40 hover:text-accent hover:scale-110 transition-all duration-300 transform" aria-label="Twitter">
      ${twitterIcon}
    </a>
    <a href="mailto:haseeb.javed715@gmail.com" 
       class="text-text/40 hover:text-accent hover:scale-110 transition-all duration-300 transform" aria-label="Email">
      ${emailIcon}
    </a>
  `;

  section.innerHTML = `
    <div class="w-full max-w-7xl mx-auto mt-0">
      <!-- Main two-column layout: Aligned bottom on desktop -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
        
        <!-- LEFT SIDE: Identity column -->
        <div class="col-span-1 lg:col-span-7 flex flex-col pt-4 md:pt-0 z-10">
          
          <!-- Name - Design upgrade: One line on desktop -->
          <h1 class="font-header text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-5 text-text -ml-1 lg:whitespace-nowrap">
            Haseeb Raza
          </h1>
          
          <!-- Role - Design upgrade: Accent color, distinct weight -->
          <p class="font-body text-xl md:text-2xl font-medium text-accent mb-6 max-w-xl">
            Data Scientist · Researcher  <span class="text-text/60 font-normal text-lg ml-1">(LLMs & Agentic Systems)</span>
          </p>
          
          <!-- Context line with links - Design upgrade: Better link styling -->
          <p class="font-body text-sm text-text/60 mb-8 leading-relaxed max-w-2xl">
            Building Agents @ <a href="https://www.agenticsystemslab.org/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">ETH Zurich – Agentic Systems Lab</a> ·
            SWE @ <a href="https://www.infineon.com/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">Infineon</a> ·
            Research @ <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">ELTE University</a> ·
            Teaching Assistant @ <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">ELTE (DSA & Operating Systems)</a> ·
            Leader @ <a href="https://datasciencelte.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">ELTE Data Science Club</a> ·
            CS Undergrad @ <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-text hover:text-accent font-medium border-b border-text/20 hover:border-accent transition-colors duration-200 pb-0.5">ELTE University</a>
          </p>
          
          <!-- About text - Design upgrade: Justified, readable line-height -->
          <p class="font-body text-base md:text-lg text-text/80 mb-10 leading-relaxed max-w-2xl text-justify border-l-2 border-accent/10 pl-5">
            I work in data science and applied machine learning, building and evaluating large language model–based systems, including agentic workflows and retrieval-augmented generation, with a focus on production-ready ML solutions.<br><br>
            At <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline decoration-1 underline-offset-2">ELTE University</a>, I conduct academic research across AI and computational social science labs, working on multi-agent systems, LLM evaluation, and bias analysis, and serve as a teaching assistant for Data Structures & Algorithms and Operating Systems. I also build agent-based systems at the <a href="https://www.agenticsystemslab.org/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline decoration-1 underline-offset-2">ETH Zurich Agentic Systems Lab</a> and develop LLM-driven, production-oriented ML solutions as a software engineer at <a href="https://www.infineon.com/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline decoration-1 underline-offset-2">Infineon Technologies</a>. In parallel, I lead the <a href="https://www.elte.hu/en" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline decoration-1 underline-offset-2">ELTE Data Science Club</a>, a 70+ member student research community focused on applied AI, collaboration, and peer-led learning. Outside of work, I enjoy cricket and staying active through sports.
          </p>
          
          <!-- Social icons: Mobile only (hidden on lg) -->
          <div class="flex lg:hidden items-center gap-8 md:gap-10 flex-wrap mb-8 md:mb-0">
            ${socialLinks}
          </div>
        </div>
        
        <!-- RIGHT SIDE: Professional portrait & Desktop Socials -->
        <div class="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-end mb-8 md:mb-0 gap-8 lg:mt-24">
          
          <!-- Image Container -->
          <div class="group cursor-pointer w-48 max-w-[200px] md:w-64 lg:w-full lg:max-w-md relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 hover:shadow-accent/30 transition-all duration-500">
            <!-- Subtle backdrop glow -->
            <div class="absolute inset-0 bg-accent/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src="/assets/haseeb.png" 
              alt="Haseeb Raza" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out relative z-10"
              style="aspect-ratio: 3/4; object-fit: cover; object-position: center;"
            />
          </div>

          <!-- Social icons: Desktop only (hidden on mobile) - Aligned under photo -->
          <div class="hidden lg:flex items-center gap-10">
            ${socialLinks}
          </div>

        </div>
      </div>
    </div>
  `;

  return section;
}
