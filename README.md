# Payment Recovery for Freelancers

Repo: `payment-recovery-freelancers`

## One-line pitch
Automate polite payment reminders that recover money without manual chasing.

## Buyer
consultants, freelancers, small service businesses

## Pain
Late invoices and awkward follow-ups hurt cash flow.

## Monetization
Subscription with a premium recovered-payment tier.

## Differentiator
Tone-controlled reminder sequences that feel human, not spammy.

## What ships in v1
- Import invoices
- Schedule reminders
- Send payment links
- Track outcomes
- Respectful template presets
- Mobile-friendly dashboard

## Screens
- Invoice dashboard
- Reminder sequence editor
- Overdue queue
- Invoice detail
- Email template library
- Settings

## Routes
- `/`
- `/login`
- `/app`
- `/app/invoices`
- `/app/reminders`
- `/app/templates`
- `/app/settings`

## Deployment
Vercel, Supabase/Neon, Stripe billing, Resend email, S3 for invoice attachments.

## Launch checklist
- Write copy focused on getting paid faster
- Add a simple setup wizard
- Include example reminder sequences

## v2
- SMS reminders
- Client portal
- Partial payment plans
- Invoice reconciliation

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
