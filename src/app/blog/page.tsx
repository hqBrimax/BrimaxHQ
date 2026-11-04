import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

export const metadata = {
  title: "Blog — Brimax",
  description: "Articles on security, Solana, AI agents, and building secure systems.",
};

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Articles
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Writing on security, Solana, AI agents, and building systems that hold up under attack.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <p className="text-text-secondary">No articles yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-border rounded-xl p-8 hover:border-text-muted transition-colors duration-200 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-accent bg-accent-subtle px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-3">
                  {post.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}