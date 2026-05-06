import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description?: string;
  /** Optional path relative to APP_URL, e.g. "/product". Defaults to current pathname. */
  canonicalPath?: string;
  /** JSON-LD object to inject as structured data on this page. */
  jsonLd?: object | object[];
}

const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) || 'https://everyangle.ai';

/**
 * useMeta — single hook that updates the document title, meta description,
 * canonical link, and Open Graph / Twitter equivalents on route change.
 *
 * Usage:
 *   useMeta({ title: 'Pricing — EVERYANGLE', description: '...' });
 */
export function useMeta({ title, description, canonicalPath, jsonLd }: MetaOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    setMeta('property', 'og:title', title);
    setMeta('name', 'twitter:title', title);

    const path = canonicalPath ?? window.location.pathname;
    const url = `${APP_URL.replace(/\/$/, '')}${path}`;
    setLink('canonical', url);
    setMeta('property', 'og:url', url);

    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.dataset.routeJsonld = 'true';
      scriptEl.textContent = JSON.stringify(jsonLd);
      // Remove any prior route-scoped JSON-LD before adding ours.
      document.querySelectorAll('script[data-route-jsonld="true"]').forEach((n) => n.remove());
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl && scriptEl.parentNode) scriptEl.parentNode.removeChild(scriptEl);
    };
  }, [title, description, canonicalPath, jsonLd]);
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
