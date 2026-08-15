import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

/**
 * ESLint 9 flat config. eslint-config-next@16 ships native flat configs, so
 * these are spread directly — no FlatCompat shim. Replaces .eslintrc.json;
 * `next lint` was removed in Next 16, so package.json runs `eslint .`.
 */
const eslintConfig = [
  // Must lead and stand alone to apply globally. `next lint` used to skip build
  // output implicitly; running eslint directly means listing it. ds-bundle and
  // .ds-sync are generated design-sync artifacts, not authored source.
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "ds-bundle/**",
      ".ds-sync/**",
      ".design-sync/previews/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
]

export default eslintConfig
