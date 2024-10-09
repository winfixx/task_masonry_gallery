import { FC } from 'react'
import WrapperArrow from '../WrapperArrow'

interface NextArrowProps {
  disabled: boolean
}

const NextArrow: FC<NextArrowProps> = ({disabled}) => {
  return (
    <WrapperArrow disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </WrapperArrow>
  )
}

export default NextArrow