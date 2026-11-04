import Link from "next/link";

export const metadata = {
  title: "Services — Brimax",
  description: "On-chain security, AI payment security, vulnerability research, and security-first development.",
};

const services = [
  {
    title: "On-Chain Security",
    problem: "Smart contracts and on-chain programs are immutable once deployed. A vulnerability in the code is a vulnerability in the funds.",
    delivers: "Smart contract audits, policy vault design, on-chain access control. Immutable binaries, renounced upgrade authorities, PDA-enforced spending limits.",
    suitable: "DeFi protocols, AI agent vaults, token contracts, DAOs.",
  },
  {
    title: "AI Payment Security",
    problem: "AI agents can move money. Without policy enforcement, a compromised agent can drain funds before anyone notices.",
    delivers: "Policy engines for autonomous agents. Spending limits, allowlists, human approval thresholds, TEE attestation, and audit trails. Built for the agent economy.",
    suitable: "AI agents, payment gateways, autonomous systems, agent marketplaces.",
  },
  {
    title: "Vulnerability Research",
    problem: "Frontier AI models are increasingly used to find vulnerabilities. But can they actually find the bugs that matter?",
    delivers: "Solana program vulnerability detection, eval frameworks, and security research. 10-task eval suite covering CPI, signer checks, PDA validation, account ownership, and reentrancy.",
    suitable: "Protocol teams, auditors, security researchers, AI eval teams.",
  },
  {
    title: "Security-First Development",
    problem: "Most software is built fast and secured later. By then, the architecture already has holes.",
    delivers: "General software engineering with a security lens. Clean architecture, dependency injection, type safety, and threat modeling from day one.",
    suitable: "Startups, hackathon projects, MVPs, early-stage protocols.",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I build
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Security-focused engineering for on-chain systems, AI agents, and the infrastructure that connects them.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-border rounded-xl p-8 md:p-12"
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                {service.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {service.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    What I deliver
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {service.delivers}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-text-muted">
                  Suitable for: {service.suitable}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-text-secondary leading-relaxed mb-6">
            Interested in working together? Let&apos;s discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}