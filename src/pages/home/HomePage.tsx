import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import MasonryGallery from '../../components/masonry-gallery/MasonryGallery'
import AppSelect, { IAppSelectOption } from '../../components/select/AppSelect'
import AuthorService from '../../core/services/AuthorService'
import PictureService from '../../core/services/PictureService'

const HomePage = () => {
  const [selectedAuthorId, setSelectedAuthorId] = useState('')

  const authorsNameQuery = useQuery({
    queryKey: ['authorsNameList'],
    queryFn: async () => await AuthorService.getAuthorsName()
  })

  const picturesQuery = useQuery({
    queryKey: ['picturesQuery'],
    queryFn: async () => await PictureService.getPictures(undefined, +selectedAuthorId),
  })

  useEffect(() => {
    picturesQuery.refetch()
  }, [selectedAuthorId])

  const optionList: IAppSelectOption[] = []
  if (authorsNameQuery.isSuccess) {
    authorsNameQuery.data.forEach(a => {
      optionList.push({ value: a.id.toString(), label: `${a.name} ${a.surname}` })
    })
  }

  return (
    <div>
      <AppSelect
        optionsList={optionList}
        selectedOption={selectedAuthorId}
        setSelectedOption={setSelectedAuthorId}
      />

      <MasonryGallery pictures={picturesQuery.data}/>
    </div >
  )
}

export default HomePage