export const SITE_DOMAIN = "bota.swiss";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export function siteEmail(local: string) {
  return `${local}@${SITE_DOMAIN}`;
}
