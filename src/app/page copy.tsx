'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsVideoLoaded(true);
      };

      const handleError = (e: Event) => {
        console.error('Video error:', e);
        console.error('Video error details:', video.error);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const rabbeim = [
    {
      name: 'Rabbi Uriel Goodwin',
      title: 'Mashgiach and Maggid Shiur',
      image: '/images/rabbi-uriel-goodwin.jpg',
      description: 'Rabbi Goodwin serves as both Mashgiach and Maggid Shiur in the program, providing guidance in learning and personal development.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Rabbi Avrohom Connack',
      title: 'Mashgiach and Head of the Bekius Program',
      image: '/images/rabbi-avrohom-connack.jpg',
      description: 'Rabbi Avrohom Connack graduated from Wits University, Johannesburg in 1985 with BSc (Hons). After serving as SAUJS chairman in 1985, he learned at Ohr Somayach Jerusalem. After further learning at a number of other yeshivos in Eretz Yisrael he returned to Ohr Somayach to take up a Talmud teaching position. He is currently a senior Talmud Rabbi in the Beis Medrash programme and has published a series of books entitled Beurei Avrohom, demonstrating his analytical approach to Talmud study.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Rabbi Meir Dobkin',
      title: 'Mashgiach and Head of the Bekius Program',
      image: '/images/placeholder-rabbi.jpg',
      description: 'Rabbi Dobkin serves as Mashgiach and heads the Bekius program, working closely with students on their learning development.',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Rabbi Yaron Shulman',
      title: 'Rabbi in the Program',
      image: '/images/placeholder-rabbi.jpg',
      description: 'Rabbi Shulman is a member of the teaching staff, available to students for learning and personal guidance.',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-x-hidden relative">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Beis Midrash Logo"
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              The Program
            </a>
            <a href="#learning" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Learning
            </a>
            <a href="#rabbeim" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              The Rabbeim
            </a>
            <a href="#community" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Community
            </a>
            <a
              href="https://ohr.edu/forms/start.php?progid=7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#program" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                The Program
              </a>
              <a href="#learning" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Learning
              </a>
              <a href="#rabbeim" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                The Rabbeim
              </a>
              <a href="#community" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2">
                Community
              </a>
              <a
                href="https://ohr.edu/forms/start.php?progid=7"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder Image */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/whole-program-on-outing.jpg"
              alt="Beis Midrash students"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/os-web-reel-resized.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay - darker at bottom to blend into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-slate-950 z-10"></div>

        {/* Hero Content */}
        <div
          className="relative z-20 px-4 max-w-7xl mx-auto h-full flex items-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-up text-white">
              Beis Midrash
            </h1>

            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200 text-gray-200">
              Ohr Somayach, Yerushalayim
            </p>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="animate-fade-in-up animation-delay-400 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Learn More ↓
            </button>
          </div>
        </div>
      </section>

      {/* About the Program with Image */}
      <section id="program" className="py-24 px-4 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[3rem] p-12 border-2 border-cyan-400/30 shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
                The Program
              </h2>

              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-100">
                <p>
                  The Main Beis Midrash at Ohr Somayach is for students who are already capable of preparing Gemara, Rashi and Tosfos and who seek to become fully independent in their learning.
                </p>
                <p>
                  Through three daily sedorim in a warm and inclusive environment, the program trains students to become deep, advanced and developed Gemara learners, to achieve broad knowledge across Masechtos, develop understanding in hashkafa and mussar, and fosters personal growth, with multiple Rabbeim available to guide each student individually in every area.
                </p>
                <p className="text-base text-gray-300">
                  The program attracts a large body of highly motivated students from diverse spiritual backgrounds, all united in their commitment to serious learning and personal development.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
              <Image
                src="/images/whole-program-on-hike.jpg"
                alt="Program students on hike"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Learning with Images */}
      <section id="learning" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Learning
          </h2>

          <div className="space-y-12">
            {/* Iyun with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-[3rem] p-12 border-2 border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 leading-none select-none">
                  עיון
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-black shadow-lg">
                      1
                    </div>
                    <h3 className="text-5xl font-black text-cyan-300">Iyun</h3>
                  </div>
                  <p className="text-xl leading-relaxed mb-4 text-white">
                    The program teaches students how to learn a sugya through thorough and systematic analysis.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    The shiurim are text-based with a great deal of give-and-take between the Rebbe and talmidim. Students learn the method, the thought process, the mahalach—not just by watching but by actively participating in the analysis.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    The learning begins with the Gemara and progresses to Rashi and Tosfos. More advanced shiurim continue to the analysis of Rishonim and Acharonim.
                  </p>
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-xl">
                <Image
                  src="/images/boys-on-hike.jpg"
                  alt="Students learning together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bekius with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-purple-400/30 shadow-xl md:order-1">
                <Image
                  src="/images/boys-on-water-tube.jpg"
                  alt="Students on water activity"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-[3rem] p-12 border-2 border-purple-400/50 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group md:order-2">
                <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 leading-none select-none">
                  בקיאות
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-3xl font-black shadow-lg">
                      2
                    </div>
                    <h3 className="text-5xl font-black text-purple-300">Bekius</h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white">
                    The program completes an annual siyum on the masechta being learned b'iyun, ensuring comprehensive coverage and deep familiarity with the material.
                  </p>
                </div>
              </div>
            </div>

            {/* Hashkafa with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-[3rem] p-12 border-2 border-orange-400/50 shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[20rem] font-black opacity-5 leading-none select-none">
                  השקפה
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center text-3xl font-black shadow-lg">
                      3
                    </div>
                    <h3 className="text-5xl font-black text-orange-300">Hashkafa</h3>
                  </div>
                  <p className="text-xl leading-relaxed mb-4 text-white">
                    Regular vaadim explore inyanim of hashkafa and mussar. Most talmidim have weekly one-on-one sessions with one of the Rebbeim.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    Through these individual sessions, strong Rebbi-talmid relationships develop, allowing for guidance tailored to each student's level and needs.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Where necessary, fundamental issues of emunah are addressed. Students are encouraged to ask any question in an environment of openness and intellectual honesty.
                  </p>
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-orange-400/30 shadow-xl">
                <Image
                  src="/images/rabbis-and-talmidim-on-hike.jpg"
                  alt="Rabbis with students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Staff with Image */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            The Teaching Staff
          </h2>
          <p className="text-xl md:text-2xl text-center mb-16 text-gray-300">
            A high teacher-student ratio and staff of foremost scholars ensures maximum opportunity for development
          </p>

          <div className="mb-16 relative h-[500px] rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
            <Image
              src="/images/whole-program-on-outing.jpg"
              alt="Full program gathering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-10 border-2 border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-3xl font-bold mb-4 text-white">Individual Attention</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                The high teacher-student ratio ensures that each student receives individual attention and guidance. The Rabbeim are readily available for consultation on both educational and personal matters.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-10 border-2 border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-3xl font-bold mb-4 text-white">Rich Variety of Shiurim</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                The program offers advanced shiurim in Gemara, Halacha, and Hashkafa. Philosophy, ethics, and history are studied from their original sources.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl p-10 border-2 border-orange-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <h3 className="text-3xl font-bold mb-4 text-white">Methodology and Skills</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Students learn to independently prepare a folio of Talmud and engage in creative research, experiencing firsthand the process of unraveling complex Talmudic problems.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl p-10 border-2 border-green-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <h3 className="text-3xl font-bold mb-4 text-white">Community</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Shabbatonim with the Rebbeim strengthen the bonds between students and their teachers, creating a cohesive learning community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Rabbeim */}
      <section id="rabbeim" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Rabbeim
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {rabbeim.map((rebbe, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-[3rem] overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 group cursor-pointer"
              >
                <div className="relative h-96 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${rebbe.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}></div>

                  {rebbe.image !== '/images/placeholder-rabbi.jpg' ? (
                    <Image
                      src={rebbe.image}
                      alt={rebbe.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-white/50 group-hover:scale-110 transition-transform duration-700">
                      PHOTO
                    </div>
                  )}

                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-slate-900 font-bold text-sm shadow-lg z-20">
                    {rebbe.title.includes('Mashgiach') ? 'Mashgiach' : 'Maggid Shiur'}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-4xl font-black mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {rebbe.name}
                  </h3>
                  <p className="text-xl text-blue-300 mb-6 font-semibold">{rebbe.title}</p>
                  <p className="text-gray-300 leading-relaxed text-lg">{rebbe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community and Achdus with Images */}
      <section id="community" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Community and Achdus
          </h2>
          <p className="text-xl md:text-2xl text-center mb-16 text-gray-300">
            Students from diverse backgrounds united in learning and growth
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-80 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <Image
                src="/images/boys-on-hike-2.jpg"
                alt="Students hiking together"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Shabbatonim</h3>
                <p className="text-sm text-gray-300">Strengthening bonds with Rebbeim</p>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <Image
                src="/images/boys-by-kever.jpg"
                alt="Students at kever"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Spiritual Growth</h3>
                <p className="text-sm text-gray-300">Connecting to our heritage</p>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <Image
                src="/images/boys-on-water-tube-2.jpg"
                alt="Students on outing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Recreation</h3>
                <p className="text-sm text-gray-300">Building lasting friendships</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[3rem] p-12 border-2 border-cyan-400/30 shadow-2xl text-center">
            <p className="text-2xl md:text-3xl leading-relaxed text-white">
              Jews from very different spiritual backgrounds find the Yeshiva a home, whilst benefiting from a true Yeshiva experience. The bochurim of the Beis Medrash are unique in their thirst for knowledge, diligence and desire to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            After 1-2 Years
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border-2 border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 group">
              <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 flex items-center justify-center text-3xl font-black shadow-lg group-hover:rotate-180 transition-transform duration-700">
                1
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">Independent Learning</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Students develop the ability to independently prepare Gemara, Rashi, Tosfos, and master the meforshim—skills that serve them throughout their lives.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border-2 border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group">
              <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center justify-center text-3xl font-black shadow-lg group-hover:rotate-180 transition-transform duration-700">
                2
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">Advanced Level</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Students reach a level of learning equal to the advanced levels of mainstream yeshivos.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border-2 border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 group">
              <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mb-6 flex items-center justify-center text-3xl font-black shadow-lg group-hover:rotate-180 transition-transform duration-700">
                3
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">Future Paths</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Graduates are qualified to enter mainstream yeshivos at an advanced level, or prepared to be bnei Torah in the working world.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl p-12 border-2 border-orange-400/40 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Goal
            </p>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              To stand talmidim on their feet in learning and in Yiddishkeit, enabling them to either mainstream into high-level yeshivas or to be bnei Torah in the working world.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-20 -left-10 text-[15rem] font-black text-cyan-500/10 leading-none select-none">"</div>

            <div className="backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[3rem] p-12 md:p-16 border-2 border-cyan-400/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light italic text-white">
                  Ohr Somayach is a most remarkable Yeshiva. Jews from very different spiritual backgrounds find the Yeshiva a home, whilst benefiting from a true Yeshiva experience.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8">
                  The bochurim of the Beis Medrash are unique in their thirst for knowledge, diligence and desire to grow.
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border-l-4 border-cyan-400">
                  <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold">
                    It is somewhat astonishing to see bochurim transforming into lamdonim—able to understand and accurately build a sugya with its yesodot in just a few months of being in the Beis Medrash.
                  </p>
                </div>
                <p className="text-lg text-gray-300 mt-8">
                  After leaving the program, students graduate to the highest level shiurim in other renowned yeshivos, where they excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-40 px-4 relative overflow-hidden z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 30%, transparent 70%)',
            transform: `scale(${1 + scrollY * 0.0002})`
          }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Application
            </span>
          </h2>

          <p className="text-2xl md:text-3xl mb-16 text-gray-200 leading-relaxed">
            Applications are accepted online through the Ohr Somayach website
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="https://ohr.edu/forms/start.php?progid=7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-16 py-6 rounded-full text-2xl md:text-3xl font-black hover:scale-110 transform transition-all duration-300 shadow-2xl">
                Apply Online
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black/40 backdrop-blur-xl border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Main Beis Midrash
              </h3>
              <p className="text-gray-400 text-lg mb-2">Ohr Somayach Yeshiva</p>
              <p className="text-gray-400 text-lg mb-4">Jerusalem, Israel</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://ohr.edu/forms/start.php?progid=7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-300 transition-colors text-lg flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                    Apply Online
                  </a>
                </li>
                <li>
                  <a
                    href="https://ohr.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-300 transition-colors text-lg flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                    Ohr Somayach Website
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Contact</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                For more information about the Main Beis Midrash program, please visit the Ohr Somayach website or submit an application online.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 text-lg">
              © {new Date().getFullYear()} Ohr Somayach Yeshiva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating scroll-to-top button */}
      {scrollY > 1000 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50"
          style={{
            opacity: scrollY > 1000 ? 1 : 0,
            transition: 'opacity 0.3s'
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}
