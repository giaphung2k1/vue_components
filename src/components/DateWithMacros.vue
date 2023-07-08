
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

const lastDate = ref<string>("")

const DATE_FORMAT = "DD/MM/YYYY"

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

const getMonthYearDateFromInput = (inputValue: string) => {
  const [date, month, year] = inputValue.split("/").map(Number)
  return {
    date,
    month,
    year
  } 
}

const getCountedDateValue = (inputValue: string, type: "day" | "week" | "month", start: string) => {
  const isAdd = inputValue.includes("+")
  const spliter = isAdd ? "+" : "-"
  const valueCount = inputValue.split(spliter)[1] || 0
  const dateCount = isNaN(Number(valueCount)) ? 0 : Number(valueCount)
  let { date, month, year } = getMonthYearDateFromInput(start)

  if (type === "day") {
    date = isAdd ? date + dateCount : date - dateCount
  }

  if (type === "week") {
    date = isAdd ? date + dateCount * 7 : date - dateCount * 7
  }

  if (type === "month") {
    month = isAdd ? month + dateCount : month - dateCount
  }

  return formatDate(new Date(year, month - 1, date))
}


const handleFocus = (isFocus: boolean) => {
  if (!isFocus) {
    let result = ""
    const start = lastDate.value ? lastDate.value : formatDate(new Date())
    if (/d([+-]\d+)?/gi.test(date.value)) {
      result = getCountedDateValue(date.value, "day", start)
    }
    if (/w([+-]\d+)?/gi.test(date.value)) {
      result = getCountedDateValue(date.value, "week", start)
    }
    if (/m([+-]\d+)?/gi.test(date.value)) {
      result = getCountedDateValue(date.value, "month", start)
    }
    if (isValidDate(date.value)) {
      result = date.value
    }
    lastDate.value = result
    date.value = result
  }
}

</script>