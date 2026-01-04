/// <reference types="vite/client" />

interface ImportMeta {
  glob(pattern: string, options?: { as?: 'raw' | 'url' | 'string' }): Record<string, () => Promise<any>>;
}

