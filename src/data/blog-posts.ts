import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why On-Chain Policy Vaults Need Immutable Binaries",
    slug: "immutable-binaries-policy-vaults",
    excerpt: "A policy vault that can be upgraded is not a policy vault. It is a promise. Here is why Brimax renounces upgrade authority on every contract.",
    content: `
      <p>Most on-chain systems have an upgrade authority. Someone holds the keys to change the code. That is convenient for developers and catastrophic for users.</p>

      <p>If an attacker compromises the upgrade authority, every policy, every limit, every access control becomes meaningless. The attacker does not need to break the code. They just replace it.</p>

      <h2>The Brimax approach</h2>
      <p>Every Brimax contract is deployed as an immutable binary. Upgrade authority is renounced at deployment. No one can change the code. Not the developer. Not an attacker. Not a compromised key.</p>

      <p>This means:</p>
      <ul>
        <li>Policies cannot be silently weakened</li>
        <li>Spending limits cannot be raised by anyone</li>
        <li>Access controls cannot be bypassed through an upgrade</li>
      </ul>

      <h2>The tradeoff</h2>
      <p>Immutability means bugs cannot be patched. If there is a vulnerability, the only fix is a new deployment and migration. This is a real cost. But the alternative — a system that can be changed by anyone with the right keys — is not a security system. It is a suggestion.</p>

      <p>Brimax chooses the cost of immutability over the illusion of flexibility.</p>
    `,
    author: "Nathan Oyewole",
    date: "2026-11-01",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    tags: ["Security", "On-Chain", "Rust"],
  },
  {
    id: "2",
    title: "TEE Attestation: Why Caps Must Be Real, Not Promises",
    slug: "tee-attestation-real-caps",
    excerpt: "A spending cap that lives in process memory is a suggestion. An attacker with process access can change it. Here is how TEE attestation makes caps verifiable.",
    content: `
      <p>Every AI payment security system claims to have spending caps. Max per transaction. Daily limits. Allowlists. But most of these caps are enforced by code running in the same process as the agent.</p>

      <p>If the agent is compromised, the attacker can simply modify the cap. Raise it to infinity. Clear the allowlist. The audit trail will show everything was "approved" — because the policy engine itself was tampered with.</p>

      <h2>The problem with HMAC</h2>
      <p>HMAC-based attestation proves the code has not changed since startup. But the key lives in process memory. Anyone with process access can regenerate the proof. The attestation proves nothing to an outsider.</p>

      <h2>The Brimax approach</h2>
      <p>Brimax uses Ed25519 asymmetric signing. The private key is held by a separate signing service (HashiCorp Vault in production). The policy engine sends the measurement and timestamp to Vault, which returns a signature. The private key never enters the policy engine process.</p>

      <p>Anyone can verify the signature with the published public key. No shared secret required. No trust in the process required.</p>

      <h2>The remaining gap</h2>
      <p>Without actual TEE hardware (Nitro, SGX, SEV), the measurement itself is self-reported. The code hash is computed by the same process it describes. This is documented honestly in the TEE Attestation Spec. The spec does not pretend to solve a problem it cannot solve.</p>
    `,
    author: "Nathan Oyewole",
    date: "2026-10-28",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    tags: ["Security", "TEE", "AI Agents"],
  },
  {
    id: "3",
    title: "Can Frontier AI Models Find Real Solana Vulnerabilities?",
    slug: "ai-models-solana-vulnerabilities",
    excerpt: "SolAudit tests whether frontier models can find real vulnerabilities in Solana programs. The results are not what you would expect.",
    content: `
      <p>AI models are increasingly used for security auditing. But can they actually find the vulnerabilities that matter in Solana programs?</p>

      <p>SolAudit is a 10-task evaluation suite covering the most common Solana vulnerability classes: missing signer checks, PDA collision, unchecked ownership, reentrancy, missing has_one constraints, mint mismatch, rent exemption issues, unsafe deserialization, signer escalation, and account confusion.</p>

      <h2>What the eval tests</h2>
      <p>Each task presents a vulnerable Solana program and asks the model to identify the vulnerability. The grader checks for correct identification across four categories: vulnerability type, root cause, impact, and fix.</p>

      <h2>Why this matters</h2>
      <p>If AI models can reliably find these vulnerabilities, they become a force multiplier for auditors. If they cannot, relying on them creates a false sense of security. Either way, the answer matters.</p>

      <p>SolAudit is open source. Run it against any model. Compare results. Draw your own conclusions.</p>
    `,
    author: "Nathan Oyewole",
    date: "2026-10-20",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    tags: ["Solana", "Security", "AI", "Research"],
  },
  {
    id: "4",
    title: "Default Deny: Why Empty Allowlists Should Mean Nobody",
    slug: "default-deny-empty-allowlists",
    excerpt: "Rampart treats an empty allowlist as deny-all. Sentinel used to treat it as allow-all. Here is why that difference matters and how it was fixed.",
    content: `
      <p>Two products in the same line. Opposite defaults. One treats an empty allowlist as "allow everyone." The other treats it as "allow nobody."</p>

      <p>This is not a minor inconsistency. It is a security bug. If a developer configures an allowlist but forgets to populate it, the system either blocks everything (safe) or allows everything (dangerous).</p>

      <h2>The fix</h2>
      <p>Sentinel was updated to match Rampart: empty allowlist means deny all. No exceptions. No fallback. If you want to allow someone, you must explicitly add them.</p>

      <h2>The broader principle</h2>
      <p>Default deny is not just a configuration choice. It is an architectural stance. Every system should start from the position that nothing is allowed, and permissions must be explicitly granted.</p>

      <p>This applies to allowlists, spending caps, recipient lists, and every other access control. The burden of proof should be on allowing, not on blocking.</p>
    `,
    author: "Nathan Oyewole",
    date: "2026-10-15",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    tags: ["Security", "Architecture", "Policy"],
  },
];