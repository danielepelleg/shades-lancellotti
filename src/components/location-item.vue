<template>
  <q-item>
    <q-item-section class="col-8">
      <q-item-label>{{ location.name }}</q-item-label>
    </q-item-section>
    <template v-if="stats">
      <q-item-section class="col-2 text-center">
        <q-item-label>{{ stats.temp }} °C</q-item-label>
      </q-item-section>
      <q-item-section class="col-2 text-center">
        <q-item-label>{{ stats.humid }} %</q-item-label>
      </q-item-section>
    </template>
  </q-item>
</template>

<script lang="ts">
import { LocationEndpoint, LocationStats } from 'src/models/location';
import { defineComponent, ref, onMounted, PropType } from 'vue';

export default defineComponent({
  name: 'TemperatureItem',
  props: {
    location: {
      type: Object as PropType<LocationEndpoint>,
      required: true,
    },
  },
  setup(props) {
    const stats = ref<LocationStats>();

    onMounted(async () => {
      stats.value = (await (
        await fetch(props.location.url)
      ).json()) as LocationStats;
    });

    return { stats };
  },
});
</script>
