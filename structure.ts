import type { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  {
    schemaType,
  }: {
    schemaType: string;
  }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title("Preview")
        .options({
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
          }/api/preview`,
          defaultSize: `desktop`,
          reload: {
            button: true,
          },
          attributes: {},
        }),
    ]);
  }
  if (schemaType === "author") {
    return { _type: "author", name: "New Author" };
  }
  return { _type: "post", title: "New Post" };
};
