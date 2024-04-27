import MainLayout from '@/layouts/MainLayout';
import {ReactElement, useContext} from 'react';
import {NextPageWithLayout} from './_app';
import {PrismaClient } from '@prisma/client';


const Home: NextPageWithLayout<{}> = () => {
  return (
    <>
      <h2>
        Home welcome 
      </h2>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
