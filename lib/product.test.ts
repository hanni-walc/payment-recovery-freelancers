import { describe, expect, it } from 'vitest';
import {
  buildRecoverySummary,
  buildReminderSequence,
  buildInvoiceToneGuide,
  sampleInvoices,
  sampleTemplates,
  sampleRecoverySettings,
} from './product';

describe('buildReminderSequence', () => {
  it('prioritizes overdue invoices and keeps tone polite', () => {
    const sequence = buildReminderSequence(sampleInvoices, sampleRecoverySettings);

    expect(sequence[0].invoiceId).toBe('inv-104');
    expect(sequence[0].message).toContain('friendly');
    expect(sequence[0].delayDays).toBe(1);
  });
});

describe('buildRecoverySummary', () => {
  it('summarizes the recovery pipeline into a client-ready dashboard', () => {
    const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);

    expect(summary.overdueCount).toBeGreaterThan(0);
    expect(summary.recoveredAmount).toBeGreaterThan(0);
    expect(summary.nextBestAction).toContain('follow-up');
  });
});

describe('buildInvoiceToneGuide', () => {
  it('turns the brand style into reminder guidance', () => {
    const guide = buildInvoiceToneGuide(sampleRecoverySettings);

    expect(guide.subject).toContain('Payment reminder');
    expect(guide.body).toContain('respectful');
    expect(guide.cta).toContain('pay now');
  });
});
