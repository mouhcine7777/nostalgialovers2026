"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Info } from 'lucide-react';

const artistData = {
  "18 Juin": [
    { "name": "GLORIA GAYNOR", "image": "/18juin/gloriagaynor.webp", "youtubeId": "6dYWe1c3OyU", "genre": "Disco / Soul", "era": "70s–80s", "description": "Icône mondiale du disco, symbole d'émancipation et de puissance féminine.", "additionalInfo": "I Will Survive – L'hymne disco le plus célèbre de tous les temps, un cri de liberté universel." },
    { "name": "BLACKSTREET", "image": "/18juin/blackstreet.webp", "youtubeId": "3KL9mRus19o", "genre": "R&B", "era": "90s", "description": "Groupe américain de R&B formé par Teddy Riley, actif dans les années 90.", "additionalInfo": "No Diggity – Un chef-d'œuvre R&B des années 90, incontournable des playlists nostalgie." },
    { "name": "BLU CANTRELL", "image": "/18juin/blucantrell.webp", "youtubeId": "wfTC2o05OEw", "genre": "R&B", "era": "2000s", "description": "Chanteuse américaine révélée au début des années 2000, célèbre pour Breathe ft. Sean Paul.", "additionalInfo": "Hit 'Em Up Style – Un R&B percutant qui a conquis les charts mondiaux." },
    { "name": "SANDRA", "image": "/18juin/sandra.webp", "youtubeId": "l1DIV8V_zwQ", "genre": "Pop", "era": "80s", "description": "Chanteuse allemande, succès international dans les années 80.", "additionalInfo": "(I'll Never Be) Maria Magdalena – Une pop atmosphérique qui a marqué toute une génération." },
  ],
  "19 Juin": [
    { "name": "KAOMA", "image": "/19juin/kaoma.webp", "youtubeId": "iyLdoQGBchQ", "genre": "Lambada / Pop", "era": "80s–90s", "description": "Groupe franco-brésilien connu pour avoir popularisé la lambada.", "additionalInfo": "Lambada – Le phénomène musical brésilien qui a enflammé le monde entier." },
    { "name": "EARTH, WIND & FIRE EXPERIENCE BY AL McKAY", "image": "/19juin/ewf.webp", "youtubeId": "Gs069dndIYk", "genre": "Funk / Soul", "era": "70s–80s", "description": "Formation live réunissant d'anciens membres interprétant les titres de Earth, Wind & Fire.", "additionalInfo": "September – Un hymne funk-soul intemporel qui continue de faire vibrer les foules." },
    { "name": "ICE MC", "image": "/19juin/icemc.webp", "youtubeId": "rqs6pverp5U", "genre": "Reggae / Dance / Electronic", "era": "90s", "description": "Artiste britannique associé à la scène eurodance des années 90.", "additionalInfo": "Think About the Way – Un hit eurodance irrésistible aux accents reggae." },
    { "name": "WILLY WILLIAM", "image": "/19juin/willywilliam.webp", "youtubeId": "iOxzG3jjFkY", "genre": "Pop / Electro", "era": "2010s", "description": "Artiste et producteur français actif sur la scène pop internationale.", "additionalInfo": "Ego – Un banger afro-pop qui a conquis les clubs du monde entier." },
    { "name": "PARADISIO", "image": "/18juin/paradisio.webp", "youtubeId": "xiWtqVtd1Oo", "genre": "Eurodance", "era": "90s", "description": "Groupe belge actif sur la scène eurodance des années 90.", "additionalInfo": "Bailando – Un titre latin explosif aux rythmes entraînants." }
  ],
  "20 Juin": [
    { "name": "DJ CUT KILLER", "image": "/20juin/cutkiller.webp", "youtubeId": "sU66neLSfHQ", "genre": "Hip-Hop / DJ", "era": "90s–2000s", "description": "DJ et producteur français, figure de la scène hip-hop.", "additionalInfo": "Mixtapes cultes – Le maître du scratch qui a façonné toute une génération." },
    { "name": "VILLAGE PEOPLE", "image": "/20juin/villagepeople.webp", "youtubeId": "CS9OO0S5w2k", "genre": "Disco", "era": "70s–80s", "description": "Groupe américain emblématique de la scène disco.", "additionalInfo": "Y.M.C.A. – Le tube disco le plus festif de l'histoire." },
    { "name": "TAG TEAM", "image": "/20juin/tagteam.webp", "youtubeId": "L6mNa_QZVHg", "genre": "Hip-Hop", "era": "90s", "description": "Duo américain de hip-hop connu pour ses hits festifs.", "additionalInfo": "Whoomp! (There It Is) – Un anthem hip-hop qui dynamise les pistes de danse." },
    { "name": "DANTE THOMAS", "image": "/20juin/dante-thomas.webp", "youtubeId": "iLdvMQgltTE", "genre": "R&B", "era": "2000s", "description": "Chanteur américain actif au début des années 2000.", "additionalInfo": "Miss California – Une ballade R&B ensoleillée." },
    { "name": "CECE PENISTON", "image": "/20juin/cecepeniston.webp", "youtubeId": "xk8mm1QmtY", "genre": "Electronic / Dance", "era": "90s", "description": "Chanteuse américaine associée à la house music des années 90.", "additionalInfo": "Finally – L'hymne house des années 90, euphorique sur tous les dancefloors." },
    { "name": "THE WEATHER GIRLS", "image": "/20juin/weathergirls.webp", "youtubeId": "l5aZJBLAu1E", "genre": "Disco / Dance", "era": "80s", "description": "Duo américain connu pour ses titres disco et dance.", "additionalInfo": "It's Raining Men – L'hymne disco festif par excellence." }
  ]
};

const dayMeta = {
  "18 Juin": { label: "JEUDI" },
  "19 Juin": { label: "VENDREDI" },
  "20 Juin": { label: "SAMEDI" },
};

const ArtistCard = ({ artist, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="aspect-[3/4] relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-orange-600/80 to-transparent z-20 flex items-center justify-center rotate-[-2deg] transform -translate-y-2">
          <img
            src="/Logo.webp"
            alt="Festival Logo"
            className="h-12 object-contain transform rotate-[2deg] hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 border-2 border-orange-500/50 rounded-lg">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-lg transform -translate-x-1 -translate-y-1" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500 rounded-tr-lg transform translate-x-1 -translate-y-1" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500 rounded-bl-lg transform -translate-x-1 translate-y-1" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 rounded-br-lg transform translate-x-1 translate-y-1" />
        </div>

        <div className="absolute inset-2 rounded-lg overflow-hidden shadow-2xl">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg sm:text-xl font-bold text-white text-center font-[Montserrat] drop-shadow-lg">
              {artist.name}
            </h3>
            <p className="text-sm text-orange-300 font-[Montserrat] text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {artist.genre} • {artist.era}
            </p>
          </div>
        </div>

        <div className="absolute top-12 left-0 h-20 w-1 bg-gradient-to-b from-orange-500 to-transparent opacity-50" />
        <div className="absolute top-12 right-0 h-20 w-1 bg-gradient-to-b from-orange-500 to-transparent opacity-50" />
      </div>

      <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
    </motion.div>
  );
};

const DayTitle = ({ day }) => {
  const meta = dayMeta[day];
  return (
    <motion.div
      className="relative mb-8 md:mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center gap-3 md:gap-5">

        {/* Vertical orange bar */}
        <div
          className="w-1 flex-shrink-0 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent rounded-full"
          style={{ height: '72px' }}
        />

        {/* Text block */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className="text-orange-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {meta.label}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {day.split(' ')[0]}
            <span className="text-orange-500 ml-2 md:ml-3">
              {day.split(' ')[1].toUpperCase()}
            </span>
          </h2>
        </div>

        {/* Horizontal rules */}
        <div className="flex-1 flex flex-col gap-1.5 ml-2 md:ml-4 min-w-0">
          <div className="h-px bg-gradient-to-r from-orange-500/60 to-transparent" />
          <div className="h-px bg-gradient-to-r from-orange-500/20 to-transparent" />
        </div>

        {/* 2026 badge — hidden on small screens */}
        <div className="hidden md:flex flex-col items-center justify-center border border-orange-500/30 px-4 py-2 flex-shrink-0">
          <span className="text-orange-500/60 text-[10px] tracking-widest uppercase">2026</span>
        </div>

      </div>
    </motion.div>
  );
};

export default function LineupPage() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedArtist(null);
        setShowDescription(false);
      }
    };
    if (selectedArtist) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedArtist]);

  return (
    <main>
      <section
        className="min-h-screen pt-36 py-12 relative overflow-hidden"
        style={{ backgroundColor: '#1a0a00' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">

          {/* Page header */}
          <motion.div
            className="text-center mb-16"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black font-[Montserrat] text-white mb-3">
              LINE-UP 2026
            </h1>
            <p className="text-base md:text-lg font-[Montserrat] font-light px-4 text-orange-300">
              18 · 19 · 20 Juin 2026 — Casablanca
            </p>
          </motion.div>

          {/* All days */}
          <div className="space-y-16 md:space-y-20">
            {Object.entries(artistData).map(([day, artists]) => (
              <div key={day}>

                <DayTitle day={day} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                >
                  {artists.map((artist, index) => (
                    <ArtistCard
                      key={index}
                      artist={artist}
                      onClick={() => {
                        setSelectedArtist(artist);
                        setShowDescription(false);
                      }}
                    />
                  ))}
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="w-full max-w-5xl bg-transparent relative"
              initial={{ scale: 0.9, opacity: 0, rotateX: 30 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateX: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 30 }}
            >
              <button
                onClick={() => { setSelectedArtist(null); setShowDescription(false); }}
                className="absolute -top-10 right-0 text-white hover:text-orange-400 z-50 bg-orange-600/30 rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500">
                <div
                  className="hidden md:block w-1/3 relative"
                  style={{ backgroundImage: `url(${selectedArtist.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-[Montserrat]">
                    <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
                    <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                    {selectedArtist.description && (
                      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-sm italic">
                        {selectedArtist.description}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div
                  className="md:hidden w-full h-64 relative"
                  style={{ backgroundImage: `url(${selectedArtist.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
                    <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                    {selectedArtist.description && (
                      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-sm italic">
                        {selectedArtist.description}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-2/3 bg-black/90 p-4 md:p-6 flex flex-col">
                  <div className="flex-grow">
                    <div className="w-full aspect-video border-2 border-orange-500 rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${selectedArtist.youtubeId}?autoplay=1`}
                        title={`${selectedArtist.name} Video`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <motion.div
                    className="mt-4 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center bg-orange-600/20 px-4 py-2 rounded-full">
                      <Music className="mr-2 text-orange-400" />
                      <span className="text-white">Top Hit</span>
                    </div>
                    {selectedArtist.additionalInfo && (
                      <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="flex items-center bg-orange-600/20 px-4 py-2 rounded-full hover:bg-orange-600/30 transition-colors"
                      >
                        <Info className="mr-2 text-orange-400" />
                        <span className="text-white">À propos</span>
                      </button>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {showDescription && selectedArtist.additionalInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-orange-600/10 rounded-lg p-4"
                      >
                        <p className="text-white text-center italic">
                          {selectedArtist.additionalInfo}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}