"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(
    "Unauthorized access to preview mode. You must be signed in to preview"
  );
}

if (!projectId || !dataset) {
  throw new Error(
    "The Sanity project ID and dataset name are required for preview mode. " +
      "Make sure you have set the environment variables correctly."
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
