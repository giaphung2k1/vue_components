<template>
  <v-container>
    <v-label class="lookup-label">
      Race One Column
    </v-label>
    <v-row>
      <v-col>
        <v-responsive class="text-field-wrapper">
          <v-autocomplete
            variant="outlined"
            color="on_green"
            placeholder="Please Select"
            class="field-with-green-icon"
            :hide-details="true"
            append-inner-icon="mdi-chevron-down"
            :items="newRaces"
            ref="selectRef"
            @update:model-value="selectRef.blur()"
            item-title="description"
            item-value="code"
          >
            <template v-slot:selection="{ item }">
              {{ item.raw.code }} {{ item.raw.description }}
            </template>
            <template v-slot:item="{ props: itemProps }" >
              <v-list-item v-bind="itemProps" class="option-with-bordered-index" />
            </template>
          </v-autocomplete>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { newRaces } from "@/list/data";
import { VNodeRef } from "vue";
import { ref } from "vue";

const selectRef = ref<VNodeRef | undefined>(undefined)

</script>
