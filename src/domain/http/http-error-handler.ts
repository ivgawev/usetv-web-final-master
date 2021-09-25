import { HttpStatusCode } from '@/domain/http'
import { NotFoundError, UnauthorizedError, UnexpectedError } from '@/domain/error'

export class HttpErrorHandler {
  public static handle(statusCode: HttpStatusCode): Error {
    switch (statusCode) {
      case HttpStatusCode.UNAUTHORIZED:
        return new UnauthorizedError()
      case HttpStatusCode.NOT_FOUND:
        return new NotFoundError()
      default:
        return new UnexpectedError()
    }
  }
}
