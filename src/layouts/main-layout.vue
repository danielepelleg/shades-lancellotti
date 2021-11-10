<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          round
          dense
          icon="menu"
          @click="showDrawer = !showDrawer"
        />
        <img
          class="q-pa-sm"
          style="height: 64px"
          src="https://dreamonkey.com/_nuxt/9b5c68941d323abc9ab4a692e9bd8b3e.svg"
        />

        <template v-if="$q.screen.gt.sm">
          <q-toolbar-title>
            Very shades, such wow, much professional
          </q-toolbar-title>

          <q-btn stretch icon="window" label="Shades" to="/shades" flat />
          <q-btn
            stretch
            icon="thermostat"
            label="Locations"
            to="/locations"
            flat
          />
        </template>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showDrawer">
      <q-list>
        <q-item clickable to="/shades">
          <q-item-section side><q-icon name="window" /></q-item-section>
          <q-item-section>Shades</q-item-section>
        </q-item>
        <q-item clickable to="/locations">
          <q-item-section side><q-icon name="thermostat" /></q-item-section>
          <q-item-section>Locations</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const showDrawer = ref(false);
    return { showDrawer };
  },
});
</script>
