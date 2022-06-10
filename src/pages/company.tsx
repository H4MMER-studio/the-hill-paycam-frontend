import type { NextPage } from 'next';
import { Company } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const CompanyPage: NextPage<IProps> = ({ language }) => {
  return <Company.Container language={language} />;
};

export default CompanyPage;
