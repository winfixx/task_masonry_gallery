export default class Author {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public patronymic?: string
  ) { }
}