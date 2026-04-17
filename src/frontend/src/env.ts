/**
 * Environment configuration helper for Vite-based builds.
 * Provides safe access to environment variables with fallbacks and validation.
 */

interface AppEnv {
  II_URL: string;
  II_DERIVATION_ORIGIN?: string;
  FRONTEND_CANISTER_ID?: string;
}

/**
 * Get environment configuration with validation.
 * Throws clear errors if required values are missing.
 */
export function getEnv(): AppEnv {
  const iiUrl = import.meta.env.VITE_II_URL;

  if (!iiUrl) {
    throw new Error(
      "VITE_II_URL is not configured. Please set this environment variable in your .env file or deployment configuration.",
    );
  }

  return {
    II_URL: iiUrl,
    II_DERIVATION_ORIGIN: import.meta.env.VITE_II_DERIVATION_ORIGIN,
    FRONTEND_CANISTER_ID: import.meta.env.VITE_FRONTEND_CANISTER_ID,
  };
}

/**
 * Get Internet Identity provider URL with fallback.
 * Returns undefined if not configured (for optional II usage).
 */
export function getIIUrl(): string | undefined {
  return import.meta.env.VITE_II_URL || undefined;
}

/**
 * Get the frontend canister ID from environment configuration.
 * Returns undefined if not configured.
 */
export function getFrontendCanisterId(): string | undefined {
  return import.meta.env.VITE_FRONTEND_CANISTER_ID || undefined;
}
