import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-03"; // use current UTC date - see "specifying API version"!

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: dataset === "production", // `false` if you want to ensure fresh data
});
