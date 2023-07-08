
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
import { ref } from 'vue';

const date = ref<string>("")

const DATE_FORMAT = "DD/MM/YYYY"

const dayToMs = 24 * 60 * 60 * 1000

const DATE_UNIT_TO_MS = {
  "day": dayToMs,
  "week": 7 * dayToMs,
  "month": 30 * dayToMs,
}

const dateRegex = /^\d{2}\/\d{2}\/\d{4,}$/

const isValidDate = (date: string) => {
  return dateRegex.test(date)
}

const formatNumberInDate = (num: number) => {
  if (0 < num && num < 10) {
    return "0" + num
  }
  return num
}

const formatDate = (date: Date | number | string) => {
  const dateObj = new Date(date)
  const dateOfMonth = formatNumberInDate(dateObj.getDate())
  const month = formatNumberInDate(dateObj.getMonth() + 1)
  const year = formatNumberInDate(dateObj.getFullYear())
  return [dateOfMonth, month, year].join("/")

}

const getCountedDateValue = (inputValue: string, type: "day" | "week" | "month") => {
  const isAdd = inputValue.includes("+")
  const spliter = isAdd ? "+" : "-"
  const valueCount = inputValue.split(spliter)[1] || 0
  const dateCount = isNaN(Number(valueCount)) ? 0 : Number(valueCount)
  const msCount = DATE_UNIT_TO_MS[type] * dateCount
  if (isAdd) {
    return formatDate(Date.now() + msCount)
  }
  return formatDate(Date.now() - msCount)
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
    if (isValidDate(date.value)) {
      return;
    }
    date.value = ""
  }
}

</script>