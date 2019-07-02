// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCAIvzyahzqTV581KajVvTv_JzRiGneVyE",
    authDomain: "bluetooth-sensor-reader.firebaseapp.com",
    databaseURL: "https://bluetooth-sensor-reader.firebaseio.com",
    projectId: "bluetooth-sensor-reader",
    storageBucket: "bluetooth-sensor-reader.appspot.com",
    messagingSenderId: "91673564851"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
