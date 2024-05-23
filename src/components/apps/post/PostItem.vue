<template>
  <q-item class="bg-grey-2 q-pt-md" clickable :to="'/posts/${id}'">
    <!-- avatar 속성은 avatar에 어올리게 여백이 지정된다 -->
    <q-item-section avatar top>
      <!-- 유저 썸네일 -->
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
      </q-avatar>
    </q-item-section>
    <!--
      q-item-section은 flex box로 되어있고 기본값이 colum(세로배치)로 되어있다.
      <div> 태그로 감싸면 flex 아이템이 되지 않는다.
    -->
    <q-item-section>
      <div class="flex items-center">
        <span>닉네임&nbsp;&middot;&nbsp;3일 전</span>
        <q-chip class="q-ml-sm" dense color="primary" text-color="white">
          {{ category }}
        </q-chip>
      </div>
      <div class="text-h6 q-mt-sm">{{ title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in tags" :key="tag" class="q-mr-sm">#{{ tag }}</span>
      </div>
      <div class="text-grey-6 q-my-sm ellipsis-2-lines">{{ contents }}</div>
      <!-- items-center : 수평정렬 -->
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <q-icon name="sym_o_visibility" color="grey" size="xs" />
            <span class="text-grey q-ml-xs text-body2">{{ readCount }}</span>
            <q-tooltip :offset="[0, 4]">조회수</q-tooltip>
          </div>
          <!--
            아이콘 사용을 위해서는 quasar.config.js 에서 추가하고
            공식문서 icon 항목에 있는 name명을 사용한다.
          -->
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-icon name="sym_o_sms" color="grey" size="xs" />
            <span class="text-grey q-ml-xs text-body2">{{ commentCount }}</span>
            <q-tooltip :offset="[0, 4]">댓글수</q-tooltip>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <!-- 버블링에 의해서 Card 클릭을 막기위해 click.prevent를 설정해준다. -->
            <q-btn class="full-width" flat dense @click.prevent>
              <q-icon name="sym_o_favorite" color="grey" size="xs" />
              <span class="text-grey q-ml-xs text-body2">{{ likeCount }}</span>
              <q-tooltip :offset="[0, 4]">좋아요</q-tooltip>
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent>
              <q-icon name="sym_o_bookmark" color="grey" size="xs" />
              <span class="text-grey q-ml-xs text-body2">{{
                bookmarkCount
              }}</span>
              <q-tooltip :offset="[0, 4]">북마크</q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  readCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  bookmarkCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  createTime: {
    type: Date,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  uid: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
