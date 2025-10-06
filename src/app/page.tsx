"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rabbeimCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleRabbeim, setVisibleRabbeim] = useState<Set<number>>(new Set());

  // Scroll listener
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Rabbeim intersection observer
  useEffect(() => {
    if (!rabbeimCardRefs.current.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.getAttribute("data-index"));
            setVisibleRabbeim((prev) => new Set(prev).add(i));
          }
        });
      },
      { threshold: 0.35 }
    );
    rabbeimCardRefs.current.forEach((el) => el && observer.observe(el));
    return () =>
      rabbeimCardRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  // Video load
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const done = () => setIsVideoLoaded(true);
    v.addEventListener("loadeddata", done);
    v.addEventListener("error", done);
    v.load();
    return () => {
      v.removeEventListener("loadeddata", done);
      v.removeEventListener("error", done);
    };
  }, []);

  const rabbeim = [
    {
      name: "Rabbi Uriel Goodwin",
      title: "Mashgiach & Maggid Shiur",
      image: "/images/rabbi-uriel-goodwin.jpg",
      description: "Warm, clear guidance in avodas Hashem and derech halimud.",
      color: "from-[#b89443] to-[#d4b468]",
    },
    {
      name: "Rabbi Avrohom Connack",
      title: "Mashgiach / Bekius Head",
      image: "/images/rabbi-avrohom-connack.jpg",
      description:
        "Author of Beurei Avrohom. Decades developing disciplined, analytical lomdim.",
      color: "from-[#3d5c55] to-[#486d64]",
    },
    {
      name: "Rabbi Meir Dobkin",
      title: "Mashgiach / Mussar & Bekius",
      image: "/images/rabbis-and-talmidim-on-hike.jpg",
      description: "Mussar & structured bekius—review habits that last.",
      color: "from-[#c2a25a] to-[#d4b468]",
    },
    {
      name: "Rabbi Yaron Shulman",
      title: "Rebbi / Personal Guidance",
      image: "/images/whole-program-on-hike.jpg",
      description: "Chavrusos & hadracha toward independent sugya building.",
      color: "from-[#6f7c7e] to-[#3d5c55]",
    },
  ];

  return (
    <div className="torah-theme text-white overflow-x-hidden relative">
      {/* Header */}
  <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/75 to-transparent backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Beis Midrash Logo"
              width={210}
              height={70}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["program", "learning", "rabbeim", "outcomes"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-300 hover:text-gold-strong transition-colors capitalize"
              >
                {id}
              </a>
            ))}
            <a
              href="#apply"
              className="torah-btn-primary px-6 py-2 rounded-full text-sm font-semibold"
            >
              Apply
            </a>
          </div>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {["program", "learning", "rabbeim", "outcomes", "apply"].map(
                (id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-gray-300 hover:text-gold-strong transition-colors font-medium py-2 capitalize"
                  >
                    {id}
                  </a>
                )
              )}
              <a
                href="https://ohr.edu/forms/start.php?progid=7"
                target="_blank"
                rel="noopener noreferrer"
                className="block torah-btn-primary text-center px-6 py-3 rounded-full font-semibold"
              >
                Apply Online
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
  <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#0c0f11,#101416_65%,#141819)]">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/whole-program-on-hike.jpg"
        >
          <source src="/os-web-reel-resized.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,17,.55),rgba(12,15,17,.85))]" />
        <div
          className="absolute -inset-[40%] opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 50%,rgba(212,180,104,0.18),transparent 60%)",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-10 heading-gradient-torah torah-heading-shadow">
            Beis Midrash
          </h1>
          <a
            href="#program"
            className="torah-btn-primary px-10 py-4 rounded-full inline-block text-lg font-bold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-28 px-4 relative overflow-hidden z-10 torah-paper-section">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="torah-paper-panel p-10 md:p-12 shadow-md">
            <h2 className="text-5xl md:text-6xl font-black mb-10 heading-gradient-torah torah-heading-shadow">The Program</h2>
            <div className="space-y-6 text-[15px] md:text-base leading-relaxed ink-soft">
              <p className="ink-strong text-lg md:text-xl leading-relaxed">For the serious student already preparing Gemara with Rashi and Tosfos who seeks to become fully independent in learning.</p>
              <p>The Beis Midrash is a living, classical environment—serious energy, a large core of motivated talmidim and a culture of sincerity, discipline and simchas haTorah. Three daily sedorim form a deliberate arc: depth that trains structure and clarity; breadth that builds pace and retention; and consolidation that fixes the derech in place.</p>
              <p>A high rebbi–talmid ratio together with highly accessible Rabbeim means real hadrachah. Guidance is not an occasional meeting but an ongoing conversation in the Beis Midrash, before and after shiur, and in regular one‑on‑one sessions.</p>
              <p>Shiurim in Gemara, Halacha and Hashkafa are sourced, text‑based and interactive. The talmid is trained to read inside, to develop a disciplined map of the sugya, to test sevara and then to express it with precision. Philosophy, ethics and history are approached from their primary sources.</p>
              <p>The process moves from Gemara → Rashi → Tosfos → Rishonim → Acharonim, with method made explicit so that the talmid can reproduce it on his own. Shabbatonim and shared experiences with the Rabbeim deepen the bonds and reinforce growth.</p>
              <p className="text-sm bg-white/65 border border-[#dfddd6] rounded-xl p-5 ink-muted"><span className="text-gold-strong font-semibold">Goal:</span> להעמיד את התלמיד על רגליו – to stand the talmid on his own feet in sugya, seder and inner avodah.</p>
            </div>
          </div>
          <div className="relative h-[560px] rounded-3xl overflow-hidden border border-[#e2e0da] shadow-xl">
            <Image src="/images/whole-program-on-hike.jpg" alt="Talmidim hiking" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,17,0)_0%,rgba(12,15,17,.55)_100%)]" />
            <div className="absolute bottom-4 left-4 right-4 text-[13px] md:text-sm ink-muted bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#e2e0da]">Independence is built in stages: text → structure → sevara → articulation → retention.</div>
          </div>
        </div>
      </section>

      {/* Learning Pillars */}
      <section id="learning" className="py-32 px-4 relative z-10 bg-[linear-gradient(140deg,#f5f5f2,#ecebe7,#f2efe8)] text-[#1f2325]">
        <div className="max-w-5xl mx-auto space-y-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 heading-gradient-torah">Iyun</h2>
            <p className="leading-relaxed text-[15px] md:text-base ink-soft">We learn thoroughly so the talmid acquires a reproducible <span className="italic">derech halimud</span>. Shiur is text‑driven with genuine give‑and‑take; the method is not hidden behind polished results. We begin with the sugya inside, progress through Rashi and Tosfos, and in advanced settings move into Rishonim and then Acharonim—explaining, contrasting, isolating the yesod and testing each sevara for necessity and scope.</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 heading-gradient-torah">Bekius</h2>
            <p className="leading-relaxed text-[15px] md:text-base ink-soft">Breadth is structured—not a race. Planned cycles and scheduled review anchor retention. An annual siyum on the masechta learned b'iyun is paired with parallel coverage to widen familiarity while reinforcing disciplined review habits that last beyond the program.</p>
          </div>
            <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 heading-gradient-torah">Hashkafa & Mussar</h2>
            <p className="leading-relaxed text-[15px] md:text-base ink-soft">Regular vaadim open inyanim of hashkafa and mussar from primary sources. Individual guidance remains central: most talmidim meet weekly one‑on‑one with a Rebbi or Mashgiach; any question can be asked, including foundational areas of emunah. Relationships are real, and the personal development is paced with the growth in learning.</p>
          </div>
        </div>
      </section>

      {/* Rabbeim */}
      <section
        id="rabbeim"
        className="py-32 px-4 relative z-10 bg-[linear-gradient(180deg,#101416,#141819)]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center heading-gradient-torah torah-heading-shadow">
            The Rabbeim
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {rabbeim.map((rebbe, index) => (
              <div
                key={index}
                ref={(el) => {
                  rabbeimCardRefs.current[index] = el;
                }}
                data-index={index}
                className={`backdrop-blur-xl bg-white/5 rounded-[2.25rem] overflow-hidden border border-white/10 hover:border-gold-strong/50 transition-all duration-700 group relative ${
                  visibleRabbeim.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: visibleRabbeim.has(index)
                    ? `${index * 80}ms`
                    : "0ms",
                }}
              >
                <div className="relative h-80 bg-slate-900 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${rebbe.color} opacity-25 group-hover:opacity-35 transition-opacity duration-500 z-10`}
                  />
                  <Image
                    src={rebbe.image}
                    alt={rebbe.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-slate-900 font-bold text-[11px] shadow">
                    {rebbe.title.split(" ")[0]}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black mb-2 text-white">
                    {rebbe.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-gold-strong mb-4 font-semibold">
                    {rebbe.title}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {rebbe.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-32 px-4 relative z-10 bg-[linear-gradient(150deg,#f5f5f2,#ecebe7_55%,#f2efe8)] text-[#1f2325]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center heading-gradient-torah torah-heading-shadow">After 1–2 Years</h2>
          <div className="torah-paper-panel p-10 md:p-12 space-y-6 leading-relaxed text-[15px] md:text-base ink-soft">
            <p><span className="font-semibold ink-strong">Independent Learning:</span> You can prepare Gemara, Rashi and Tosfos with clarity, trace the structure of a sugya, engage Rishonim and Acharonim responsibly and articulate the sevara with precision.</p>
            <p><span className="font-semibold ink-strong">Advanced Level:</span> You are ready for advanced mainstream yeshiva shiurim and demanding chavrusos; the <span className="italic">derech halimud</span> has become your own process.</p>
            <p><span className="font-semibold ink-strong">Future Paths:</span> You can mainstream into a higher‑level yeshiva or live as a ben Torah in the professional world with a disciplined seder and internal yiras Shamayim.</p>
            <p className="text-sm bg-white/60 border border-[#dfddd6] rounded-xl p-5 ink-muted"><span className="text-gold-strong font-semibold">Goal Recapped:</span> Stand each talmid firmly—derech halimud, disciplined seder, inner yiras Shamayim.</p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section
        id="apply"
        className="py-28 px-4 relative z-10 bg-[linear-gradient(160deg,#f5f5f2,#ecebe7,#f2efe8)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="torah-paper-panel p-12 md:p-16 parchment-ring">
            <h2 className="text-4xl md:text-5xl font-black mb-6 heading-gradient-torah torah-heading-shadow">
              Apply
            </h2>
            <p className="ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Reach out. Short conversation. Application & placement. Begin
              sedorim.
            </p>
            <a
              href="https://ohr.edu/forms/start.php?progid=7"
              target="_blank"
              rel="noopener noreferrer"
              className="torah-btn-primary px-10 py-4 rounded-full inline-block text-lg font-bold"
            >
              Apply Online
            </a>
            <p className="ink-muted text-xs mt-4">
              We guide you through each step.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black/55 backdrop-blur-xl border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-10">
            <div>
              <h3 className="text-3xl font-black mb-4 heading-gradient-torah-light torah-heading-shadow">
                Main Beis Midrash
              </h3>
              <p className="text-gray-400 text-sm mb-1">Ohr Somayach Yeshiva</p>
              <p className="text-gray-400 text-sm">Jerusalem, Eretz Yisrael</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gold-strong uppercase tracking-wide">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
                {["program", "learning", "rabbeim", "outcomes"].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-gray-400 hover:text-gold-strong transition-colors capitalize"
                    >
                      {id}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://ohr.edu/forms/start.php?progid=7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold-strong transition-colors"
                  >
                    Apply Online
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gold-strong uppercase tracking-wide">
                Contact
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                For more information visit the Ohr Somayach website or apply
                online and we will be in touch.
              </p>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Ohr Somayach Yeshiva. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {scrollY > 800 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full torah-chip-teal text-white font-black text-xl shadow-lg hover:scale-110 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
