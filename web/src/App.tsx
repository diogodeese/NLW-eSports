import { useEffect, useState } from 'react';
import './styles/main.css';
import logo from './assets/logo-nlw.svg';

import * as Dialog from '@radix-ui/react-dialog';

import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import CreateAdModal from './components/createAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  };
}

const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img
        src={logo}
        alt="NLW Logo"
      />
      <h1 className="text-6xl text-white font-black mt-20">
        Find your{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        here.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game, key) => {
          return (
            <GameBanner
              key={key}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.Ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};

export default App;
