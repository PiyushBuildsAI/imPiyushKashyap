import { client } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/queries";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, PenLine } from "lucide-react";
import { urlFor } from "@/lib/sanity.image";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

export const metadata = {
  title: "Writing",
  description:
    "Notes from Piyush Kashyap on building AI products, automation systems, and modern software.",
};

function isNetworkError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "isNetworkError" in error &&
    error.isNetworkError === true
  );
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch<BlogPost[]>(allPostsQuery);
  } catch (error) {
    if (!isNetworkError(error)) {
      throw error;
    }

    return [];
  }
}

const Blog = async () => {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2rem] border border-border bg-card p-8 text-center sm:p-16">
          <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand">
            <PenLine className="size-5" />
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.05em]">
            Notes are in the works.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            I&apos;m preparing practical writing about AI products,
            architecture, and automation. Check back soon.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand"
          >
            Back to the portfolio
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-24 pt-36 sm:px-6 sm:pt-44 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-brand">
              /JOURNAL
            </span>
            <span className="h-px w-8 bg-brand/50" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Field notes
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">
            Notes from
            <br />
            <span className="text-brand">the build.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Practical lessons from building AI products, production systems,
            and business automation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${encodeURIComponent(post.slug)}`}
              className={`group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_80px_-42px_rgba(15,23,42,0.6)] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {post.mainImage && (
                <div
                  className={`relative overflow-hidden border-b border-border ${
                    index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(700).url()}
                    alt={post.title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 1280px"
                        : "(max-width: 768px) 100vw, 640px"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {post.date && (
                    <time className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3" />
                      {formatDate(post.date)}
                    </time>
                  )}
                  {post.author?.name && <span>By {post.author.name}</span>}
                </div>

                <div className="mt-6 flex items-end justify-between gap-6">
                  <h2
                    className={`max-w-3xl font-black leading-tight tracking-[-0.04em] ${
                      index === 0
                        ? "text-3xl sm:text-5xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {post.title}
                  </h2>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
