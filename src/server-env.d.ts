declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: number;
      readonly ASSET_PRELOAD_VERBOSE_LOGGING: string;
    }
  }
}

export {};
