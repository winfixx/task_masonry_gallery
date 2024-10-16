import { FC, MouseEventHandler } from 'react'
import GetPicturesReponse from '../../../../core/dto/pictures/GetPicturesReponse'
import styles from './MasonryItem.module.scss'

interface MasonryItemProps {
  picture: GetPicturesReponse
  onOpenModal: MouseEventHandler<HTMLDivElement>
}

const MasonryItem: FC<MasonryItemProps> = ({ picture, onOpenModal }) => {
  return (
    <div
      className={styles.masonry_item}
      style={{ animationDelay: `${(picture.id - 1) / 50}s` }}
      onClick={onOpenModal}
    >
      <img src={picture.imageUrl} alt="" />

      <div className={styles.description}>
        <h4>{picture.name}</h4>
      </div>

      {/* <div className={styles['invisible-link-container']}>
        <div>
          <div title='Открыть модальное окно' className={styles['invisible-link']} onClick={onOpenModal} />

          <Link title='Перейти на страницу этого изображения' className={styles['invisible-link']} to={`/picture/${picture.id}`} />
        </div>
      </div> */}
    </div>
  )
}

export default MasonryItem