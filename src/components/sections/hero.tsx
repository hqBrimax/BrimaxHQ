import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Security-first builder
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-8">
            Building security infrastructure for the AI agent economy.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
            On-chain policy vaults, TEE-attested payment security layers, and Solana vulnerability research. Every line of code is written with the assumption that someone will try to break it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:border-text-muted hover:bg-surface transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Focus</p>
              <p className="text-sm text-text-secondary">On-chain security</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Stack</p>
              <p className="text-sm text-text-secondary">Rust, Solana, Python</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Approach</p>
              <p className="text-sm text-text-secondary">Immutable by default</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Status</p>
              <p className="text-sm text-text-secondary">Open to work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}