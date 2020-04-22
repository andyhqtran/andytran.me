import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export default async ({ query: { id } }, res) => {
  return await api
    .posts
    .read({ id })
    .then((response) => {
      res.status = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(response)
    })
    .catch((error) => {
      res.status = 400
      res.setHeader('Content-Type', 'application/json')
      res.json({
        message: `Post with id: ${id} not found.`
      })

      console.log(error)
    })
}
