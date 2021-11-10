<template>
  <q-item-section side>
    <q-btn
      flat
      round
      :icon="action.icon"
      :class="shouldBlink ? 'blink' : ''"
      @click="trigger"
    />
  </q-item-section>
</template>

<script lang="ts">
import { WindowShadeAction } from 'src/models/window-shade';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'WindowShadeActionButton',
  props: {
    action: {
      type: Object as PropType<WindowShadeAction>,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const shouldBlink = ref(false);

    function trigger() {
      // stubbed MQTT logic, since we don't have a hub to connect it
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetch(`${props.url}/${props.action.name}`);

      shouldBlink.value = true;
      setTimeout(() => (shouldBlink.value = false), 4000);
    }

    return { shouldBlink, trigger };
  },
});
</script>

<style>
.blink {
  animation: blink infinite 2s linear;
}

@keyframes blink {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
