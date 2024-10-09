import { FC, MouseEventHandler, useCallback, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import GetPicturesReponse from '../../../core/dto/pictures/GetPicturesReponse'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { imagesSliderModalAction } from '../../../redux/reducers/imagesSliderModalSlice'
import NextArrow from '../../icons/arrows/next-arrow/NextArrow'
import PrevArrow from '../../icons/arrows/prev-arrow/PrevArrow'
import WrapperModal from '../wrapper-modal/WrapperModal'
import styles from './ImagesModal.module.scss'

interface ImagesModalProps {
  pictures: GetPicturesReponse[]
}

const ImagesModal: FC<ImagesModalProps> = ({ pictures }) => {
  const modalStore = useAppSelector(s => s.imagesSliderModalReducer)
  const dispatch = useAppDispatch()

  const modalRef = useRef(null)

  const lastPicturesIndex = useMemo(() => pictures.length - 1, [pictures.length])

  const startSlider = useMemo(
    () => modalStore.currentPictureIndex === 0,
    [modalStore.currentPictureIndex])
  const endSlider = useMemo(
    () => modalStore.currentPictureIndex === lastPicturesIndex,
    [modalStore.currentPictureIndex, lastPicturesIndex])

  const nextPicture = useCallback(() => {
    if (endSlider) return

    else dispatch(imagesSliderModalAction.incrementCurrentPictureIndex())
  }, [modalStore.currentPictureIndex])

  const prevPicture = useCallback(() => {
    if (startSlider) return

    else dispatch(imagesSliderModalAction.decrementCurrentPictureIndex())
  }, [modalStore.currentPictureIndex])

  const closeModal: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    if (modalRef.current === e.target) {
      dispatch(imagesSliderModalAction.onHideModal())
    }
  }, [])

  return (
    <>
      {!modalStore.isHide &&
        createPortal(
          <WrapperModal>
            <div onClick={closeModal} ref={modalRef} className={styles.modal}>
              <div onClick={prevPicture} className={styles['button__container']}>
                <PrevArrow disabled={startSlider} />
              </div>

              <div className={styles.image__container}>
                <img src={pictures[modalStore.currentPictureIndex].imageUrl} alt="" />
              </div>

              <div onClick={nextPicture} className={styles['button__container']}>
                <NextArrow disabled={endSlider} />
              </div>
            </div>
          </WrapperModal>,
          document.body
        )}
    </>
  )
}

export default ImagesModal