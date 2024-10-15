import { FC, MouseEventHandler, useCallback, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
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

const imageNextClassName = styles['next-image-animation']
const imagePrevClassName = styles['prev-image-animation']

const assignmentClassNameImages = (element: HTMLElement, className: string) => {
  element?.classList.add(className)
  setTimeout(() => {
    element?.classList.remove(className)
  }, 200)
}

const ImagesModal: FC<ImagesModalProps> = ({ pictures }) => {
  const modalStore = useAppSelector(s => s.imagesSliderModalReducer)
  const dispatch = useAppDispatch()

  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const lastPicturesIndex = useMemo(
    () => pictures.length - 1,
    [pictures.length])

  const startSlider = useMemo(
    () => modalStore.currentPictureIndex === 0,
    [modalStore.currentPictureIndex])
  const endSlider = useMemo(
    () => modalStore.currentPictureIndex === lastPicturesIndex,
    [modalStore.currentPictureIndex, lastPicturesIndex])

  const nextPicture = useCallback(() => {
    if (endSlider) return

    else {
      dispatch(imagesSliderModalAction.incrementCurrentPictureIndex())

      if (imageRef.current)
        assignmentClassNameImages(imageRef.current, imageNextClassName)
    }
  }, [modalStore.currentPictureIndex])

  const prevPicture = useCallback(() => {
    if (startSlider) return

    else {
      dispatch(imagesSliderModalAction.decrementCurrentPictureIndex())

      if (imageRef.current)
        assignmentClassNameImages(imageRef.current, imagePrevClassName)
    }
  }, [modalStore.currentPictureIndex])

  const closeModal: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    if (modalRef.current === e.target) {
      dispatch(imagesSliderModalAction.onHideModal())
    }
  }, [])

  return (
    <>
      {!modalStore.isHide
        && createPortal(
          <WrapperModal>
            <div
              onClick={closeModal}
              ref={modalRef}
              className={styles.modal}
            >
              <div onClick={prevPicture} className={styles.button__container}>
                <PrevArrow disabled={startSlider} />
              </div>

              <div className={styles.image__container}>
                <h3>
                  <Link to={`/picture/${modalStore.currentPictureIndex + 1}`}>
                    Перейти к изображению
                  </Link>
                </h3>
                <img
                  ref={imageRef}
                  src={pictures[modalStore.currentPictureIndex]?.imageUrl}
                />
              </div>

              <div onClick={nextPicture} className={styles.button__container}>
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