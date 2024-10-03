import { FC } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import GetPicturesReponse from '../../core/dto/pictures/GetPicturesReponse'
import styles from './MasonryGallery.module.scss'
import MasonryItem from './masonry-item/MasonryItem'

interface MasonryGalleryProps {
  pictures: GetPicturesReponse[] | undefined
}

const MasonryGallery: FC<MasonryGalleryProps> = ({ pictures }) => {
  return (
    <>
      {pictures
        ? <>
          <ResponsiveMasonry
            className={styles.masonry}
            columnsCountBreakPoints={{ 0: 1, 250: 2, 500: 3, 900: 4, 1024: 5, 1200: 6 }}
          >
            <Masonry className={styles.masonry_container}>
              {pictures.map(p =>
                <MasonryItem picture={p} />
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