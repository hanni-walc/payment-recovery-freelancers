import { withBasePath } from "@/lib/site-path";
export default function LoginPage() {
  return (
    <main className="shell page-grid login-grid">
      <section className="frame hero">
        <p className="eyebrow">Sign in</p>
        <h1>Enter the payment recovery workspace.</h1>
        <p className="lead">Manage invoices, reminders, and templates from one simple login flow.</p>
      </section>

      <section className="card">
        <form className="form-grid">
          <label className="field">
            <span className="kicker">Email</span>
            <input className="input" type="email" placeholder="you@studio.com" />
          </label>
          <label className="field">
            <span className="kicker">Password</span>
            <input className="input" placeholder="••••••••" type="password" />
          </label>
          <div className="row">
            <button className="button" type="button">
              Continue
            </button>
            <a className="ghost" href={withBasePath('/')}>
              Back to home
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
