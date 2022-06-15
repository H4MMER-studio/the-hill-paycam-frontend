import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MainNav from '@/components/common/MainNav';
import type { AppProps } from 'next/app';
import { Language } from '@/interface';

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<Language>('ENG');
  const [isShowNav, setIsShowNav] = useState(true)

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
        <title>The Hill Paycam</title>
        <meta content="The Hill Paycam" property="og:title" key="og:title" />
        <meta
          content="The Hill Paycam"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="The Hill Paycam" name="author" key="author" />
        <meta
          content="The Hill Paycam"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <MainNav language={language} isShowNav={isShowNav}  setLanguage={setLanguage} />
      <Component {...pageProps} language={language} setIsShowNav={setIsShowNav}/>
    </>
  );
}
export default MyApp;
