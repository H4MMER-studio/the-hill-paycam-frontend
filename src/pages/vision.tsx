import type { NextPage } from 'next';
import { Vision } from '@/components';

interface IProps {
  language: 'ENG' | 'KHM';
}

const VisionPage: NextPage<IProps> = ({ language }) => {
  return <Vision.Container language={language} />;
};

export default VisionPage;
