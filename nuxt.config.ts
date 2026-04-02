// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/scss/main.scss'],

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/seo'],

  runtimeConfig: {
    googleClientEmail: '',
    googlePrivateKey: '',
    googleSpreadsheetId: '',
    googleSheetName: '',

    public: {
      siteUrl: 'https://zaii.kr'
    }
  },

  site: {
    url: 'https://zaii.kr',
    name: '자이비뇨의학과'
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      '@type': 'MedicalClinic',
      name: '자이비뇨의학과',
      url: 'https://zaii.kr',
      logo: '/images/logo.png',
      image: ['/images/og-image.png'],
      description:
        '자이비뇨의학과는 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 전문 진료를 제공하는 2차병원입니다. 리줌(Rezūm)과 유로리프트(UroLift) 등 최소침습 치료를 시행합니다.',
      address: {
        streetAddress: '실제 도로명 주소 입력',
        addressLocality: '실제 시/구 입력',
        addressRegion: '실제 시/도 입력',
        postalCode: '실제 우편번호 입력',
        addressCountry: 'KR'
      },
      telephone: '실제 대표번호 입력',
      sameAs: [
        // 실제 운영 중인 채널만 넣기
        // 'https://blog.naver.com/...',
        // 'https://www.instagram.com/...',
        // 'https://map.naver.com/...'
      ],
      openingHoursSpecification: [
        // 실제 운영시간만 넣기
        // {
        //   dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        //   opens: '09:00:00',
        //   closes: '18:00:00'
        // },
        // {
        //   dayOfWeek: 'Saturday',
        //   opens: '09:00:00',
        //   closes: '13:00:00'
        // }
      ]
    }
  },

  sitemap: {
    autoLastmod: true,
    urls: ['/', '/urolift', '/rezum', '/consultation', '/filler-penis-enlargement']
  },

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
        { name: 'robots', content: 'index, follow' },

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
        { rel: 'canonical', href: 'https://zaii.kr/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
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
