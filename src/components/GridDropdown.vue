<template>
  <div>
    <v-label class="lookup-label"> Grid drop down </v-label>
    <v-row>
      <v-col>
        <v-autocomplete
          variant="outlined"
          density="compact"
          color="on_green"
          placeholder="Please Select"
          class="field-with-green-icon"
          :hide-details="true"
          append-inner-icon="mdi-chevron-down"
          :items="races"
          ref="selectRef"
          @update:model-value="selectRef.blur()"
        >
          <template v-slot:selection="{ item }">
            {{ item.raw.key }} {{ item.raw.title }}
          </template>
          <template v-slot:item="{ item, props: itemProps }">
            <v-list-item v-bind="itemProps" class="item-with-columns">
              <template v-slot:title>
                <div class="item-with-columns">
                  <div class="item-column first-item-column">
                    {{ item.raw.key }}
                  </div>
                  <div class="item-column second-item-column">
                    {{ item.raw.title }}
                  </div>
                  <div class="item-column third-item-column">
                    {{ item.raw.title }}
                  </div>
                </div>
              </template>
            </v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { races } from "@/list/data";
import { VNodeRef } from "vue";
import { ref } from "vue";

const selectRef = ref<VNodeRef | undefined>(undefined);
</script>
