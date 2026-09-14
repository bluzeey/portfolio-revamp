import Link from "next/link";
import { ArrowUpRight } from "./Icons";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/#about" }
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Sahil Maheshwari, home">
          <span className="wordmark-name">Sahil Maheshwari</span>
          <span className="wordmark-role">Product engineer</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <a className="header-cta" href="mailto:sahilm1711@gmail.com">
          Email <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
