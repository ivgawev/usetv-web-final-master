export class NotFoundError extends Error {
  constructor() {
    super('The resource has not been found.')
    this.name = 'NotFoundError'
  }
}
