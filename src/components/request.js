const request = require('request');
const superagent = require('superagent');

function Request(url, type = 'GET', reqBody = undefined, username = undefined, password = undefined, bearerToken = undefined) {
  this.url = url;
  this.type = type;
  this.reqBody = reqBody;
  this.response = undefined;
  this.error = undefined;
  this.username = username;
  this.password = password;
  this.bearerToken = bearerToken
}

Request.prototype.makeRequest = async function() {
  if (this.type === 'GET') {
    let req = superagent.get(this.url);

    if(this.username && this.password) {
      req.auth(this.username, this.password);
    } else if (this.bearerToken) {
      req.set('Authorization', `Bearer ${this.bearerToken}`);
    }

    return req
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      })
  }

  if (this.type === 'POST') {
    let req = superagent.post(this.url);
    console.log(this.bearerToken);
    if(this.username && this.password) {
      req.auth(this.username, this.password);
    } else if (this.bearerToken) {
      
      req.set('Authorization', `Bearer ${this.bearerToken}`);
    }

    return req
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'PUT') {
    let req = superagent.put(this.url);

    if(this.username && this.password) {
      req.auth(this.username, this.password);
    } else if (this.bearerToken) {
      req.set('Authorization', `Bearer ${this.bearerToken}`);
    }

    return req
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'PATCH') {
    let req = superagent.patch(this.url);

    if(this.username && this.password) {
      req.auth(this.username, this.password);
    } else if (this.bearerToken) {
      req.set('Authorization', `Bearer ${this.bearerToken}`);
    }

    return req
      .send(this.reqBody)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }

  if (this.type === 'DELETE') {
    let req = superagent.delete(this.url);

    if(this.username && this.password) {
      req.auth(this.username, this.password);
    } else if (this.bearerToken) {
      req.set('Authorization', `Bearer ${this.bearerToken}`);
    }

    return req
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.message;
      });
  }
}

export default Request;

