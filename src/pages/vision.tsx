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
        <title>the hill paycam | Vision</title>
        <meta
          content="the hill paycam | Vision"
          property="og:title"
          key="og:title"
        />
        <meta
          content="the hill paycam | Vision"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="the hill paycam | Vision" name="author" key="author" />
        <meta
          content="the hill paycam | Vision"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Vision.Container language={language} />
    </>
  );
};

export default VisionPage;
