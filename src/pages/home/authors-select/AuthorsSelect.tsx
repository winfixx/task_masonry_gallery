import { useQuery } from '@tanstack/react-query'
import { FC, memo, useEffect, useState } from 'react'
import AuthorService from '../../../core/services/AuthorService'
import Select from 'react-select'
import GetAuthorsResponse from '../../../core/dto/authors/GetAuthorsResponse'

type TFieldsOption = {
  value: GetAuthorsResponse | null
  label: string | null
}

interface AuthorsSelectProps {
  selectedAuthor: GetAuthorsResponse | null
  setSelectedAuthor(author: GetAuthorsResponse | null): void
}

const AuthorsSelect: FC<AuthorsSelectProps> = ({ selectedAuthor, setSelectedAuthor }) => {
  const [optionList, setOptionList] = useState<TFieldsOption[] | null>()
  const [selectedOption, setSelectedOption] = useState<TFieldsOption>()

  const authorsQuery = useQuery({
    queryKey: ['authorsList'],
    queryFn: async () => await AuthorService.getAuthors()
  })

  useEffect(() => {
    if (authorsQuery.isSuccess)
      setOptionList(authorsQuery
        .data.map<TFieldsOption>(a =>
        ({
          value: a,
          label: `${a.name} ${a.surname} ${a.patronymic ? a.patronymic : ''}`.trim()
        })))
  }, [authorsQuery.isSuccess])

  const selectAuthorOnChange = (option: TFieldsOption) => {
    setSelectedAuthor(option ? option.value : null)
    setSelectedOption(option)
  }

  return (
    <>
      {optionList
        && <Select
          isClearable={true}
          placeholder='Выберите художника'
          value={selectedOption}
          onChange={option => { if (option) selectAuthorOnChange({ value: option.value, label: option.label }) }}
          options={optionList}
        />}
    </>
  )
}

export default AuthorsSelect