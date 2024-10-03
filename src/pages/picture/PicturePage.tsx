import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import PictureService from '../../core/services/PictureService'
import styles from './PicturePage.module.scss'

const PicturePage = () => {
  const { pictureId } = useParams()

  const pictureQuery = useQuery({
    queryKey: ['pictureQuery'],
    queryFn: async () => await PictureService.getPictureById(+pictureId!)
  })

  return (
    <div>
      {pictureQuery.data
        ? <div className={styles.picture_container}>
          <h1>{pictureQuery.data.name}</h1>

          <div className={styles.picture_image}>
            <img src={pictureQuery.data.imageUrl} alt="" />
          </div>
        </div>
        : <div>Ничего нет</div>
      }
    </div>
  )
}

export default PicturePage