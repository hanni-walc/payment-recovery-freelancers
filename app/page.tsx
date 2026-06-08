import { BUYER, LAUNCH, PROMISE, WEDGE, V2, buildInvoiceToneGuide, buildRecoverySummary, buildReminderSequence, sampleInvoices, sampleRecoverySettings, sampleTemplates } from '../lib/product';

const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);
const toneGuide = buildInvoiceToneGuide(sampleRecoverySettings);
const reminders = buildReminderSequence(sampleInvoices, sampleRecoverySettings);

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Payment Recovery for Freelancers</p>
        <h1>{PROMISE}</h1>
        <p className="lead">{WEDGE} Built for {BUYER} who want more cash back in the bank and fewer awkward follow-ups.</p>
        <div className="row">
          <a className="button" href="/app">Open dashboard</a>
          <a className="ghost" href="/app/reminders">Preview reminders</a>
        </div>
      </section>

      <section className="grid cols-3">
        <article className="card"><p className="kicker">Overdue</p><h2>{summary.overdueCount}</h2><p className="muted">Invoices that still need a friendly nudge.</p></article>
        <article className="card"><p className="kicker">Recovered</p><h2>${summary.recoveredAmount}</h2><p className="muted">Paid invoices already saved by the workflow.</p></article>
        <article className="card"><p className="kicker">Active</p><h2>{summary.activeReminders}</h2><p className="muted">Reminder threads ready to send.</p></article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Why teams buy</p>
          <ul className="list">
            <li>Recover late payments without sounding robotic.</li>
            <li>Keep reminders sequenced and visible on mobile.</li>
            <li>Use tone presets that still sound like a human wrote them.</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Launch checklist</p>
          <ul className="list">{LAUNCH.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Tone guide</p>
          <h2>{toneGuide.subject}</h2>
          <p className="muted">{toneGuide.body}</p>
          <p className="muted">CTA: {toneGuide.cta}</p>
        </article>
        <article className="card">
          <p className="kicker">Sequence preview</p>
          <div>{reminders.map((step) => <span key={step.invoiceId} className="pill">{step.client}: {step.message}</span>)}</div>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">What ships in v1</p>
          <div>{V2.map((item) => <span key={item} className="pill">{item}</span>)}</div>
        </article>
        <article className="card">
          <p className="kicker">Next best action</p>
          <p className="muted">{summary.nextBestAction}</p>
        </article>
      </section>
    </main>
  );
}
