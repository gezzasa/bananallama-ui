<template lang="">
  <div class="editor-menu">
    <button
      :class="{ 'is-active': editor.isActive('bold') }"
      @click.prevent="editor.chain().focus().toggleBold().run()"
    >
      B
    </button>
    <button
      :class="{ 'is-active': editor.isActive('italic') }"
      @click.prevent="editor.chain().focus().toggleItalic().run()"
    >
      I
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      @click.prevent="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      H1
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      @click.prevent="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      H2
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      @click.prevent="editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      H3
    </button>
    <button
      :class="{ 'is-active': editor.isActive('bulletList') }"
      @click.prevent="editor.chain().focus().toggleBulletList().run()"
    >
      UL
    </button>
    <button
      :class="{ 'is-active': editor.isActive('orderedList') }"
      @click.prevent="editor.chain().focus().toggleOrderedList().run()"
    >
      OL
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      @click.prevent="editor.chain().focus().setTextAlign('left').run()"
    >
      left
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      @click.prevent="editor.chain().focus().setTextAlign('center').run()"
    >
      center
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      @click.prevent="editor.chain().focus().setTextAlign('right').run()"
    >
      right
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      @click.prevent="editor.chain().focus().setTextAlign('justify').run()"
    >
      justify
    </button>
    <label
      for="color-picker"
    >
      <span class="sr-only">Color picker</span>
      <input
        id="color-picker"
        type="color"
        :value="editor.getAttributes('textStyle').color"
        @input="editor.chain().focus().setColor($event.target.value).run()"
      >
    </label>
  </div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  editor: {
    type: Object,
    required: true,
  },
});

const { editor } = toRefs(props);
</script>
