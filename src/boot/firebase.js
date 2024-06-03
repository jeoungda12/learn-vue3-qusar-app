import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useAuthStore } from 'src/stores/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBlmoJoHA4SOyCOXCllAn677PDsAfDKn_c',
  authDomain: 'jung-vue3-firebase-app.firebaseapp.com',
  projectId: 'jung-vue3-firebase-app',
  storageBucket: 'jung-vue3-firebase-app.appspot.com',
  messagingSenderId: '47945161590',
  appId: '1:47945161590:web:8d0f9b65a7b4bcffd33857',
  measurementId: 'G-225VB313Z5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  //유저 정보 확인, 로그인이나 로그아웃 시 실행되는 메서드
  onAuthStateChanged(auth, user => {
    console.log('user', user);
    authStore.setUser(user);
  });
});
