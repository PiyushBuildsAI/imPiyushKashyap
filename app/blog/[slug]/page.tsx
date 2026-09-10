import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    body,
    author->{name},
    mainImage
  }`;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post: BlogPost | null = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      <nav className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All writing
        </Link>
      </nav>

      <header className="mb-10">
        <div className="mb-5 flex flex-wrap items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {post.date && (
            <time className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-brand" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
          {post.author?.name && <span>By {post.author.name}</span>}
        </div>
        <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl">
          {post.title}
        </h1>
      </header>

      {post.mainImage && (
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-border">
          <Image
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      )}

      <div className="border-t border-border pt-10 text-base leading-8 text-muted-foreground [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mb-3 [&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-foreground [&_li]:mb-2 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_strong]:font-extrabold [&_strong]:text-foreground [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6">
        <PortableText value={post.body} />
      </div>

      <footer className="mt-16 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-extrabold">Written by Piyush Kashyap</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Full Stack Developer · AI Products &amp; Business Automation
          </p>
        </div>
        <a
          href="mailto:piyush.kashyap.in@gmail.com"
          className="text-sm font-bold text-brand"
        >
          Discuss this topic →
        </a>
      </footer>
    </article>
  );
}
