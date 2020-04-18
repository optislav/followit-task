<template>
  <span
    v-once
    class="text-element"
    contenteditable="true"
    @input="handleInput"
    :data-name="name"
    v-html="config.text"
    :style="{
      color: config.color,
      fontSize: config.fontSize,
      backgroundColor: config.backgroundColor
    }"
  />
</template>

<script>
/**
 * Atomic building block of text. We have to use v-once here to prevent undesirable cariage
 * behavior on rerender. If you want to rerender it, change :key
 * @param {object} config - text content and styles of a block
 * @param {string} name - name of block to handle input
 * @event input - fires when user types
 */
export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.innerHTML, event.target.dataset.name);
    }
  }
};
</script>

<style scoped lang="scss">
.text-element {
  padding: 1px 2px;
  border-radius: 5px;
}
</style>
