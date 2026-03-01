# SEO and Deployment Configuration Checklist

This repository now includes the on-site SEO files required for GitHub Pages indexing (`CNAME`, `robots.txt`, `sitemap.xml`, canonical and social meta tags in `index.html`).

## 1) GitHub Pages settings (repository settings)
- **Custom domain** must be set to: `freelanguagedetect.in`
- **Enforce HTTPS** must stay enabled.

## 2) DNS settings at your domain provider
Create or keep these exact records for the apex (`@`):

- `A 185.199.108.153`
- `A 185.199.109.153`
- `A 185.199.110.153`
- `A 185.199.111.153`

Optional `www` host:

- `CNAME www -> deepakrai845101-cell.github.io`

Remove conflicting records for `@` or `www` (duplicate A/CNAME entries pointing elsewhere).

## 3) Canonical redirect goal
After DNS and Pages settings propagate, requests should resolve to a single canonical URL:

- `https://freelanguagedetect.in/`

Expected behavior:
- `http://freelanguagedetect.in` -> 301 -> `https://freelanguagedetect.in/`
- `http://www.freelanguagedetect.in` -> 301 -> `https://freelanguagedetect.in/`
- `https://www.freelanguagedetect.in` -> 301 -> `https://freelanguagedetect.in/`
- Canonical URL returns `200 OK`

## 4) Google Search Console
Use **Domain Property** for `freelanguagedetect.in`, then:
- Inspect only `https://freelanguagedetect.in/`
- Submit sitemap: `https://freelanguagedetect.in/sitemap.xml`
- Request indexing for homepage after deployment
