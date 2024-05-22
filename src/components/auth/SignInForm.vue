<template>
  <div>
    <!-- q퀘이사 m마진 b마텀 xl엑스라지 -->
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <!-- gutter는 item들의 간격 -->
    <q-form class="q-gutter-y-md">
      <q-input placeholder="이메일" outlined dense />
      <q-input placeholder="비밀번호" outlined dense />
      <div>
        <q-btn
          label="로그인하기"
          unelevated
          color="primary"
          class="full-width"
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
      />
    </q-form>
  </div>
</template>

<script setup>
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
