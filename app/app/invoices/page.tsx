import { sampleInvoices } from '../../../lib/product';

export default function InvoicesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Invoices</p>
        <h1>See what is due, overdue, and already recovered.</h1>
        <p className="lead">A simple invoice board for freelancers who want a clear path from unpaid to paid.</p>
      </section>

      <section className="card">
        <table className="table">
          <thead>
            <tr><th>Client</th><th>Project</th><th>Amount</th><th>Status</th><th>Days past due</th></tr>
          </thead>
          <tbody>
            {sampleInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td><strong>{invoice.client}</strong></td>
                <td>{invoice.project}</td>
                <td>${invoice.amount}</td>
                <td>{invoice.status}</td>
                <td>{invoice.daysPastDue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
