# GitHub Pages Deployment Guide

This guide will help you deploy your SupportIcon website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step-by-Step Deployment Instructions

### 1. Enable GitHub Pages in Your Repository

1. Go to your repository: [https://github.com/supporticon-statergies/website](https://github.com/supporticon-statergies/website)
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Configure Repository Permissions

1. In the same **Settings** tab
2. Go to **Actions** → **General** in the left sidebar
3. Scroll down to **Workflow permissions**
4. Select **Read and write permissions**
5. Check **Allow GitHub Actions to create and approve pull requests**
6. Click **Save**

### 3. Deploy Your Website

#### Option A: Automatic Deployment (Recommended)
1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial commit for GitHub Pages deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build your project
   - Deploy it to GitHub Pages
   - Make it available at: `https://supporticon-statergies.github.io/website/`

#### Option B: Manual Build and Deploy
1. Build your project locally:
   ```bash
   npm run build:prod
   ```

2. Push to main branch:
   ```bash
   git add .
   git commit -m "Build for production"
   git push origin main
   ```

### 4. Verify Deployment

1. Go to your repository's **Actions** tab
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once complete, visit: `https://supporticon-statergies.github.io/website/`

### 5. Custom Domain (Optional)

If you want to use a custom domain:

1. In repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Add a CNAME record in your DNS provider pointing to `supporticon-statergies.github.io`

## Troubleshooting

### Common Issues

1. **Build fails**: Check the Actions tab for error logs
2. **Page not found**: Ensure the base path in `vite.config.ts` is correct
3. **Assets not loading**: Verify the build output directory is `dist`

### Manual Deployment

If GitHub Actions fails, you can manually deploy:

1. Build locally: `npm run build:prod`
2. Go to repository **Settings** → **Pages**
3. Change source to **Deploy from a branch**
4. Select `main` branch and `/docs` folder
5. Copy contents of `dist` folder to a new `docs` folder in your repository
6. Push changes

## File Structure After Deployment

```
supporticon/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Source code
├── dist/                       # Build output (auto-generated)
├── vite.config.ts             # Updated with GitHub Pages base path
├── package.json               # Updated with deploy scripts
└── DEPLOYMENT.md              # This file
```

## Important Notes

- **Base Path**: Your site will be available at `/website/` subdirectory
- **Automatic Updates**: Every push to `main` branch triggers automatic deployment
- **Build Time**: First deployment may take longer (5-10 minutes)
- **Cache**: GitHub Pages may take a few minutes to reflect changes

## Support

If you encounter issues:
1. Check the **Actions** tab for workflow errors
2. Verify repository permissions are set correctly
3. Ensure the `main` branch contains your latest code

Your website will be live at: **https://supporticon-statergies.github.io/website/**
