<template>
   <img :alt="altText" :src="imageUrl" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getIconUrlForImageUrl } from '../services/NWS/IconMap';

export default defineComponent({
   props: {
      url: {
         type: String,
         required: true,
      },

      alt: {
         type: String,
         required: false,
      },
   },

   setup(props) {
      const iconInfo = getIconUrlForImageUrl(props.url),
            imageUrl = ref(iconInfo ? iconInfo.url : props.url),
            altText = ref(props.alt || iconInfo?.description);

      return { imageUrl, altText };
   },
});
</script>
