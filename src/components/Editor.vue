<template>
  <div class="layout">
    <div class="pane">
      <p class="text" spellcheck="false">
        <TextElement
          v-for="(input, index) in textElements"
          :key="makeKey(index, input)"
          :config="input"
          @input="handleInput"
          @click.native="selectInput"
          :name="String(index)"
        />
      </p>
      <div class="json">
        <pre>{{ json }}</pre>
        <Button @click="copyJSON">Copy JSON</Button>
      </div>
    </div>
    <div class="pane">
      <Toolbar
        :disabled="isControlsDisabled"
        @change-bg="changeBackground"
        @change-color="changeColor"
        @change-font="changeFont"
      />
    </div>
  </div>
</template>

<script>
import TextElement from "./TextElement";
import Toolbar from "./Toolbar";
import Button from "./Button";
import { initialTextElements } from "../const";

function textToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

export default {
  data() {
    return {
      textElements: initialTextElements.map(el => ({ ...el })),
      selectedInputName: null
    };
  },
  computed: {
    isControlsDisabled() {
      return !this.selectedInputName;
    },
    json() {
      const mergedTextElements = [];
      let prevTextElement = {};
      const textElements = this.textElements.map(el => ({ ...el }));
      textElements.forEach(input => {
        if (
          input.backgroundColor === prevTextElement.backgroundColor &&
          input.fontSize === prevTextElement.fontSize &&
          input.color === prevTextElement.color
        ) {
          mergedTextElements[mergedTextElements.length - 1].text +=
            " " + input.text;
        } else {
          mergedTextElements.push(input);
        }
        prevTextElement = input;
      });
      return JSON.stringify(mergedTextElements, null, 2);
    }
  },
  components: {
    TextElement,
    Toolbar,
    Button
  },
  methods: {
    makeKey(index, config) {
      const { fontSize, backgroundColor, color } = config;
      return index + fontSize + backgroundColor + color;
    },
    handleInput(newText, inputName) {
      this.$set(this.textElements[inputName], "text", newText);
    },
    selectInput(event) {
      this.selectedInputName = event.target.dataset.name;
    },
    changeBackground(newBg) {
      const { selectedInputName, textElements } = this;
      this.$set(textElements[selectedInputName], "backgroundColor", newBg);
    },
    changeColor(color) {
      const { selectedInputName, textElements } = this;
      this.$set(textElements[selectedInputName], "color", color);
    },
    changeFont(font) {
      const { selectedInputName, textElements } = this;
      this.$set(textElements[selectedInputName], "fontSize", `${font}px`);
    },
    copyJSON() {
      textToClipboard(this.json);
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
}
.pane {
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
