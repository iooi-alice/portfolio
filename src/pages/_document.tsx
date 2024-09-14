import { Html, Head, Main, NextScript } from 'next/document'

import { META_DATA } from '@/constants/meta'

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head>
        <meta name='description' content={META_DATA.description} />
        <meta name='keywords' content={META_DATA.keywords} />
        <meta property='og:site_name' content={META_DATA.title} />
        <meta property='og:url' content={META_DATA.siteUrl} />
        <meta property='og:type' content={META_DATA.ogType} />
        <meta property='og:title' content={META_DATA.title} />
        <meta property='og:description' content={META_DATA.ogDescription} />
        <meta property='og:image' content={META_DATA.imageUrl} />
        <meta property='og:image:alt' content={META_DATA.imageAlt} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content={META_DATA.ogImageWidth} />
        <meta property='og:image:height' content={META_DATA.ogImageHeight} />
        <meta property='og:locale' content='en-US' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={META_DATA.siteUrl} />
        <meta name='twitter:title' content={META_DATA.title} />
        <meta name='twitter:description' content={META_DATA.description} />
        <meta name='twitter:image' content={META_DATA.twitterImageUrl} />
        <meta name='twitter:image:alt' content={META_DATA.imageAlt} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/images/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://soo-portfolio.vercel.app/'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
