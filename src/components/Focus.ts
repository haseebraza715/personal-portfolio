import { loadJobs, loadProjects } from '../utils/contentLoader';

export async function createExperienceSection(): Promise<HTMLElement> {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'px-6 py-24 md:px-12 lg:px-32 relative';

  const jobs = await loadJobs();

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="font-header text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16 lg:mb-24 tracking-tight">
        Professional <span class="text-accent">Journey</span>
      </h2>
      
      <div class="space-y-12 md:space-y-16">
        ${jobs.map((job) => `
          <div class="group relative">
            <!-- Animated Background Effect -->
            <div class="absolute -inset-4 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            <!-- Year with cool badge -->
            <div class="mb-3">
              <span class="inline-block font-mono text-xs text-accent font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                ${job.year}
              </span>
            </div>
            
            <!-- Role & Company -->
            <div class="mb-6">
              <h3 class="font-header text-xl md:text-2xl font-bold text-text mb-2 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1">
                ${job.role}
              </h3>
              <div class="flex items-center gap-2.5 flex-wrap">
                <span class="font-body text-sm md:text-base text-text/50 group-hover:text-text/70 transition-colors duration-300">
                  ${job.company}
                </span>
                ${job.link ? `
                  <a href="${job.link.url}" target="_blank" rel="noopener noreferrer" 
                     class="text-text/30 hover:text-accent transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                     aria-label="View ${job.company}">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                ` : ''}
              </div>
            </div>

            <!-- Description with animated accent line -->
            <div class="relative pl-5">
              <!-- Animated Accent Line -->
              <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-text/10 group-hover:bg-gradient-to-b group-hover:from-accent group-hover:to-accent/50 transition-all duration-500 rounded-full"></div>
              
              <div class="font-body text-sm md:text-base text-text/60 leading-relaxed space-y-3">
                ${job.description.map(line => `
                  <div class="relative transform group-hover:translate-x-1 transition-transform duration-300">
                    <span class="block">${line}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}

export async function createProjectsSection(): Promise<HTMLElement> {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'px-6 py-24 md:px-12 lg:px-32 relative';

  const projects = await loadProjects();

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="font-header text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16 lg:mb-24 tracking-tight">
        Selected <span class="text-accent">Works</span>
      </h2>
      
      <div class="space-y-12 md:space-y-16">
        ${projects.map(project => `
          <div class="group relative">
            <!-- Animated Background Effect -->
            <div class="absolute -inset-4 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            <!-- Year Badge -->
            <div class="mb-3">
              <span class="inline-block font-mono text-xs text-accent font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                ${project.year}
              </span>
            </div>
            
            <!-- Project Name & Link -->
            <div class="mb-4 flex items-start justify-between gap-4">
              <h3 class="font-header text-xl md:text-2xl font-bold text-text group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1 flex-1">
                ${project.name}
              </h3>
              ${project.link ? `
                <a href="${project.link.url}" target="_blank" rel="noopener noreferrer" 
                   class="text-text/30 hover:text-accent transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded shrink-0"
                   aria-label="View ${project.name}">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              ` : ''}
            </div>
            
            <!-- Summary -->
            <p class="font-body text-sm md:text-base text-text/60 mb-5 leading-relaxed">
              ${project.summary}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              ${project.tech.map(t => `
                <span class="font-body text-xs text-text/40 px-2.5 py-1 rounded-md group-hover:text-text/60 transition-colors duration-300">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
