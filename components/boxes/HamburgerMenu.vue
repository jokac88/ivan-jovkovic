<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggleSideNav']);
</script>

<template>
  <button
      class="hamburger-menu"
      :class="{'hamburger-menu--is-active': isActive}"
      @click="$emit('toggleSideNav')"
      aria-label="Hamburger menu"
  >

    <span class="hamburger-menu__icon-left"/>

    <span class="hamburger-menu__icon-right"/>
  </button>
</template>

<style lang="scss">
.hamburger-menu {
  position: relative;
  flex-basis: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0;
  border: none;
  background-color: transparent;

  $self: &;

  @include target-mq(lg) {
    display: none;
  }

  &--is-active {

    #{$self}__icon {

      &-left,
      &-right {
        background-color: transparent;
      }

      &-left {

        &::before {
          transform: rotateZ(45deg) scaleX(1.2) translate(4px, 2px);
        }

        &::after {
          transform: rotateZ(-45deg) scaleX(1.2) translate(4px, -2px);
        }
      }

      &-right {

        &::before {
          transform: rotateZ(-45deg) scaleX(1.2) translate(-4px, 2px);
        }

        &::after {
          transform: rotateZ(45deg) scaleX(1.2) translate(-4px, -2px);
        }
      }
    }
  }

  &__icon {

    &-left,
    &-right {
      position: relative;
      flex-basis: 20px;
      height: 3px;
      background-color: var(--color-left);
      transition: $transition-short;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: var(--color-left);
        transition: $transition-short;
      }

      &::before {
        top: -13px;
      }

      &::after {
        top: 13px;
      }
    }

    &-left,
    &-left::before,
    &-left::after {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &-right,
    &-right::before,
    &-right::after {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
}
</style>
