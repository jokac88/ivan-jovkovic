<script setup lang="ts">
import ButtonToggle from "~/components/boxes/ButtonToggle.vue";
import type {Ref} from "@vue/reactivity";

interface PropsTypes {
  header: {
    icon: string;
    isToggle: Ref<boolean>;
    shape: string;
    title: string;
  }
}

const props = defineProps<PropsTypes>();

defineEmits(['buttonToggle']);

const buttonToggle = {
  isToggle: ref(props.header.isToggle)
};
</script>

<template>
  <div class="header">
    <template v-if="header.shape === 'rectangle'">
      <div class="header__wrapper">

        <div class="header__icon-circle">

          <Icon
              :name="header.icon"
              :alt="header.icon"
              size="20"
          />
        </div>

        <h3 class="header__text">{{ header.title }}</h3>

        <ButtonToggle
            :button-toggle="buttonToggle"
            @button-toggle="$emit('buttonToggle')"
        />
      </div>
    </template>
    <template v-else>
      <div class="header__flex-container">

        <div class="header__shape">

          <div class="header__shape-wrapper">

            <div class="header__icon-circle">

              <Icon
                  :name="header.icon"
                  :alt="header.icon"
                  size="20"
                  class="header__icon"
              />
            </div>

            <h3 class="header__text">{{ header.title }}</h3>
          </div>
        </div>

        <ButtonToggle
            :button-toggle="buttonToggle"
            @button-toggle="$emit('buttonToggle')"
        />
      </div>

      <hr class="hr__gradient"/>
    </template>
  </div>
</template>

<style lang="scss">
.header {
  $self: &;

  &__wrapper {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 15px;
    margin-bottom: 15px;
    background: $gradient-right;
  }

  &__flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
  }

  &__shape {
    margin-left: 17px;
    transform: skew(-30deg);
    border-radius: 5px;
    background: $gradient-right;

    &-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 10px;
      padding: 15px 20px;
      transform: skew(30deg);
    }
  }

  &__icon-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, .75);
    background-color: var(--bg-header-circle);
    transition: background-color $transition-long;
  }

  &__icon {
    color: var(--color-left);
  }

  &__text {
    flex: 1;
    color: var(--color-left);
  }
}
</style>
