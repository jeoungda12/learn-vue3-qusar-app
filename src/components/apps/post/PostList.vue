<template>
  <q-list bordered separator />
  <post-item v-for="item in items" :key="item.id" v-bind="item" />
</template>

<script setup>
import PostItem from './PostItem.vue';
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
