import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import PreviewSuspense from "@/components/PreviewSuspense";

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await sanityClient.fetch(query);

  return <BlogList posts={posts} />;
}
