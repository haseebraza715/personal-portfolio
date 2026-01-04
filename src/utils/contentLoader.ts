

export interface JobEntry {
  year: string;
  company: string;
  role: string;
  capability: string;
  description: string[];
  order?: number;
  link?: {
    text: string;
    url: string;
  };
}

export interface ProjectEntry {
  name: string;
  year: string;
  summary: string;
  contributions: string[];
  tech: string[];
  order?: number;
  link: {
    text: string;
    url: string;
  };
}

function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }

  const frontmatterText = match[1];
  const body = match[2].trim();

  const frontmatter: Record<string, any> = {};
  const lines = frontmatterText.split('\n');
  let currentKey = '';
  let isArray = false;
  const arrayValues: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Check if this is an array item (must check before array start to handle continuation)
    if (isArray && trimmedLine.startsWith('-')) {
      const value = trimmedLine.slice(1).trim().replace(/['"]/g, '');
      arrayValues.push(value);
      continue;
    }

    // Check if this is an array start
    if (trimmedLine.includes(':') && trimmedLine.endsWith(':')) {
      // Save previous array if exists
      if (isArray && arrayValues.length > 0) {
        frontmatter[currentKey] = [...arrayValues];
        arrayValues.length = 0;
      }
      currentKey = trimmedLine.slice(0, -1).trim();
      isArray = true;
      continue;
    }

    // Check if array ended (empty line or new key-value pair)
    if (isArray && trimmedLine !== '' && !trimmedLine.startsWith('-')) {
      if (arrayValues.length > 0) {
        frontmatter[currentKey] = [...arrayValues];
        arrayValues.length = 0;
      }
      isArray = false;
    }

    // Regular key-value pair
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1 || trimmedLine.endsWith(':')) continue;

    const key = trimmedLine.slice(0, colonIndex).trim();
    let value = trimmedLine.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    frontmatter[key] = value;
  }

  // Handle array that ends at the end of frontmatter
  if (isArray && arrayValues.length > 0) {
    frontmatter[currentKey] = [...arrayValues];
  }

  return { frontmatter, body };
}

export async function loadJobs(): Promise<JobEntry[]> {
  const jobModules = import.meta.glob('/src/content/jobs/*.md', { query: '?raw', import: 'default' });
  const jobs: JobEntry[] = [];

  for (const path in jobModules) {
    const content = await jobModules[path]() as string;
    const { frontmatter, body } = parseFrontmatter(content);

    const job: JobEntry = {
      year: frontmatter.year || '',
      company: frontmatter.company || '',
      role: frontmatter.role || '',
      capability: frontmatter.capability || '',
      description: body.split('\n').filter(line => line.trim().length > 0),
      order: frontmatter.order ? parseInt(frontmatter.order) : 99,
      link: frontmatter.linkText && frontmatter.linkUrl ? {
        text: frontmatter.linkText,
        url: frontmatter.linkUrl
      } : undefined
    };

    jobs.push(job);
  }

  // Sort by order ascending
  return jobs.sort((a, b) => (a.order || 99) - (b.order || 99));
}

export async function loadProjects(): Promise<ProjectEntry[]> {
  const projectModules = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default' });
  const projects: ProjectEntry[] = [];

  for (const path in projectModules) {
    const content = await projectModules[path]() as string;
    const { frontmatter, body } = parseFrontmatter(content);

    let techStack: string[] = [];
    if (Array.isArray(frontmatter.tech)) {
      techStack = frontmatter.tech;
    } else if (typeof frontmatter.tech === 'string' && frontmatter.tech.startsWith('[') && frontmatter.tech.endsWith(']')) {
      techStack = frontmatter.tech.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''));
    }

    const project: ProjectEntry = {
      name: frontmatter.name || '',
      year: frontmatter.year || '',
      summary: frontmatter.summary || '',
      contributions: body.split('\n').filter(line => line.trim().length > 0),
      tech: techStack,
      order: frontmatter.order ? parseInt(frontmatter.order) : 99,
      link: {
        text: frontmatter.linkText || '',
        url: frontmatter.linkUrl || '#'
      }
    };

    projects.push(project);
  }

  // Sort by order ascending
  return projects.sort((a, b) => (a.order || 99) - (b.order || 99));
}

