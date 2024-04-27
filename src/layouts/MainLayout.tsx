import React from 'react';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const {
    children,
  } = props;

  return (
    <>
      <header className='bg-black text-white p-4 text-center text-2xl'>Header</header>
      <main>{children}</main>
      <footer className='bg-black text-white p-4 text-center text-2xl'>Footer</footer>
    </>
  );
};
export default MainLayout;