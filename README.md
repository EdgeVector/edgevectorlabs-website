# edgevectorlabs-website

Domain shell for **edgevectorlabs.com** (Edge Vector Labs LLC).

**Current prod behavior (2026-07-20):** all traffic on `edgevectorlabs.com`
and `www.edgevectorlabs.com` permanently redirects to
[edgevector.org](https://edgevector.org). Configured in `vercel.json` so the
Labs domain stays live for Stripe/bank/legal references without a separate
marketing site.

The Vite + React app under `src/` remains as a ready-to-restore corporate
site when Labs needs its own pages again.

```bash
npm install
npm run dev      # local dev (Labs site UI)
npm run build    # production build → dist/
```

Deploy: Vercel project `edgevectorlabs-website` (domains edgevectorlabs.com + www).
