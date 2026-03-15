/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
  readonly VITE_EJS_SERVICE_ID: string;
  readonly VITE_EJS_TEMPLATE_IDFP: string;
  readonly VITE_EJS_PUBLIC_KEY: string;
  readonly VITE_EMAIL_SENT_FLAG_KEY: string;
  readonly VITE_EMAIL_REFRESH_TIME: number;
  readonly VITE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
