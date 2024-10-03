import { getSortedPostsData } from '../lib/posts';
import { getSortedPostsData2 } from '../lib/posts2';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default async function Home() {
  const thugzLifeBlog = { title: 'Stage chez ThugzLife', data: getSortedPostsData(), linkPrefix: '/posts/' };
  const ydaysUnityBlog = { title: 'Ydays UNITY', data: getSortedPostsData2(), linkPrefix: '/posts2/' };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* En-tête de la page */}
        <header className="border-b border-gray-300 pb-8 mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-yellow-700">
            Les expériences passées de Vonin--Kabel Yvenlee
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Découvrez mes parcours et projets précédents
          </p>
        </header>

        {/* Conteneur parent avec flex */}
        <div className="flex flex-col lg:flex-row justify-start gap-6">
          {/* Div pour "Stage chez ThugzLife" */}
          <div
            className="w-full lg:max-w-md bg-gradient-to-b from-purple-800 to-purple-600 rounded-xl shadow-xl text-white h-[26rem] overflow-y-auto transition-transform transform hover:scale-105 my-4"
          >
            <h2 className="text-3xl font-bold text-center mb-6">{thugzLifeBlog.title}</h2>
            <ul className="space-y-6 px-4">
              {thugzLifeBlog.data.map(({ id, title, date, description }) => (
                <li
                  key={id}
                  className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 hover:bg-white"
                >
                  <Link href={`${thugzLifeBlog.linkPrefix}${id}`} className="block text-purple-800 hover:text-purple-600 transition-colors text-xl font-bold mb-2">
                    {title}
                  </Link>
                  <p className="text-gray-500 text-sm mb-2">{date}</p>
                  <p className="text-gray-700 leading-relaxed line-clamp-3">{description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Div pour "Ydays UNITY" avec fond gris */}
          <div
            className="w-full lg:max-w-md bg-gray-800 rounded-xl shadow-xl text-white h-[26rem] overflow-y-auto transition-transform transform hover:scale-105 my-4"
          >
            <h2 className="text-3xl font-bold text-center mb-6">{ydaysUnityBlog.title}</h2>
            <ul className="space-y-6 px-4">
              {ydaysUnityBlog.data.map(({ id, title, date, description }) => (
                <li
                  key={id}
                  className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 hover:bg-white"
                >
                  <Link href={`${ydaysUnityBlog.linkPrefix}${id}`} className="block text-gray-800 hover:text-gray-600 transition-colors text-xl font-bold mb-2">
                    {title}
                  </Link>
                  <p className="text-gray-500 text-sm mb-2">{date}</p>
                  <p className="text-gray-700 leading-relaxed line-clamp-3">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
