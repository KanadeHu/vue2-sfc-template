<template>
  <div>
    <div>{{ a }}</div>

    <div>{{ count }}</div>
    <button @click="increment">自增</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/store'

const a = ref(0)
const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<style lang="scss"></style>
