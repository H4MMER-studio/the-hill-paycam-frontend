import type { NextPage } from 'next';
import Head from 'next/head';
import { Company } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const CompanyPage: NextPage<IProps> = ({ language }) => {
  return (
    <>
      <Head>
        <title>the hill paycam | Company Info</title>
        <meta
          content="the hill paycam | Company Info"
          property="og:title"
          key="og:title"
        />
        <meta
          content="the hill paycam | Company Info"
          name="twitter:title"
          key="twitter:title"
        />
        <meta
          content="the hill paycam | Company Info"
          name="author"
          key="author"
        />
        <meta
          content="the hill paycam | Company Info"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Company.Container language={language} />
    </>
  );
};

export default CompanyPage;
