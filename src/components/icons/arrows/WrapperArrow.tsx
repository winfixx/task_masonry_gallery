import { FC, ReactNode } from 'react'
import styles from './WrapperArrow.module.scss'

interface WrapperArrowProps {
  children: ReactNode
  disabled: boolean
}

const WrapperArrow: FC<WrapperArrowProps> = ({ children, disabled }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <button disabled={disabled} className={styles.button}>
        {children}
      </button>
    </div>
  )
}

export default WrapperArrow