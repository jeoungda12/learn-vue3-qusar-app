<template>
  <div class="q-gutter-y-md">
    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input v-model="displayName" outlined dense label="닉네임" />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
    <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
          <q-input v-model="email" outlined dense label="이메일" />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from 'src/components/apps/base/BaseCard.vue';
import { useQuasar } from 'quasar';
import { updateUserEmail, updateUserProfile } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import { ref, watchEffect } from 'vue';

const authSotre = useAuthStore();
const $q = useQuasar();

const displayName = ref('');
const handleSubmitProfile = async () => {
  await updateUserProfile(displayName.value);
  $q.notify('프로필 수정 완료!');
};

const email = ref('');
const handleSubmitEmail = async () => {
  await updateUserEmail(email.value);
  $q.notify('이메일 수정 완료');
};

//초기값을 가져오기 위해 Pinia 상태값을 가져와 초기값으로 지정해준다.
//watchEffect는 상태가 변화하면 실행된다.
watchEffect(() => {
  //  (?.) 연산자는 Optinal chaning 연산자로 null 일때 defined로 반환해준다.
  displayName.value = authSotre.user?.displayName;
  email.value = authSotre.user?.email;
});
</script>

<style lang="scss" scoped></style>
