<template>
  <div>
    <!-- q퀘이사 m마진 b마텀 xl엑스라지 -->
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <!-- gutter는 item들의 간격 -->
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호"
        outlined
        dense
      />
      <DisplayError :code="error?.code" />
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          unelevated
          color="primary"
          class="full-width"
          :loading="isLoading"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            sizse="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            sizse="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>
      <!-- 라인 -->
      <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        unelevated
        color="primary"
        class="full-width"
        outline
        @click="handleSignInGoogle"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signInWithGoogle, signInWithEmail } from 'src/services';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

import DisplayError from '../DisplayError.vue';

//이벤트
const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();

const isLoading = ref(false);
const error = ref(null);
// 이메일 로그인
const form = ref({
  email: '',
  password: '',
});

const handleSignInEmail = async () => {
  try {
    isLoading.value = true;
    await signInWithEmail(form.value.email, form.value.password);
    $q.notify('환영합니다 :)');
    emit('closeDialog');
  } catch (err) {
    error.value = err;
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  } finally {
    isLoading.value = false;
  }
};

// 로그인(구글)
const handleSignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify('환영합니다! :)');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
