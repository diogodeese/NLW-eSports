import { useEffect, useState } from 'react';
import './styles/main.css';
import logo from './assets/logo-nlw.svg';

import * as Dialog from '@radix-ui/react-dialog';

import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import Input from './components/Form/Input';

import { GameController } from 'phosphor-react';

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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Title
            </Dialog.Title>

            <form className="flex flex-col mt-8 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="game"
                  className="font-semibold"
                >
                  Game
                </label>
                <Input
                  id="game"
                  placeholder="Select the game"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-semibold"
                >
                  Nickname
                </label>
                <Input
                  id="name"
                  placeholder="Nick"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Years</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="asdasdad"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Whats your Discord</label>
                  <Input
                    id="discord"
                    type="text"
                    placeholder="User#0000"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">When do you play</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sunday"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Monday"
                    >
                      M
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Tuesday"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Wednesday"
                    >
                      W
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Thursday"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Friday"
                    >
                      F
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Saturday"
                    >
                      S
                    </button>
                  </div>
                </div>

                <div>
                  <label id="hourStart">horas</label>

                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      id="hourStart"
                      type="time"
                      placeholder="Since"
                    />

                    <Input
                      id="hourEnd"
                      type="time"
                      placeholder="Until"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-2 gap-2 text-sm">
                <Input type="checkbox" />
                Do you use voice chat
              </div>

              <footer className="flex mt-4 justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md text-semibold hover:bg-zinc-600">
                  Cancel
                </Dialog.Close>
                <button
                  className="bg-violet-500 px-5 h-12 rounded-md text-semibold flex items-center gap-3 hover:bg-violet-600"
                  type="submit"
                >
                  <GameController size={24} />
                  Submit
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default App;
