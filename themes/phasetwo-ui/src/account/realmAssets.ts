import { environment } from "./environment";

/** The realm's Phase Two assets endpoint: its CSS, logo and icons. */
export const realmAssetsUrl = `${environment.serverBaseUrl.replace(/\/$/, "")}/realms/${encodeURIComponent(environment.realm)}/assets`;

/**
 * Loads the realm's styling from the assets endpoint, as the login theme does
 * in login/hooks/useDynamicCss.ts, so the account console follows the colors,
 * CSS and favicon set in the Styles panel instead of the defaults in index.css.
 * The header takes the logo from there too, in root/Header.tsx.
 */
export function loadRealmAssets() {
  appendLink("stylesheet", `${realmAssetsUrl}/css/login.css`);
  document.querySelector('link[rel="icon"]')?.remove();
  appendLink("icon", `${realmAssetsUrl}/img/favicon`);
  appendLink("apple-touch-icon", `${realmAssetsUrl}/img/appicon`);
}

function appendLink(rel: string, href: string) {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
}
