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
        <title>The Hill Paycam | Company Info</title>
        <meta
          content="The Hill Paycam | Company Info"
          property="og:title"
          key="og:title"
        />
        <meta
          content="The Hill Paycam | Company Info"
          name="twitter:title"
          key="twitter:title"
        />
        <meta
          content="The Hill Paycam | Company Info"
          name="author"
          key="author"
        />
        <meta
          content="The Hill Paycam | Company Info"
          property="og:site_name"
          key="og:site_name"
        />
      </Head>
      <Company.Container language={language} />
    </>
  );
};

export default CompanyPage;
