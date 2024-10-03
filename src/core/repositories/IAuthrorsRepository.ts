import GetAuthorsNameResponse from '../dto/authors/GetAuthorsNameResponse'
import GetAuthorsResponse from '../dto/authors/GetAuthorsResponse'

export default interface IAuthrorsRepository {
  getAuthorsName(): Promise<GetAuthorsNameResponse[]>
  getAuthors(): Promise<GetAuthorsResponse[]>
}