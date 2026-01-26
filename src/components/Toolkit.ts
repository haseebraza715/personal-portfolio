export function createToolkitSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-20 md:px-12 md:pb-24 lg:px-32 relative overflow-hidden';

  const allSkills = [
    'Machine Learning', 'LLMs & Agentic Systems', 'RAG',
    'NLP', 'Multi-Agent Systems', 'Fairness & Bias Analysis',
    'Model Evaluation', 'Topic Modeling', 'Semantic Analysis',
    'Python', 'Java', 'SQL', 'JavaScript/TypeScript',
    'MongoDB', 'Git', 'Docker', 'Linux/Bash',
    'Research Methods', 'Technical Communication', 'Mentorship'
  ];

  section.innerHTML = `
    <div class="max-w-5xl mx-auto">
      <h2 class="font-header text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24 tracking-tight">
        Technical <span class="text-accent">Expertise</span>
      </h2>
      
      <div class="w-full flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
        ${allSkills.map(skill => `
          <span class="group relative font-body text-xs sm:text-sm md:text-base text-text/50 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg transition-all duration-300 hover:text-accent hover:text-text cursor-default">
            <span class="relative z-10">${skill}</span>
            <span class="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </span>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
