<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <template #header>
            <p>😊用户统计</p>
          </template>
          <p>总用户数：{{ userCount }}</p>
          <p>活跃用户数：{{ activeUserCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <p>🙌消息统计</p>
          </template>
          <p>未读消息数：{{ unreadMessageCount }}</p>
          <p>已读消息数：{{ readMessageCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <p>😁订单统计</p>
          </template>
          <p>总订单数：{{ orderCount }}</p>
          <p>待处理订单数：{{ handlerOrderCount }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <p>👍消息统计</p>
          </template>
          <p>未读消息数：{{ unreadMessageCount }}</p>
          <p>已读消息数：{{ readMessageCount }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "Welcome"
});

const userCount = ref(100);
const activeUserCount = ref(50);
const unreadMessageCount = ref(10);
const readMessageCount = ref(20);
const orderCount = ref(2000);
const handlerOrderCount = ref(20);
</script>
