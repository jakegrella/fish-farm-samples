import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function PackPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const data = await payload.find({
    collection: 'packs',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const pack = data.docs[0]

  return (
    <div className="pack-page">
      <h1>{pack.name}</h1>
      <h2>{pack.short_description}</h2>
    </div>
  )
}
