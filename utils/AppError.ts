class AppError extends Error {
   statusCode: Number;
   status: any;
   consturctor: Function | undefined;
   constructor(message: any, statusCode: Number) {
      super(message);
      this.statusCode = statusCode;
      this.status = this.statusCode === 404 ? "Fail" : "Error";
      Error.captureStackTrace(this, this.consturctor);
      return this;
   }
}

export default AppError;
