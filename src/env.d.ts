/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
