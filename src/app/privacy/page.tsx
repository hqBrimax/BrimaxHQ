import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Brimax",
  description: "Privacy policy for Brimax.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-text-secondary">
          <p className="mb-6">
            <strong className="text-text-primary">Last updated:</strong> January 2026
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            When you contact us through our website, we collect the information you provide: your name, email address, subject, and message. We do not collect any other personal data automatically.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information you provide solely to respond to your inquiry and discuss potential projects. We do not sell, share, or distribute your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            3. Data Storage
          </h2>
          <p className="mb-4">
            Contact form submissions are processed through our website and stored securely. We retain this information only as long as necessary to respond to your inquiry.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            4. Cookies
          </h2>
          <p className="mb-4">
            This website does not use tracking cookies or analytics beyond Vercel&apos;s anonymous analytics, which does not identify individual users.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            5. Third-Party Services
          </h2>
          <p className="mb-4">
            This website is hosted on Vercel. Vercel may collect anonymous usage data as part of their service. Please refer to Vercel&apos;s privacy policy for more information.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            6. Contact
          </h2>
          <p className="mb-4">
            If you have questions about this privacy policy, contact us at{" "}
            <a href="mailto:brimaxhq@gmail.com" className="text-accent hover:underline">
              brimaxhq@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}