export class MissingParamError extends Error {
  constructor(param: string) {
    super(`Param ${param} is required.`)
    this.name = 'MissingParamError'
  }
}
