export function createToolkitSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'px-6 pt-12 pb-24 md:px-12 lg:px-32 relative overflow-hidden';

  const skillCategories = [
    // ... (keep categories same)
    {
      title: 'Data Science & ML',
      skills: [
        'Data science', 'Machine learning', 'Large language models',
        'Agentic AI systems', 'Retrieval-augmented generation',
        'Natural language processing', 'Algorithmic fairness', 'Model evaluation'
      ]
    },
    {
      title: 'AI / ML Methods',
      skills: [
        'Multi-agent systems', 'Topic modeling (BERTopic)',
        'Embedding-based semantic analysis', 'Swarm intelligence (ACOM)',
        'Dimensionality reduction (PCA, t-SNE)', 'Bias analysis'
      ]
    },
    {
      title: 'Technical Tools',
      skills: [
        'Python (NumPy, SciPy, Pandas, scikit-learn)', 'Java', 'SQL',
        'JavaScript', 'TypeScript', 'MongoDB',
        'Git', 'Docker', 'Linux/Bash', 'Jupyter', 'LaTeX'
      ]
    },
    {
      title: 'Research',
      skills: [
        'Experimental pipeline design', 'Benchmarking', 'Controlled experiments',
        'Quantitative evaluation', 'Reproducible research'
      ]
    },
    {
      title: 'Communication',
      skills: [
        'Technical writing', 'Academic presentations', 'Documentation',
        'Student mentorship', 'Peer collaboration'
      ]
    }
  ];

  section.innerHTML = `
    <div class="max-w-6xl mx-auto flex flex-col items-center">
      <h2 class="font-header text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-16 lg:mb-24 tracking-tight">
        Technical <span class="text-accent">Expertise</span>
      </h2>
      
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
        ${skillCategories.map((category) => `
          <div class="flex flex-col items-center gap-4 lg:gap-6 group">
            <h3 class="font-header text-xl md:text-2xl font-medium text-text/90 tracking-tight text-center relative">
              ${category.title}
              <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-accent/30 rounded-full group-hover:w-full group-hover:bg-accent transition-all duration-500"></span>
            </h3>
            
            <div class="flex flex-wrap justify-center gap-x-2 gap-y-2 px-4">
              ${category.skills.map(skill => `
                <span class="font-body text-sm md:text-base text-text/60 border border-text/10 bg-text/[0.02] px-4 py-1.5 rounded-full transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/[0.05] cursor-default">
                  ${skill}
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
