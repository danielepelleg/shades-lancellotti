<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img
          class="q-pa-sm"
          style="height: 64px"
          src="https://dreamonkey.com/_nuxt/9b5c68941d323abc9ab4a692e9bd8b3e.svg"
        />

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
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ name: 'MainLayout' });
</script>
