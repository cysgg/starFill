class Response {
  constructor() {
    // 直接定义属性让body可以自己stringify
    this.code = 0;
    this.data = null;
    this.message = '';
    this.debug = null;
  }
}

class ErrorResponse extends Response {
  constructor(props) {
    super();

    // 意料之外的错误，unexpected的undefined等
    this.code = 2;
    this.data = null;
    this.message = props.message;

  }
}

class DataResponse extends Response {
  constructor(props) {
    super();
    this.code = 0;
    this.data = props;
    this.message = 'success';
  }
}

class SuccessResponse extends Response {
  constructor(message) {
    super();
    this.code = 0;
    this.data = null;
    this.message = message || 'success';
  }
}

module.exports = { SuccessResponse, DataResponse, ErrorResponse };
