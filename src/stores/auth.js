import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
//VueUse. 로컬 스토리지를 반응형 데이터로 관리한다. (Pinia)
//그러면 페이지가 새로고침 돼도 Pinia값이 초기화 되지 않는다.
import { StorageSerializers, useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  // const user = ref(null);
  const user = useLocalStorage('auth/user', null, {
    //입출력이 될 때, 데이터값을 변환해주는 기능. object -> String
    serializer: StorageSerializers.object,
  });
  //로그인 했는지, 안 했는지 상태 확인 변수
  const isAuthenticated = computed(() => !!user.value);

  const setUser = userData => {
    user.value = userData;

    //firebase 로그인 정보를 읽고, 필요한 속성만 저장한다.
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
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
