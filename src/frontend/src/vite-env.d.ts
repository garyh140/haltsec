/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_II_URL?: string;
  readonly VITE_II_DERIVATION_ORIGIN?: string;
  readonly VITE_FRONTEND_CANISTER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
