import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Brimax",
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-300">
        We respect your privacy. This site does not collect personal data beyond what is necessary for operation.
      </p>
    </div>
  )
}