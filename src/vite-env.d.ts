/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.glb" {
  const src: string;
  export default src;
}
