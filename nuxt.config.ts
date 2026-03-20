// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/scss/main.scss'],

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  runtimeConfig: {
    googleClientEmail: '',
    googlePrivateKey: '',
    googleSpreadsheetId: '',
    googleSheetName: '',

    public: {
      // 예: https://zaii.kr
      siteUrl: 'https://zaii.kr'
    }
  },

  /**
   * Nuxt SEO 모듈들이 참조하는 사이트 기본 정보
   * 실도메인으로 꼭 맞춰두는 게 좋음
   */
  site: {
    url: 'https://zaii.kr',
    name: '자이비뇨의학과'
  },

  /**
   * sitemap.xml
   * 페이지 수가 많지 않으면 우선 정적 등록이 가장 단순하고 안정적
   */
  sitemap: {
    autoLastmod: true,
    urls: ['/', '/urolift', '/rezum', '/consultation', '/filler-penis-enlargement']
  },

  /**
   * robots.txt
   * 내부 경로는 차단하고 sitemap 주소 노출
   */
  robots: {
    allow: ['/'],
    disallow: ['/admin', '/api'],
    sitemap: ['https://zaii.kr/sitemap.xml']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ko'
      },

      title: '자이비뇨의학과 | 전립선비대증 리줌·유로리프트 치료',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        {
          name: 'description',
          content:
            '자이비뇨의학과는 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 전문 진료를 제공하는 2차병원입니다. 리줌(Rezūm)과 유로리프트(UroLift) 등 최소침습 치료를 시행합니다.'
        },
        {
          name: 'keywords',
          content:
            '자이비뇨의학과, 전립선비대증, 리줌, 유로리프트, Rezum, Urolift, 배뇨장애, 요로결석, 남성수술, 비뇨기과, 2차병원, 보형물, 성기확대, 필러'
        },
        {
          name: 'format-detection',
          content: 'telephone=no, address=no, email=no'
        },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },

        // robots
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '자이비뇨의학과' },
        {
          property: 'og:title',
          content: '자이비뇨의학과 | 전립선비대증 리줌·유로리프트 치료'
        },
        {
          property: 'og:description',
          content: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 등 최소침습 치료 제공.'
        },
        { property: 'og:locale', content: 'ko_KR' },
        { property: 'og:url', content: 'https://zaii.kr/' },
        { property: 'og:image', content: 'https://zaii.kr/images/og-image.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: '자이비뇨의학과 | 전립선비대증 리줌·유로리프트 치료'
        },
        {
          name: 'twitter:description',
          content: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 치료.'
        },
        { name: 'twitter:image', content: 'https://zaii.kr/images/og-image.png' }
      ],

      link: [
        // canonical
        { rel: 'canonical', href: 'https://zaii.kr/' },

        // favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },

        // Apple / Android
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/abstracts/variables" as *;
            @use "@/assets/scss/abstracts/breakpoints" as *;
            @use "@/assets/scss/abstracts/mixins" as *;
            @use "@/assets/scss/abstracts/functions" as *;
          `
        }
      }
    }
  }
})
