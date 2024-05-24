<template>
  <q-page padding>
    <post-details />

    <q-separator class="q-my-xl" />
    <post-comments />
  </q-page>
</template>

<script setup>
import PostDetails from './componets/PostDetails.vue';
import PostComments from './componets/PostComments.vue';
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  width: 800px
</route>
