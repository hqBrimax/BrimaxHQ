import Link from "next/link";

export const metadata = {
  title: "About — Brimax",
  description: "Security-first builder. On-chain policy vaults, AI payment security, and Solana vulnerability research.",
};

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Brimax
          </h1>

          <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
            <p>
              Brimax is a security-first builder focused on on-chain policy vaults, AI payment security, and Solana vulnerability research.
            </p>
            <p>
              I build systems where the default is deny, the audit trail is proof, and every policy is enforced by code — not by promise. From immutable on-chain vaults with renounced upgrade authorities to TEE-attested payment security layers, the work is defined by one principle: assume someone will try to break it.
            </p>
            <p>
              The projects span the AI agent economy and the Solana ecosystem. Rampart provides on-chain policy enforcement for agent funds. Sentinel gates AI agent payments before signing. SolAudit tests whether frontier models can find real vulnerabilities in Solana programs.
            </p>
            <p>
              All code is open source. All claims are verifiable. No fabricated metrics, no invented clients, no marketing fluff.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Links
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/hqBrimax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                GitHub — hqBrimax &rarr;
              </a>
              <a
                href="https://x.com/NathanOyewole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                X / Twitter — @NathanOyewole &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}