export interface ServiceItem {
  slug: string;
  name: string;
  shortDescription: string;
  route: string;
  category: "Windows" | "Doors";
  image: string;
}

export interface BrandItem {
  slug: string;
  name: string;
  route: string;
  description: string;
  image: string;
}

export interface LocationItem {
  slug: string;
  name: string;
  route: string;
  type: "city";
  image: string;
}

export interface ResourceItem {
  name: string;
  url: string;
  description: string;
}
