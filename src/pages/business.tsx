import type { NextPage } from 'next';
import { Business } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const BusinessPage: NextPage<IProps> = ({ language }) => {
  return <Business.Container language={language} />;
};

export default BusinessPage;
