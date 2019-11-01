const request = require('request');
const superagent = require('superagent');

function Request(url, type = 'GET', reqBody = undefined) {
  this.url = url;
  this.type = type;
  this.reqBody = reqBody;
  this.response = undefined;
  this.error = undefined;
}

Request.prototype.makeRequest = async function() {
  if (this.type === 'GET') {
    return superagent
      .get(this.url)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      })
  }

  if (this.type === 'POST') {
    return superagent
      .post(this.url)
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'PUT') {
    return superagent
      .put(this.url)
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'PATCH') {
    return superagent
      .patch(this.url)
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'PATCH') {
    return superagent
      .delete(this.url)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }
}

export default Request;

