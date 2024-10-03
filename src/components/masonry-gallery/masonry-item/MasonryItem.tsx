import { FC } from 'react'
import { Link } from 'react-router-dom'
import GetPicturesReponse from '../../../core/dto/pictures/GetPicturesReponse'
import styles from './MasonryItem.module.scss'

interface MasonryItemProps {
  picture: GetPicturesReponse
}

const MasonryItem: FC<MasonryItemProps> = ({ picture }) => {
  return (
    <Link
      to={`/picture/${picture.id}`}
      className={styles.masonry_item}
      key={picture.id}
      style={{ animationDelay: `${(picture.id - 1) / 50}s` }}
    >
      <img src={picture.imageUrl} alt="" />

      <div className={styles.description}>
        <h4>{picture.name}</h4>
      </div>
    </Link>
  )
}

export default MasonryItem