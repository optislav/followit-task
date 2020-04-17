<template>
  <button
    type="button"
    role="button"
    class="button"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.button {
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
