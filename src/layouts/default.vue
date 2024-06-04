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
          v-if="!authStore.isAuthenticated"
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        />
        <!-- 마이 페이지 -->
        <q-btn v-if="authStore.isAuthenticated" round flat>
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 140px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                to="/mypage/profile"
              >
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup>
                <q-item-section class="text-red" @click="varifyEmail"
                  >이메일을 인증해주세요.</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
import { useQuasar } from 'quasar';
//로그인 상태 Pinia
import { useAuthStore } from 'src/stores/auth';
//로그아웃
import {
  logout,
  generateDefaultPhotoURL,
  sendVerificationEmail,
} from 'src/services';

import AuthDialog from 'src/components/auth/AuthDialog.vue';

const $q = useQuasar();
const authStore = useAuthStore();

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
//로그아웃
const handleLogout = async () => {
  await logout();
  $q.notify('로그아웃 되었습니다!');
};

const varifyEmail = async () => {
  await sendVerificationEmail();
  $q.notify('이메일을 확인해주세요!');
};
</script>
