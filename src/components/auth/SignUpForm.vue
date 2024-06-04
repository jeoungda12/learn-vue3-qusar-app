<template>
  <div>
    <!-- q퀘이사 m마진 b마텀 xl엑스라지 -->
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <!-- gutter는 item들의 간격 -->
    <!--
      submit.prevent
      *submit을 하게 되면, 창이 새로 고침되는것을 막는다.
      *form tag에 있는 기본 기능을 막는다.
     -->
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="form.nickname" placeholder="닉네임" outlined dense />
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
      />
      <q-btn
        type="submit"
        label="가입하기"
        unelevated
        color="primary"
        class="full-width"
      />
      <!-- 라인 -->
      <q-separator />
      <q-btn
        label="로그인하기"
        color="black"
        class="full-width"
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { signUpWithEmail } from 'src/services';

//이벤트 정의
const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();

const form = ref({
  nickname: '',
  email: '',
  password: '',
});

const handleSubmit = async () => {
  await signUpWithEmail(form.value);
  $q.notify('가입을 환영합니다 :)');
  $q.notify('이메일에서 인증 링크를 확인해주세요.');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
