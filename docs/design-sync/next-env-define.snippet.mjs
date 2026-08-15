// Next.js-convention env — the same class of problem as import.meta.env above,
// for components imported out of a Next app. next/image and next/link read
// `process.env.__NEXT_*` placeholders that Next's own webpack DefinePlugin
// substitutes at build time; they are build-time constants, never runtime
// config. Outside Next nothing substitutes them, so the bare `process`
// reference throws "ReferenceError: process is not defined" at module init —
// and because the IIFE is one shared bundle, a single component importing
// next/image blanks *every* preview, not just its own.
//
// Values mirror a plain unoptimized static export: no basePath, no i18n, no
// trailing slash. __NEXT_IMAGE_OPTS must be a real object — image-component
// destructures it at module scope — and `unoptimized: true` matches this
// project's next.config.mjs, so <Image> renders a plain <img> with the src
// untouched. Same trade-off as import.meta.env: code feature-detecting these
// takes the defined branch rather than its fallback.
export const NEXT_ENV_DEFINE = {
  'process.env.__NEXT_IMAGE_OPTS':
    '{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}',
  'process.env.__NEXT_ROUTER_BASEPATH': '""',
  'process.env.__NEXT_MANUAL_CLIENT_BASE_PATH': 'false',
  'process.env.__NEXT_LINK_NO_TOUCH_START': 'false',
  'process.env.__NEXT_TRAILING_SLASH': 'false',
  'process.env.__NEXT_MANUAL_TRAILING_SLASH': 'false',
  'process.env.__NEXT_I18N_SUPPORT': 'false',
  'process.env.NEXT_DEPLOYMENT_ID': '""',
  'process.env.NEXT_RUNTIME': '""',
  'process.env.NEXT_SUPPORTS_IMMUTABLE_ASSETS': 'false',
};
