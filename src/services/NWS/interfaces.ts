export interface NWSGeometry {
   type: string;
   coordinates: Coordinates;
}

// This should really be a tuple (`[ number, number ]`), but eslint is freaking out when I
// use a tuples.
/* eslint-disable-next-line @typescript-eslint/no-type-alias */
export type Coordinates = number[];

export interface PointsResponse {
   id: string;
   type: string;
   geometry: NWSGeometry;
   properties: {
      '@id': string;
      '@type': string;
      cwa: string;
      forecastOffice: string;
      gridId: string;
      gridX: number;
      gridY: number;
      forecast: string;
      forecastHourly: string;
      forecastGridData: string;
      observationStations: string;
      relativeLocation: {
         type: string;
         geometry: NWSGeometry;
         properties: {
            city: string;
            state: string;
            distance: {
               value: number;
               unitCode: string;
            };
            bearing: {
               value: number;
               unitCode: string;
            };
         };
      };
      forecastZone: string;
      county: string;
      fireWeatherZone: string;
      timeZone: string;
      radarStation: string;
   };
}

export interface ForecastPeriod {
   number: number;
   name: string;
   startTime: string;
   endTime: string;
   isDaytime: boolean;
   temperature: number;
   temperatureUnit: 'F' | 'C';
   temperatureTrend: null;
   windSpeed: string;
   windDirection: string;
   icon: string;
   shortForecast: string;
   detailedForecast: string;
}

export interface ForecastResponse {
    type: 'Feature';
    geometry: {
      type: 'Polygon';
      coordinates: Coordinates[][];
    };
    properties: {
      updated: string;
      units: string;
      forecastGenerator: string;
      generatedAt: string;
      updateTime: string;
      validTimes: string;
      elevation: {
        value: number;
        unitCode: string;
      };
      periods: ForecastPeriod[];
   };
}

export interface ObservationStationInfo {
   id: string;
   geometry: NWSGeometry;
   properties: {
      '@id': string;
      '@type': string;
      elevation: {
         value: number;
         unitCode: string;
      };
      stationIdentifier: string;
      name: string;
      timeZone: string;
      forecast: string;
      county: string;
      fireWeatherZone: string;
   };
}

export interface StationsResponse {
   features: ObservationStationInfo[];
   observationStations: string[];
}
