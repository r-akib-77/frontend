import JACKPOT_IMAGE from "../public/pic/jackpot.jpg";
import LITTLE_PIC_1 from "../public/pic/littlePic1.jpg";
import LITTLE_PIC_2 from "../public/pic/littlePic2.jpg";
import BANNER_IMAGE from "../public/pic/banner1.jpg";
import PROMO_BANNER_1 from "../public/pic/sideBanner1.jpg";
import PROMO_BANNER_2 from "../public/pic/sidebanner2.jpg";
import BOTTOMLINK_1 from "../public/pic/link1.jpg";
import BOTTOMLINK_2 from "../public/pic/link2.jpg";
import BOTTOMLINK_3 from "../public/pic/link3.jpg";
import BOTTOMLINK_4 from "../public/pic/link4.jpg";
import CROWN_LOGO from "../public/pic/logo/crown.png";
import TAKA_LOGO from "../public/pic/logo/taka.png";
import HOME_LOGO from "../public/pic/logo/home.png";
import MIDDLE_LOGO from "../public/pic/logo/middleLogo.png";
import GIFT_LOGO from "../public/pic/logo/gift.png";

const OMGBDApp = () => {
  return (
    <div className="max-w-md mx-auto bg-[#6a041f] text-white font-sans min-h-screen relative pb-24 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-3 bg-[#7d0628] sticky top-0 z-20 shadow-md">
        <div className="flex items-center gap-1">
          <div className="text-2xl font-black italic tracking-tighter shadow-sm">
            <span className="text-white">OMG</span>
            <span className="text-[#22c55e]">BD</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-[#fcd34d] text-[#fcd34d] px-4 py-1 rounded-full text-sm font-bold">
            লগইন
          </button>
          <button className="bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] text-[#7d0628] px-4 py-1 rounded-full text-sm font-bold relative">
            <span className="absolute -top-3 -right-2 text-xl">🎁</span>
            নিবন্ধন
          </button>
          <button className="text-white ml-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="p-2 space-y-3">
        {/* Hero Banner (FIXED WRAPPER) */}
        <div className="relative rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg">
          <img
            src={BANNER_IMAGE}
            alt="Main Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Announcement Ticker */}
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 bg-[#1a2e35] rounded-full border border-yellow-500/30 px-3 py-1.5 flex items-center gap-2 overflow-hidden h-9">
            <span className="text-sm shrink-0 z-10 bg-[#1a2e35] pr-1">📢</span>

            <div className="relative flex-1 overflow-hidden">
              {/* The Wrapper that holds two copies of the text */}
              <div className="flex whitespace-nowrap animate-infinite-scroll">
                <span className="text-xs text-gray-200 font-medium px-4">
                  OMGBD আপনাকে নববর্ষের শুভেচ্ছা জানাচ্ছে —
                </span>
                {/* This second span fills the gap */}
                <span className="text-xs text-gray-200 font-medium px-4">
                  OMGBD আপনাকে নববর্ষের শুভেচ্ছা জানাচ্ছে —
                </span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-b from-orange-400 to-orange-600 p-2 rounded-full shadow-lg shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </button>
        </div>

        {/* Jackpot & Promos Section */}
        <div className="grid grid-cols-12 gap-2">
          {/* Left: Jackpot */}
          <div className="col-span-7 bg-[#540018] rounded-xl border border-red-900/50 p-2 relative overflow-hidden">
            <div className="flex justify-center items-center mb-2">
              {/* Added responsive sizing to Jackpot image */}
              <img
                src={JACKPOT_IMAGE}
                alt="JACKPOT"
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Winners List */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-[#6a041f] p-1 rounded">
                <div className="flex items-center gap-1.5">
                  <img
                    src={LITTLE_PIC_1}
                    alt="Winner 1"
                    className="w-7 h-7 rounded-sm object-cover"
                  />
                  <div>
                    <div className="text-gray-300">***2ss</div>
                    <div className="text-gray-400 text-[10px]">
                      ফরচুন কয়েনস
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold">63,541</div>
              </div>

              <div className="flex justify-between items-center bg-[#6a041f] p-1 rounded">
                <div className="flex items-center gap-1.5">
                  <img
                    src={LITTLE_PIC_2}
                    alt="Winner 2"
                    className="w-7 h-7 rounded-sm object-cover"
                  />
                  <div>
                    <div className="text-gray-300">*****989</div>
                    <div className="text-gray-400 text-[10px]">এভিয়েটর</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold">43,000</div>
              </div>
            </div>
          </div>

          {/* Right: Small Promos  */}
          <div className="col-span-5 flex flex-col justify-center items-center gap-2">
            <div className="w-full flex justify-center">
              <img
                src={PROMO_BANNER_1}
                alt="Promo 1"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                src={PROMO_BANNER_2}
                alt="Promo 2"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-2">
          {[BOTTOMLINK_1, BOTTOMLINK_2, BOTTOMLINK_3, BOTTOMLINK_4].map(
            (cat, i) => (
              <div key={i} className="flex justify-between rounded-3xl">
                <img src={cat} alt="" className="object-" />
              </div>
            ),
          )}
        </div>

        {/* Game Grid */}
        <GameGrid />
      </div>
      {/* Bottom Navigation Container */}
      <div className="fixed bottom-0 w-full max-w-md z-50 left-1/2 -translate-x-1/2">
        {/* Main Nav Bar */}
        <nav className="bg-[#7d0628] flex justify-between items-end px-2 pb-2 pt-4 border-t border-red-900 shadow-[0_-5px_20px_rgba(0,0,0,0.4)]">
          {/* Home */}
          <button className="flex flex-col items-center flex-1 text-yellow-400">
            <img src={HOME_LOGO} alt="Home" className="w-7 h-7 mb-1" />
            <span className="text-[10px] font-bold">হোম</span>
          </button>

          {/* Promotion */}
          <button className="flex flex-col items-center flex-1 text-white/80">
            <img src={GIFT_LOGO} alt="Promo" className="w-7 h-7 mb-1" />
            <span className="text-[10px] font-bold">প্রমোশন</span>
          </button>

          {/* Decorative Deposit Button */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute bottom-2 flex items-center justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center bg-contain bg-no-center">
                {/* 100% Label - BROUGHT CLOSER with -right-1 */}
                <div className="absolute -top-5 -right-5 bg-[#fef08a] text-red-900 font-black px-4 py-1.5 rounded-full text-[14px] shadow-xl border-2 border-yellow-500 whitespace-nowrap z-50">
                  100%
                  <div className="absolute -bottom-1.5 left-[30%] -translate-x-1/2 w-3 h-3 bg-[#fef08a] border-r-2 border-b-2 border-yellow-500 rotate-45"></div>
                </div>

                <img
                  src={MIDDLE_LOGO}
                  alt="Deposit"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Invitation */}
          <div className="flex-1 flex flex-col items-center relative">
            {/* ৳588 Label - MOVED FURTHER RIGHT with left-[35%] */}
            <div className="absolute -top-8 left-[35%] bg-[#fef08a] text-red-900 font-black px-4 py-1.5 rounded-full text-[14px] shadow-xl border-2 border-yellow-500 whitespace-nowrap z-50">
              ৳588
              <div className="absolute -bottom-1.5 left-1/4 -translate-x-1/2 w-3 h-3 bg-[#fef08a] border-r-2 border-b-2 border-yellow-500 rotate-45"></div>
            </div>

            <button className="flex flex-col items-center text-white/80">
              <img src={TAKA_LOGO} alt="Invite" className="w-8 h-8 mb-0.5" />
              <span className="text-[10px] font-bold">আমন্ত্রণ</span>
            </button>
          </div>

          {/* Member */}
          <button className="flex flex-col items-center flex-1 text-white/80">
            <img src={CROWN_LOGO} alt="Member" className="w-7 h-7 mb-1" />
            <span className="text-[10px] font-bold">সদস্য</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default OMGBDApp;

const GameGrid = () => {
  // 1. Define your data array
  const games = [
    { id: 1, tag: "JILI", name: "সুপার এস", img: "" },
    { id: 2, tag: "JILI", name: "ফরচুন জেমস ২", img: "" },
    { id: 3, tag: "SPRIBE", name: "এভিয়েটর", img: "", special: "944.44x" },
    { id: 4, tag: "JILI", name: "বক্সিং কিং", img: "" },
    {
      id: 5,
      tag: "PG",
      name: "ওয়াইল্ড বাউন্টি শোডাউন",
      img: "",
      tagBg: "bg-gray-600",
    },
    { id: 6, tag: "FC", name: "সুপার এলিমেন্টস", img: "" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 pt-2 px-1">
      {games.map((game) => (
        <div
          key={game.id}
          className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/10 shadow-lg bg-[#2a010c]"
        >
          {/* Main Game Image Placeholder */}
          <div className="w-full h-full bg-[#3d0111] flex items-center justify-center">
            {game.img ? (
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white/10 text-xs">Image</span>
            )}
          </div>

          {/* Top Provider Tag */}
          <div
            className={`absolute top-0 left-0 ${game.tagBg || "bg-red-600"} text-white text-[9px] px-2 py-0.5 rounded-br-lg font-bold z-10`}
          >
            {game.tag}
          </div>

          {/* Favorite Icon */}
          <div className="absolute top-1.5 right-1.5 text-white/40 text-xs z-10">
            ⭐
          </div>

          {/* Special UI for Aviator (Winner Multiplier) */}
          {game.special && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-5 bg-black/20">
              <span className="text-xl font-black text-white drop-shadow-md">
                {game.special}
              </span>
              <span className="text-red-500 text-[9px] font-bold">
                ✈️ WINNER
              </span>
            </div>
          )}

          {/* Bottom Label Bar */}
          <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-[2px] py-1 text-center">
            <span className="text-white text-[10px] font-medium block truncate px-1">
              {game.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
