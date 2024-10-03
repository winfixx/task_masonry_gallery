import GetPictureByIdReponse from '../dto/pictures/GetPictureByIdReponse'
import GetPicturesReponse from '../dto/pictures/GetPicturesReponse'

export default interface IPictureRepository {
  getPictures(limit?: number, authorId?: number): Promise<GetPicturesReponse[]>
  getPictureById(pictureId: number): Promise<GetPictureByIdReponse>
}