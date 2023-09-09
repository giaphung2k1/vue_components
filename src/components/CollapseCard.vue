<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title class="collapse-card-title" collapse-icon="mdi-chevron-right">
        Title here
      </v-expansion-panel-title>
      <v-expansion-panel-text class="collapse-card-body">
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
</script>
