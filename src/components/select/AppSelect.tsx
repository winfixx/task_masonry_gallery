import { FC } from 'react'

export type IAppSelectOption = {
  value: string
  label: string
}

interface AppSelectProps {
  optionsList: IAppSelectOption[]
  selectedOption: string
  setSelectedOption(option: string): void
}

const AppSelect: FC<AppSelectProps> = ({ optionsList, selectedOption, setSelectedOption }) => {
  return (
    <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
      <option value="">Выберите художника</option>
      {optionsList.map(o =>
        <option
          key={o.value}
          value={o.value}
        >
          {o.label}
        </option>)
      }
    </select>
  )
}

export default AppSelect