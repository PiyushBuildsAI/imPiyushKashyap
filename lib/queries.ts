export const allPostsQuery = `*[_type == "post"]{
  title,
  "slug": slug.current,
  date,
  excerpt,
  body,
  author->{
    name,
    image
  },
  mainImage
} | order(date desc)`
