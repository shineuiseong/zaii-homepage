// composables/usePageSeo.ts

type UsePageSeoOptions = {
  title: string
  description: string
  path?: string

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
  path = '/',
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

  const siteUrl = String(config.public.siteUrl || 'https://zaii.kr').replace(/\/$/, '')

  const normalizedPath = !path || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`

  const canonicalUrl = normalizedPath === '/' ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`

  const defaultImage = `${siteUrl}/images/og-image.png`

  const resolvedOgImage = ogImage || defaultImage

  const resolvedTwitterImage = twitterImage || resolvedOgImage

  const resolvedOgTitle = ogTitle || title

  const resolvedOgDescription = ogDescription || description

  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle

  const resolvedTwitterDescription = twitterDescription || resolvedOgDescription

  useSeoMeta({
    title,

    description,

    robots,

    ogType,

    ogTitle: resolvedOgTitle,

    ogDescription: resolvedOgDescription,

    ogImage: resolvedOgImage,

    ogUrl: canonicalUrl,

    ogLocale: 'ko_KR',

    ogSiteName: '자이비뇨의학과병원',

    twitterCard: 'summary_large_image',

    twitterTitle: resolvedTwitterTitle,

    twitterDescription: resolvedTwitterDescription,

    twitterImage: resolvedTwitterImage
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl
      }
    ]
  })
}
