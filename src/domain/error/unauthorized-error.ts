export class UnauthorizedError extends Error {
  constructor() {
    super('You are not authorized to access the requested resource.')
    this.name = 'UnauthorizedError'
  }
}
