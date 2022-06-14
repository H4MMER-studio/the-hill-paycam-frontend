import type { NextPage } from 'next';
import Head from 'next/head';
import { Business } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const BusinessPage: NextPage<IProps> = ({ language }) => {
  return (
    <>
      <Head>
        <title>The Hill Paycam | Business</title>
        <meta
          content="The Hill Paycam | Business"
          property="og:title"
          key="og:title"
        />
        <meta
          content="The Hill Paycam | Business"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="The Hill Paycam | Business" name="author" key="author" />
        <meta
          content="The Hill Paycam | Business"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Business.Container language={language} />
    </>
  );
};

export default BusinessPage;
