
<template>
  <v-container>
      <v-label class="lookup-label">
        Date with macros
      </v-label>
      <v-row>
        <v-col>
            <v-responsive class="text-field-wrapper">
              <v-text-field
                v-model="date"
                variant="outlined"
                color="on_green"
                :placeholder=DATE_FORMAT.toLocaleLowerCase()
                @update:focused="handleFocus"
              />
            </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { ref } from 'vue';

const date = ref<string>("")

const DATE_FORMAT = "DD/MM/YYYY"

const getCountedDateValue = (inputValue: string, type: "day" | "week" | "month") => {
  const isAdd = inputValue.includes("+")
  const spliter = isAdd ? "+" : "-"
  const valueCount = inputValue.split(spliter)[1] || 0
  const dateCount = isNaN(Number(valueCount)) ? 0 : Number(valueCount)
  if (isAdd) {
    return dayjs().add(dateCount, type).format(DATE_FORMAT)
  }
  return dayjs().subtract(dateCount, type).format(DATE_FORMAT)
}

const handleFocus = (isFocus: boolean) => {
  if (!isFocus) {
    if (/d([+-]\d+)?/gi.test(date.value)) {
      date.value = getCountedDateValue(date.value, "day")
      return;
    }
    if (/w([+-]\d+)?/gi.test(date.value)) {
      date.value = getCountedDateValue(date.value, "week")
      return;
    }
    if (/m([+-]\d+)?/gi.test(date.value)) {
      date.value = getCountedDateValue(date.value, "month")
      return;
    }
    if (dayjs(date.value, DATE_FORMAT).isValid()) {
      date.value = dayjs(date.value, DATE_FORMAT).format(DATE_FORMAT)
      return
    }
    date.value = ""
  }
}

</script>