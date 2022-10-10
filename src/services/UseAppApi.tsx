// // ** JWT Service Import
// import AppApiService from './AppApiService'

// // ** Export Service as useJwt
// export default function useApi(apiOverrideConfig) {
//   const api = new AppApiService(apiOverrideConfig)

//   return {
//     api
//   }
// }

import AppApiService from "./AppApiService";

const api = new AppApiService({});

export default api;
