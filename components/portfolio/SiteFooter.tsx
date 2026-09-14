import Link from "next/link";
import { socials } from "@/data/site";
import { ArrowUpRight } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="wordmark" href="/">
            <span className="wordmark-name">Sahil Maheshwari</span>
          </Link>
          <p className="footer-note">Building tools for clearer thought and better decisions.</p>
        </div>

        <div className="footer-links">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}<ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Sahil Maheshwari</span>
        <span>Bangalore, India</span>
      </div>
    </footer>
  );
}
