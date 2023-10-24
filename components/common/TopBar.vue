<script setup>
import HamburgerMenu from "~/components/boxes/HamburgerMenu.vue";
import LanguageBar from "~/components/common/LanguageBar.vue";

const props = defineProps({
  topBar: {
    type: Object,
    default: () => {
    }
  }
});

defineEmits(['toggleSideNav']);
</script>

<template>
  <section class="top-bar">

    <div class="top-bar__wrapper">

      <HamburgerMenu
          :is-active="topBar.sideNavIsVisible.value"
          @toggle-side-nav="$emit('toggleSideNav')"
      />

      <LanguageBar :language-bar="topBar.languageBar"/>
    </div>
  </section>
</template>

<style lang="scss">
.top-bar {
  background: $gradient-right;
  box-shadow: 0 5px 10px -8px rgba(0, 0, 0, .75);
  z-index: 1;

  @include target-mq(lg) {
    position: fixed;
    top: 15px;
    right: 15px;
    background: transparent;
    box-shadow: none;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    column-gap: 15px;
    height: 50px;
    padding-right: 15px;
    padding-left: 10px;

    @include target-mq(lg) {
      column-gap: 0;
      height: auto;
      padding-right: 0;
      padding-left: 0;
      flex-direction: column;
    }
  }
}
</style>
