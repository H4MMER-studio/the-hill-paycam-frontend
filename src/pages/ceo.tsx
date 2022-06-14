import type { NextPage } from 'next';
import Head from 'next/head';
import { CEO } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const CEOPage: NextPage<IProps> = ({ language }) => {
  return (
    <>
      <Head>
        <title>The Hill Paycam | CEO</title>
        <meta
          content="The Hill Paycam | CEO"
          property="og:title"
          key="og:title"
        />
        <meta
          content="The Hill Paycam | CEO"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="The Hill Paycam | CEO" name="author" key="author" />
        <meta
          content="The Hill Paycam | CEO"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <CEO.Container language={language} />
    </>
  );
};

export default CEOPage;
