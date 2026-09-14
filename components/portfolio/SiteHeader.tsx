import Link from "next/link";
import { bookingUrl, resumeUrl } from "@/data/site";
import { ArrowUpRight } from "./Icons";

type NavigationItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: resumeUrl, newTab: true }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Sahil Maheshwari, home">
          <span className="wordmark-name">Sahil Maheshwari</span>
          <span className="wordmark-role">AI developer</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            item.newTab ? (
              <a key={item.href} href={item.href} rel="noreferrer" target="_blank">{item.label}</a>
            ) : (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            )
          ))}
        </nav>

        <a className="header-cta" href={bookingUrl} rel="noreferrer" target="_blank">
          Book a demo <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
