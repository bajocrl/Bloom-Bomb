import HomeLayout from '@/pages/layout';
import { Board } from '@/components/Board';

function Home() {
  return (
    <HomeLayout>
      <div className='pt-4'>
        <Board />
      </div>
    </HomeLayout>
  );
}

export default Home;
