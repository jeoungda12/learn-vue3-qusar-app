<template>
  <q-page padding>
    <div class="text-h4">커뮤니티목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <!--
        :는 v-bind의 축약형이다
        PostList에 posts객체를 전달한다.
      -->
      <post-list :items="posts" />
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';
const router = useRouter();

//Araay.from API를 사용하여 테스트 데이터 생성
const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  title: 'Vie3 Firebase 강의' + index,
  contents:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse tempore molestiae nobis voluptates quae aspernatur possimus nemo beatae quasi deserunt? Voluptate porro assumenda maxime! Facilis tenetur sequi ratione provident consequatur?',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));
</script>

<style lang="scss" scoped></style>
