import Link from "next/link";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/#about" }
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Sahil Maheshwari, home">
          <span className="wordmark-mark" aria-hidden="true">SM</span>
          <span className="wordmark-name">Sahil Maheshwari</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <a className="header-cta" href="mailto:sahilm1711@gmail.com">
          Start a conversation
        </a>
      </div>
    </header>
  );
}
