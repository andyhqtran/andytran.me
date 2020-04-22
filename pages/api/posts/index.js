import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export default async (req, res) => {
  return await api
    .posts
    .browse({
      include: 'tags,authors'
    })
    .then((response) => {
      res.status = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(response)
    })
}
