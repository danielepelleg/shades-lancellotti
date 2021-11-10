<template>
  <q-page>
    <q-list separator>
      <window-shade-item
        v-for="windowShade in windowShades"
        :key="windowShade.name"
        :window-shade="windowShade"
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { WindowShadeEndpoint } from 'src/models/window-shade';
import { defineComponent, ref, onMounted } from 'vue';
import WindowShadeItem from 'src/components/window-shade-item.vue';

export default defineComponent({
  name: 'PageWindowsShades',
  components: { WindowShadeItem },
  setup() {
    const windowShades = ref<WindowShadeEndpoint[]>([]);

    onMounted(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      windowShades.value = (
        await (await fetch('window-shade-list.json')).json()
      ).shades as WindowShadeEndpoint[];
    });

    return { windowShades };
  },
});
</script>
