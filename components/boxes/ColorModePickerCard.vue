<script setup>
const props = defineProps({
  colorModePickerCard: {
    type: Object,
    default: () => {
    }
  }
});

const isActive = computed(() => props.colorModePickerCard.name === useColorMode().preference);
</script>

<template>
  <button
      class="color-mode-picker-card"
      :class="{'color-mode-picker-card--is-active': isActive}"
      :title="colorModePickerCard.text"
      @click="useColorMode().preference = colorModePickerCard.name"
  >

    <Icon
        :name="colorModePickerCard.name"
        :alt="colorModePickerCard.name"
        size="24"
    />

    <span class="color-mode-picker-card__text">{{ useUpperFirst(colorModePickerCard.text) }}</span>
  </button>
</template>

<style lang="scss">
.color-mode-picker-card {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
  padding: 5px;
  border: none;
  background-color: transparent;
  color: var(--color-left);

  @include target-mq(lg) {
    row-gap: 5px;
    padding: 10px;
    cursor: pointer;
  }

  &:not(&--is-active) {
    opacity: .5;
    transition: opacity $transition-long;

    &:hover {
      opacity: 1;

      &::after {

        @include target-mq(lg) {
          opacity: 1;
        }
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: $gradient-left;
    transition: opacity $transition-long;
  }

  &--is-active {

    &::after {
      opacity: 1;
    }
  }

  .icon,
  &__text {
    position: relative;
    z-index: 1;
  }

  .icon {

    path {
      fill: var(--color-left);
      transition: fill $transition-long;
    }
  }

  &__text {
    color: var(--color-left);
    transition: color $transition-long;
  }
}
</style>
