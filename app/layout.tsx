import Link from 'next/link';
import './globals.css';
import { PROMISE, ROUTES, TITLE } from '../lib/product';

export const metadata = {
  title: {
    default: TITLE,
    template: `%s · ${TITLE}`,
  },
  description: PROMISE,
};

const navItems = [
  { href: '/app', label: 'Dashboard' },
  { href: '/app/invoices', label: 'Invoices' },
  { href: '/app/reminders', label: 'Reminders' },
  { href: '/app/templates', label: 'Templates' },
  { href: '/app/settings', label: 'Settings' },
  { href: '/login', label: 'Login' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <Link className="brand" href="/">
              <span className="brand-mark">PR</span>
              <span>
                <strong>{TITLE}</strong>
                <small>Recover payments with better follow-ups</small>
              </span>
            </Link>
            <nav className="nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          {children}

          <footer className="footer">
            <p className="muted">Built for {ROUTES.length} polished routes and a fast, deployable product slice.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
