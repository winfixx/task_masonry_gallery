import { FC } from 'react'
import Select from 'react-select'

interface AppSelectProps {
  optionList: any
  selected: any
  setSelected: any
}

const AppSelect: FC<AppSelectProps> = ({ optionList, selected, setSelected }) => {
  return (
    <>
      {optionList
        && <Select
          value={selected}
          onChange={(option: any) => { setSelected(option.value) }}
          options={optionList}
        />
      }
    </>
  )
}

export default AppSelect