# Portfolio Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Contact Form Setup

This project uses [Formspree](https://formspree.io/) for the contact form (free tier: 50 submissions/month).

To set up your own form endpoint:

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and get your endpoint URL
3. Replace the endpoint in `src/app/components/ContactSection.tsx`:
   ```typescript
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
   ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment Options

### 1. Vercel (Recommended - Free)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Custom Domain Setup:**
1. Deploy to Vercel
2. Go to your project dashboard → Settings → Domains
3. Add your custom domain
4. Update your domain's DNS settings with Vercel's instructions

### 2. Netlify (Free)

**Deploy to Netlify:**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

**Custom Domain Setup:**
1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Update DNS settings as instructed

### 3. Railway (Free tier)

**Deploy to Railway:**
1. Connect your GitHub repository
2. Railway will auto-detect Next.js
3. Deploy automatically

### 4. Self-Hosted (VPS/Dedicated Server)

**Build and Deploy:**
```bash
# Build the project
npm run build

# Start production server
npm start
```

**Custom Domain Setup:**
1. Point your domain's A record to your server IP
2. Set up Nginx/Apache as reverse proxy
3. Configure SSL with Let's Encrypt

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
