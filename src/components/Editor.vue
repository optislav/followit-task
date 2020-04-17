<template>
  <div class="layout">
    <div class="col">
      <Panel heading="Edit text">
        <p class="text" spellcheck="false">
          <TextElement
            v-for="(input, index) in textElements"
            :key="makeKey(index, input)"
            :config="input"
            @input="handleTextElementInput"
            @click.native="selectTextElement"
            :name="String(index)"
          />
        </p>
      </Panel>
      <div class="json">
        <Panel heading="Export JSON">
          <pre>{{ json }}</pre>
          <Button @click="copyJSON">Copy JSON</Button>
        </Panel>
      </div>
    </div>
    <div class="col">
      <Panel heading="Change styles">
        <Toolbar
          :disabled="isToolbarDisabled"
          @change-bg="changeBackground"
          @change-color="changeColor"
          @change-font="changeFont"
        />
      </Panel>
    </div>
  </div>
</template>

<script>
import TextElement from "./TextElement";
import Toolbar from "./Toolbar";
import Button from "./Button";
import Panel from "./Panel";
import { initialTextElements } from "../const";
import { copyToClipboard } from "../lib/copy-to-clipboard";
import { mergeSameTextElements } from "../lib/merge-same-text-elements";

export default {
  data() {
    return {
      textElements: initialTextElements.map(el => ({ ...el })),
      selectedInputName: null
    };
  },
  computed: {
    isToolbarDisabled() {
      return !this.selectedInputName;
    },
    json() {
      const mergedTextElements = mergeSameTextElements(this.textElements);
      return JSON.stringify(mergedTextElements, null, 2);
    }
  },
  components: {
    TextElement,
    Toolbar,
    Button,
    Panel
  },
  methods: {
    makeKey(index, config) {
      const { fontSize, backgroundColor, color } = config;
      return `${index}${fontSize}${backgroundColor}${color}`;
    },
    handleTextElementInput(newText, inputName) {
      this.$set(this.textElements[inputName], "text", newText);
    },
    selectTextElement(event) {
      this.selectedInputName = event.target.dataset.name;
    },
    changeTextElementStyle(styleName, newValue) {
      const { selectedInputName, textElements } = this;
      this.$set(textElements[selectedInputName], styleName, newValue);
    },
    changeBackground(newBg) {
      this.changeTextElementStyle("backgroundColor", newBg);
    },
    changeColor(color) {
      this.changeTextElementStyle("color", color);
    },
    changeFont(font) {
      this.changeTextElementStyle("fontSize", `${font}px`);
    },
    copyJSON() {
      copyToClipboard(this.json);
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  padding: 30px;
}
.col {
  margin-right: 100px;
}
.text {
  margin: 0;
  border-radius: 6px;
  color: rgb(255, 255, 255);
  letter-spacing: 0px;
  font-family: Aleo;
  font-weight: 300;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px;
}
</style>
