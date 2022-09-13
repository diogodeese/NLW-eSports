import './styles/main.css';
import logo from './assets/logo-nlw.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
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
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image1.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image2.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image3.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS:GO</strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image4.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image5.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img
            src="/image6.png"
            alt=""
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">
              4 Annoucements
            </span>
          </div>
        </a>
      </div>

      <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Didn't find your duo?
            </strong>
            <span className="text-zinc-400 block">
              Find players by posting an announcement!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={26} />
            Post Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
