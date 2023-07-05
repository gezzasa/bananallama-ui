<template>
  {{ label }}
  <div class="editor-container">
    <RichTextEditorMenu
      v-if="editor"
      :editor="editor"
    />
    <editor-content
      id="rich-text-editor"
      class="bl-rich-text"
      :class="{ 'bl-input-error': !!errors.length }"
      :editor="editor"
    />
    <BlError :errors="errors" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import Bold from '@tiptap/extension-bold';
import { Color } from '@tiptap/extension-color';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import BlError from '../atoms/BlError.vue';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import History from '@tiptap/extension-history';
import Mention from '@tiptap/extension-mention';
import HardBreak from '@tiptap/extension-hard-break';

import RichTextEditorMenu from './RichTextEditorMenu.vue';
import suggestion from './suggestion';
import { FormError } from '@/types/global';

export default defineComponent({
  components: {
    EditorContent,
    RichTextEditorMenu,
    BlError,
  },

  props: {
    label: {
      type: String,
      default: 'Rich text',
    },
    modelValue: {
      type: String,
      required: true,
    },
    suggestions: {
      type: Array,
      default: () => [],
    },
    suggestionCharacter: {
      type: String,
      default: null,
    },
    errors: {
      type: Array as PropType<FormError[]>,
      default: () => [],
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const mention = Mention.configure({
      HTMLAttributes: {
        class: 'bl-mention',
      },
      renderLabel({ node }) {
        return `{${node.attrs.label ?? node.attrs.id}}`;
      },
      suggestion: {
        char: props.suggestionCharacter ?? '{',
        items: ({ query }) => {
          return props.suggestions
            .filter((item) =>
              item.toLowerCase().startsWith(query.toLowerCase()),
            )
            .slice(0, 9);
        },
        ...suggestion,
      },
    });

    HardBreak.configure({
      HTMLAttributes: {
        class: 'my-custom-class',
      },
    });

    const editor = useEditor({
      content: props.modelValue,
      extensions: [
        Document,
        Paragraph,
        Text,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        TextStyle,
        Color,
        Bold,
        Italic,
        Heading.configure({
          levels: [1, 2, 3],
        }),
        BulletList,
        ListItem,
        OrderedList,
        History,
        HardBreak,
        props.suggestions.length ? mention : null,
      ],
      onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML());
      },
    });

    return { editor };
  },

  watch: {
    modelValue(value) {
      if (!this.editor) return;

      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  beforeUnmount() {
    if (!this.editor) return;

    this.editor.destroy();
  },
});
</script>
