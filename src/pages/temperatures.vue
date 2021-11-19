<template>
  <q-layout>
    <q-header elevated class="bg-red-8">
      <q-toolbar>
        <!-- <q-avatar rounded text-color="white" size="50px" icon="thermostat" /> -->
        <q-btn flat round dense icon="menu" @click="drawer = !drawer; button = !button" />
        <q-toolbar-title> Temperatures </q-toolbar-title>
        <q-space />
        <q-btn
          v-show="button"
          outline
          rounded
          icon="window"
          color="white"
          label="Windows"
          @click="$router.replace('/')"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit" style="border-right: 1px solid #ddd">
          <q-list padding class="menu-list">
            <q-item clickable @click="$router.replace('/')">
              <q-item-section avatar>
                <q-icon name="window" />
              </q-item-section>

              <q-item-section>
                Finestre
              </q-item-section>
            </q-item>

            <q-item active clickable >
              <q-item-section avatar >
                <q-icon name="thermostat" />
              </q-item-section>

              <q-item-section>
                Temperature
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <q-page class="column">
        <q-list separator>
          <location-item
            v-for="location in locations"
            :key="location.name"
            :location="location"
          />
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">


import { LocationEndpoint } from 'src/models/location';
import LocationItem from 'src/components/location-item.vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { LocationItem },
  setup() {
    const locations = ref<LocationEndpoint[]>([]);
    onMounted(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      locations.value = (await (
        await fetch('location-list.json')
      ).json()) as LocationEndpoint[];
    });

    return { drawer:ref(false), button:ref(true), locations };
  },
});
</script>
