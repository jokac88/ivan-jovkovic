<script setup lang="ts">
import type {Ref} from "@vue/reactivity";

interface PropsTypes {
  buttonToggle: {
    isToggle: Ref<boolean>;
  }
}

const props = defineProps<PropsTypes>();

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(props.buttonToggle.isToggle);

const emitButtonToggle = () => {
  isToggle.value = !isToggle.value;

  emit('buttonToggle');
};
</script>

<template>
  <button
      class="button-toggle"
      :class="{'button-toggle--is-toggle': isToggle}"
      @click="emitButtonToggle"
      aria-label="Button toggle"
  >

    <span class="button-toggle__slider"/>
  </button>
</template>

<style lang="scss">
.button-toggle {
  position: relative;
  flex-shrink: 0;
  flex-basis: 32px;
  height: 19px;
  padding: 0;
  border: none;
  border-radius: 33px;
  cursor: pointer;

  &--is-toggle {

    .button-toggle__slider {
      transform: translateX(13px);
    }
  }

  &__slider {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: $gradient-right;
    transition: transform $transition-long;
  }
}
</style>
