/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
  readonly VITE_APP_NAME: string;
  readonly VITE_API_URL: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_SENTRY_DSN?: string;
  readonly VITE_ENABLE_NEW_DASHBOARD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Server-side environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EJS_SERVICE_ID: string;
      EJS_TEMPLATE_IDFP: string;
      EJS_PUBLIC_KEY: string;
    }
  }
}

export {};
