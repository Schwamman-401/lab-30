function Request(url, type = 'GET') {
  this.url = url;
  this.type = type;
  this.response = undefined;
}

export default Request;

