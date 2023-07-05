<template>

  <v-container>
      <v-label class="lookup-label">
        Date picker
      </v-label>
      <v-row>
        <v-col>
            <v-responsive class="text-field-wrapper">
              <v-text-field
                type="date"
                v-model="dateFormatted"
                persistent-hint
                @blur="date = parseDate(dateFormatted)"
                variant="outlined"
                color="on_green"
              />
            </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  
</template>
<script setup lang="ts">
import { ref } from 'vue';

const dateFormatted = ref<string>("")
const date = ref<string | undefined | null>(undefined)
const parseDate = (date: string | null) => {
  if (!date) return null
  const [month, day, year] = date.split('/')
  return `${year}-${month}-${day}`
}
</script>