<template>
  <q-page class="row items-center justify-evenly">
     <div class="weather-cards">
         <daily-forecast-item v-for="period in forecastPeriods"
            :key="period.number"
            :forecastPeriod="period"
         ></daily-forecast-item>
     </div>
  </q-page>
</template>

<script lang="ts">
import { ForecastPeriod } from 'src/services/NWS/interfaces';
import { defineComponent, ref, onMounted } from 'vue';
import { getDailyForcastByLatLng } from '../services/NWS/WeatherAPI';
import DailyForecastItem from '../components/DailyForecastItem.vue';

export default defineComponent({
   name: 'PageIndex',

   components: { DailyForecastItem },

   setup() {
      const latLng = [ 41.1575812, -74.2531461 ],
            forecastPeriods = ref<ForecastPeriod[]>([]);

      onMounted(async () => {
         forecastPeriods.value = await getDailyForcastByLatLng(latLng);
      });

      return { forecastPeriods };
   },
});
</script>
