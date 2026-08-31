# Core AI Solutions

Production website for Core AI Solutions, an engineering house in Lagos building software, AI, and payment infrastructure.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Contact email

The site sends enquiries to `info@coreaisolutions.tech` over Hostinger SMTP (port 465, SSL). Copy `.env.example` to `.env.local` for development, and set the same values in Vercel for production.

Create the mailbox in Hostinger Email first, then use that password as `SMTP_PASS`. The domain already has MX, SPF, DKIM, DMARC, autodiscover, and autoconfig pointed at Hostinger.
