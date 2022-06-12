import React, { useState } from 'react';
import MainNav from '@/components/common/MainNav';
import type { AppProps } from 'next/app';
import { Language } from '@/interface';

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<Language>('ENG');

  return (
    <>
      <MainNav language={language} setLanguage={setLanguage} />
      <Component {...pageProps} language={language} />
    </>
  );
}
export default MyApp;
