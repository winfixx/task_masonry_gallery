import { appAxios } from '../../../assets/axios/appAxios'
import GetAuthorsNameResponse from '../../../core/dto/authors/GetAuthorsNameResponse'
import GetAuthorsResponse from '../../../core/dto/authors/GetAuthorsResponse'
import IAuthrorsRepository from '../../../core/repositories/IAuthrorsRepository'

export default class AuthorMockRepository implements IAuthrorsRepository {
  public async getAuthorsName(): Promise<GetAuthorsNameResponse[]> {
    return (await appAxios
      .get<GetAuthorsNameResponse[]>('/authors')).data
      .map(a => new GetAuthorsNameResponse(a.id, a.name, a.surname))
  }

  public async getAuthors(): Promise<GetAuthorsResponse[]> {
    return (await appAxios
      .get<GetAuthorsResponse[]>('/authors')).data
  }
}