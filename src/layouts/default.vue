<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <!--
          flat : 그림자 제거
          danse : 버튼 작게
        -->
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/public/icons/favicon-128x128.png" />
            </q-avatar>
            정근혁과 친구들
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="HOME" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://google.com"
          target="_blank"
        />
        <!--
          q퀘이사 m마진 y상하 md만큼
          q퀘이사 m마진 r우측 md만큼
        -->
        <q-separator class="q-my-md q-mr-md" vertical />
        <!--
          로그인 / 회원가입 버튼
          unelevated : 그림자 제거
          rounded : 둥글게
        -->
        <q-btn
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <!--
      최대 크기 지정
      margin 여백을 균등하게 주어 중앙정렬
     -->
    <q-page-container :style="pageConatinerStyles">
      <router-view />
    </q-page-container>
    <auth-dialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import AuthDialog from 'src/components/auth/AuthDialog.vue';

const route = useRoute();
const pageConatinerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

// 다이어로그 상태 관리 반응형 변수
const authDialog = ref(false);
// 다이어로그 실행 함수
const openAuthDialog = () => {
  authDialog.value = true;
};
// const openAuthDialog() {
//   authDialog.value = true;
// }
</script>
