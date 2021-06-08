/**
 * Uses the haversine formula to calculate the distance between 2 latitude/longitude
 * coordinates.
 *
 * @param p1 first coordinate
 * @param p2 second coordinate
 * @returns the distance between the 2 points in kilometers
 */
export function getDistanceFromLatLonInKm(p1: number[], p2: number[]): number {
   const R = 6371, // Radius of the earth in km
         dLat = deg2rad(p2[0] - p1[0]),
         dLon = deg2rad(p2[1] - p2[1]);

   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
      + Math.cos(deg2rad(p1[0])) * Math.cos(deg2rad(p2[0]))
      + Math.sin(dLon / 2) * Math.sin(dLon / 2);

   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
         d = R * c; // Distance in km

   return d;
}

function deg2rad(deg: number): number {
   return deg * (Math.PI / 180);
}
