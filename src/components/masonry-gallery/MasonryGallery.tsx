import { useQuery } from '@tanstack/react-query'
import { FC, useEffect } from 'react'
import GetAuthorsResponse from '../../core/dto/authors/GetAuthorsResponse'
import PictureService from '../../core/services/PictureService'
import ImagesModal from '../modals/images-modal/ImagesModal'
import MasonryList from './masonry-list/MasonryList'

interface MasonryGalleryProps {
  selectedAuthor: GetAuthorsResponse | null
}

const MasonryGallery: FC<MasonryGalleryProps> = ({ selectedAuthor }) => {
  const { data: picturesData, refetch } = useQuery({
    queryKey: ['picturesQuery'],
    queryFn: async () => selectedAuthor
      ? await PictureService
        .getPictures(undefined, +selectedAuthor.id)
      : await PictureService
        .getPictures()
  })

  useEffect(() => {
    refetch()
  }, [selectedAuthor])

  return (
    <>
      {picturesData
        ? <>
          <ImagesModal pictures={picturesData} />

          <MasonryList pictures={picturesData}/>
        </>
        : <div>
          <h2>Ничего нет</h2>
        </div>}
    </>
  )
}

export default MasonryGallery