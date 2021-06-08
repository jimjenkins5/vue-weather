<template>
   <q-card class="weather-card">
      <q-card-section>
         <h5 class="weather-period-name">{{ forecastPeriod.name }}</h5>

         <div class="weather-icon-image">
            <weather-icon-image :alt="forecastPeriod.shortForcast" :url="forecastPeriod.icon"></weather-icon-image>
         </div>

         <p class="weather-short-description">{{ forecastPeriod.shortForecast }}</p>

         <ul class="weather-details">
            <li>
               <span class="label">{{ $t('temperatureLabel') }}</span>
               <span class="value">{{ forecastPeriod.temperature }}&deg; {{ forecastPeriod.temperatureUnit }}</span>
            </li>
            <li>
               <span class="label">{{ $t('windLabel') }}</span>
               <span class="value">{{ forecastPeriod.windSpeed }} {{ forecastPeriod.windDirection }}</span>
            </li>
         </ul>

         <!-- <p>{{ forecastPeriod.detailedForecast }}</p> -->
      </q-card-section>
   </q-card>
</template>

<script lang="ts">
import { ForecastPeriod } from 'src/services/NWS/interfaces';
import { defineComponent, PropType } from 'vue';
import WeatherIconImage from './WeatherIconImage.vue';

export default defineComponent({
   components: { WeatherIconImage },

   props: {
      forecastPeriod: {
         type: Object as PropType<ForecastPeriod>,
         required: true,
      },
   },

   setup(props) {
      return { forecastPeriod: props.forecastPeriod };
   },
});
</script>
