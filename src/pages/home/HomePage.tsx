import { useState } from 'react'
import MasonryGallery from '../../components/masonry-gallery/MasonryGallery'
import GetAuthorsResponse from '../../core/dto/authors/GetAuthorsResponse'
import AuthorsSelect from './authors-select/AuthorsSelect'

const HomePage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState<GetAuthorsResponse | null>(null)

  return (
    <div>
      <AuthorsSelect selectedAuthor={selectedAuthor} setSelectedAuthor={setSelectedAuthor}/>

      <MasonryGallery selectedAuthor={selectedAuthor} />
    </div >
  )
}

export default HomePage