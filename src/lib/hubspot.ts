/**
 * Tiny HubSpot Forms-API helper.
 *
 * Env vars (set in Vercel project settings, and .env.local for local dev):
 *
 *   VITE_HUBSPOT_PORTAL_ID            — your HubSpot portal ID (numeric)
 *   VITE_HUBSPOT_CONTACT_FORM_GUID    — form GUID for the main contact form
 *   VITE_HUBSPOT_NEWSLETTER_FORM_GUID — form GUID for the newsletter / 1-pager signup
 *   VITE_HUBSPOT_REGION               — optional, e.g. "eu1" for EU portals; leave
 *                                        unset for US portals
 *
 * If portal ID or the relevant form GUID is missing, submitToHubspot() returns
 * { ok: false, configured: false } so the UI can fall back gracefully.
 */

const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID as string | undefined;
const REGION = (import.meta.env.VITE_HUBSPOT_REGION as string | undefined)?.trim() || '';

export type HubspotFormType = 'contact' | 'newsletter';

const FORM_GUID: Record<HubspotFormType, string | undefined> = {
  contact: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_GUID as string | undefined,
  newsletter: import.meta.env.VITE_HUBSPOT_NEWSLETTER_FORM_GUID as string | undefined,
};

export type HubspotField = { name: string; value: string };

export type HubspotResult =
  | { ok: true }
  | { ok: false; configured: boolean; reason: string };

export async function submitToHubspot(
  formType: HubspotFormType,
  fields: HubspotField[],
): Promise<HubspotResult> {
  const guid = FORM_GUID[formType];
  if (!PORTAL_ID || !guid) {
    return { ok: false, configured: false, reason: 'HubSpot is not configured.' };
  }

  // EU portals use api-eu1.hsforms.com; US (default) uses api.hsforms.com.
  const apiHost = REGION ? `api-${REGION}.hsforms.com` : 'api.hsforms.com';

  try {
    const res = await fetch(
      `https://${apiHost}/submissions/v3/integration/submit/${PORTAL_ID}/${guid}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: typeof window !== 'undefined' ? window.location.href : undefined,
            pageName: typeof document !== 'undefined' ? document.title : undefined,
          },
        }),
      },
    );
    if (!res.ok) {
      let detail = '';
      try {
        const data = await res.json();
        detail = data?.message || JSON.stringify(data);
      } catch {
        // ignore
      }
      return { ok: false, configured: true, reason: `HubSpot ${res.status}${detail ? `: ${detail}` : ''}` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      configured: true,
      reason: err instanceof Error ? err.message : 'Network error',
    };
  }
}

export const HUBSPOT_CONFIGURED = Boolean(PORTAL_ID);
