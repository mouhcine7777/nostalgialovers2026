"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Info } from 'lucide-react';

const artistData = {
  "3 Juillet": [
    { "name": "BONEY M XPERIENCE", "image": "/3juillet/boneyM.webp", "youtubeId": "FYGTT7YhywA", "genre": "Disco", "era": "70s", "description": "Version moderne du légendaire Boney M, célèbre pour Daddy Cool.", "additionalInfo": "Daddy Cool – Un tube disco légendaire et indémodable." },
    { "name": "THOMAS ANDERS FROM MODERN TALKING", "image": "/3juillet/thomasAnders.webp", "youtubeId": "eNvUS-6PTbs", "genre": "Pop", "era": "80s", "description": "Voix mythique de Modern Talking, célèbre pour Cheri Cheri Lady.", "additionalInfo": "Cheri Cheri Lady – Un hit eurodance culte des années 80." },
    { "name": "BILLY CRAWFORD", "image": "/3juillet/billy.webp", "youtubeId": "qBfqcVUK8Q0", "genre": "Pop", "era": "2000s", "description": "Star pop et R&B, célèbre pour Trackin.", "additionalInfo": "Trackin – Un morceau pop-R&B ultra entraînant." },
    { "name": "SHOLA AMA", "image": "/3juillet/sholaama.webp", "youtubeId": "Kd0PD5MbMnE", "genre": "R&B", "era": "90s", "description": "Icône du R&B britannique avec des hits comme You Might Need Somebody.", "additionalInfo": "You Might Need Somebody – Un classique R&B des années 90." },
    { "name": "LONDONBEAT", "image": "/3juillet/LONDONBEAT.webp", "youtubeId": "dGw3w_njQ4g", "genre": "Pop", "era": "90s", "description": "Groupe pop international, célèbre pour I've Been Thinking About You.",  "additionalInfo": "I've Been Thinking About You – Un incontournable pop des années 90." },
    { "name": "ROZALLA", "image": "/3juillet/rozalla.webp", "youtubeId": "95_dAQHui94", "genre": "Dance", "era": "90s", "description": "Légende de la dance, avec l'hymne Everybody's Free (To Feel Good).", "additionalInfo": "Everybody’s Free (To Feel Good) – L’hymne dance de la liberté." },
    { "name": "WHIGFIELD", "image": "/3juillet/whigfield.webp", "youtubeId": "8DNQRtmIMxk", "genre": "Eurodance", "era": "90s", "description": "Icône de la dance 90s, connue pour l’hymne Saturday Night.", "additionalInfo": "Saturday Night – Whigfield* : Un hit festif qui a marqué toute une génération." },
    { "name": "3T", "image": "/3juillet/3Tband.webp", "youtubeId": "EBoX-wYhs-U", "genre": "Pop", "era": "90s", "description": "Fils de Tito Jackson, stars du R&B avec Anything.", "additionalInfo": "Anything – Une ballade R&B emblématique des 90s.", "additionalInfo": "I've Been Thinking About You – Un incontournable pop des années 90." },
    { "name": "JENY PRESTON", "image": "/3juillet/jenypreston.webp", "youtubeId": "WJoaUbctbJs", "genre": "EDM", "era": "2020s", "description": "DJ Jeny Preston – DJ électrisante, mixant les classiques des années 80 et 90 pour une ambiance explosive.", "additionalInfo": "Des hits des années 80 et 90, parfaits pour électriser la piste de danse." },
    { "name": "DJ JOUDAR", "image": "/3juillet/djjoudar1.webp", "youtubeId": "mbxSNPzWW30", "genre": "Electronic/House", "era": "2000s-2010s", "description": "DJ et producteur marocain reconnu pour ses sets électroniques mélangeant sonorités orientales et beats modernes.", "additionalInfo": "Sets électroniques fusion alliant tradition marocaine et house contemporaine pour une expérience unique." }
  ],
  "4 Juillet": [
    { "name": "JENNY FROM ACE OF BASE", "image": "/4juillet/aceofbase.webp", "youtubeId": "d73tiBBzvFM", "genre": "Pop", "era": "90s", "description": "Chanteuse principale des tubes légendaires All That She Wants et The Sign, icône de la pop 90s.", "additionalInfo": "All That She Wants – Ace of Base : Un hit planétaire aux sonorités reggae-pop uniques." },
    { "name": "LOU BEGA", "image": "/4juillet/loubega.webp", "youtubeId": "EK_LN3XEcnw", "genre": "World Music", "era": "90s", "description": "Chanteur et showman reconnu pour son style swing et son tube intemporel Mambo No. 5.", "additionalInfo": "*Mambo No. 5 – Lou Bega : Un morceau festif qui a marqué toute une génération." },
    { "name": "LAS KETCHUP", "image": "/4juillet/lasketchup.webp", "youtubeId": "arZZw8NyPq8", "genre": "Latin Pop", "era": "2000s", "description": "Groupe espagnol célèbre pour The Ketchup Song (Aserejé), un phénomène musical mondial.", "additionalInfo": "The Ketchup Song (Aserejé) – Las Ketchup : Un titre ensoleillé au refrain inoubliable." },
    { "name": "LAYZEE AKA MR. PRESIDENT", "image": "/4juillet/mrpresident.webp", "youtubeId": "EScLmWJs82I", "genre": "Eurodance", "era": "90s", "description": "Rappeur et voix charismatique du tube incontournable Coco Jamboo.", "additionalInfo": "Coco Jamboo – Mr. President : Un hymne dance au groove inimitable." },
    { "name": "DOUBLE YOU", "image": "/4juillet/doble-you.webp", "youtubeId": "ujwm8YrEgI4", "genre": "Dance", "era": "90s", "description": "Groupe eurodance iconique connu pour sa reprise inoubliable de Please Don’t Go.", "additionalInfo": "Please Don’t Go – Double You : Une ballade dance émotionnelle devenue culte." },
    { "name": "MAXX", "image": "/4juillet/maxx.webp", "youtubeId": "7uhWJATdXMA", "genre": "Eurodance", "era": "90s", "description": "Duo eurodance explosif à l’origine des hits Get-A-Way et No More (I Can’t Stand It).", "additionalInfo": "Get-A-Way – Maxx : Un hit dance puissant aux beats entraînants." },
    { "name": "KELLY O FORMER CAPPELLA", "image": "/4juillet/kellyo.webp", "youtubeId": "y3KihWJRh6U", "genre": "Pop", "era": "90s", "description": "Chanteuse de Cappella et voix emblématique du titre U Got 2 Let the Music.", "additionalInfo": "U Got 2 Let the Music – Cappella : Un classique incontournable des clubs 90s." },
    { "name": "BELLINI", "image": "/4juillet/bellini.webp", "youtubeId": "fhHKYR-v0UE", "genre": "Latin Pop", "era": "90s", "description": "Groupe culte ayant enflammé les pistes de danse avec Samba de Janeiro.", "additionalInfo": "Samba de Janeiro – Bellini : Un cocktail explosif de rythmes brésiliens." },
    { "name": "LA CASSETTE DJ’S", "image": "/4juillet/lacassette.webp", "youtubeId": "kgm91oouvlE", "genre": "électro rétro", "era": "2010s", "description": "Un collectif énergique, mélangeant rétro et dance avec des sets explosifs.", "additionalInfo": "Parfait pour vous faire danser sur la piste avec des remix des années 80 et 90." },
    { "name": "TANIA EVANS ORIGINAL VOICE OF MR VAIN", "image": "/4juillet/taniaevans.webp", "youtubeId": "ZMtf_ouMTHw", "genre": "Dance", "era": "90s", "description": "Chanteuse officielle du hit Mr. Vain de Culture Beat, une voix puissante et inoubliable.", "additionalInfo": "Mr. Vain – Culture Beat : Un titre incontournable de la dance des années 90." },
    { "name": "DJ JOUDAR", "image": "/4juillet/djjoudar2.webp", "youtubeId": "mbxSNPzWW30", "genre": "Electronic/House", "era": "2000s-2010s", "description": "DJ et producteur marocain reconnu pour ses sets électroniques mélangeant sonorités orientales et beats modernes.", "additionalInfo": "Sets électroniques fusion alliant tradition marocaine et house contemporaine pour une expérience unique." }
  ],
  "5 Juillet": [
    { "name": "ATC", "image": "/5juillet/atc.webp", "youtubeId": "Se237UXFKlQ", "genre": "Eurodance", "era": "90s", "description": "Groupe eurodance allemand célèbre pour Around the World (La La La La La), un tube planétaire des années 90.", "additionalInfo": "Around the World (La La La La La) : Hit eurodance irrésistible qui a dominé les pistes de danse mondiales." },
    { "name": "TINA THE ROCK SHOW EXPERIENCE", "image": "/5juillet/tina.webp", "youtubeId": "W97tPS8O51s", "genre": "Rock", "era": "80s – 90s", "description": "Une énergie incendiaire sur scène pour célébrer les grandes divas du rock.", "additionalInfo": "Tribute show explosif rendant hommage aux légendes féminines du rock avec une performance électrisante." },
    { "name": "MONTELL JORDAN", "image": "/5juillet/montell.webp", "youtubeId": "0hiUuL5uTKc", "genre": "R&B", "era": "90s", "description": "Célèbre pour l'incontournable This Is How We Do It, un classique R&B des années 90.", "additionalInfo": "This Is How We Do It : Hymne R&B des années 90, parfait pour les soirées animées et les moments de nostalgie." },
    { "name": "LA MOVIDA IBIZA", "image": "/5juillet/movida.webp", "youtubeId": "kuLyN9ZGSqQ", "genre": "House", "era": "2000s", "description": "Groupe dance festive inspiré par l'ambiance des soirées ibériques.", "additionalInfo": "Dance énergique capturant l'esprit festif et la magie des nuits blanches d'Ibiza." },
    { "name": "SALOMÉ DE BAHIA", "image": "/5juillet/salomedebahia.webp", "youtubeId": "eCvCnCMmXRI", "genre": "Brazilian Jazz", "era": "2000s", "description": "Artiste brésilienne alliant samba et sons modernes, avec des hits comme Outro Lugar.", "additionalInfo": "Outro Lugar : Samba moderne et festive, un mélange vibrant de rythmes brésiliens et de sonorités contemporaines." },
    { "name": "MAD STUNTMAN AKA REEL 2 REAL", "image": "/5juillet/reel2reel.webp", "youtubeId": "vuo8kD5zF5I", "genre": "Dance", "era": "90s", "description": "Groupe dance des années 90, avec le célèbre I Like to Move It rendu famous par Madagascar.", "additionalInfo": "I Like to Move It : Dance explosif avec un refrain irrésistible qui fait bouger toutes les générations." },
    { "name": "C + C MUSIC FACTORY", "image": "/5juillet/ccmusicfactory.webp", "youtubeId": "LaTGrV58wec", "genre": "Dance Pop", "era": "90s", "description": "Légendes de la dance avec Gonna Make You Sweat (Everybody Dance Now) et autres hits.", "additionalInfo": "Gonna Make You Sweat : Anthem dance des années 90, entraînant et dynamique avec son célèbre 'Everybody Dance Now'." },
    { "name": "GIBSON BROTHERS", "image": "/5juillet/gibsonbrothers.webp", "youtubeId": "NKwsGIw9ASM", "genre": "Disco", "era": "70s-80s", "description": "Duo disco-salsa martiniquais, célèbre pour Que Será Mi Vida, un incontournable des années 80.", "additionalInfo": "Que Será Mi Vida : Disco-salsa entraînant avec des rythmes latins enflammés et une mélodie inoubliable." },
    { "name": "DJ JOUDAR", "image": "/5juillet/djjoudar3.webp", "youtubeId": "mbxSNPzWW30", "genre": "Electronic/House", "era": "2000s-2010s", "description": "DJ et producteur marocain reconnu pour ses sets électroniques mélangeant sonorités orientales et beats modernes.", "additionalInfo": "Sets électroniques fusion alliant tradition marocaine et house contemporaine pour une expérience unique." }
    ],
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
        {/* Main Frame */}
        <div className="absolute inset-0">
          {/* Logo Banner */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-pink-600/80 to-transparent z-20 flex items-center justify-center rotate-[-2deg] transform -translate-y-2">
            <img
              src="/Logo.webp"
              alt="Festival Logo"
              className="h-12 object-contain transform rotate-[2deg] hover:scale-110 transition-transform duration-300"
            />
          </div>
  
          {/* Decorative Border */}
          <div className="absolute inset-0 border-2 border-pink-500/50 rounded-lg">
            {/* Diagonal corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 rounded-tl-lg transform -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500 rounded-tr-lg transform translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500 rounded-bl-lg transform -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 rounded-br-lg transform translate-x-1 translate-y-1" />
          </div>
  
          {/* Main Content */}
          <div className="absolute inset-2 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Bottom Gradient Only */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
  
            {/* Artist Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center font-[Montserrat] drop-shadow-lg">
                {artist.name}
              </h3>
              <p className="text-sm text-pink-300 font-[Montserrat] text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {artist.genre} • {artist.era}
              </p>
            </div>
          </div>
  
          {/* Side Accent Lines */}
          <div className="absolute top-12 left-0 h-20 w-1 bg-gradient-to-b from-pink-500 to-transparent opacity-50" />
          <div className="absolute top-12 right-0 h-20 w-1 bg-gradient-to-b from-pink-500 to-transparent opacity-50" />
        </div>
  
        {/* Hover effect - made more subtle */}
        <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      </motion.div>
    );
  };

export default function LineupPage() {
  const [activeDay, setActiveDay] = useState('3 Juillet');
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
        style={{ backgroundColor: '#611A4F' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-black text-center mb-8 font-[Montserrat] text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            LINE-UP 2025 – C'ÉTAIT MAGIQUE !
            <p 
              className="text-base md:text-lg text-center mb-8 md:mb-9 font-[Montserrat] font-light px-4"
              style={{ color: '#FFFFFF' }}
            >
              Les artistes qui ont fait vibrer le festival – retour sur des journées mémorables !
            </p>
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 px-4">
            {Object.keys(artistData).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg font-[Montserrat] font-bold transition-all duration-300 ease-in-out
                  ${
                    activeDay === day
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-transparent border-2 border-pink-500 text-white hover:bg-pink-500/20 hover:shadow-md hover:scale-105'
                  }`}
              >
                {day}
              </button>
            ))}
          </div>

          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4"
          >
            {artistData[activeDay].map((artist, index) => (
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
      </section>

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
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 30 }}
            >
              <button 
                onClick={() => {
                  setSelectedArtist(null);
                  setShowDescription(false);
                }}
                className="absolute -top-10 right-0 text-white hover:text-pink-500 z-50 bg-pink-600/30 rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-600">
                <div 
                  className="hidden md:block w-1/3 relative"
                  style={{
                    backgroundImage: `url(${selectedArtist.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-[Montserrat]">
                    <h2 className="text-2xl font-bold font-[Montserrat]">{selectedArtist.name}</h2>
                    <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                    {selectedArtist.description && (
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm italic"
                      >
                        {selectedArtist.description}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div 
                  className="md:hidden w-full h-64 relative"
                  style={{
                    backgroundImage: `url(${selectedArtist.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h2 className="text-2xl font-bold">{selectedArtist.name}</h2>
                    <p className="text-sm opacity-80">{selectedArtist.genre} | {selectedArtist.era}</p>
                    {selectedArtist.description && (
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm italic"
                      >
                        {selectedArtist.description}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-2/3 bg-black/90 p-4 md:p-6 flex flex-col">
                  <div className="flex-grow">
                    <div className="w-full aspect-video border-2 border-pink-600 rounded-lg overflow-hidden">
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
                    <div className="flex items-center bg-pink-600/20 px-4 py-2 rounded-full">
                      <Music className="mr-2 text-pink-400" />
                      <span className="text-white">Top Hit</span>
                    </div>
                    {selectedArtist.additionalInfo && (
                      <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="flex items-center bg-pink-600/20 px-4 py-2 rounded-full hover:bg-pink-600/30 transition-colors"
                      >
                        <Info className="mr-2 text-pink-400" />
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
                        className="mt-4 bg-pink-600/10 rounded-lg p-4"
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