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
