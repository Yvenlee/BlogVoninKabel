import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default async function Home() {
  // Récupère les données des posts
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* En-tête de la page */}
      <header className="border-b border-gray-200 pb-8 mb-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-500">
          Les expériences passées de Vonin--Kabel Yvenlee
        </h1>
        <p className="text-gray-500 mt-4">
          Découvrez mes parcours et projets précédents
        </p>
      </header>

      <div className="flex justify-start">
        <div className="bg-purple-600 p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Stage chez ThugzLife
          </h2>

          <ul className="space-y-6">
            {allPostsData.map(({ id, title, date, description }) => (
              <li
                key={id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <Link href={`/posts/${id}`} className="block text-gray-900 hover:text-indigo-600 transition-colors text-2xl font-semibold mb-2">
                  {title}
                </Link>
                <p className="text-gray-500 text-sm mb-4">{date}</p>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
