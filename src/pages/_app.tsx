import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MainNav from '@/components/common/MainNav';
import type { AppProps } from 'next/app';
import { Language } from '@/interface';

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<Language>('ENG');

  useEffect(() => {
    const lan = sessionStorage.getItem('lan');

    if (lan) {
      setLanguage(lan as Language);
    } else {
      sessionStorage.setItem('lan', language);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('lan', language);
  }, [language]);

  return (
    <>
      <Head>
        <meta
          content="Real Estate Development Business, Digital Asset Management, Blockchain Service"
          name="description"
          key="description"
        />
        <meta
          content="Real Estate Development Business, Digital Asset Management, Blockchain Service"
          property="og:description"
          key="og:description"
        />
        <meta
          content="Real Estate Development Business, Digital Asset Management, Blockchain Service"
          name="twitter:description"
          key="twitter:description"
        />
        <meta
          content="coin, the hill, paycam, bitcoin, nft, Blockchain Service, Blockchain, Business"
          name="keywords"
        />
        <title>the hill paycam</title>
        <meta content="the hill paycam" property="og:title" key="og:title" />
        <meta
          content="the hill paycam"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="the hill paycam" name="author" key="author" />
        <meta
          content="the hill paycam"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <MainNav language={language} setLanguage={setLanguage} />
      <Component {...pageProps} language={language} />
    </>
  );
}
export default MyApp;
