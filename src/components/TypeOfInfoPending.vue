<template>
  <v-container>
    <v-label class="lookup-label"> Type of info pending </v-label>
    <v-row>
      <v-col>
        <div class="type-of-info-pending-wrapper">
          <v-select
            v-model="selectedValues"
            :items="typesOfInfoPeding"
            label="Please select"
            multiple
            variant="outlined"
            color="on_green"
            append-inner-icon="mdi-chevron-down"
            class="field-with-green-icon type-of-info-pending"
            ref="selectRef"
            single-line
          >
            <template v-slot:prepend-item>
              <v-list-item title="Select All" @click="handleTogleSelectAll">
                <template v-slot:prepend>
                  <v-checkbox-btn color="on_green" :model-value="isSelectAll"></v-checkbox-btn>
                </template>
              </v-list-item>
            </template>
            <template v-slot:append-item>
              <div class="select-action">
                <v-btn @click="handleSubmit" class="button-done"> Done </v-btn>
              </div>
            </template>
          </v-select>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { computed } from "vue";
import { typesOfInfoPeding } from "@/list/data"

const selectedValues = ref<string[]>([]);
const selectRef = ref<HTMLInputElement | null>(null);
const isSelectAll = computed(() => {
  return selectedValues.value.length === typesOfInfoPeding.length;
});
const handleTogleSelectAll = () => {
  if (isSelectAll.value) {
    selectedValues.value = [];
  } else {
    selectedValues.value = typesOfInfoPeding.map((item) => item.value);
  }
};
const handleSubmit = () => {
  selectRef.value?.blur();
};
</script>
