type Base = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
  _type: string;
};

interface Post extends Base {
  author: Author;
  title: string;
  slug: Slug;
  mainImage: Image;
  categories: Category[];
  description: string;
  body: Block[];
}

interface Author extends Base {
  name: string;
  slug: Slug;
  image: Image;
  bio: Block[];
}

interface Image {
  asset: Reference;
  _type: "image";
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _type: "block";
  _key: string;
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _type: "span";
  _key: string;
  marks: string[];
  text: string;
}

interface Category extends Base {
  title: string;
  description: string;
}

interface MainImage {
  asset: Reference;
  _type: "image";
}

interface Title {
  _type: "string";
  current: string;
}
