export type Invoice = {
  id: string;
  client: string;
  amount: number;
  status: 'paid' | 'overdue' | 'due-soon' | 'draft';
  daysPastDue: number;
  project: string;
};

export type RecoverySettings = {
  tone: 'friendly' | 'firm' | 'final';
  defaultDelayDays: number;
  currency: string;
  payNowCta: string;
};

export type ReminderStep = {
  invoiceId: string;
  client: string;
  delayDays: number;
  message: string;
};

export type RecoverySummary = {
  overdueCount: number;
  recoveredAmount: number;
  nextBestAction: string;
  activeReminders: number;
};

export type ToneGuide = {
  subject: string;
  body: string;
  cta: string;
};

export const TITLE = 'Payment Recovery for Freelancers';
export const PROMISE = 'Automate polite payment reminders that recover money without manual chasing.';
export const BUYER = 'consultants, freelancers, small service businesses';
export const PAIN = 'Late invoices and awkward follow-ups hurt cash flow.';
export const PRICING = 'Subscription with a premium recovered-payment tier.';
export const WEDGE = 'Tone-controlled reminder sequences that feel human, not spammy.';
export const DEPLOY = 'Vercel, Supabase/Neon, Stripe billing, Resend email, S3 for invoice attachments.';
export const MVP = [
  'Import invoices',
  'Schedule reminders',
  'Send payment links',
  'Track outcomes',
  'Respectful template presets',
  'Mobile-friendly dashboard',
];
export const SCREENS = [
  'Invoice dashboard',
  'Reminder sequence editor',
  'Overdue queue',
  'Invoice detail',
  'Email template library',
  'Settings',
];
export const ROUTES = ['/', '/login', '/app', '/app/invoices', '/app/reminders', '/app/templates', '/app/settings'];
export const LAUNCH = ['Write copy focused on getting paid faster', 'Add a simple setup wizard', 'Include example reminder sequences'];
export const V2 = ['SMS reminders', 'Client portal', 'Partial payment plans', 'Invoice reconciliation'];

export const sampleRecoverySettings: RecoverySettings = {
  tone: 'friendly',
  defaultDelayDays: 1,
  currency: '$',
  payNowCta: 'Pay now',
};

export const sampleInvoices: Invoice[] = [
  { id: 'inv-101', client: 'Northwind', amount: 1200, status: 'overdue', daysPastDue: 18, project: 'Brand redesign' },
  { id: 'inv-102', client: 'Acme Co', amount: 850, status: 'due-soon', daysPastDue: 0, project: 'Landing page refresh' },
  { id: 'inv-103', client: 'Studio Nine', amount: 2100, status: 'paid', daysPastDue: 0, project: 'Launch campaign' },
  { id: 'inv-104', client: 'Mira Shop', amount: 640, status: 'overdue', daysPastDue: 9, project: 'Email automation' },
];

export const sampleTemplates = [
  { name: 'Friendly nudge', tone: 'friendly', subject: 'Payment reminder for your recent invoice' },
  { name: 'Firm follow-up', tone: 'firm', subject: 'Second reminder: invoice still open' },
  { name: 'Final notice', tone: 'final', subject: 'Final reminder before escalation' },
];

export function buildReminderSequence(invoices: Invoice[], settings: RecoverySettings): ReminderStep[] {
  return [...invoices]
    .filter((invoice) => invoice.status === 'overdue')
    .sort((left, right) => left.daysPastDue - right.daysPastDue || right.amount - left.amount)
    .map((invoice, index) => ({
      invoiceId: invoice.id,
      client: invoice.client,
      delayDays: settings.defaultDelayDays + index,
      message: `${settings.tone} reminder for ${invoice.client}: ${settings.payNowCta} for ${settings.currency}${invoice.amount} on ${invoice.project}.`,
    }));
}

export function buildRecoverySummary(invoices: Invoice[], templates: typeof sampleTemplates): RecoverySummary {
  const overdueCount = invoices.filter((invoice) => invoice.status === 'overdue').length;
  const recoveredAmount = invoices.filter((invoice) => invoice.status === 'paid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const activeReminders = invoices.filter((invoice) => invoice.status !== 'paid').length;

  return {
    overdueCount,
    recoveredAmount,
    activeReminders,
    nextBestAction:
      overdueCount > 0
        ? `Send a follow-up using the ${templates[0].name.toLowerCase()} template.`
        : 'No overdue invoices right now — keep the reminder sequence ready for the next due date.',
  };
}

export function buildInvoiceToneGuide(settings: RecoverySettings): ToneGuide {
  return {
    subject: `Payment reminder — ${settings.tone} tone`,
    body: `Keep the message respectful, direct, and focused on helping the client close the loop without pressure.`,
    cta: `${settings.payNowCta.toLowerCase()} and mark the invoice as paid`,
  };
}

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
  stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Vercel'],
};
