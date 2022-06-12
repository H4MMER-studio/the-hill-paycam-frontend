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
        <title>the hill paycam | Business</title>
        <meta
          content="the hill paycam | Business"
          property="og:title"
          key="og:title"
        />
        <meta
          content="the hill paycam | Business"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="the hill paycam | Business" name="author" key="author" />
        <meta
          content="the hill paycam | Business"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Business.Container language={language} />
    </>
  );
};

export default BusinessPage;
