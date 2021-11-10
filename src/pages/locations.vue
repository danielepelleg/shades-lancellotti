<template>
  <q-page>
    <q-list separator>
      <location-item
        v-for="location in locations"
        :key="location.name"
        :location="location"
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import LocationItem from 'src/components/location-item.vue';
import { LocationEndpoint } from 'src/models/location';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'PageLocations',
  components: { LocationItem },
  setup() {
    const locations = ref<LocationEndpoint[]>([]);

    onMounted(async () => {
      locations.value = (await (
        await fetch('location-list.json')
      ).json()) as LocationEndpoint[];
    });

    return { locations };
  },
});
</script>
