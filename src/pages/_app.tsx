import React, { useEffect, useState } from 'react';
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
      <MainNav language={language} setLanguage={setLanguage} />
      <Component {...pageProps} language={language} />
    </>
  );
}
export default MyApp;
