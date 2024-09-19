export type Game = {
  id: string;
  title: string;
  image: string;
  description: string;
  actions: { label: string; link: string }[];
  isFeatured?: boolean;
};
