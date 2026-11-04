import Link from "next/link";

const services = [
  {
    title: "On-Chain Security",
    description:
      "Smart contract audits, policy vault design, and on-chain access control. Immutable binaries, renounced upgrade authorities, and PDA-enforced spending limits.",
    suitable: "DeFi protocols, AI agent vaults, token contracts",
  },
  {
    title: "AI Payment Security",
    description:
      "Policy engines for autonomous agents. Spending limits, allowlists, human approval thresholds, TEE attestation, and audit trails. Built for the agent economy.",
    suitable: "AI agents, payment gateways, autonomous systems",
  },
  {
    title: "Vulnerability Research",
    description:
      "Solana program vulnerability detection, eval frameworks, and security research. 10-task eval suite covering CPI, signer checks, PDA validation, account ownership, and reentrancy.",
    suitable: "Protocol teams, auditors, security researchers",
  },
  {
    title: "Security-First Development",
    description:
      "General software engineering with a security lens. Clean architecture, dependency injection, type safety, and threat modeling from day one.",
    suitable: "Startups, hackathon projects, MVPs",
  },
];

export function Services() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What I build
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Security-focused engineering for on-chain systems, AI agents, and the infrastructure that connects them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-border rounded-xl p-8 hover:border-text-muted transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-xs text-text-muted">
                Suitable for: {service.suitable}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Learn more about services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}