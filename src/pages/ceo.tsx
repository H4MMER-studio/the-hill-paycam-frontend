import type { NextPage } from 'next';
import { CEO } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const CEOPage: NextPage<IProps> = ({ language }) => {
  return <CEO.Container language={language} />;
};

export default CEOPage;
