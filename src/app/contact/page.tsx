import { Container } from "@/components/common/ui";

export const metadata = {
  title: "Contact — Brimax",
  description: "Start a project with Brimax. Security-focused engineering for on-chain systems and AI agents.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Start a project
          </h1>
          <p className="text-text-secondary leading-relaxed">
            I work with founders, protocol teams, and security researchers. Tell me about what you&apos;re building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form className="space-y-6" action="/api/contact" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Email
              </h3>
              <a
                href="mailto:brimaxhq@gmail.com"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                brimaxhq@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                GitHub
              </h3>
              <a
                href="https://github.com/hqBrimax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                github.com/hqBrimax
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                X / Twitter
              </h3>
              <a
                href="https://x.com/NathanOyewole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                @NathanOyewole
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Location
              </h3>
              <p className="text-text-secondary">Ekiti, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}