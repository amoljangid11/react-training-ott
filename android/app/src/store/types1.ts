export type Movie = {
  id: string;
  title: string;
  thumbnail: string;
};

export type Category = {
  id: string;
  name: string;
  movies: Movie[];
};
