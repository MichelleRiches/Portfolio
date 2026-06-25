# Environment and indexing notes

This project intentionally prevents search engine indexing by including `public/robots.txt` with `Disallow: /`.

Notes:

- `robots.txt` is a request to crawlers and may be ignored by some bots.
- For stronger protection, consider restricting access at the host (Vercel) level or using authentication.
- No repository secrets are required for the default no-indexing setup.

If you'd like an automated CI check that verifies Vercel project settings (requires a `VERCEL_TOKEN`), tell me and I can add an optional workflow that uses the Vercel API to confirm the project's environment and settings.
