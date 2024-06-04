<script setup lang="ts">
import ColorModePickerCard from "~/components/boxes/ColorModePickerCard.vue";

defineProps({
  colorModePicker: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <div class="color-mode-picker">

    <div class="color-mode-picker__wrapper">

      <ColorModePickerCard
          v-for="colorModePickerCard in colorModePicker"
          :color-mode-picker-card="colorModePickerCard"
      />
    </div>
  </div>
</template>

<style lang="scss">
.color-mode-picker {

  &__wrapper {
    display: flex;
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, .75);
    border-bottom-right-radius: 3px;
    background-color: var(--bg-left);
    overflow: hidden;

    @include target-mq(lg) {
      flex-direction: column;
    }
  }
}
</style>
