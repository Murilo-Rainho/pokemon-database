interface ControllerResponse<T> {
  httpStatusCode: number;
  result: T;
}

export default ControllerResponse;
