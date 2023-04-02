import React from 'react';
import Head from 'next/head';
import PageTextHome from '@/components/pageText/PageTextHome';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>SPACE - so,you want to travel</title>
      </Head>
      <div className='wrapper-page wrapper-page__home'>
        <PageTextHome></PageTextHome>
      </div>
    </React.Fragment>
  )
}
