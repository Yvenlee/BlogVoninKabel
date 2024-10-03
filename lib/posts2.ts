import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Définir le répertoire où se trouvent les fichiers Markdown des posts
const postsDirectory = path.join(process.cwd(), 'posts2')

// Fonction pour obtenir les données de tous les posts triés
export function getSortedPostsData2() {
  // Récupère tous les fichiers dans le répertoire 'posts'
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Enlève l'extension ".md" pour obtenir l'identifiant du post
    const id = fileName.replace(/\.md$/, '')

    // Détermine le chemin complet du fichier
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Utilise gray-matter pour extraire les métadonnées du post
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  // Trie les posts par date en ordre décroissant (le plus récent en premier)
  return allPostsData.sort((b, a) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

// Fonction pour obtenir les données d'un post individuel en fonction de son ID
export function getPostData(id: string) {
  // Détermine le chemin complet du fichier Markdown du post
  const fullPath = path.join(postsDirectory, `${id}.md`)
  
  // Vérifie si le fichier existe avant de lire son contenu
  if (!fs.existsSync(fullPath)) {
    return null
  }

  // Lit le contenu du fichier Markdown
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Utilise gray-matter pour extraire les métadonnées et le contenu du post
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  }
}
