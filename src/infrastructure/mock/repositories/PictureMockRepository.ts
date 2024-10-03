import { appAxios } from '../../../assets/axios/appAxios'
import GetPictureByIdReponse from '../../../core/dto/pictures/GetPictureByIdReponse'
import GetPicturesReponse from '../../../core/dto/pictures/GetPicturesReponse'
import IPictureRepository from '../../../core/repositories/IPictureRepository'

export default class PictureMockRepository implements IPictureRepository {
  public async getPictures(limit?: number, authorId?: number): Promise<GetPicturesReponse[]> {
    let path = '/pictures?'

    if (limit) path += `_limit=${limit}`
    if (authorId) path += `&authorId=${authorId}`

    return (await appAxios
      .get<GetPicturesReponse[]>(path)).data
  }

  public async getPictureById(pictureId: number): Promise<GetPictureByIdReponse> {
    return (await appAxios
      .get<GetPicturesReponse>(`/pictures/${pictureId}`)).data
  }
}