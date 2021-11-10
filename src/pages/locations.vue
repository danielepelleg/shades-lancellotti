<template>
  <q-page>
    <q-table :columns="columns" :rows="rows" />
  </q-page>
</template>

<script lang="ts">
import { LocationEndpoint, LocationStats } from 'src/models/location';
import { defineComponent, onMounted, ref } from 'vue';

const columns = [
  {
    name: 'name',
    label: 'Location',
    field: 'name',
    align: 'left',
    classes: 'col-8',
  },
  {
    name: 'temperature',
    label: 'Temperature',
    field: 'temperature',
    format: (val?: string) => `${val ?? 'n/a'} °C`,
    classes: 'col-2',
  },
  {
    name: 'humidity',
    label: 'Humidity',
    field: 'humidity',
    format: (val?: string) => `${val ?? 'n/a'} %`,
    classes: 'col-2',
  },
];

interface LocationRow {
  name: string;
  temperature?: string;
  humidity?: string;
}

export default defineComponent({
  name: 'PageLocations',
  setup() {
    const rows = ref<LocationRow[]>([]);

    onMounted(async () => {
      const locations = (await (
        await fetch('location-list.json')
      ).json()) as LocationEndpoint[];

      for (let index = 0; index < locations.length; index++) {
        const { name, url } = locations[index];
        const row: LocationRow = { name };
        rows.value.push(row);

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetch(url)
          .then((response) => response.json())
          .then(
            ({ temp: temperature, humid: humidity }: LocationStats) =>
              (rows.value[index] = { name, temperature, humidity })
          );
      }
    });

    return { columns, rows };
  },
});
</script>
