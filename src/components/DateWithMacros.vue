
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
type Spliter = "/" | "-"

const date = ref<string>("")

const lastDate = ref<string>("")

const DATE_FORMAT = "MM/DD/YYYY"

const dateRegexWithSlash = /^\d{2}\/\d{2}\/\d{4,}$/

// eslint-disable-next-line no-useless-escape
const dateRegexWithDash = /^\d{2}\-\d{2}\-\d{4,}$/

const isValidDate = (date: string) => {
  return dateRegexWithSlash.test(date) || dateRegexWithDash.test(date)
}

const formatNumberInDate = (num: number) => {
  if (0 < num && num < 10) {
    return "0" + num
  }
  return num
}

const formatDate = (date: Date | number | string, spliter: Spliter) => {
  const dateObj = new Date(date)
  const dateOfMonth = formatNumberInDate(dateObj.getDate())
  const month = formatNumberInDate(dateObj.getMonth() + 1)
  const year = formatNumberInDate(dateObj.getFullYear())
  return [month, dateOfMonth, year].join(spliter)
}

const getMonthYearDateFromInput = (inputValue: string) => {
  let spliter:Spliter = "/"
  const isSlash = dateRegexWithSlash.test(inputValue)
  const isDash = dateRegexWithDash.test(inputValue)

  if (isSlash) {
    spliter = "/"
  }

  if (isDash) {
    spliter = "-"
  }
  const [month, date, year] = inputValue.split(spliter).map(Number)

  return {
    date,
    month,
    year,
    spliter
  } 
}

const getCountedDateValue = (inputValue: string, type: "day" | "week" | "month", start: string) => {
  const isAdd = inputValue.includes("+")
  const sign = isAdd ? "+" : "-"
  const valueCount = inputValue.split(sign)[1] || 0
  const dateCount = isNaN(Number(valueCount)) ? 0 : Number(valueCount)
  let { date, month, year, spliter } = getMonthYearDateFromInput(start)

  if (type === "day") {
    date = isAdd ? date + dateCount : date - dateCount
  }

  if (type === "week") {
    date = isAdd ? date + dateCount * 7 : date - dateCount * 7
  }

  if (type === "month") {
    month = isAdd ? month + dateCount : month - dateCount
  }

  return formatDate(new Date(year, month - 1, date), spliter)
}


const handleFocus = (isFocus: boolean) => {
  if (!isFocus) {
    let result = ""
    const start = lastDate.value ? lastDate.value : formatDate(new Date(), "/")
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