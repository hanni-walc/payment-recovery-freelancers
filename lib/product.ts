export const TITLE = "Payment Recovery for Freelancers";
export const PROMISE = "Automate polite payment reminders that recover money without manual chasing.";
export const BUYER = "consultants, freelancers, small service businesses";
export const PAIN = "Late invoices and awkward follow-ups hurt cash flow.";
export const PRICING = "Subscription with a premium recovered-payment tier.";
export const WEDGE = "Tone-controlled reminder sequences that feel human, not spammy.";
export const DEPLOY = "Vercel, Supabase/Neon, Stripe billing, Resend email, S3 for invoice attachments.";
export const MVP = [
  "Import invoices",
  "Schedule reminders",
  "Send payment links",
  "Track outcomes",
  "Respectful template presets",
  "Mobile-friendly dashboard"
];
export const SCREENS = [
  "Invoice dashboard",
  "Reminder sequence editor",
  "Overdue queue",
  "Invoice detail",
  "Email template library",
  "Settings"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/invoices",
  "/app/reminders",
  "/app/templates",
  "/app/settings"
];
export const LAUNCH = [
  "Write copy focused on getting paid faster",
  "Add a simple setup wizard",
  "Include example reminder sequences"
];
export const V2 = [
  "SMS reminders",
  "Client portal",
  "Partial payment plans",
  "Invoice reconciliation"
];
export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
