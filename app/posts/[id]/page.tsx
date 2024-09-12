// app/posts/[id]/page.tsx

import Link from 'next/link'
import { getPostData } from '../../../lib/posts'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Params) {
  const post = getPostData(params.id)
  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }
  return {
    title: post.title,
  }
}

export default async function Post({ params }: Params) {
  const post = getPostData(params.id)
  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bouton de retour */}
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Retour à la liste des articles
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
