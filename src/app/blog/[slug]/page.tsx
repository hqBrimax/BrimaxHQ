import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Brimax`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm text-text-muted hover:text-text-primary transition-colors mb-8 inline-block"
        >
          &larr; Back to blog
        </Link>
        <article>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-text-muted text-sm mb-8">
            By {post.author} on {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-accent bg-accent-subtle px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}