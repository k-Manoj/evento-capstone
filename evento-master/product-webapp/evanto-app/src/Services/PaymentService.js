import axios from "axios";

let baseURL = "http://52.91.243.190:8080";
// let baseURL = "https://evento.stackroute.io";

const headers = {
    'Content-Type': 'application/json',
   
  }


export async function createOrder(data,callback, errorcallback) {
    await axios
      .post(`${baseURL}/evento/payment-gateway/create-order`,data,{
        headers: headers
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

 


export function addPaymentdetails(data,callback, errorcallback) {
    axios
      .put(`${baseURL}/evento/payment-gateway/payment-details`,data,{
        headers: headers
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

 
