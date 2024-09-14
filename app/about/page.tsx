import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar /> {/* Intégration de la navbar */}
      <div className="rounded-lg mt-6 container mx-auto px-6 py-8 bg-yellow-600 min-h-[80vh]">
        {/* Ajout de la marge entre la navbar et le contenu principal */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne gauche : Contenu des sections */}
          <div className="space-y-6 md:space-y-8">
            <header className="rounded-lg p-6 md:p-8 bg-white shadow-lg">
              <h1 className="text-4xl md:text-3xl font-bold text-black mb-4 md:mb-2">
                À propos de Vonin-Kabel Yvenlee
              </h1>
              <p className="text-black text-lg md:text-base">
                Découvrez plus en détail mon parcours et mes compétences.
              </p>
            </header>

            <section className="rounded-lg p-6 md:p-8 bg-white shadow-lg">
              <h2 className="text-2xl md:text-xl font-bold text-black mb-4 md:mb-2">
                Un peu plus sur moi
              </h2>
              <p className="text-black text-base md:text-sm">
                Je suis étudiant en cours de validation de la 2ème année de bachelor à Paris Ynov Campus. J'aime développer et j'ai toujours voulu voir ce qu'il y avait de l'autre coté de tout ce que l'on voit partout.
                Cette voie que je suis me plaît beaucoup et j'ai hâte d'en découvrir toujours plus ! J'ai appris à travailler avec NextJs, Laravel, BootStrap, Tailwind, Windows Server, PHPmyadmin, Unreal Engine afin de réaliser des projets d'école et personnels.
              </p>
            </section>

            {/* Nouvelle section : Langages informatiques maîtrisés */}
            <section className="rounded-lg p-6 md:p-8 bg-white shadow-lg">
              <h2 className="text-2xl md:text-xl font-bold text-black mb-4 md:mb-2">
                Langages informatiques maîtrisés
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-black text-base md:text-sm">
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>HTML / CSS</li>
                <li>SQL (MySQL, PostgreSQL)</li>
                <li>C#</li>
                <li>Golang</li>
              </ul>
            </section>
          </div>

          {/* Colonne droite : Contact + CV */}
          <div className="space-y-8">
            {/* Section contact */}
            <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg w-full text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact</h2>
              <p className="text-base md:text-lg">
                Vous pouvez me contacter via les informations ci-dessous :
              </p>
              <ul className="mt-4 space-y-2 text-base md:text-lg">
                <li><strong>Email :</strong> yvenlycee@gmail.com</li>
                <li><strong>Téléphone :</strong> +33 7 70 20 42 25</li>
                <li><strong>Adresse :</strong> 28 rue du Nivernais, Chevilly-Larue</li>
              </ul>
            </div>

            {/* Section CV */}
            <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg w-full text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Mon CV</h2>
              <p className="text-base md:text-lg">
                Téléchargez et consultez mon CV pour en savoir plus sur mes compétences et mes expériences.
              </p>
              <a
                href="/CvAlternance.pdf"
                className="inline-block mt-4 px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
