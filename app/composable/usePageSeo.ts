type UsePageSeoOptions = {
  title: string
  description: string
  path?: string
  keywords?: string
  ogType?: 'website' | 'article'
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
}

export function usePageSeo({
  title,
  description,
  path = '',
  keywords,
  ogType = 'article',
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = 'index, follow'
}: UsePageSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || ''

  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : ''

  const defaultImage = siteUrl ? `${siteUrl}/images/og-image.png` : '/images/og-image.png'

  const resolvedOgImage = ogImage || defaultImage
  const resolvedTwitterImage = twitterImage || resolvedOgImage
  const canonicalUrl = siteUrl && normalizedPath ? `${siteUrl}${normalizedPath}` : ''

  useSeoMeta({
    title,
    description,
    ...(keywords ? { keywords } : {}),

    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogImage: resolvedOgImage,
    ogType,
    ogLocale: 'ko_KR',

    twitterCard: 'summary_large_image',
    twitterTitle: twitterTitle || ogTitle || title,
    twitterDescription: twitterDescription || ogDescription || description,
    twitterImage: resolvedTwitterImage,

    robots
  })

  useHead({
    link: canonicalUrl
      ? [
          {
            rel: 'canonical',
            href: canonicalUrl
          }
        ]
      : []
  })
}
