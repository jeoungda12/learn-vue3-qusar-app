<template>
  <div>
    <!-- q퀘이사 m마진 b마텀 xl엑스라지 -->
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <!-- gutter는 item들의 간격 -->
    <q-form class="q-gutter-y-md">
      <q-input placeholder="닉네임" outlined dense />
      <q-input placeholder="이메일" outlined dense />
      <q-input placeholder="비밀번호(문자, 숫자조합 8자 이상)" outlined dense />
      <q-btn label="가입하기" unelevated color="primary" class="full-width" />
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
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
