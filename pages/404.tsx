import Link from "next/link";
import { ArrowLeft } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { Seo } from "@/components/portfolio/Seo";

export default function NotFound() {
  return (
    <PageShell>
      <Seo title="Page not found | Sahil Maheshwari" path="/404" />
      <section className="not-found shell narrow-shell">
        <span className="not-found-code">404</span>
        <h1>This thread ends here.</h1>
        <p>The page may have moved, or the link may be pointing to an older version of the portfolio.</p>
        <Link className="button button-primary" href="/"><ArrowLeft /> Back home</Link>
      </section>
    </PageShell>
  );
}
