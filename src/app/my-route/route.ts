import configPromise from '@payload-config'
import { getPayload, CollectionSlug } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories" as CollectionSlug,
  })

  return Response.json(data)
}