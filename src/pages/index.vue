<template>
  <q-layout>
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="drawer = !drawer; button = !button" />
        <!-- <q-avatar rounded text-color="white" size="50px" icon="window" /> -->
        <q-toolbar-title> Finestre </q-toolbar-title>
        <q-space />
        <q-btn
          v-show="button"
          outline
          rounded
          color="white"
          icon="thermostat"
          label="Temperatures"
          @click="$router.replace('/temperatures')"
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
            <q-item active clickable>
              <q-item-section avatar>
                <q-icon name="window" />
              </q-item-section>

              <q-item-section>
                Finestre
              </q-item-section>
            </q-item>

            <q-item clickable @click="$router.replace('/temperatures')">
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
          <window-shade-item
            v-for="windowShade in windowShades"
            :key="windowShade.name"
            :window-shade="windowShade"
          />
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { WindowShadeEndpoint } from 'src/models/window-shade';
import { defineComponent, ref, onMounted } from 'vue';
import WindowShadeItem from 'src/components/window-shade-item.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { WindowShadeItem },
  setup() {
    const windowShades = ref<WindowShadeEndpoint[]>([]);

    onMounted(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      windowShades.value = (
        await (await fetch('window-shade-list.json')).json()
      ).shades as WindowShadeEndpoint[];
    });
    return { drawer: ref(false), button: ref(true), windowShades };
  },
});
</script>
