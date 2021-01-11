export type PostDTO = {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  image: {
    id: number;
    name: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  }[];
};
