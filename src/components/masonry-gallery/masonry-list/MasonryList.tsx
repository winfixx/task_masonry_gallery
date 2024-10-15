import { FC } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import GetPicturesReponse from '../../../core/dto/pictures/GetPicturesReponse'
import { useAppDispatch } from '../../../hooks/redux'
import { imagesSliderModalAction } from '../../../redux/reducers/imagesSliderModalSlice'
import MasonryItem from './masonry-item/MasonryItem'
import styles from './MasonryList.module.scss'

interface MasonryListProps {
  pictures: GetPicturesReponse[]
}

const MasonryList: FC<MasonryListProps> = ({ pictures }) => {
  const dispatch = useAppDispatch()

  return (
    <ResponsiveMasonry
      className={styles.masonry}
      columnsCountBreakPoints={{ 0: 1, 250: 2, 500: 3, 900: 4, 1024: 5, 1200: 6 }}
    >
      <Masonry className={styles.masonry_container}>
        {pictures.map((p, pIndex) =>
          <MasonryItem
            key={p.id}
            picture={p}
            onOpenModal={() =>
              dispatch(imagesSliderModalAction
                .onShowModal({ currentPictureIndex: pIndex }))}
          />)}
      </Masonry>
    </ResponsiveMasonry>

  )
}

export default MasonryList