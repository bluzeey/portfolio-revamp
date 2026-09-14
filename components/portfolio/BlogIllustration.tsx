import type { ReactElement } from "react";
import type { PostMeta } from "@/lib/posts";

type IllustrationVariant = "workflow" | "judgment" | "memory" | "craft" | "future";

type BlogIllustrationProps = {
  post: Pick<PostMeta, "slug" | "title" | "tags">;
  compact?: boolean;
};

const illustrationDescriptions: Record<IllustrationVariant, string> = {
  workflow: "A visual flow connecting information, intelligence, review, and action",
  judgment: "A person reviewing evidence prepared by an AI system",
  memory: "Connected ideas moving through context and time",
  craft: "Technical skill connected with communication, learning, and product judgment",
  future: "Several layers of software preserving context around a useful outcome"
};

function resolveVariant(post: BlogIllustrationProps["post"]): IllustrationVariant {
  const subject = `${post.slug} ${post.title} ${post.tags.join(" ")}`.toLowerCase();

  if (/judgment|claim|insurance|review|approval/.test(subject)) return "judgment";
  if (/memory|knowledge|context|retrieval|graph/.test(subject)) return "memory";
  if (/engineer|career|communication|learning|marketing/.test(subject)) return "craft";
  if (/workflow|agent|automation|ai will/.test(subject)) return "workflow";
  return "future";
}

function WorkflowIllustration() {
  return (
    <g>
      <path className="visual-grid-line" d="M0 92H960M0 220H960M0 348H960M160 0v440M480 0v440M800 0v440" />
      <path className="visual-line" d="M210 128C325 128 330 220 438 220M210 220h228M210 312c115 0 120-92 228-92M522 220h160" />
      <g className="visual-source">
        <rect x="88" y="91" width="122" height="74" rx="10" />
        <path d="M112 115h46M112 130h72M112 145h58" />
        <rect x="88" y="183" width="122" height="74" rx="10" />
        <path d="M112 207h72M112 222h42M112 237h61" />
        <rect x="88" y="275" width="122" height="74" rx="10" />
        <path d="M112 299h54M112 314h72M112 329h38" />
      </g>
      <g className="visual-core">
        <rect x="438" y="178" width="84" height="84" rx="22" />
        <path d="M480 198c3 14 8 19 22 22-14 3-19 8-22 22-3-14-8-19-22-22 14-3 19-8 22-22Z" />
      </g>
      <g className="visual-output">
        <rect x="682" y="154" width="190" height="132" rx="14" />
        <circle cx="718" cy="190" r="12" />
        <path d="m712 190 5 5 9-11M746 182h91M746 198h68M710 232h126M710 250h94" />
      </g>
      <circle className="visual-pulse" cx="601" cy="220" r="8" />
    </g>
  );
}

function JudgmentIllustration() {
  return (
    <g>
      <path className="visual-grid-line" d="M0 110H960M0 330H960M240 0v440M720 0v440" />
      <g className="visual-source">
        <rect x="82" y="112" width="178" height="216" rx="14" />
        <path d="M116 153h109M116 177h76M116 221h109M116 245h91M116 289h62" />
        <circle cx="226" cy="289" r="10" />
      </g>
      <path className="visual-line" d="M260 220h125M575 220h100" />
      <g className="visual-core">
        <circle cx="480" cy="220" r="95" />
        <path d="M480 160c4 21 12 29 33 33-21 4-29 12-33 33-4-21-12-29-33-33 21-4 29-12 33-33Z" />
        <path d="M437 255h86" />
      </g>
      <g className="visual-review">
        <circle cx="758" cy="163" r="40" />
        <path d="M700 304c5-58 25-87 58-87s53 29 58 87" />
        <rect x="675" y="137" width="166" height="190" rx="18" />
        <path d="m728 266 19 19 44-49" />
      </g>
      <circle className="visual-pulse" cx="625" cy="220" r="8" />
    </g>
  );
}

function MemoryIllustration() {
  return (
    <g>
      <path className="visual-grid-line" d="M0 88H960M0 220H960M0 352H960M192 0v440M480 0v440M768 0v440" />
      <path className="visual-line" d="M127 286 256 139l161 90 132-126 142 119 141-83M127 286l290-57 132 108 142-115 141 79M256 139l161 90M549 103v234" />
      <g className="visual-node-small">
        <circle cx="127" cy="286" r="20" />
        <circle cx="256" cy="139" r="28" />
        <circle cx="549" cy="103" r="22" />
        <circle cx="549" cy="337" r="26" />
        <circle cx="691" cy="222" r="22" />
        <circle cx="832" cy="139" r="18" />
        <circle cx="832" cy="301" r="25" />
      </g>
      <g className="visual-core">
        <circle cx="417" cy="229" r="54" />
        <circle cx="417" cy="229" r="13" />
      </g>
      <circle className="visual-pulse" cx="691" cy="222" r="9" />
    </g>
  );
}

function CraftIllustration() {
  return (
    <g>
      <path className="visual-grid-line" d="M0 88H960M0 352H960M180 0v440M480 0v440M780 0v440" />
      <path className="visual-orbit" d="M480 77c153 0 277 64 277 143S633 363 480 363 203 299 203 220 327 77 480 77Z" />
      <path className="visual-line" d="M480 168V99M424 220H282M536 220h142M480 272v70" />
      <g className="visual-module">
        <rect x="404" y="70" width="152" height="58" rx="14" />
        <path d="m438 99 14-13m-14 13 14 13m66-26 14 13-14 13M477 113l12-28" />
        <rect x="178" y="184" width="142" height="72" rx="14" />
        <path d="M213 213h72M213 231h49" />
        <rect x="640" y="184" width="142" height="72" rx="14" />
        <circle cx="681" cy="220" r="14" />
        <path d="M706 213h41M706 229h28" />
        <rect x="404" y="312" width="152" height="58" rx="14" />
        <path d="M438 341h28l14-15 17 27 14-12h13" />
      </g>
      <g className="visual-review">
        <circle cx="480" cy="220" r="52" />
        <circle cx="480" cy="203" r="15" />
        <path d="M448 250c4-22 15-33 32-33s28 11 32 33" />
      </g>
      <circle className="visual-pulse" cx="480" cy="342" r="8" />
    </g>
  );
}

function FutureIllustration() {
  return (
    <g>
      <path className="visual-grid-line" d="M0 104H960M0 336H960M160 0v440M480 0v440M800 0v440" />
      <g className="visual-layer visual-layer-back">
        <rect x="154" y="92" width="486" height="256" rx="20" />
        <circle cx="190" cy="126" r="6" />
        <circle cx="212" cy="126" r="6" />
        <circle cx="234" cy="126" r="6" />
      </g>
      <g className="visual-layer visual-layer-middle">
        <rect x="241" y="123" width="486" height="256" rx="20" />
        <path d="M284 177h128M284 207h84M284 281h174M284 311h122" />
      </g>
      <g className="visual-layer visual-layer-front">
        <rect x="338" y="65" width="468" height="256" rx="20" />
        <path d="M386 112h96M386 139h61" />
        <circle cx="662" cy="193" r="72" />
        <path d="M624 194h76M662 156v76" />
      </g>
      <circle className="visual-pulse" cx="662" cy="193" r="12" />
    </g>
  );
}

const illustrations: Record<IllustrationVariant, () => ReactElement> = {
  workflow: WorkflowIllustration,
  judgment: JudgmentIllustration,
  memory: MemoryIllustration,
  craft: CraftIllustration,
  future: FutureIllustration
};

export function BlogIllustration({ post, compact = false }: BlogIllustrationProps) {
  const variant = resolveVariant(post);
  const Illustration = illustrations[variant];

  return (
    <figure className={`blog-illustration blog-illustration-${variant}${compact ? " blog-illustration-compact" : ""}`}>
      <svg
        aria-label={illustrationDescriptions[variant]}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        viewBox="0 0 960 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className="visual-backdrop" width="960" height="440" rx="20" />
        <Illustration />
      </svg>
    </figure>
  );
}
