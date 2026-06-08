import { buildInvoiceToneGuide, buildRecoveryPlan, buildReminderSequence, sampleInvoices, sampleRecoverySettings } from '../../../lib/product';

const sequence = buildReminderSequence(sampleInvoices, sampleRecoverySettings);
const guide = buildInvoiceToneGuide(sampleRecoverySettings);
const recoveryPlan = buildRecoveryPlan(sampleInvoices, sampleRecoverySettings);

export default function RemindersPage() {
  return (
    <main className="shell page-grid">
      <section className="frame hero">
        <p className="eyebrow">Reminder sequences</p>
        <h1>Polite reminders with a real recovery strategy behind them.</h1>
        <p className="lead">Review what gets sent, when it goes out, and how the tone stays human while still making payment feel urgent.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Tone guide</p>
          <h2>{guide.subject}</h2>
          <p className="muted">{guide.body}</p>
          <p className="muted">CTA: {guide.cta}</p>
        </article>
        <article className="card">
          <p className="kicker">Top recovery plan items</p>
          <div className="stack">
            {recoveryPlan.map((step) => (
              <div key={step.invoiceId} className="mini-card">
                <div className="row between">
                  <strong>{step.client}</strong>
                  <span className={`badge badge-${step.priority}`}>{step.priority}</span>
                </div>
                <p className="muted">{step.recommendedAction}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="card">
        <p className="kicker">Sequence</p>
        <ul className="list">
          {sequence.map((step) => (
            <li key={step.invoiceId}>
              <strong>{step.client}</strong> · day {step.delayDays} · {step.message}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
