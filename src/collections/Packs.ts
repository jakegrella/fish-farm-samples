import type { CollectionConfig } from 'payload'

export const Packs: CollectionConfig = {
  slug: 'packs',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Pack Name',
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'short_description',
      type: 'text',
      required: true,
      label: 'Short Description',
    },
    {
      name: 'front_cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Front Cover Image',
    },
    {
      name: 'price_cents',
      type: 'number',
      required: true,
      label: 'Price (in cents)',
    },
  ],
}
