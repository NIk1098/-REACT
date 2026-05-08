import React, { useState } from "react";

const headphones = [
  { id: 1, image: "/rasim/1.png", name: "Sony Red" },
  { id: 2, image: "/rasim/2.png", name: "Sony Blue" },
  { id: 3, image: "/rasim/3.png", name: "Sony Orange" },
];

const featuresData = [
  {
    iconColor: "border-rose-100",
    title: "Battery",
    subtitle:
      "Battery 6.2V-AAC codec, enjoy seamless music experience for hours.",
    linkText: "Learn More",
  },
  {
    iconColor: "border-rose-100",
    title: "Bluetooth",
    subtitle: "Strong Bluetooth connection for crystal clear calls and music.",
    linkText: "Learn More",
  },
  {
    iconColor: "border-rose-100",
    title: "Microphone",
    subtitle:
      "High-quality microphone for professional calls and voice commands.",
    linkText: "Learn More",
  },
];

// 2. YORDAMCHI KOMPONENTLAR (Internal Components)
const FeatureCard = ({ iconColor, title, subtitle, linkText }) => (
  <div className="flex items-start gap-5 transition-all group">
    <div
      className={`flex-shrink-0 w-16 h-16 rounded-full border-2 p-1.5 ${iconColor}`}
    >
      <div
        className={`w-full h-full rounded-full ${iconColor} bg-white shadow-inner flex items-center justify-center`}
      >
        <div className="w-5 h-5 bg-rose-500 rounded-sm opacity-60"></div>
      </div>
    </div>
    <div>
      <h3 className="font-bold text-xl text-gray-900 leading-none mb-1.5">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-3 font-medium leading-relaxed max-w-sm">
        {subtitle}
      </p>
      <button className="text-rose-500 text-xs font-bold uppercase tracking-wider hover:tracking-widest transition-all">
        {linkText}
      </button>
    </div>
  </div>
);

const ColorCollection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default o'rtadagi rasm (Sony Blue)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === headphones.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? headphones.length - 1 : prev - 1));
  };

  return (
    <section className="text-center py-12 md:py-20 bg-white">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Available Colors
        </p>
        <h2 className="text-4xl md:text-5xl font-black mt-2 leading-tight">
          Our Latest <br /> colour collection 2021
        </h2>
      </div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-4 px-6">
        <button
          onClick={prevSlide}
          className="absolute left-10 z-20 p-3 rounded-full bg-white shadow-xl border border-gray-100 hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex items-end justify-center -space-x-12 relative">
          {headphones.map((headphone, index) => (
            <div
              key={headphone.id}
              className={`relative rounded-3xl transition-all duration-500 shadow-xl border border-gray-100 
                ${activeIndex === index ? "bg-white z-10 w-[28rem] h-[34rem] scale-100 opacity-100" : "bg-white/95 z-0 w-80 h-[28rem] scale-90 opacity-60"} 
                p-10 flex flex-col items-center justify-center`}
            >
              <img
                src={headphone.image}
                alt={headphone.name}
                className="w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-10 z-20 p-3 rounded-full bg-white shadow-xl border border-gray-100 hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden overflow-y-auto">
      <ColorCollection />

      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="h-px bg-gray-100" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="md:w-1/2 space-y-12">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-gray-950">
              Good headphones <br /> and loud music <br /> is all you need
            </h1>
            <div className="space-y-10 pt-4">
              {featuresData.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0 px-10">
            {/* Animatsiyali to'lqinlar */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 scale-125">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-yellow-200 opacity-60 animate-pulse"
                  style={{
                    width: `${100 + i * 30}%`,
                    height: `${100 + i * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
            <img
              src="/rasim/5.png"
              alt="Yellow Beats"
              className="w-full h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
