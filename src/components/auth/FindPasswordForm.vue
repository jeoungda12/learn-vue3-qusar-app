<template>
  <div>
    <!-- q퀘이사 m마진 b마텀 xl엑스라지 -->
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <!-- gutter는 item들의 간격 -->
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="email" placeholder="가입한 이메일" outlined dense />
      <q-btn
        type="submit"
        label="비밀번호 재설정"
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
import { sendPasswordReset } from 'src/services';
const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();

const email = ref('');
const handleSubmit = async () => {
  await sendPasswordReset(email.value);
  $q.notify('이메일로 비밀번호 재설정 링크를 보냈어요!');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
