import { Post } from "~~/types/post";

export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  };
  // get all post
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9,
    fields: string = "author, id, excerpt, title, link, slug, date"
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;

    if (categories) {
      query += `&categories=${categories}`;
    }
    return get<Post[]>(query);
  };

  // get a single post
  const getPost = async <T>(slug: string) =>
    get<Post[]>(`posts?slug=${slug}&_embed`);

  // get categories
  const getCategories = async <T>() => get<T>("categories");

  // get category
  const getCategory = async <T>(slug: string) =>
    get<T>(`categories?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};