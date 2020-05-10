import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export const getPosts = (options = { include: 'tags,author', limit: 5 }) => {
  return api.posts
    .browse(options)
    .catch((error) => {
      console.log(error)
    })
}

export const getPostById = (id) => {
  return api.posts
    .read({ id })
    .catch((error) => {
      console.log(error)
    })
}

export const getPostBySlug = (slug) => {
  return api.posts
    .read({ slug })
    .catch((error) => {
      console.log(error)
    })
}
