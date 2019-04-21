/**
 * EasyHTTP Library
 * library for making http requests
 *
 * @version 3.0.0
 * @author Jerwin Ivan Fernandez
 * @license MIT
 *
 */

class EasyHTTP {
  // make an http get request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  // make an http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  // make an http put request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  // make an http delete request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });

    const responseData = await 'Resource delete...';
    return responseData;
  }
}