import { getDistanceFromLatLonInKm } from 'src/lib/geo';
import {
   PointsResponse,
   Coordinates,
   ForecastPeriod,
   ForecastResponse,
   ObservationStationInfo,
   StationsResponse,
} from './interfaces';

// TODO: Use the Vuex store for this "cache";
const cachedPoints: { latLng: Coordinates; data: PointsResponse }[] = [];

export async function getPointsData(latLng: Coordinates): Promise<PointsResponse> {
   const existing = cachedPoints.find((item) => { return item.latLng === latLng; });

   if (existing) {
      return existing.data;
   }

   const resp = await fetch(`https://api.weather.gov/points/${latLng[0]},${latLng[1]}`),
         data = await resp.json();

   cachedPoints.push({ latLng, data });

   return data;
}

export async function getForecastURL(latLng: Coordinates): Promise<string> {
   const pointsData = await getPointsData(latLng);

   return pointsData.properties.forecast;
}

export async function getDailyForcastByLatLng(latLng: Coordinates): Promise<ForecastPeriod[]> {
   const url = await getForecastURL(latLng);

   const resp = await fetch(url),
         data: ForecastResponse = await resp.json();

   return data.properties.periods;
}

export async function getClosestStation(latLng: Coordinates): Promise<ObservationStationInfo> {
   const pointsData = await getPointsData(latLng),
         resp = await fetch(pointsData.properties.observationStations),
         data: StationsResponse = await resp.json();

   const sortedFeatures = data.features
      .sort((a, b) => {
         const aDis = getDistanceFromLatLonInKm(latLng, a.geometry.coordinates),
               bDis = getDistanceFromLatLonInKm(latLng, b.geometry.coordinates);

         return aDis - bDis;
      });

   return sortedFeatures[0];
}

export async function getForecastByStation(station: ObservationStationInfo): Promise<ForecastPeriod[]> {
   const resp = await fetch(station.properties.forecast),
         data: ForecastResponse = await resp.json();

   return data.properties.periods;
}
