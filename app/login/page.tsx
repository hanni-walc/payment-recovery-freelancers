export default function LoginPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Sign in</p>
        <h1>Enter the payment recovery workspace.</h1>
        <p className="lead">Manage invoices, reminders, and templates from one simple login flow.</p>
      </section>

      <section className="card">
        <div className="grid cols-2">
          <label className="card" style={{ padding: 16 }}>
            <p className="kicker">Email</p>
            <input className="input" placeholder="you@studio.com" />
          </label>
          <label className="card" style={{ padding: 16 }}>
            <p className="kicker">Password</p>
            <input className="input" placeholder="••••••••" type="password" />
          </label>
        </div>
        <div className="row" style={{ marginTop: 16 }}>
          <a className="button" href="/app">Continue</a>
          <a className="ghost" href="/">Back to home</a>
        </div>
      </section>
    </main>
  );
}
