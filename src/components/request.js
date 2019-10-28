const request = require('request');

function Request(url, type = 'GET', reqBody = undefined) {
  this.url = url;
  this.type = type;
  this.reqBody = reqBody;
  this.response = undefined;
}

Request.prototype.makeRequest = async function() {
  if (this.type === 'GET') {
    request
      .get(this.url, (err, res, body) => {
        if (err) {
          console.log('Request Error');
          this.response = err;
        } else {
          console.log('Got Body!');
          this.response = body;
        }
      })
  }
}

export default Request;

