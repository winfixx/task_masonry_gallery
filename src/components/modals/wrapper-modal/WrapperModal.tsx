import { FC, ReactNode } from 'react'
import styles from './WrapperModal.module.scss'

interface WrapperModalProps {
  children: ReactNode
}

const WrapperModal: FC<WrapperModalProps> = ({ children }) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}

export default WrapperModal