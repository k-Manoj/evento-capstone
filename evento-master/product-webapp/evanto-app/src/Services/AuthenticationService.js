import axios from "axios";

let baseURL = "http://54.204.69.223:8080";
// let baseURL = "https://evento.stackroute.io";
const headers = {
    'Content-Type': 'application/json',
}

export function getUserbyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/authentication/evento/getId/${emailid}`)
      .then((res) => {
        if (callback != null) {
          callback(res.data);
        }
      })
      .catch((err) => {
        if (errorcallback != null) {
          errorcallback(err);
        }
      });
  }

  export function authenticateUser(data,callback, errorcallback) {
    axios
      .post(`${baseURL}/evento/authentication/authenticate`,data ,{
        headers:headers
      })
      .then((res) => {
        if (callback != null) {
          callback(res);
        }
      })
      .catch((err) => {
        if (errorcallback != null) {
          errorcallback(err);
        }
      });
  }
