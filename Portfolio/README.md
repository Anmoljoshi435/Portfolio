# Anmol Joshi Portfolio

Personal portfolio built with React, TypeScript, and Vite.

## Run locally

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a repository in your GitHub account for this site. A user-site repository named `<your-username>.github.io` is the simplest choice when using a custom domain.
2. Push the complete project source to the repository's `main` branch. Do not upload only `dist`; the included GitHub Actions workflow builds the site.
3. Open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. Wait for the **Deploy portfolio to GitHub Pages** workflow to complete. GitHub shows the published URL in **Settings → Pages**.
5. Claim the `.me` domain through the GitHub Student Developer Pack offer. At your domain registrar, add the DNS records shown in GitHub Pages for your site. Add the custom domain under **Settings → Pages → Custom domain**, then enable HTTPS when it becomes available.

The workflow runs on pushes to `main` or `master` and can also be started manually in the repository's **Actions** tab. Deployments include the static assets in `public`, including project demo videos.

## Quality checks

```sh
npm run lint
npm run build
```
