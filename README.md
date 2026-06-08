# Payment Recovery for Freelancers

A polished Next.js product slice for freelancers and small service businesses who need to recover overdue payments without sounding robotic.

## What it does
- Prioritizes overdue invoices by urgency and value
- Generates polite reminder sequences
- Surfaces the best next action for recovery work
- Shows a responsive dashboard, invoices board, reminder library, templates, settings, and login flow
- Exposes a `/api/health` route for deployment checks

## Stack
- Next.js 15
- React 19
- TypeScript
- Vitest
- ESLint

## Local development
```bash
pnpm install
pnpm dev
```

## Scripts
- `pnpm dev` — start the app locally
- `pnpm test` — run the business-logic tests
- `pnpm run lint` — run ESLint
- `pnpm run build` — production build
- `pnpm run typecheck` — TypeScript check only

## Environment variables
Copy `.env.example` to `.env.local` and add your provider keys.

Required for a real deployment:
- `NEXT_PUBLIC_APP_URL`
- `DATABASE_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `S3_BUCKET`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`

## Product slice included in this repo
- Marketing home page
- App dashboard
- Invoice board
- Reminder sequence view
- Template library
- Settings page
- Login page
- Health endpoint

## Deployment notes
- Works well on Vercel
- Add your production environment variables before deployment
- Use the health route for uptime checks

## Verification
Run this before shipping:
```bash
pnpm test
pnpm run lint
pnpm run build
```
