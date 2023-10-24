<script setup>
import Pace from "~/components/common/Pace.vue";
import TopBar from "~/components/common/TopBar.vue";
import SectionLeft from "~/components/common/SectionLeft.vue";
import SectionRight from "~/components/common/SectionRight.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle', 'closeSideNav', 'toggleSideNav', 'openSideNav']);

const emitOpenSideNav = () => emit('openSideNav');

const emitCloseSideNav = () => emit('closeSideNav');

const {
  pace,
  topBar,
  name,
  personalInfo,
  languages,
  projects,
  hobbies,
  drivingLicense,
  aboutMe,
  education,
  employmentHistory,
  technicalSkills
} = props.data;

const sectionLeft = {
  name,
  personalInfo,
  languages,
  projects,
  hobbies,
  drivingLicense
};

const sectionRight = {
  aboutMe,
  education,
  employmentHistory,
  technicalSkills
};
</script>

<template>
  <section
      class="page"
      :class="{
        'page--is-toggle': topBar.sideNavIsVisible.value
      }"
  >

    <Pace :pace="pace"/>

    <TopBar
        :top-bar="topBar"
        @toggle-side-nav="$emit('toggleSideNav')"
    />

    <div
        class="page__overlay"
        @click="$emit('closeSideNav')"
        v-touch:swipe.left="emitCloseSideNav"
    />

    <div
        class="page__wrapper border__gradient"
        v-touch:swipe.right="emitOpenSideNav"
    >

      <SectionLeft :section-left="sectionLeft" @button-toggle="$emit('buttonToggle')"/>

      <SectionRight :section-right="sectionRight" @button-toggle="$emit('buttonToggle')"/>
    </div>
  </section>
</template>

<style lang="scss">
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: transform $transition-long;

  $self: &;

  @include target-mq(lg) {
    flex: 0 1200px;
  }

  &--is-toggle {
    transform: translateX(calc(100% - 70px));

    @include target-mq(sm) {
      transform: translateX(80%);
    }

    #{$self} {

      &__overlay {
        visibility: visible;
        background-color: rgba(0, 0, 0, .8);
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 55px;
    left: 0;
    width: 100%;
    height: calc(100% - 55px);
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
    transition: $transition-long;

    @include target-mq(lg) {
      display: none;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, .6);

    @include target-mq(lg) {
      flex: 1;
      flex-direction: row;
      margin-top: 15px;
      margin-bottom: 15px;
      overflow-y: hidden;
    }

    &.border__gradient {
      padding: 0;
      border-radius: 0;
      background-image: none;

      @include target-mq(lg) {
        padding: 5px;
        border-radius: 3px;
        background: $gradient-right;
      }
    }
  }
}
</style>
