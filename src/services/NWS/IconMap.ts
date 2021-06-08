import iconMap from '../../lib/iconMap.json';

export interface IconSet {
   description: string;
   day: string;
   night: string;
}

export interface IconAndDescription {
   description: string;
   url: string;
}

export function getIconUrlForImageUrl(imageUrl: string): IconAndDescription | null {
   const url = new URL(imageUrl),
         pathParts = url.pathname.split('/'),
         type = pathParts[pathParts.length - 1].split(',')[0] as keyof typeof iconMap,
         dayOrNight = pathParts[pathParts.length - 2];

   const iconSet: IconSet = iconMap[type];

   if (!iconSet) {
      return null;
   }

   return {
      description: iconSet.description,
      url: dayOrNight === 'night' ? iconSet.night : iconSet.day,
   };
}
