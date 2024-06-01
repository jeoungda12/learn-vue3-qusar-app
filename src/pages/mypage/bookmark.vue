<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(20), (_, index) => ({
  id: 'A' + index,
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
