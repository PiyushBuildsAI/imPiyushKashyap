import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { BlogPost } from "@/types/index";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  // Await params in Next.js 15
  const { slug } = await params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    body,
    author->{name},
    mainImage
  }`;

  const post: BlogPost | null = await client.fetch(query, { slug });

  if (!post) {
    return <p className="text-center mt-10 text-gray-500">Post not found</p>;
  }

  return (
    <article className="max-w-3xl pb-2 mx-auto p-6 pt-10 md:pt-32">
      <nav className="mb-6">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {"\u2190"} All posts
        </Link>
      </nav>
      <h1 className="text-3xl font-bold mb-10">{post.title}</h1>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          width={800}
          height={400}
          className="mb-6"
        />
      )}
      <PortableText value={post.body} />
      <p className="text-gray-500 text-sm mb-4 pt-10">
        Publish By{" "}
        <span className="text-gray-500 font-bold">{post.author.name}</span>
      </p>
    </article>
  );
}
