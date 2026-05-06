/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_APP_URL?: string;
  readonly VITE_HUBSPOT_PORTAL_ID?: string;
  readonly VITE_HUBSPOT_CONTACT_FORM_GUID?: string;
  readonly VITE_HUBSPOT_NEWSLETTER_FORM_GUID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
