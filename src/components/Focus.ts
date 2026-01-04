import { loadJobs, loadProjects } from '../utils/contentLoader';

export async function createExperienceSection(): Promise<HTMLElement> {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'px-6 py-24 md:px-12 lg:px-32 relative';

  const jobs = await loadJobs();

  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <h2 class="font-header text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-16 lg:mb-24 tracking-tight">
        Professional <span class="text-accent">Journey</span>
      </h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
        ${jobs.map((job) => `
          <div class="flex flex-col items-start group">
             <!-- Top Meta: Year & Company -->
             <div class="flex flex-col items-start mb-4">
               <span class="font-mono text-sm uppercase tracking-wider text-accent mb-1">${job.year}</span>
               <h3 class="font-header text-2xl md:text-3xl font-bold text-text mb-1 group-hover:text-accent transition-colors duration-300">
                 ${job.role}
               </h3>
               <span class="font-body text-lg text-text/50 font-medium border-b border-transparent group-hover:border-accent/20 transition-all duration-300">
                 ${job.company}
               </span>
             </div>

             <!-- Description -->
             <div class="font-body text-base text-text/70 leading-relaxed space-y-2.5">
               ${job.description.map(line => `
                 <div class="flex items-start gap-3">
                   <span class="mt-2 w-1 h-1 rounded-full bg-accent/40 shrink-0 group-hover:bg-accent transition-colors duration-300"></span>
                   <span>${line}</span>
                 </div>
               `).join('')}
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
  section.className = 'px-6 py-24 md:px-12 lg:px-32 relative bg-text/[0.02]';

  const projects = await loadProjects();

  section.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <h2 class="font-header text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-20 lg:mb-32 tracking-tight">
        Selected <span class="text-accent">Works</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        ${projects.map(project => `
          <div class="group relative flex flex-col p-8 rounded-3xl border border-text/10 bg-background hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
            
            <div class="flex justify-between items-start mb-6">
              <span class="font-mono text-xs font-medium text-accent tracking-wider uppercase border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                ${project.year}
              </span>
              ${project.link ? `
                <a href="${project.link.url}" target="_blank" rel="noopener noreferrer" class="text-text/40 hover:text-accent transition-colors duration-200">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              ` : ''}
            </div>

            <h3 class="font-header text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-200">
              ${project.name}
            </h3>
            
            <p class="font-body text-base text-text/60 mb-6 leading-relaxed line-clamp-3">
              ${project.summary}
            </p>

            <div class="mt-auto flex flex-wrap gap-2">
              ${project.tech.map(t => `
                <span class="text-xs font-medium text-text/50 bg-text/[0.03] px-3 py-1.5 rounded-md">
                  ${t}
                </span>
              `).join('')}
            </div>
            
            <!-- Hover Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
