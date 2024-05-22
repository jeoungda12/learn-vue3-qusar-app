<template>
  <q-page padding>
    <div class="text-h4">커뮤니티목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-list bordered separator>
        <q-item v-for="post in posts" :key="post.id" clickable>
          <q-item-section>{{ post.id }} - {{ post.title }}</q-item-section>
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

//Araay.from API를 사용하여 테스트 데이터 생성
const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  title: 'Vie3 Firebase 강의' + index,
}));
</script>

<style lang="scss" scoped></style>
