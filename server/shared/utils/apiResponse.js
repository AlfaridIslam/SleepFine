class ApiResponse {
  constructor(res) {
    this.res = res;
    this.statusCode = 200;
    this.success = true;
    this.message = '';
    this.data = null;
    this.error = null;
  }

  status(code) {
    this.statusCode = code;
    this.success = code < 400;
    return this;
  }

  message(msg) {
    this.message = msg;
    return this;
  }

  data(data) {
    this.data = data;
    return this;
  }

  error(error) {
    this.error = error;
    this.success = false;
    return this;
  }

  send() {
    const response = {
      success: this.success,
      statusCode: this.statusCode
    };

    if (this.message) {
      response.message = this.message;
    }

    if (this.data) {
      response.data = this.data;
    }

    if (this.error) {
      response.error = this.error;
    }

    if (!this.success && !this.message && this.error) {
      response.message = this.error;
    }

    return this.res.status(this.statusCode).json(response);
  }
}

export default ApiResponse;
