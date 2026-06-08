import { sampleTemplates } from '../../../lib/product';

export default function TemplatesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Templates</p>
        <h1>Choose the right tone for the right invoice.</h1>
        <p className="lead">The template library keeps the follow-up human while still making payment feel urgent enough to act on.</p>
      </section>

      <section className="grid cols-2">
        {sampleTemplates.map((template) => (
          <article key={template.name} className="card">
            <p className="kicker">{template.tone}</p>
            <h2>{template.name}</h2>
            <p className="muted">{template.subject}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
