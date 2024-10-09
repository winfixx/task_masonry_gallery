import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import MasonryGallery from '../../components/masonry-gallery/MasonryGallery'
import AuthorService from '../../core/services/AuthorService'

const HomePage = () => {
  const [selectedAuthorId, setSelectedAuthorId] = useState('')
  const [optionList, setOptionList] = useState<any>(undefined)

  const authorsNameQuery = useQuery({
    queryKey: ['authorsNameList'],
    queryFn: async () => await AuthorService.getAuthorsName()
  })

  useEffect(() => {
    if (authorsNameQuery.isSuccess)
      setOptionList(authorsNameQuery
        .data.map(a => ({ value: a.id.toString(), label: a.name + ' ' + a.surname })))
  }, [authorsNameQuery.isSuccess])

  return (
    <div>
      {optionList
        && <Select
          value={selectedAuthorId}
          onChange={(option: any) => { setSelectedAuthorId(option.value) }}
          options={optionList}
        />
      }

      <MasonryGallery selectedAuthorId={selectedAuthorId} />
    </div >
  )
}

export default HomePage