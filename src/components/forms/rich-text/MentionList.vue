<template>
  <div class="bl-mention__items">
    <template v-if="items.length">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="bl-mention__item"
        :class="{ 'is-selected': index === selectedIndex }"
        @click="selectItem(index)"
      >
        {{ item }}
      </button>
    </template>
    <div
      v-else
      class="bl-mention__item"
    >
      No result
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const selectedIndex = ref<number>(0);

    function onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        enterHandler();
        return true;
      }

      return false;
    }

    function upHandler() {
      selectedIndex.value =
        (selectedIndex.value + props.items.length - 1) % props.items.length;
    }

    function downHandler() {
      selectedIndex.value = (selectedIndex.value + 1) % props.items.length;
    }

    function enterHandler() {
      selectItem(selectedIndex.value);
    }

    function selectItem(index: number) {
      const item = props.items[index];

      if (item) {
        props.command({ id: item });
      }
    }

    return {
      selectedIndex,

      onKeyDown,
      upHandler,
      downHandler,
      enterHandler,
      selectItem,
    };
  },

  watch: {
    items() {
      this.selectedIndex = 0;
    },
  },
});
</script>
