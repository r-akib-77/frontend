import JACKPOT_IMAGE from "../public/pic/jackpot.jpg";
import LITTLE_PIC_1 from "../public/pic/littlePic1.jpg";
import LITTLE_PIC_2 from "../public/pic/littlePic2.jpg";
import BANNER_IMAGE from "../public/pic/banner1.jpg";
import PROMO_BANNER_1 from "../public/pic/sideBanner1.jpg";
import PROMO_BANNER_2 from "../public/pic/sideBanner2.jpg";
import BOTTOMLINK_1 from "../public/pic/link1.jpg";
import BOTTOMLINK_2 from "../public/pic/link2.jpg";
import BOTTOMLINK_3 from "../public/pic/link3.jpg";
import BOTTOMLINK_4 from "../public/pic/link4.jpg";

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
        <div className="flex items-center gap-2">
          {/* The container now has a fixed height and relative positioning to act as a window */}
          <div className="flex-1 bg-[#1a2e35] rounded-full border border-yellow-500/30 px-3 py-1.5 flex items-center gap-2 overflow-hidden h-9">
            <span className="text-sm shrink-0">📢</span>

            {/* 1. Removed 'whitespace-nowrap' from the parent if necessary.
      2. Using <marquee> is the quickest fix for a classic betting site look.
      3. If using pure Tailwind/CSS, we ensure the text starts from the right.
    */}
            <marquee
              className="text-xs text-gray-200 font-medium"
              scrollamount="5"
            >
              OMGBD আপনাকে নববর্ষের শুভেচ্ছা জানাচ্ছে
            </marquee>
          </div>

          {/* Button stays fixed on the right */}
          <button className="bg-gradient-to-b from-orange-400 to-orange-600 p-2 rounded-full shadow-lg shrink-0 active:scale-90 transition-transform">
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

          {/* Right: Small Promos */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="">
              <img src={PROMO_BANNER_1} alt="" />
            </div>
            <div className="">
              <img src={PROMO_BANNER_2} className="object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {[BOTTOMLINK_1, BOTTOMLINK_2, BOTTOMLINK_3, BOTTOMLINK_4].map(
            (cat, i) => (
              <div
                key={cat}
                className={`flex flex-col items-center justify-center py-3 rounded-lg border border-red-800/50 cursor-pointer ${i === 0 ? "bg-[#b91c1c]" : "bg-[#540018]"}`}
              >
                <img src={cat} alt="" />
              </div>
            ),
          )}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-yellow-200 to-yellow-600 rounded-xl overflow-hidden aspect-[3/4] border border-yellow-400">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              JILI
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="absolute bottom-0 w-full bg-black/40 text-center py-1">
              <span className="text-white text-xs font-bold drop-shadow">
                সুপার এস
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-yellow-500 to-orange-600 rounded-xl overflow-hidden aspect-[3/4] border border-yellow-500">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              JILI
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="absolute bottom-0 w-full bg-black/40 text-center py-1">
              <span className="text-white text-xs font-bold drop-shadow">
                ফরচুন জেমস ২
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#0f172a] rounded-xl overflow-hidden aspect-[3/4] border border-green-500">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              SPRIBE
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="flex h-full items-center justify-center flex-col pb-4">
              <span className="text-2xl font-black text-white">944.44x</span>
              <span className="text-red-500 text-[10px]">✈️ WINNER</span>
            </div>
            <div className="absolute bottom-0 w-full bg-yellow-600 text-center py-1">
              <span className="text-white text-xs font-bold">এভিয়েটর</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-gradient-to-b from-blue-900 to-red-900 rounded-xl overflow-hidden aspect-[3/4] border border-blue-500">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              JILI
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="absolute bottom-0 w-full bg-black/40 text-center py-1">
              <span className="text-white text-xs font-bold drop-shadow">
                বক্সিং কিং
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative bg-gradient-to-b from-yellow-700 to-black rounded-xl overflow-hidden aspect-[3/4] border border-yellow-600">
            <div className="absolute top-0 left-0 bg-gray-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              PG
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="absolute bottom-0 w-full bg-black/40 text-center py-1">
              <span className="text-white text-[10px] font-bold drop-shadow">
                ওয়াইল্ড বাউন্টি শোডাউন
              </span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative bg-gradient-to-b from-blue-500 to-green-600 rounded-xl overflow-hidden aspect-[3/4] border border-green-400">
            <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-br-lg font-bold">
              FC
            </div>
            <div className="absolute top-1 right-1 text-white/50 text-sm">
              ⭐
            </div>
            <div className="absolute bottom-0 w-full bg-black/40 text-center py-1">
              <span className="text-white text-[10px] font-bold drop-shadow">
                সুপার এলিমেন্টস
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Deposit Labels */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-40 w-full max-w-md px-10 justify-between pointer-events-none">
        <div className="bg-[#fef08a] text-red-900 font-black px-3 py-1 rounded-lg text-sm shadow-lg border border-yellow-400 pointer-events-auto">
          100%
        </div>
        <div className="bg-[#fef08a] text-red-900 font-black px-3 py-1 rounded-lg text-sm shadow-lg border border-yellow-400 pointer-events-auto">
          ৳588
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-[#7d0628] flex justify-between items-end px-2 pb-2 pt-3 border-t border-red-900 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] z-30">
        <button className="flex flex-col items-center flex-1 text-yellow-400">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span className="text-[10px] font-bold">হোম</span>
        </button>

        <button className="flex flex-col items-center flex-1 text-gray-300 hover:text-white">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-[10px] font-bold">প্রমোশন</span>
        </button>

        <div className="flex-1 flex justify-center relative">
          <button className="absolute bottom-2 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 border-4 border-[#7d0628] shadow-xl z-50 hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 text-red-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H14a1 1 0 100-2H8.414l1.293-1.293z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-[10px] font-black text-red-900 mt-0.5">
              ডিপোজিট
            </span>
          </button>
        </div>

        <button className="flex flex-col items-center flex-1 text-gray-300 hover:text-white">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
          <span className="text-[10px] font-bold">আমন্ত্রণ</span>
        </button>

        <button className="flex flex-col items-center flex-1 text-gray-300 hover:text-white">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-[10px] font-bold">সদস্য</span>
        </button>
      </nav>
    </div>
  );
};

export default OMGBDApp;
