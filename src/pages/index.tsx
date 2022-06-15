import type { NextPage } from 'next';
import { Home } from '@/components';

interface IProp {
  setIsShowNav:(isShowNav:Boolean) => void
}

const HomePage: NextPage<IProp> = ({setIsShowNav}) => {
  return <Home.Container setIsShowNav={setIsShowNav}/>;
};

export default HomePage;
