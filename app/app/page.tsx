import { buildRecoverySummary, buildReminderSequence, sampleInvoices, sampleRecoverySettings, sampleTemplates } from '../../lib/product';

const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);
const sequence = buildReminderSequence(sampleInvoices, sampleRecoverySettings);

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Get paid without chasing people all day.</h1>
        <p className="lead">Track overdue invoices, review reminder drafts, and keep the sequence moving from one clean workspace.</p>
        <div className="row">
          <a className="button" href="/app/invoices">Review invoices</a>
          <a className="ghost" href="/app/reminders">Open reminders</a>
        </div>
      </section>

      <section className="stats">
        <div className="stat"><strong>{summary.overdueCount}</strong><span className="muted">overdue invoices</span></div>
        <div className="stat"><strong>{summary.activeReminders}</strong><span className="muted">active reminders</span></div>
        <div className="stat"><strong>${summary.recoveredAmount}</strong><span className="muted">recovered so far</span></div>
        <div className="stat"><strong>{sequence.length}</strong><span className="muted">sequence steps</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>{summary.nextBestAction}</h2>
        </article>
        <article className="card">
          <p className="kicker">Status</p>
          <ul className="list">
            <li>Friendly, firm, and final presets available.</li>
            <li>All reminders stay readable on mobile.</li>
            <li>Payment links are surfaced at the right moment.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
