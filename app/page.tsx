import Link from 'next/link';
import {
  BUYER,
  DEPLOY,
  LAUNCH,
  PROMISE,
  V2,
  buildRecoveryPlan,
  buildRecoverySummary,
  buildReminderSequence,
  sampleInvoices,
  sampleRecoverySettings,
  sampleTemplates,
} from '../lib/product';
import { withBasePath } from "@/lib/site-path";

const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);
const reminders = buildReminderSequence(sampleInvoices, sampleRecoverySettings);
const recoveryPlan = buildRecoveryPlan(sampleInvoices, sampleRecoverySettings);

export default function HomePage() {
  return (
    <main className="shell page-grid">
      <section className="frame hero hero-split">
        <div>
          <p className="eyebrow">Payment recovery for freelancers</p>
          <h1>{PROMISE}</h1>
          <p className="lead">
            A polished billing workflow for {BUYER} who want to recover late payments, keep reminders human,
            and move cash flow forward without manual chasing.
          </p>
          <div className="row">
            <Link className="button" href={withBasePath('/app')}>
              Open dashboard
            </Link>
            <Link className="ghost" href={withBasePath('/app/reminders')}>
              Preview reminders
            </Link>
          </div>
        </div>

        <aside className="hero-aside card">
          <p className="kicker">Live product slice</p>
          <h2>{summary.nextBestAction}</h2>
          <p className="muted">Deploy-ready stack: {DEPLOY}</p>
          <div className="badge-row">
            {V2.slice(0, 3).map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
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
          <strong>{recoveryPlan.length}</strong>
          <span className="muted">items in the recovery plan</span>
        </div>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Recovery plan</p>
          <div className="stack">
            {recoveryPlan.map((step) => (
              <div key={step.invoiceId} className="mini-card">
                <div className="row between">
                  <strong>{step.client}</strong>
                  <span className={`badge badge-${step.priority}`}>{step.priority}</span>
                </div>
                <p className="muted">{step.recommendedAction}</p>
                <div className="row between compact">
                  <span className="muted">Next touchpoint: {step.nextTouchpoint}</span>
                  <span className="muted">Due now: ${step.estimatedRecoveryValue}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="card">
          <p className="kicker">Launch checklist</p>
          <ul className="list">
            {LAUNCH.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="kicker" style={{ marginTop: 20 }}>
            What ships in v1
          </p>
          <div className="badge-row">
            {V2.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Reminder sequence</p>
          <div className="stack">
            {reminders.map((step) => (
              <div key={step.invoiceId} className="mini-card">
                <div className="row between">
                  <strong>{step.client}</strong>
                  <span className="badge">day {step.delayDays}</span>
                </div>
                <p className="muted">{step.message}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="card">
          <p className="kicker">Business result</p>
          <h2>Close the loop with less friction.</h2>
          <p className="muted">
            The dashboard, invoice board, reminder editor, and settings pages give freelancers one workflow for
            getting paid faster while keeping the client relationship intact.
          </p>
          <div className="row">
            <Link className="button" href={withBasePath('/app/invoices')}>
              Review invoices
            </Link>
            <Link className="ghost" href={withBasePath('/app/templates')}>
              Browse templates
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
