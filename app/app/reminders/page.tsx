import { buildInvoiceToneGuide, buildReminderSequence, sampleInvoices, sampleRecoverySettings } from '../../../lib/product';

const sequence = buildReminderSequence(sampleInvoices, sampleRecoverySettings);
const guide = buildInvoiceToneGuide(sampleRecoverySettings);

export default function RemindersPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Reminder sequences</p>
        <h1>Polite reminders with a real recovery strategy behind them.</h1>
        <p className="lead">Use this page to review what gets sent, when it goes out, and how the tone stays human.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Tone guide</p>
          <h2>{guide.subject}</h2>
          <p className="muted">{guide.body}</p>
          <p className="muted">CTA: {guide.cta}</p>
        </article>
        <article className="card">
          <p className="kicker">Sequence</p>
          <ul className="list">
            {sequence.map((step) => (
              <li key={step.invoiceId}>{step.client} · day {step.delayDays} · {step.message}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
