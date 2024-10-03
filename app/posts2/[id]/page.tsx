import Link from 'next/link';
import { getPostData } from '../../../lib/posts2';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const post = getPostData(params.id);
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }: Params) {
  const post = getPostData(params.id);
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 text-gray-100 min-h-screen">
      {/* Bouton de retour */}
      <div className="mb-6">
        <Link href="/" className="text-green-500 hover:underline hover:text-green-300 transition-colors duration-200">
          &larr; Retour à la liste des articles
        </Link>
      </div>

      {/* Titre de l'article */}
      <h1 className="text-5xl font-extrabold mb-4 text-blue-400 border-b-4 border-blue-600 pb-2">
        {post.title}
      </h1>

      {/* Date de l'article */}
      <p className="text-gray-400 mb-6 italic">{post.date}</p>

      {/* Contenu de l'article */}
      <div className="p-6 rounded-lg shadow-lg leading-relaxed text-gray-200 bg-gray-800">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
