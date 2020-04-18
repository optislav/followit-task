<template>
  <div class="toolbar">
    <div class="pickers">
      <label class="picker">
        <div>Pick color</div>
        <input type="color" name="color" v-model="color" />
      </label>

      <label class="picker">
        <div>Choose font size</div>
        <input type="number" name="font" v-model="fontSize" />
      </label>
    </div>

    <div class="buttons">
      <Button :disabled="disabled" @click="changeColor">
        Change color
      </Button>

      <Button :disabled="disabled" @click="changeBackground">
        Change background
      </Button>

      <Button :disabled="disabled" @click="changeFontSize">
        Change font
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

/**
 * Toolbar to pick font size and color
 * @param {boolean} disabled - is apply buttons disabled
 * @event 'change-font' - triggers when apply font button clicked, have new fontSize as
 * first argument
 * @event 'change-bg' - triggers when apply background button clicked, have new color as
 * first argument
 * @event 'change-color' - triggers when apply color button clicked, have new color as
 * first argument
 */
export default {
  components: {
    Button
  },
  data() {
    return {
      fontSize: "14",
      color: "#000000"
    };
  },
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeFontSize() {
      this.$emit("change-font", this.fontSize);
    },
    changeBackground() {
      this.$emit("change-bg", this.color);
    },
    changeColor() {
      this.$emit("change-color", this.color);
    }
  }
};
</script>

<style scoped lang="scss">
.pickers {
  display: flex;
  margin-bottom: 10px;
}

.picker {
  margin-right: 20px;

  input {
    font-size: 16px;
    max-width: 120px;
  }
}
</style>
