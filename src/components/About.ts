export function createAboutSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'min-h-screen px-16 py-64 flex items-center';
  
  section.innerHTML = `
    <div class="w-full max-w-4xl mx-auto">
      <h2 class="font-header text-4xl lg:text-5xl font-semibold mb-32">
        About
      </h2>
      <div class="space-y-16 font-body text-base leading-relaxed text-text/90">
        <p>
          Computational designer working at the intersection of architecture, technology, and research.
        </p>
        <p>
          I develop tools and systems that enhance design processes through computation, machine learning, and human-computer interaction.
        </p>
        <p>
          Current research focuses on computational agency and how design systems can adapt and respond to complex requirements.
        </p>
      </div>
    </div>
  `;

  return section;
}

