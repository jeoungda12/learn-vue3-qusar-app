<!--
  로그인 / 회원가입 UI
  Dynamic(동적) Compents를 사용하여 동적으로 랜더링한다.
  Props를 통해 자식 컴포넌트로 데이터를 전달한다.

 -->

<template>
  <!-- @hide : 닫힐때 실행되는 이벤트 -->
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section>
        <!-- v-close-popup vue에서 제공하는 팝업 취소 속성 -->
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- V-if를 사용한 조건부 랜더링 -->
        <!--
          <signin-form
          v-if="viewMode === 'SignInForm'"
          @change-view="changeViewMode"
        />
        <sign-up-form
          v-else-if="viewMode === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" />
      -->

        <!-- 동적 컴포넌트 사용 -->
        <component
          :is="authViewCompoments[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// 컴포넌트 불러오기
// import SignInForm from './SignInForm.vue';
// import SignUpForm from './SignUpForm.vue';
// import FindPasswordForm from './FindPasswordForm.vue';
import { defineAsyncComponent, ref } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modeValue']);

// 로그인 팝법 상태 관리
const viewMode = ref('SignInForm'); //SigninForm, SignUpForm, FindPasswordForm
const changeViewMode = mode => (viewMode.value = mode);

// 동적 컴포넌트를 활용하기 위한 객체
// const authViewCompoments = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// };

// 비동기 컴포넌트
// defineAsyncComponet : 그냥 import 하게 되면, 사용하지 않아도 vue 컴포넌트가 import 된다.
// defineAsnycComponet는 초기에 로딩을 하지 않고 사용하는 시점에 로딩을 진행한다.
const authViewCompoments = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
</script>
