import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export const getPosts = (options = { include: 'authors,tags', limit: 5 }) => {
  return api.posts
    .browse(options)
    .catch((error) => {
      console.log(error)
    })
}

export const getPostById = (id) => {
  return api.posts
    .read({
      id,
      include: 'authors,tags'
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPostBySlug = (slug) => {
  return api.posts
    .read({
      include: 'authors,tags',
      slug
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPreviousPost = async (slug) => {
  const posts = await api
    .posts
    .browse({ limit: 'all' })
    .catch((error) => {
      console.log(error)
    })

  const currentPost = await posts.findIndex((obj) => obj.slug === slug)

  /**
   * Returns an empty object if the current post is the first in the object
   */
  if (currentPost === 0) return {}

  return posts[currentPost - 1]
}

export const getNextPost = async (slug) => {
  const posts = await api
    .posts
    .browse({ limit: 'all' })
    .catch((error) => {
      console.log(error)
    })

  const currentPost = await posts.findIndex((obj) => obj.slug === slug)

  /**
   * Returns an empty object if the current post is the last in the object
   */
  if (currentPost === posts.length - 1) return {}

  return posts[currentPost + 1]
}
