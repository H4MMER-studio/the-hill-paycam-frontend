import type { NextPage } from 'next';
import Head from 'next/head';
import { Vision } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const VisionPage: NextPage<IProps> = ({ language }) => {
  return (
    <>
      <Head>
        <title>The Hill Paycam | Vision</title>
        <meta
          content="The Hill Paycam | Vision"
          property="og:title"
          key="og:title"
        />
        <meta
          content="The Hill Paycam | Vision"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="The Hill Paycam | Vision" name="author" key="author" />
        <meta
          content="The Hill Paycam | Vision"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Vision.Container language={language} />
    </>
  );
};

export default VisionPage;
