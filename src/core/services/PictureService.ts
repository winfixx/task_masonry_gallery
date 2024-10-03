import PictureMockRepository from '../../infrastructure/mock/repositories/PictureMockRepository'
import GetPictureByIdReponse from '../dto/pictures/GetPictureByIdReponse'
import GetPicturesReponse from '../dto/pictures/GetPicturesReponse'
import IPictureRepository from '../repositories/IPictureRepository'

class PictureService {
  constructor(
    private readonly pictureRepository: IPictureRepository
  ) { }

  public getPictures(limit?: number, authorId?: number): Promise<GetPicturesReponse[]> {
    return this.pictureRepository.getPictures(limit, authorId)
  }

  public getPictureById(pictureId: number): Promise<GetPictureByIdReponse> {
    return this.pictureRepository.getPictureById(pictureId)
  }
}

export default new PictureService(new PictureMockRepository())