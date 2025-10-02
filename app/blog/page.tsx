import React from "react";
import { client } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/queries";
import { BlogPost } from "@/types/index";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

export const metadata = {
  title: "Blog | Piyush Kashyap",
  description: "Thoughts on programming, technology, and personal growth.",
};

const Blog = async () => {
  // Fetch posts
  const posts: BlogPost[] = await client.fetch(allPostsQuery);

  if (!posts || posts.length === 0) {
    return (
      <div className="container max-w-4xl mx-auto py-20">
        <p className="text-center text-lg text-muted-foreground">
          Nothing to read here… yet! Check back soon
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5 md:py-20 xl:py-20 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
        Blogs and Articles
      </h1>
      <div className="mt-4 pl-3 border-l-4 border-purple-600">
        <p className="text-lg text-muted-foreground">
          My take on Build, Explore, Learn and Grow.
        </p>
      </div>

      <div className="grid gap-6 w-auto md:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col h-full mx-3 dark:bg-foreground/5 bg-foreground/10 border-border mt-8 hover:border-purple-600 transition-colors duration-200"
          >
            <Link
              href={`/blog/${encodeURIComponent(post.slug)}`}
              className="flex-1"
            >
              <CardHeader className="flex flex-col gap-4">
                {post.mainImage && (
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <CardTitle className="hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center mt-2  text-sm text-muted-foreground">
                  {post.author?.name && (
                    <>
                      <span>By {post.author.name}</span>
                    </>
                  )}
                  {post.date && <time>{formatDate(post.date)}</time>}
                </div>
              </CardContent>
            </Link>

            <CardFooter className="">
              <Link
                href={`/blog/${encodeURIComponent(post.slug)}`}
                className="w-full"
              >
                <Button className="w-fit" variant="outline">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
