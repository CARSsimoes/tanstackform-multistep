<script setup lang="ts">

const props = defineProps<{
  state: any['state']
}>()
</script>

<template>
  <template v-if="props.state.meta.isTouched">
    <em v-for="error of props.state.meta.errors">{{ error }}</em>
  </template>
</template>