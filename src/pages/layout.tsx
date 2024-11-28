function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <div className='max-w-4xl w-full mx-auto p-4 lg:pt-8'>
        <h1 className='text-3xl py-4'>
          Bloom Bomb <span className='text-xl'>🌸💣</span>
        </h1>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
