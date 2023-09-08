<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title class="collapse-card-title" collapse-icon="mdi-chevron-right">
        Title here
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-col :cols="6">
            <div class="card-wrapper">
              <v-row>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col :cols="6">
            <div class="card-wrapper">
              <v-row>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
                <v-col :cols="6">
                  <GridDropdown />
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import GridDropdown from './GridDropdown.vue';


</script>
