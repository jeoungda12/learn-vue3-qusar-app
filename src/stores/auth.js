import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  //로그인 했는지, 안 했는지 상태 확인 변수
  const isAuthenticated = computed(() => !!user.value);

  const setUser = userData => {
    console.log('userData: ', userData);
    user.value = userData;

    //firebase 로그인 정보를 읽고, 필요한 속성만 저장한다.
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData,
        email: userData.email,
      };
    } else {
      user.value = null;
    }
  };
  return {
    user,
    isAuthenticated,
    setUser,
  };
});
