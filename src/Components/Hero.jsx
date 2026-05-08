import React from 'react';
import image from '../../public/immage.png'


const BeatsHero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ff8a8a] to-[#f54d4d] text-white font-sans overflow-hidden">

            <header className="flex justify-between items-center px-8 py-6 md:px-20">
                <div className="text-5xl font-bold tracking-wide">
									B
                </div>

                <div className="flex items-center gap-6 md:gap-10">
                    <div className="flex gap-4">
                        {['🔍', '👜', '👤'].map((icon, idx) => (
                            <button
                                key={idx}
                                className="w-11 h-11 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-all"
                            >
                                <span>{icon}</span>
                            </button>
                        ))}
                    </div>

                    <button className="flex flex-col gap-1.5">
                        <span className="w-8 h-0.5 bg-white"></span>
                        <span className="w-8 h-0.5 bg-white"></span>
                        <span className="w-8 h-0.5 bg-white"></span>
                    </button>
                </div>
            </header>

            <main className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-[calc(100vh-100px)]">

                <div className="w-full md:w-1/2 flex justify-center relative">
                    <img
                        src={image}
                        alt="Beats Pro"
                        className="w-4/5 md:w-full max-w-[550px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] -rotate-6 transform transition-transform hover:rotate-0 duration-700"
                    />
                    <span className="absolute top-0 left-10 opacity-20 text-4xl">♫</span>
                    <span className="absolute bottom-10 right-10 opacity-20 text-4xl">♪</span>
                </div>

                <div className="w-full md:w-1/2 md:pl-16 mt-10 md:mt-0 text-center md:text-left">
                    <h3 className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 opacity-90">
                        Hear it. Feel it
                    </h3>

                    <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
                        MOVE <br />
                        WITH THE <br />
                        MUSIC
                    </h1>

                    <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
                        <span className="text-4xl md:text-5xl font-bold">$ 435</span>
                        <div className="h-10 w-[2px] bg-white/30"></div>
                        <span className="text-xl md:text-2xl line-through opacity-60">$ 465</span>
                    </div>

                    <button className="bg-white text-[#f54d4d] px-12 py-5 rounded-full font-extrabold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform uppercase">
                        Buy Now
                    </button>
                </div>
            </main>
        </div>
    );
};

export default BeatsHero;