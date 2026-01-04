export function createConnectionSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'px-6 pt-12 pb-32 md:px-12 lg:px-32';

  section.innerHTML = `
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
      <h2 class="font-header text-4xl md:text-5xl lg:text-9xl font-bold tracking-tight mb-8 lg:mb-12">
        Let's <span class="text-accent">Connect</span>
      </h2>
      
      <p class="font-body text-base md:text-lg text-text/60 max-w-2xl leading-relaxed mb-12 lg:mb-16">
        I'm always open to discussing research collaborations, agentic AI, or production-ready machine learning systems. Feel free to reach out.
      </p>

      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <a href="mailto:haseeb.javed715@gmail.com" class="group flex items-center gap-3 px-8 py-4 bg-text text-background rounded-full font-body font-medium text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/25">
          <span>Shoot me an email</span>
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>

        <div class="flex items-center gap-6">
          <a href="https://github.com/haseebraza715" target="_blank" rel="noopener noreferrer" class="text-text/60 hover:text-text transition-colors duration-200">
            <span class="sr-only">GitHub</span>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
          </a>
          
          <a href="https://www.linkedin.com/in/haseebraza715/" target="_blank" rel="noopener noreferrer" class="text-text/60 hover:text-text transition-colors duration-200">
            <span class="sr-only">LinkedIn</span>
             <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg>
          </a>

          <a href="https://twitter.com/haseebraza715" target="_blank" rel="noopener noreferrer" class="text-text/60 hover:text-text transition-colors duration-200">
            <span class="sr-only">Twitter</span>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.6 9 5-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>

      <p class="font-body text-sm text-text/40 mt-24">
        © 2026 Haseeb Raza. All rights reserved.
      </p>
    </div>
  `;

  return section;
}
