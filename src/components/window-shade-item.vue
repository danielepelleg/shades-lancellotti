<template>
  <q-item>
    <q-item-section>
      <q-item-label>{{ windowShade.name }}</q-item-label>
    </q-item-section>
    <window-shade-action-button
      v-for="action in ACTIONS"
      :key="action.name"
      :action="action"
      :url="windowShade.url"
    />
  </q-item>
</template>

<script lang="ts">
import {
  WindowShadeAction,
  WindowShadeEndpoint,
} from 'src/models/window-shade';
import { defineComponent, PropType } from 'vue';
import WindowShadeActionButton from './window-shade-action-button.vue';

const ACTIONS: WindowShadeAction[] = [
  {
    name: 'up',
    icon: 'arrow_upward',
  },
  {
    name: 'down',
    icon: 'arrow_downward',
  },
  {
    name: 'stop',
    icon: 'cancel',
  },
];

export default defineComponent({
  name: 'WindowShadeItem',
  components: { WindowShadeActionButton },
  props: {
    windowShade: {
      type: Object as PropType<WindowShadeEndpoint>,
      required: true,
    },
  },
  setup() {
    return { ACTIONS };
  },
});
</script>
