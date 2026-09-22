// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  /* ========================================================
     GLOBAL CSS
  ======================================================== */

  css: ['@/assets/scss/main.scss', 'swiper/css'],

  /* ========================================================
     MODULES
  ======================================================== */

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/seo'],

  /* ========================================================
     RUNTIME CONFIG
  ======================================================== */

  runtimeConfig: {
    googleClientEmail: '',
    googlePrivateKey: '',
    googleSpreadsheetId: '',
    googleSheetName: '',

    public: {
      siteUrl: 'https://zaii.kr'
    }
  },

  /* ========================================================
     SITE
  ======================================================== */

  site: {
    url: 'https://zaii.kr',

    name: '자이비뇨의학과병원',

    description:
      '자이비뇨의학과병원은 서울 서초구 비뇨기과병원으로 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 진료를 제공하며 리줌(Rezūm), 유로리프트(UroLift) 등 전립선비대증 치료를 시행합니다.',
    defaultLocale: 'ko'
  },

  /* ========================================================
     SCHEMA.ORG
  ======================================================== */

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',

      name: '자이비뇨의학과병원',

      url: 'https://zaii.kr',

      logo: 'https://zaii.kr/images/logo.png',

      image: ['https://zaii.kr/images/og-image.png'],

      description:
        '자이비뇨의학과병원은 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 진료를 제공하며 리줌(Rezūm), 유로리프트(UroLift) 등 전립선비대증 치료를 시행합니다.',

      telephone: '02-6207-5678',

      address: {
        streetAddress: '서운로 220 대지스포츠프라자 4층',
        addressLocality: '서초구',
        addressRegion: '서울특별시',
        addressCountry: 'KR'
      },

      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],

          opens: '09:00',
          closes: '18:00'
        }
      ]
    }
  },

  /* ========================================================
     SITEMAP
  ======================================================== */

  sitemap: {
    autoLastmod: true
  },

  /* ========================================================
     ROBOTS
  ======================================================== */

  robots: {
    allow: ['/'],

    disallow: ['/admin', '/admin/', '/api', '/api/'],

    sitemap: ['https://zaii.kr/sitemap.xml']
  },

  /* ========================================================
     APP HEAD

     페이지별
     - title
     - description
     - canonical
     - robots
     - Open Graph
     - Twitter

     위 항목은 usePageSeo()에서 처리
  ======================================================== */

  app: {
    head: {
      htmlAttrs: {
        lang: 'ko'
      },

      meta: [
        {
          charset: 'utf-8'
        },

        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },

        {
          name: 'format-detection',
          content: 'telephone=no, address=no, email=no'
        },

        {
          name: 'theme-color',
          content: '#ffffff'
        },

        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },

        {
          name: 'msapplication-config',
          content: '/browserconfig.xml'
        }
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },

        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },

        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },

        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },

        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ]
    }
  },

  /* ========================================================
     VITE
  ======================================================== */

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
