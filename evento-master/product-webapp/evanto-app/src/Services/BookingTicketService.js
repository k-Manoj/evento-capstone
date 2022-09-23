import axios from "axios";

let baseURL = "http://34.192.219.72:8080";
// let baseURL = "https://evento.stackroute.io";


export function getBookingHistorybyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/booking/book/show-details/emailId/${emailid}`)
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


  export function getOrganizerHistorybyEmailid(emailid,callback, errorcallback) {
    axios
      .get(`${baseURL}/evento/booking/shows/emailId/${emailid}`)
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

export function getBookingdetailsbyBookingid(bookingid,callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/book/show-details/bookingId/${bookingid}`)
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

  
export function registerEventAPI(payload, callback, errorcallback) {
  axios
    .post(`${baseURL}/evento/booking/shows/register-show`, payload)
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


///////////////////////////////


const headers = {
  'Content-Type': 'application/json',
}


export function getShowByLocationEventid(eventid, location, callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/shows/location/${location}/eventId/${eventid}`)
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

export function getShowByid(showid, callback, errorcallback) {
  axios
    .get(`${baseURL}/evento/booking/shows/showId/${showid}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
      return res;
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function bookShow(data, callback, errorcallback) {
  axios
    .post(`${baseURL}/evento/booking/book/show`, data, {
      headers: headers
    })
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
      return res;
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}


