import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app;
let config = {
  apiKey: "AIzaSyChumDfQH4Hwzd6w9i6dTtylT-Wlb4YDSA",
  authDomain: "zeroapp-10418.firebaseapp.com",
  databaseURL: "https://zeroapp-10418.firebaseio.com",
  projectId: "zeroapp-10418",
  storageBucket: "zeroapp-10418.appspot.com",
  messagingSenderId: "862207658155"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: {
        App
      },
      router
    })
  }
});
