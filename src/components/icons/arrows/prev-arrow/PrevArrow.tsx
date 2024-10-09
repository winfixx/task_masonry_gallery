import { FC } from 'react'
import WrapperArrow from '../WrapperArrow'

interface PrevArrowProps {
  disabled: boolean
}

const PrevArrow: FC<PrevArrowProps> = ({ disabled }) => {
  return (
    <WrapperArrow disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
      </svg>
    </WrapperArrow>
  )
}

export default PrevArrow