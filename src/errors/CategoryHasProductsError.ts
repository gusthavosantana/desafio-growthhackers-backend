import { HttpException, HttpStatus } from '@nestjs/common';

export default class CategoryHasProductsError extends HttpException {
  constructor(message?: string) {
    super(
      message || "Category can't be deleted because has products.",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
