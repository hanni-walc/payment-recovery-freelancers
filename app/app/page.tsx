import Link from 'next/link';
import { buildRecoveryPlan, buildRecoverySummary, buildReminderSequence, sampleInvoices, sampleRecoverySettings, sampleTemplates } from '../../lib/product';
import { withBasePath } from "@/lib/site-path";

const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);
const sequence = buildReminderSequence(sampleInvoices, sampleRecoverySettings);
const recoveryPlan = buildRecoveryPlan(sampleInvoices, sampleRecoverySettings);

export default function DashboardPage() {
  return (
    <main className="shell page-grid">
      <section className="frame hero hero-split">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Get paid without chasing people all day.</h1>
          <p className="lead">Track overdue invoices, review reminder drafts, and keep the recovery queue moving from one clean workspace.</p>
          <div className="row">
            <Link className="button" href={withBasePath('/app/invoices')}>
              Review invoices
            </Link>
            <Link className="ghost" href={withBasePath('/app/reminders')}>
              Open reminders
            </Link>
          </div>
        </div>

        <aside className="hero-aside card">
          <p className="kicker">Today’s focus</p>
          <h2>{summary.nextBestAction}</h2>
          <p className="muted">Priority order is driven by overdue age, due date risk, and invoice value.</p>
        </aside>
      </section>

      <section className="stats">
        <div className="stat">
          <strong>{summary.overdueCount}</strong>
          <span className="muted">overdue invoices</span>
        </div>
        <div className="stat">
          <strong>{summary.activeReminders}</strong>
          <span className="muted">active reminders</span>
        </div>
        <div className="stat">
          <strong>${summary.recoveredAmount}</strong>
          <span className="muted">recovered so far</span>
        </div>
        <div className="stat">
          <strong>{sequence.length}</strong>
          <span className="muted">sequence steps</span>
        </div>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Recovery queue</p>
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
