import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

// Get a pre-configured URL builder for your sanity client
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
