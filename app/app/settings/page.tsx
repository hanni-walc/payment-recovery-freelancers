import { sampleRecoverySettings } from '../../../lib/product';

export default function SettingsPage() {
  return (
    <main className="shell page-grid">
      <section className="frame hero">
        <p className="eyebrow">Settings</p>
        <h1>Set a tone that fits your brand.</h1>
        <p className="lead">Keep reminders respectful and on-brand while still getting invoices paid faster.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Default tone</p>
          <h2>{sampleRecoverySettings.tone}</h2>
          <p className="muted">Default delay: {sampleRecoverySettings.defaultDelayDays} day</p>
        </article>
        <article className="card">
          <p className="kicker">CTA</p>
          <h2>{sampleRecoverySettings.payNowCta}</h2>
          <p className="muted">Currency: {sampleRecoverySettings.currency}</p>
        </article>
      </section>

      <section className="card">
        <p className="kicker">Recommended setup</p>
        <ul className="list">
          <li>Start with friendly reminders and escalate only if the invoice remains unpaid.</li>
          <li>Use a clear pay-now link in every reminder.</li>
          <li>Keep the brand voice consistent across email and dashboard copy.</li>
        </ul>
      </section>
    </main>
  );
}
