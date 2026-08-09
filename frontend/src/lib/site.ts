/**
 * Single source of truth for anything the site claims about the product.
 *
 * Every number here is real — taken from the running service's config, not
 * invented for the page. If a limit changes in `app/config.py`, change it here
 * too. A marketing page that overstates a technical product is the fastest way
 * to lose a developer audience.
 */

/**
 * Where the dashboard lives. Set VITE_APP_URL at build time.
 * The marketing site is redis.mohammadramiz.in; the app is a separate service.
 */
export const APP_URL = import.meta.env.VITE_APP_URL ?? "https://api.redis.mohammadramiz.in";

/** Public base for tenant API calls, used in every code sample. */
export const API_BASE = import.meta.env.VITE_API_BASE ?? "https://api.redis.mohammadramiz.in";

export const SIGNUP_URL = `${APP_URL}/signup`;
export const SIGNIN_URL = `${APP_URL}/login`;
export const DOCS_URL = `${APP_URL}/docs`;

export const CONTACT_EMAIL = "ramizanas6@gmail.com";
export const GITHUB_URL = "https://github.com/RamizMohammad";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ramizmohammad";
export const PORTFOLIO_URL = "https://www.mohammadramiz.in";

/** Free-tier limits, matching app/config.py. Not enforced during beta. */
export const LIMITS = {
  projects: 1,
  keys: 10_000,
  storage: "100 MB",
  requestsPerMonth: 1_000_000,
  apiKeysPerProject: 10,
} as const;

/** The example project used throughout the site's code samples. */
export const EXAMPLE_PROJECT = "checkout_svc";
export const EXAMPLE_BASE = `${API_BASE}/${EXAMPLE_PROJECT}`;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Playground", href: "#playground" },
  { label: "Pricing", href: "#pricing" },
] as const;
