<template>
  <v-container>
    <v-label class="lookup-label"> Hospitals </v-label>
    <v-row>
      <v-col>
        <div class="table-dropdown-wrapper">
          <v-responsive class="text-field-wrapper">
            <v-text-field
              type="text"
              v-model="lookupValue"
              placeholder="Enter lookup values"
              ref="lookupInputRef"
              variant="outlined"
              :hide-details="true"
              color="on_green"
              @input="handleInput"
            >
              <template v-slot:append-inner>
                <!-- modal -->
                <Modal title="Hospital" @on-submit="handleSubmit" />
              </template>
            </v-text-field>
          </v-responsive>
          <v-table
            class="table-dropdown lookup-table"
            v-if="lookupValue.length > 0 && !isSelected"
          >
            <thead>
              <tr>
                <th
                  v-for="column in columnsFacility"
                  :key="column.key"
                  :class="column.class"
                >
                  {{ column.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-if="filteredData.length > 0">
                <tr
                  v-for="hospital in filteredData"
                  :key="hospital.hospitalName"
                  @click="
                    handleSelectItem(hospital.pincode, hospital.hospitalName)
                  "
                >
                  <td
                    v-for="column in columnsHospital"
                    :key="column.key"
                    :class="column.class"
                  >
                    {{ hospital[column.key] }}
                  </td>
                </tr>
              </template>
            </tbody>
          </v-table>
          <!-- no results -->
          <div
            v-if="filteredData.length === 0 && !isSelected"
            class="no-result"
          >
            <span class="table-text">No result</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- dropdown -->
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { columnsFacility, columnsHospital } from "@/list/data";
import Modal from "./Modal.vue";
import { Facility } from "@/types/dataTypes";
import { hospitalsListTest } from "@/list/backendData";
import { IHospital } from "@/types/backendTypes";

const lookupInputRef = ref<HTMLInputElement | null>(null);
const timeoutSearch = ref<ReturnType<typeof setTimeout> | null>(null);
const lookupValue = ref("");
const filteredData = ref<IHospital[]>(hospitalsListTest);

const isSelected = ref(false);

const handleInput = (e: Event) => {
  isSelected.value = false;
  if (timeoutSearch.value) {
    clearTimeout(timeoutSearch.value);
  }
  timeoutSearch.value = setTimeout(() => {
    const target = e.target as HTMLInputElement;
    const value = target.value
    //search for hospital here
    if (!value) {
      filteredData.value = hospitalsListTest
      return
    }
    const hospital = hospitalsListTest.filter((item) =>
      item.hospitalName.includes(value)
    );
    filteredData.value = hospital || [];
    console.log(filteredData.value);
  }, 500);
};

const handleSelectItem = (stateCod: string | number, hospitalName: string) => {
  lookupValue.value = stateCod + " " + hospitalName;
  isSelected.value = true;
};

const handleSubmit = (data: Facility) => {
  console.log(data);
};
</script>

<style scoped lang="css">
@import "@/assets/styles/lookup.css";
.state-cod-text {
  color: #00695c;
}
</style>
