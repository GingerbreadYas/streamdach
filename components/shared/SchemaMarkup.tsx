import { OrganizationSchema, WebsiteSchema } from '@/lib/schema'

export default function SchemaMarkup() {
  const orgSchema = OrganizationSchema()
  const webSchema = WebsiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
      />
    </>
  )
}