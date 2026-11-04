import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src="/logo.svg" alt="Brimax" width="120" height="24" className="h-6 w-auto mb-4" />
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Security-first builder. On-chain policy vaults, AI payment security, and Solana vulnerability research.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://x.com/NathanOyewole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors text-sm"
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/hqBrimax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  On-Chain Security
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  AI Payment Security
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Vulnerability Research
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Security-First Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Brimax. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built in Ekiti, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}