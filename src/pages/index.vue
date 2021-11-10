<template>
  <q-page class="column">
    <q-tabs v-model="currentTab" align="justify">
      <q-tab name="windows" icon="window" label="Finestre" />
      <q-tab name="temperatures" icon="thermostat" label="Temperature" />
    </q-tabs>

    <q-tab-panels v-model="currentTab" animated>
      <q-tab-panel name="windows">
        <q-list separator>
          <window-shade-item
            v-for="windowShade in windowShades"
            :key="windowShade.name"
            :window-shade="windowShade"
          />
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="temperatures">
        <q-list separator>
          <location-item
            v-for="location in locations"
            :key="location.name"
            :location="location"
          />
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { LocationEndpoint } from 'src/models/location';
import { WindowShadeEndpoint } from 'src/models/window-shade';
import LocationItem from 'src/components/location-item.vue';
import { defineComponent, ref, onMounted } from 'vue';
import WindowShadeItem from 'src/components/window-shade-item.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { LocationItem, WindowShadeItem },
  setup() {
    const currentTab = ref<'windows' | 'temperatures'>('windows');

    const windowShades = ref<WindowShadeEndpoint[]>([]);
    const locations = ref<LocationEndpoint[]>([]);

    onMounted(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      windowShades.value = (
        await (await fetch('window-shade-list.json')).json()
      ).shades as WindowShadeEndpoint[];

      locations.value = (await (
        await fetch('location-list.json')
      ).json()) as LocationEndpoint[];
    });

    return { currentTab, windowShades, locations };
  },
});
</script>
