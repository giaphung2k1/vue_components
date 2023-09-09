<template>
  <div class="main">
    <span class="title">{{ props.title }}</span>
    <br />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ title: { type: String, required: true } });
</script>

<style scoped>
.title {
  position: absolute;
  background-color: white;
  font-size: 16px;
  padding: 0px;
  margin-top: -0.5em;
  margin-bottom: 0px;
  margin-left: 0.5em;
}

.main {
  border: 1px rgb(var(--v-theme-on_grey)) solid;
  width: 98%;
  margin: 5px;
  padding: 10px;
}

.content {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
