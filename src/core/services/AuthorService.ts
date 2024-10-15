import AuthorMockRepository from '../../infrastructure/mock/repositories/AuthorMockRepository'
import IAuthrorsRepository from '../repositories/IAuthrorsRepository'

class AuthorService {
  constructor(
    private readonly authorRepository: IAuthrorsRepository
  ) { }

  public async getAuthorsName() {
    return await this.authorRepository.getAuthorsName()
  }

  public async getAuthors() {
    return await this.authorRepository.getAuthors()
  }
}

export default new AuthorService(new AuthorMockRepository())