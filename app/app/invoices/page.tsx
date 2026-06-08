import { buildRecoverySummary, sampleInvoices, sampleTemplates } from '../../../lib/product';

const summary = buildRecoverySummary(sampleInvoices, sampleTemplates);

export default function InvoicesPage() {
  return (
    <main className="shell page-grid">
      <section className="frame hero hero-split">
        <div>
          <p className="eyebrow">Invoices</p>
          <h1>See what is due, overdue, and already recovered.</h1>
          <p className="lead">A simple invoice board for freelancers who want a clear path from unpaid to paid.</p>
        </div>
        <aside className="hero-aside card">
          <p className="kicker">Board summary</p>
          <p className="muted">{summary.nextBestAction}</p>
          <div className="badge-row">
            <span className="badge">{summary.overdueCount} overdue</span>
            <span className="badge">{summary.activeReminders} active</span>
          </div>
        </aside>
      </section>

      <section className="card table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Project</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Days past due</th>
            </tr>
          </thead>
          <tbody>
            {sampleInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <strong>{invoice.client}</strong>
                </td>
                <td>{invoice.project}</td>
                <td>${invoice.amount.toLocaleString('en-US')}</td>
                <td>
                  <span className={`badge badge-${invoice.status}`}>{invoice.status}</span>
                </td>
                <td>{invoice.daysPastDue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
