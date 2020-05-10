import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3'
})

export async function getSettings () {
  return await api
    .settings
    .browse({
      limit: 'all'
    })
    .catch((error) => {
      console.log(error)
    })
}
