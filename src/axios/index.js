import axios from "axios";
const api = axios.create ({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: { 'Accept': 'application/json'}
})

api.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  export default api;

// http.defaults.timeout = 10000;

// http.interceptors.request.use(
//     config => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         config.headers.common["Authorization"] = token;
//       }
//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );
// http.interceptors.response.use(
//     response => {
//       if (response.status === 200 || response.status === 201) {
//         return Promise.resolve(response);
//       } else {
//         return Promise.reject(response);
//       }
//     },
//     error => {
//         console.log(error);
//     //   if (error.response.status) {
//     //     switch (error.response.status) {
//     //       case 400:
           
//     //        //do something
//     //         break;
        
//     //       case 401:
//     //         alert("session expired");
//     //         break;
//     //       case 403:
//     //         router.replace({
//     //           path: "/login",
//     //           query: { redirect: router.currentRoute.fullPath }
//     //         });           break;
//     //       case 404:
//     //         alert('page not exist');
//     //         break;
//     //       case 502:
//     //        setTimeout(() => {
//     //           router.replace({
//     //             path: "/login",
//     //             query: {
//     //               redirect: router.currentRoute.fullPath
//     //             }
//     //           });
//     //         }, 1000);
//     //     }
//     //     return Promise.reject(error.response);
//     //   }
//     }
//   );


// export default http;
