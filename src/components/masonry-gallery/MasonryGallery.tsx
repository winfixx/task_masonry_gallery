import { useQuery } from '@tanstack/react-query'
import { FC, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import PictureService from '../../core/services/PictureService'
import { useAppDispatch } from '../../hooks/redux'
import { imagesSliderModalAction } from '../../redux/reducers/imagesSliderModalSlice'
import ImagesModal from '../modals/images-modal/ImagesModal'
import styles from './MasonryGallery.module.scss'
import MasonryItem from './masonry-item/MasonryItem'

interface MasonryGalleryProps {
  selectedAuthorId: string
}

const MasonryGallery: FC<MasonryGalleryProps> = ({ selectedAuthorId }) => {
  const dispatch = useAppDispatch()

  const { data: picturesData, refetch } = useQuery({
    queryKey: ['picturesQuery'],
    queryFn: async () => await PictureService
      .getPictures(undefined, +selectedAuthorId)
  })

  useEffect(() => {
    refetch()
  }, [selectedAuthorId])

  return (
    <>
      {picturesData
        ? <>
          <ImagesModal pictures={picturesData} />

          <ResponsiveMasonry
            className={styles.masonry}
            columnsCountBreakPoints={{ 0: 1, 250: 2, 500: 3, 900: 4, 1024: 5, 1200: 6 }}
          >
            <Masonry className={styles.masonry_container}>
              {picturesData.map((p, pIndex) =>
                <MasonryItem
                  key={p.id}
                  picture={p}
                  onOpenModal={() =>
                    dispatch(imagesSliderModalAction
                      .onShowModal({ currentPictureIndex: pIndex })
                    )}
                />
              )}
            </Masonry>
          </ResponsiveMasonry>
        </>
        : <div>
          <h2>Ничего нет</h2>
        </div>
      }
    </>
  )
}

export default MasonryGallery