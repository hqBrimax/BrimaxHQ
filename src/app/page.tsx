import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Container } from "@/components/common/ui"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section className="py-24 border-t border-border">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              How I work
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Every project starts with the assumption that the system will be attacked. Not as paranoia — as engineering discipline. Security is not a feature added at the end; it is a property of the architecture from the first commit.
              </p>
              <p>
                I build with immutable binaries, renounced upgrade authorities, and PDA-enforced access control. When a policy says "deny," it means deny. No fallback. No override. No "we'll fix it later."
              </p>
              <p>
                The audit trail is not a log. It is proof. Every decision, every rejection, every approval is recorded and verifiable by outsiders — not just by me.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24 border-t border-border">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Start a project
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              I work with founders, protocol teams, and security researchers. If you are building something that needs to be secure, let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}