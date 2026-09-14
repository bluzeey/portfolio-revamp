import { bookingUrl } from "@/data/site";
import { ArrowUpRight, MailIcon } from "./Icons";

export function ConversationCta() {
  return (
    <aside className="article-cta shell narrow-shell" aria-labelledby="article-conversation-title">
      <p className="section-kicker">Continue the conversation</p>
      <h2 id="article-conversation-title">Have an AI workflow worth untangling?</h2>
      <p>
        If your team is moving context by hand or deciding where AI could genuinely help, I would be glad to compare notes.
      </p>
      <div className="cta-actions">
        <a className="button button-accent" href={bookingUrl} rel="noreferrer" target="_blank">
          Book a demo <ArrowUpRight />
        </a>
        <a className="button button-primary" href="mailto:sahilm1711@gmail.com">
          <MailIcon /> Email me
        </a>
      </div>
    </aside>
  );
}
