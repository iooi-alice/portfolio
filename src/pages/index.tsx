import Head from 'next/head'

import LandingContent from '@/components/page/landing/LandingContent'
import { META_DATA } from '@/constants/meta'

export default function Home() {
  return (
    <>
      <Head>
        <title>{META_DATA.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <LandingContent />
    </>
  )
}
